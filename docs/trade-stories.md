# Trade stories — business-shaped FIX logs

A design note for the log inspector and counterparty-simulator work. It describes a new
layer that produces **realistic drop-copy logs** — not one plausible message, but the
whole of what a broker sent us about a trade, over however many days the trade took.

## Why the generator we have is the wrong tool

`src/generator/` answers a question about the *dictionary*: given a message type, what
would a plausible instance look like? It is stateless by design. Each call decides a
trade in `MarketContext`, reads every field off it, and forgets. That is exactly right
for what it was built for — the canonical encoding is the oracle, and the scatterer
permutes it looking for parser defects.

The services work asks a different question, about the *business*: what happened? A
drop-copy log is not a bag of well-formed messages. It is a narrative with arithmetic in
it. `CumQty` on the four hundredth execution report has to be the sum of the four hundred
`LastQty` values before it, `AvgPx` has to be their weighted mean, the allocations at the
end have to add up to the block, and the positions they leave behind have to be the ones
the trader actually held. A generator that draws each message independently cannot
produce that no matter how good its field-level realism is, and a log that fails those
sums is useless for testing a parser, a projection, or a ledger — the thing under test
will disagree with it and be right.

So this is a new layer above the existing one, sharing its instrument book and its RNG,
not an extension of `RealisticGenerator`.

## Six layers, and the rule about the fourth

```
  1  domain    trades, bookings, allocations, positions   no FIX anywhere
  2  story     one trade, seeded                          emits a timeline of events
  3  day       a census of stories                        interleaves them into one session
  4  dialect   events -> message objects                  the only layer that knows tags
  5  session   seq numbers, admin traffic, rollover       writes the log
  6  manifest  the domain truth, as JSON                  what the log is scored against
```

The rule asked for — *we should not work in FIX protocol directly* — is enforced by the
fact that layers 1 to 3 import nothing from `src/dictionary` or `src/buffer`. A story
knows about contracts, lots and accounts. It does not know that a fill is a `35=8`. That
is what makes a second asset class cheap to add, and what makes the whole thing portable
to cspurefix, where only layer 4 has to be rewritten against the C# engine's object shape.

### 1. Domain

Plain records. Contract, Account, Trade, Leg, Booking, Allocation, Position. No
`ILooseObject`, no optionality driven by dictionary presence, no dates as `Date`.

Two pieces of domain behaviour belong here rather than in any story, because every asset
class shares them and getting them wrong corrupts every log we produce.

**Two booking paths.** A trade either books to a **holding account** and is allocated out
afterwards, or it **self-allocates** — one message carrying the parent trade and its
account breakdown together, booking straight into the nominated funds with no holding
account involved. Both are common; which one applies is a property of the trade, not of
the asset class, and a realistic day contains both.

**Allocations are cancelled and rebooked, never amended.** This is the rule observed in
practice and it has real consequences for anything keeping a ledger. When an allocation is
cancelled, the fund bookings are reversed and the position returns to the holding account,
where it sits until fresh allocations arrive. An "amendment" is not a distinct case — it
is a cancel followed by a new allocation, and modelling it as an in-place edit would
produce a log that never occurs and hide the transient state that does. The domain
therefore models allocation as a state machine — *new, cancelled, replaced* — and the
holding account balance is a first-class quantity that goes up and down over the day.

Two representation decisions, and they are not cosmetic:

- **Quantities are integer lots and prices are integer ticks.** Everything downstream —
  `CumQty`, `AvgPx`, allocation splits, position netting — is then exact integer
  arithmetic, converted to a decimal string only at render, using the tick and precision
  already carried on `IInstrumentSpec`. Do this in floating point and jspurefix and
  cspurefix will disagree in the last digit of `AvgPx` on some fill in the middle of a
  20,000-message log, and the two engines stop producing the same bytes for the same seed.
  Integer ticks is the single decision that makes cross-engine byte-identical logs
  possible.
- **Times are UTC epoch milliseconds**, formatted at render. `Date` arithmetic differs
  enough between the two runtimes to be worth avoiding entirely.

**For FX the two amounts are the facts and the rate is derived.** This is the one place
the integer rule needs stating carefully, because FX quotes invert and a reciprocal is not
an exact decimal: 1/1.0950 is 0.9132420091324200913… and no fixed precision holds it. A
model that stores the rate and re-derives the other side loses money in the last digits
every time it converts, and the loss compounds across a day.

Storing the two currency amounts as exact integers in minor units does not have that
problem. EUR 10,000,000 against USD 10,950,000 reconciles exactly in both directions
forever; the rate is whatever you get by dividing, in whichever orientation is asked for,
and rounding only ever happens at render. Inversion then costs nothing, because it is only
a question of which amount is the divisor.

Two rules follow, and they are what make an inverted booking testable:

- **Never re-derive over the top of what arrived.** The domain keeps the pair and the rate
  *as quoted*, plus a flag for the orientation, alongside the two exact amounts. A model
  that un-inverts on ingest has destroyed the only record of what the counterparty
  actually said and can never reconcile back to the log.
- **Where rounding is unavoidable it is specified, not incidental** — precision and
  rounding mode named in the shape file and applied identically in both engines.
  Determinism survives inexactness; it does not survive an unstated convention.

### 2. Story

An `ITradeStory` takes constraints — seed, business date range, instrument selection,
fill granularity, allocation policy, outcome mix — and returns an ordered, timestamped
list of **domain events**. Not messages. Events.

Keeping events distinct from messages is what buys the interesting failure modes for
free. Once the story has emitted a timeline, a separate stage may perturb it: shift an
allocation earlier than the fills it references, duplicate a delivery, drop a run and
provoke a resend, bust a trade an hour after it printed. None of that has to be
understood by the story, and none of it by the dialect. It is the same idea as
`scatter.ts` — a legal permutation applied after the fact — moved from one axis to
another. `scatter.ts` permutes tokens within a message; this permutes events within a
session.

Most stories need no fill modelling at all. A spot trade is a trade and its allocations;
an option that self-allocates is one message. Algorithmic tranching is a property of one
kind of trading, not a feature of the framework, and the shape file states the fills the
way the trader actually worked them rather than drawing them from a distribution because
the machinery happens to exist.

### 3. The day

A log is not one trade. On a single session from one broker we would see the whole day's
business — on the order of 500 FX spots, 20 swaps, 10 forwards, 10 vanilla options — and
that mix is the realistic artefact, not any individual trade within it.

So above the story sits a **census**: how many instances of each story, with what
variation, over what hours. It instantiates each with its own seed derived from the day
seed, gives each an arrival time drawn from a session profile, and merges the resulting
timelines into one ordered stream.

This is a small layer and it is the one that makes the output genuinely hard in the way
real logs are hard. A day's worth of interleaved trades means a trade's messages are not
adjacent: an allocation lands four hundred messages after the execution it allocates, with
several hundred unrelated trades in between, and the only thing connecting them is an
identifier. Anything reassembling trades from the log has to do it by key rather than by
proximity — which is exactly the property a projection or a ledger has to have and exactly
the property a hand-written fixture of six consecutive messages never tests.

The census is also where volume comes from cheaply. Five hundred spot trades is a large
file built from the simplest story we have, so the interleaving and the session mechanics
can be exercised long before the complicated stories exist.

**A day has phases, not just a census.** A real session starts cold: reference data is
requested and replayed, then the last two days of trades are replayed for recovery, and
only then does live business begin. So a day is

```
  bootstrap   requests out, instrument and trade replay in, completion
  live        the census, interleaved over the session hours
```

and the census describes the live phase only. The bootstrap phase is generated from the
counterparty's market permissions and, for the trade replay, **from the previous day's
manifest** — which is close to free realism and gives a strong consistency check for
nothing: the trades replayed on day two must reconcile exactly against what day one
recorded.

### 4. Dialect

An `IDropCopyDialect` maps events to message objects for a given dictionary. This is
where it is decided that a fill is an `ExecutionReport` with `ExecType=1`, and that the
strategy identifier goes in `ClOrdID(11)` with the leg in `SecondaryClOrdID(526)` — or in
`ListID(66)`, which is arguably the better reading of a multi-leg working order and is a
dialect's business to choose. Proprietary fields live here too, as a FIX 4.4 extension
dictionary of our own, so the story never has to know that a particular counterparty
carries the strategy code in 20051.

One story, several dialects: the same relative-value trade renders against `repo44`,
`qf44`, or an extended 4.4, and later against 5.0SP2, without touching the business model.

**The strongest justification for this layer existing is the flattened swap.** Some
counterparties send a two-leg swap as a repeating group; others send leg one in the
ordinary tags and leg two in a parallel set of proprietary tags, so the receiver
reconstructs the two legs by reading two sets of fields rather than two group instances.
The trade is identical. Only the encoding differs.

That is one domain object with two renderings, which is precisely what a dialect is for,
and it makes an unusually good test: the same story rendered both ways must produce the
same manifest, and a projection over either log must produce the same rectangle. It is
also the most honest possible motivation for the extension dictionary — not a synthetic
custom tag added to prove custom tags work, but the actual reason we needed them.

### 5. Session

The log has to look like a session, because the parser under test reads sessions.
`Logon`, `Heartbeat`, `TestRequest`, `Logout`; monotonic `MsgSeqNum` and `SendingTime`;
correct `BodyLength` and `CheckSum` (the encoder handles those); a sending-time
distribution that bursts while the desk is working and goes quiet overnight.

The multi-day case is the one that matters and the one a naive fixture never has. A trade
spanning three days spans three sessions, and the sequence policy is the one observed in
practice: **the client never resets**. We bounce, we log on continuing our sequence, and
the broker resets from their side off the back of our logon. Nightly, so the default is a
daily reset at a configured rollover time.

This is worth modelling precisely rather than approximating, because it produces the case
a log inspector has to get right and a naive fixture never contains: a trade that runs
longer than the reset interval. `CumQty` carries across the boundary; the sequence numbers
do not. Given a weekly reset we would see it on any trade over seven days — with a daily
one, on almost every multi-day trade in the corpus. Good. It should be the common case,
not the exotic one.

**The log is two-sided.** An earlier draft of this note had it inbound only, on the
grounds that drop copy is something that arrives. The bootstrap story below is why that is
wrong: the venue replays instruments and trades *because we asked it to*, and a log
showing a ten-thousand-instrument security list with no request in front of it is not a
log of a session, it is a log of half a session. The same already applied in miniature to
the logon that provokes the broker's sequence reset.

So the session layer renders both directions, tagged, the way a real engine log does.
Nothing about the stories changes — an event knows who originated it, and that is enough.

### 6. Manifest

Every log is written with a JSON sibling holding the domain truth: every strategy, leg,
order and fill with its execution id and the sequence number it arrived on; every
allocation with the fills it covers and the split it made; closing positions per account
per contract; message counts by type; session boundaries and their sequence ranges; the
inter-message time deltas; and the list of perturbations applied.

The deltas are there for replay — see below — but they earn their place in the manifest
anyway, because "how long did this trade take and where were the bursts" is a question the
inspector will want to answer and should not have to re-derive by parsing `SendingTime`
out of the log it is being tested on.

This is the point of the whole exercise. `corpus-store.ts` argues that a corpus which has
to be regenerated to be read is not a corpus — there, the canonical encoding is the
oracle. Here the *domain object graph* is the oracle and the log is derived from it, so a
parser, a selector projection or a ledger can be scored against something that was true
by construction rather than against an expectation someone typed out and might have got
wrong.

## The shape file

A story is not invoked with arguments. It is invoked with a **shape** — a checked-in
declarative statement of what this log is: how big, how many contracts, what the legs
are, how big the tranches run, when the allocations happen, which session policy applies.
The same discipline as a corpus entry, one directory per shape:

```
  data/shapes/<name>/shape.json      what the log is
  data/shapes/<name>/log.txt         the rendered log, for the small ones
  data/shapes/<name>/manifest.json   the domain truth, for the small ones
```

```json
{
  "name": "rv-condor-quick",
  "story": "relative-value-futures",
  "note": "four-leg curve condor, fills inside the session, allocated to two funds",
  "dictionary": "qf44ext",
  "seed": 40233,
  "opens": "2026-03-02T07:12:00Z",
  "legs": [
    { "contract": "FGBS", "side": "buy",  "lots": 500, "tranches": "explicit", "fills": [120, 180, 200] },
    { "contract": "FGBM", "side": "sell", "lots": 213, "tranches": "explicit", "fills": [ 93, 120] }
  ],
  "allocation": { "when": "all-legs-complete", "accounts": ["FUND-A", "FUND-B"], "split": [0.6, 0.4] },
  "session": { "reset": "daily", "resetAt": "22:00Z", "heartBtInt": 30 },
  "perturbations": []
}
```

Three modes for the same field, and the set of them is the point:

- **`"tranches": "explicit"`** — every fill listed. Nothing is drawn at all. This is what
  the small checked-in shapes use, so the fixture a selector test asserts against has no
  random component anywhere in it and a failure is never "which seed was that".
- **`"tranches": { "mean": 12, "min": 1, "max": 40 }`** — drawn from the seeded RNG. This
  is what the big generated shapes use, where listing 25,000 fills by hand is absurd.
- **`"tranches": { "profile": "vwap", "slices": 26 }`** — a schedule rather than a draw.

The third is not a variation on the second, and it is worth being clear why. A
distribution picks each tranche independently; a **profile** is a curve over the session
that the fills must follow — the U shape of equity volume, heavy into the open and the
close and thin through the middle of the day. `twap` is the same machinery with a flat
curve, which makes it the degenerate case rather than a separate feature.

A profile hands back proportions, and proportions have to become whole lots summing to the
order quantity exactly. That is the problem the allocation split already solves: distribute
an integer total across n buckets by weight, remainder to a stated place. Worth
implementing once and calling from both, rather than discovering later that a schedule is
out by three lots for a different reason than the allocations were.

### The day file

A day is a shape of its own, and it is mostly a census. It names the shapes to instantiate
and how many of each, and the arrival profile that spreads them over the session:

```json
{
  "name": "broker-a-typical-day",
  "note": "one counterparty, one session, the mix as it actually arrived",
  "dictionary": "qf44ext",
  "seed": 91117,
  "opens": "2026-03-02T06:00:00Z",
  "closes": "2026-03-02T21:30:00Z",
  "bootstrap": {
    "markets": [9, 10, 21],
    "instrumentsPerMarket": 4000,
    "instrumentsPerBlock": 100,
    "replayTrades": "broker-a-typical-day/2026-02-27"
  },
  "census": [
    { "shape": "fx-spot",                 "count": 500, "arrivals": "london-us-overlap" },
    { "shape": "fx-swap-flattened",       "count":  20, "arrivals": "uniform" },
    { "shape": "fx-forward",              "count":  10, "arrivals": "uniform" },
    { "shape": "fx-option-split",         "count":   8, "arrivals": "morning" },
    { "shape": "fx-option-self-allocated","count":   2, "arrivals": "morning" }
  ],
  "session": { "reset": "daily", "resetAt": "22:00Z", "heartBtInt": 30 }
}
```

Each instance takes a seed derived from the day seed and its index, so adding a shape to
the census does not reshuffle the instances already there — which matters, because
otherwise every committed expectation in the day is invalidated by adding one trade to it.

**Determinism is a hard invariant, not an aspiration.** It is close to free here: `Rng` is
seeded mulberry32, the arithmetic is integer, the iteration is over ordered arrays. Shape
plus seed produces the same log bytes every time, on both engines. A test regenerates each
checked-in shape and compares to the committed bytes, which makes any accidental
dependence on wall-clock time, map ordering or floating point fail loudly the day it is
introduced rather than the day someone is debugging something else. Random jitter in a
fixture is a cost paid forever by whoever next has to read one.

## Provenance, since we are reconstructing

There is no access to real captures. Everything here is reconstructed from memory of
systems worked on years ago, and memory of *shape* — two legs, parties hanging off each
leg, a common order id, allocations arriving later — is considerably more reliable than
memory of which tag carried what. The tags are guesses. This has to be said plainly,
because a guess written down without a marker becomes an assumed fact in about six months.

That is less limiting than it sounds, because of what these fixtures are actually for.
They are not evidence about what any venue sends. They are traffic of a realistic *shape*,
with arithmetic that adds up, for testing a parser, a projection, an inspector and the
instrumentation. Fidelity to one counterparty's tag choices was never what made them
useful.

So two conventions, both cheap:

**Mark every element with its provenance.** Three values, carried in the dictionary
annotations and in the shape files:

- `spec` — it is in the FIX 4.4 standard and we are using it as specified.
- `plausible` — reconstructed, and typical of how venues actually do it, but not attested.
- `invented` — ours, because the shape needed something and no standard tag fits.

**Write the specification, then derive the dictionary.** A venue hands you a definition
document, not an XML, and you build the dictionary from it — so we do the same thing in
the same order. `docs/venue-spec.md` describes the dialect in prose; `data/FIX44-EXT.xml`
is derived from it; the stories generate against that. Messages are then valid *by
construction* against the dictionary they claim to speak, which is the property the
reconstructed sample below conspicuously lacked.

And no venue is named. The dialect is a listed-derivatives exchange in the general style
of several, which is both the legally sensible position and an accurate description of
what a reconstruction from memory actually is.

### What that looks like in practice

The FX drop-copy pair is the worked example, because the reconstruction arrived with the
shape exactly right and the tag numbers systematically wrong, which is precisely the split
the convention predicts.

The near and far legs were remembered as `608` security type, `610` maturity date and
`612` price. In 4.4 those are `LegCFICode`, `LegMaturityMonthYear` and `LegStrikePrice` —
each one sitting immediately *before* the field actually meant, which are `609`, `611` and
`566`. Every one of the wrong tags parses: `608` takes a string, so `FXSPOT` lands in it
silently, and `610` is a `MONTHYEAR` that would quietly mangle a date. Nothing would have
reported a problem. The tags were corrected to the ones the remembered *names* denote,
which is the rule — the names are the reliable half of the memory.

Two collisions were resolved the same way. The desk id was remembered on `9003`, which is
already `OptionExerciseStyle` from the FX option dialect, and the fixing date on `9611`;
both were renumbered into the free end of the 9000s block as `9013` and `9011`. Two
counterparties reaching into the same private range and landing on the same number is the
ordinary case rather than a freak one, and it is the whole argument for a dictionary per
session rather than one per engine. Since these particular numbers are reconstructed there
is nothing to preserve by keeping them; a collision where both numbers are *attested* is
what would split the file in two.

One thing was deliberately not corrected. The NDF carries `SettlCurrency` (120) = INR, the
restricted currency — and an NDF settles in USD, so by the FIX meaning of the field this
is simply wrong. It is kept because a standard field used with a non-standard meaning is a
real and nasty class of divergence, and unlike a bad tag number it cannot be found by
validating anything. It is only findable by someone who knows what the product does.

## The catalogue

These are shapes that were actually received, as far as shape is remembered — not shapes
invented to be difficult. That distinction is the selection criterion: an abstract worst
case tests the framework, whereas a remembered one tests the thing the services will meet.

**`fx-spot`** — trade, then allocations. The most common thing in the file by a wide
margin and the pattern everything else varies from: the trade books to a holding account,
an allocation message splits it across funds, the holding booking is closed and the fund
bookings created. Simple enough to be the first story built, and common enough that five
hundred of them are what gives a day its volume.

**`fx-forward`** — spot with a settlement date. Nearly free once spot exists, which is
itself a useful check on the layering.

**`fx-ndf`** — a non-deliverable forward, and the case where the dialect *is* the
product. On the wire it is an ordinary 4.4 execution report: symbol, rate, quantity,
settlement date, nothing structural to see. What makes it non-deliverable is that no
rupee ever moves — the trade cash-settles in dollars against a published fix — and the
two facts that say so, the fixing date and the fixing source, are the two things base 4.4
has nowhere to put.

That is why it earns a place next to `fx-forward` rather than being a variant of it. Every
other fixture in the catalogue uses the dialect to carry *extra* detail about a product
the structure already identifies. Here the structure identifies the wrong product. Strip
the extension and a reader does not fail, which would be fine — it books a deliverable
forward, expects INR 417,250,000 to settle on the 5th, and is wrong in a way nothing in
the message contradicts. A fixture whose failure mode is a clean parse of the wrong thing
is worth having.

It also carries the one piece of arithmetic base 4.4 gives us for free: `LastSpotRate`
(194) plus `LastForwardPoints` (195) reconcile to `LastPx` (31), so a projection that
handles the outright but drops the decomposition is caught by the sum.

**`fx-nds`** — the swap form of the same thing, and the counter-example to the fixture
above. A near leg and a far leg on one execution report, the far leg being the
non-deliverable one.

Its interest is that it needed *no dictionary work at all*. The instinct on seeing legs in
an execution report is to reach for the extension — legs feel like a trade capture
concern — and base 4.4 already puts `InstrmtLegExecGrp` there, whose `NoLegs` instance
already carries `LegSecurityType`, `LegMaturityDate`, `LegSide` and `LegPrice`. That is
the near/far description in full. Having a fixture that proves the base was sufficient is
worth as much as the ones that prove it was not, because it is the check on a dialect
growing tags it does not need.

It carries one wart, kept deliberately. The fixing date is a fact about the *far leg* and
it arrives at message level, after the group, with nothing tying it to the leg it
describes. A reader has to know that on a swap the non-deliverable leg is the far one.
Scope stated by convention rather than by structure is extremely common in real drop copy
and it is exactly what an inspector has to notice, so the shape is preserved rather than
tidied into the leg where it logically belongs.

**`fx-option-self-allocated`** — the complex single message. Shared parent order
information, two legs and two allocations in one message, booking directly into the
nominated accounts with no holding account in the path. One message in, two fund bookings
out. *(Which message type carried this is not remembered. It is a `plausible` choice for
the dialect to make and record, not a fact awaiting confirmation.)*

**`fx-option-split`** — the same trade worked the commoner way, and the more interesting
of the two. One leg books to the holding account; an allocation message arrives later with
two splits; the holding booking is cancelled and two fund bookings created in its place.
This is the cancel-and-rebook path in its ordinary form, and having both variants of one
trade is what proves the booking-path distinction in the domain model is real rather than
a modelling convenience.

**`fx-swap-flattened`** — a two-leg swap where the counterparty sends the near leg in the
ordinary tags and the far leg in proprietary ones, so the receiver reconstructs two legs
by reading two sets of fields. The reason the extension dictionary exists. Rendered
through the group-based dialect as well, it becomes the pair of logs that must produce one
manifest.

It also carries the nastiest arithmetic in the catalogue, and deliberately so: **the legs
need not be quoted the same way round.** The near leg arrives as EUR/USD and the far leg
as USD/EUR, which says the far leg was booked inverted and has to be turned back over
before the two can be compared. Do that on rates and the last digits disagree; do it on
the two integer amounts, as the domain section requires, and it is exact.

That makes this the sharpest fixture we have, because the failure is quiet. A projection
that un-inverts naively still produces a plausible number - slightly wrong, in the last
places, on one leg of a two-leg trade - and only a manifest asserting both the as-quoted
values and the reconciled amounts will catch it. Worth building the inverted variant and
the same-orientation variant as a pair, so the difference between them is the test.

**`ice-commodity-swap`** — three legs on a single trade capture, with `NoLegs` containing
`NoParties` containing further nesting, four levels or so deep. The deep-nesting case, and
the one that intersects directly with `scattered-components.md`: this is the shape where a
component scattered inside a group instance is currently mis-attributed and nothing
reports a problem. Having it in the corpus with a manifest stating the correct values
turns that defect from an argument into a failing test.

**`equity-vwap`** — a cash equity order worked to a benchmark. The simplest message shape
in the catalogue and the largest number of messages: one order, fills all session, no legs,
no XML, nothing proprietary. It is the second story after `rv-futures` to need tranching,
and the only one where the *shape* of the fills carries meaning rather than just volume.

It brings an oracle the others do not have. Every other fixture is checked structurally —
did the fields land where they should. Here the manifest can assert an **arithmetic** result
a service is supposed to reproduce: achieved VWAP as the quantity-weighted mean of the
fills, against the benchmark for the interval, with slippage between them. A projection
that loses a fill, double counts one from a repeated group, or rounds the wrong way
produces a number that is close and wrong, and the manifest catches it. `twap` gives the
same check against a flat curve, where the expected answer is simple enough to work out by
hand.

The volume curve can come from the VWAP-shaped CSV the sql-cli Python already generates,
which saves inventing a plausible U shape and means the profile is derived from something
rather than tuned until it looks right.

**`venue-bootstrap`** — not a trade at all, but the first thing in every log: reference
data requested and replayed per market, then the last two days of trades replayed for
recovery, then live. Worked through below, and probably the second thing to build after
`fx-spot`, because nothing else in the file is interpretable without it.

**`rv-futures`** — relative value in bond futures, worked through in detail below. The
outlier: the only story that needs algorithmic tranching, the only one that runs for days,
and by far the largest by message count.

Two variations apply across several of these rather than belonging to any one, so they
live in the shape file rather than in a story: an **allocation cancelled** and the position
returned to the holding account to await fresh allocations, and an **allocation replaced**,
which is the same thing followed by a new one rather than an amendment in place.

### Deliberately not modelled

Real drop copy carries a great deal of complexity that is not the complexity we are trying
to reproduce. The line is *external* dependency: anything a fixture would need to reach
outside itself to interpret is out.

Reference data turns out to sit on the near side of that line, which an earlier draft of
this note got wrong. A venue that distributes its instrument universe in-band — as the
bootstrap story does — makes the log self-describing: the proprietary security id on a
trade resolves against a security list earlier in the same file. That is not an external
lookup, it is a cross-reference, and it is one of the more interesting things a log
inspector has to do. Modelling it costs nothing extra and it makes the fixtures stronger.

What stays out is the case where resolution genuinely requires something we do not have —
a vendor mapping, an internal product master, a symbology cross-walk. We emit one
consistent scheme per counterparty and stop there.

## A worked story: the venue bootstrap

Everything else in the catalogue is a trade. This one is a session coming up cold, and it
belongs in the corpus because it is the first thing in every real log and because nothing
after it can be interpreted without it.

The venue publishes a set of **markets** as permissioned numeric codes — 9 is coal, 10 is
gold, and so on down a document they hand you — all financial derivatives rather than
physical. A client is entitled to some subset. Everything that follows happens per market,
which is what makes the phase long rather than complicated.

```
  ->  security list request            per market
  <-  ack
  <-  security list block 1 of 40      ~100 instruments, ~50KB
  <-  security list block 2 of 40
      ...
  <-  security list block 40 of 40     completion
  ->  trade capture report request     per market, once the universe is loaded
  <-  ack
  <-  trade capture report             replay of the last ~48 business hours
      ...
  <-  completion
                                       live from here
```

**Fragmentation is the interesting mechanic.** A universe of a few thousand instruments
arrives as numbered blocks — block ten of a hundred — each carrying its slice of the
repeating group, and the receiver books them all before it can do anything else. FIX 4.4
expresses this with `TotNoRelatedSym(393)` and `LastFragment(893)` against a
`SecurityResponseID`, so most of it is standard; the market code is the proprietary part,
and it is a natural custom tag rather than an invented one.

**Trades reference only the proprietary security id.** This is the coupling that makes the
story worth having. A trade capture report says nothing about what was traded beyond an
identifier that means something only if the security list has been read. A log inspector
that cannot resolve it is showing the user a row of numbers, so the fixture that proves it
can is a log where the answer is present earlier in the same file.

**Application replay is not session resend, and conflating them is a real bug.** The venue
replaying two days of trades is doing something at the application layer: these are fresh
messages with new sequence numbers, not `PossDupFlag` retransmissions of messages we
already saw. `LastRptRequested(912)` marks the end of the stream. Anything reconciling a
log has to tell the two apart — a replayed trade is one we may already have booked, and a
resent message is one we may never have received — and a corpus containing both, in one
file, is the only way to test that it does.

**Why this is the second story to build.** It is the natural recovery case, it is where a
day's log actually begins, and it produces something no trade story does: the largest
messages in the corpus by a wide margin. A hundred instruments in one repeating group, at
around 50KB, is a far better subject for the parser instrumentation than an execution
report — it is where the group walk cost, the buffer growth and the per-instance allocation
actually show up.

**What is remembered and what is not.** The shape of the phase is not in doubt: permissioned
numeric markets, a request per market, a fragmented replay of the instrument universe, then
a trade replay covering roughly the last 48 business hours, then live.

The message types are not remembered and cannot now be checked — whether the request was a
`SecurityListRequest` (35=x) answered by `SecurityList` (35=y) or a
`SecurityDefinitionRequest` (35=c) answered by fragmented `SecurityDefinition` (35=d);
whether the trade replay request was standard `TradeCaptureReportRequest` (35=AD) or
proprietary. So the spec picks one, marks it `plausible`, and moves on. `x`/`y` with
`TotNoRelatedSym` and `LastFragment` is the better pick, because fragmentation is what the
`SecurityList` pair is for and the alternative would have us inventing a fragmentation
mechanism the standard already provides.

## A worked story: relative value in bond futures

Worth working through in full because it exercises more of the machinery than anything
else in the catalogue — multi-day, tranched, multi-leg, partially allocated. It is not
necessarily the one to build first; `fx-spot` almost certainly is.

**Structure.** A curve condor across four euro bond futures — two long, two short —
ratio-weighted so the leg quantities are not equal. The weights come from a per-contract
DV01 added to `IInstrumentSpec`, which gives the ratios the untidy look they have in life
(213 against 500, not 1 against 1). A three-leg butterfly is the same generator with one
fewer leg.

The economics behind it, as far as they need modelling: the desk wants to be long the
cheapest deliverable against its short obligations, finances the longs in short-term
repo, and puts that revenue against the shorts. None of the financing appears in a
futures drop copy, so none of it is modelled — but the manifest's closing positions are
exactly the input a later financing story would consume, which is how stories compose.

**Working the order.** One strategy-level client order id shared by every leg. Each leg
is worked separately by the broker's algo and comes back as a stream of execution reports
in small tranches. The story draws a tranche-size distribution per leg; the accumulator
keeps `CumQty`, `LeavesQty` and `AvgPx` exact, with `AvgPx` re-derived from the running
integer totals on each fill rather than accumulated, so it cannot drift.

**Scale.** The longest of these ran to about 25,000 messages over several days; most are
far smaller. That is a constraint on the tranche distribution, not a target: four legs of
a few thousand lots each, filled 1–25 lots at a time, lands in the right place, and the
size is a scenario knob, so a 200-message log for a unit test and a 25,000-message one for
the instrumentation work come from the same story.

**Outcomes.** A leg ends fully filled, partially filled and then pulled by the trader
(`ExecType=4`, `LeavesQty=0`, `CumQty` wherever it got to), or expired. The mix is a
constraint. Most fill; the interesting logs are the ones where one leg of four does not,
because that is where a projection has to decide what the strategy's position actually is.

**Allocation.** Fills book into a holding account. Later — sometimes after a leg
completes, sometimes after all four do, sometimes part-way — the trader allocates out to
fund accounts, per contract, one message carrying the per-account breakdown. An allocation
event names the fills it covers rather than meaning "everything so far", which is what
lets a partial allocation be modelled and what gives the manifest a link a ledger can be
checked against. The split is a policy — fixed weights, pro-rata, lot-rounded — with the
invariant that the parts sum to the block exactly, the remainder going to the largest
account.

**The pathology.** On a busy day allocations could arrive ahead of the executions that
caused them, leaving anything keeping a ledger transiently short. We do not need it in the
first cut, but the timeline perturbation stage is where it goes when we do, and it costs
nothing to leave the hook there.

**The roll.** Near expiry the desk rolls into the next contract or lets it settle. That is
a second story taking a manifest's positions as input, and it reuses everything above.

## The extension dictionary

Brokers did not hand over a delta. They handed over a whole QuickFIX XML, alongside the
connection instructions and the certificates, and the custom tags in it sat well above the
standard range — 24000 and up was typical, keeping clear of anything a later FIX version
might claim.

This repo already has the precedent: `data/FIX44-MD.xml` is a full copy of
`data/FIX44.xml`, registered by name in `data/dictionary.json`. So the extension follows
the same pattern rather than inventing a mechanism — copy, add fields and components,
register:

```json
  "qf44ext": {
    "output": "src/types/FIX4.4/ext",
    "dict": "data/FIX44-EXT.xml"
  }
```

Doing it this way is worth as much as the logs are. It is the missing worked example of
how an application adds custom tags to jspurefix end to end — XML, compiler, generated
types, encode, parse — which is a question the engine gets asked and currently answers
only by inference. The stories become its regression test.

The tags themselves stay minimal: a strategy identifier that ties the legs together, an
allocation batch reference, a desk or booking code, the numeric market permission. Enough
that a dialect has something real to map and a parser has something outside the base
dictionary to handle, and no further.

**A venue dictionary contains several different kinds of divergence**, and only the first
is what people usually mean by "custom tags". `script/make-ext-dictionary.js` derives
`data/FIX44-EXT.xml` from `data/FIX44.xml` as a list of stated divergences, so the dialect
is reproducible rather than a hand-edited 327KB file nobody can reconstruct:

1. **Proprietary fields above 24000** — things with no standard tag, or whose obvious tag
   already means something else. `AssetCode` is the honest example: 695 would be the
   natural choice and 695 is `QuoteQualifier` in 4.4, which is exactly the collision that
   sends a venue above 24000 in the first place.
2. **Backported FIX 5.0 fields** at their real tag numbers — `UnitOfMeasure` (996),
   `UnitOfMeasureQty` (1147), `MinPriceIncrement` (969). Every commodity venue needs these
   and 4.4 does not have them. This is the most common divergence in practice and the one
   an invented-from-scratch dialect would never have thought to include.
3. **A venue instrument component.** The venue supplies its instrument attributes as a
   *component block* to paste into the dictionary, not as loose fields on `Instrument` —
   which is how it arrives and is the better shape anyway, because the venue's definition
   of an instrument stays separable from FIX's. A message carries both, and a projection
   can tell which is which. Ours is `VenueInstrmtExt`, referenced from `SecListGrp`.
4. **Widened value sets** — a standard tag, of the standard type, carrying a code base 4.4
   never defined. 4.4 offers `FOR` and `FORWARD` for the whole of foreign exchange, which
   cannot tell a spot from a forward from a swap, so the FX vendors all name their own:
   `FXSPOT`, `FXFORWARD`, `FXSWAP` on `SecurityType` (167). This is the commonest
   divergence of the lot and the one most easily mistaken for a bad message, because
   nothing about the field looks unusual — a validator sees a known tag of the right type
   and waves it through, and only a reader holding the venue's codes can tell what
   was traded.
5. **Fields retained from an earlier FIX version** — the mirror image of the backport, and
   just as common. A drop copy built on a 4.2 codebase and moved onto a 4.4 wire goes on
   sending the 4.2 fields it always sent, because nothing on its side ever stopped
   populating them. Ours carries `ExecTransType` (20), removed in 4.4, in the slot it
   occupied in 4.2 — directly after `ExecID` — along with the 4.2 `ExecType` codes `1` and
   `2` that 4.4 replaced with `F`. Worth having precisely because it is not a design
   decision anybody made; it is what a system that was never migrated looks like.

**Relocation is the last kind, and the dangerous one.** Venues also move standard
components, and
the reconstructed sample below is a good illustration of why that matters: base 4.4 puts
`NestedParties` (539) inside `TrdInstrmtLegGrp`, and a message carrying `Parties` (453)
there instead is not merely unusual, it is unparseable in a way nothing reports. Venues do
this. A dialect that only added tags above 24000 would miss the whole class of divergence
that actually hurts, so the extension dictionary relocates a component too, deliberately,
and the corpus carries the pair of parses that shows what happens when it is not honoured.

**And the base is sometimes enough**, which is the check on all of the above. `fx-nds`
wanted a near leg and a far leg on an execution report and needed no divergence at all —
4.4 already puts `InstrmtLegExecGrp` there and its instance already carries security type,
maturity date, side and price. A dialect that is only ever added to grows tags it does not
need, so the corpus deliberately holds a fixture that proves the base sufficed.

## Replay

The logs are files, but nothing about them is inherently a file. A shape plus its manifest
is a **script for a counterparty**: an initiator that connects to a service under test and
delivers the same messages in the same order with the same relative timing, at a speed
multiplier — a three-day trade played through in ninety seconds, pauses preserved in
proportion so the bursts are still bursts and the overnight gap is still a gap.

That is why the deltas are in the manifest and why the session layer is separate from the
dialect. Rendering to a file and driving a live session are two consumers of one event
timeline, and the second one is the counterparty simulator the inspector work wants
anyway. Building the file writer first is the right order — it is easier to debug and it
produces the fixtures — but it should not be built in a way that makes the second consumer
a rewrite.

Replay also gets the failure injection for free. The perturbation stage that reorders an
allocation ahead of its fills in a file is the same stage that does it on the wire, so a
service can be tested against the pathology live and against the file in CI, from one
definition.

## Porting to cspurefix

Beyond the integer-tick and UTC-milliseconds decisions above: no dependence on hash or
object key enumeration order anywhere in layers 1 to 3 — ordered arrays only, since a
`Dictionary` enumerates differently from `Object.keys` and the log would reorder. `Rng` is
mulberry32 and already documented as portable unchanged. Generation stays synchronous;
only writing the file is IO. Layer 4 is the only rewrite.

The prize for the discipline is that the same seed produces the same log bytes in both
engines, which makes these logs a cross-engine conformance fixture rather than merely test
data.

## What it gives the instrumentation work

A 25,000-message log of one known shape, deterministic, with a manifest saying exactly
what it contains, is the input the hot-path instrumentation has been missing: bytes
through the parser, allocation per message type, cost of the group walk against real group
depths — all measured on traffic whose composition is known rather than on whatever
happened to be in a captured file.

The bootstrap story adds the other end of the range. Every benchmark in `benchmarks/`
today runs on messages of a few hundred bytes; a security list block is a hundred
instruments and around 50KB, and a full universe replay is forty of them per market. That
is where buffer growth, group-instance allocation and the cost of the walk itself become
visible, and we have had nothing of the sort to measure against.

## Decisions taken

1. **It lives in `src/generator/story/`**, barrel-exported alongside the existing
   generator, sharing `rng.ts` and `instrument-universe.ts`.
2. **A new extension dictionary from the start** — `data/FIX44-EXT.xml`, registered as
   `qf44ext`, custom tags above 24000, following the `FIX44-MD.xml` precedent.
3. **Daily reset, broker-side.** The client never resets; the broker resets off the back
   of our logon. A trade outrunning the reset interval is the common case, not an edge one.
4. **Both frozen and generated, split by size.** Small shapes that fill inside a session
   are committed whole — shape, log and manifest — and carry real assertions: the selector
   projection this log should produce, the positions it should leave. Large ones are
   generated from shape plus seed on demand.
5. **Determinism is an invariant.** Shape plus seed gives the same bytes, enforced by a
   regeneration test, on both engines.

## Still open

- ~~Where the small shapes' expected selector output lives.~~ Settled in
  [`selector.md`](selector.md): a separate expectation file per selection, under
  `data/shapes/<name>/expect/`. The manifest stays pure domain truth, so it and the CSVs
  are independent oracles rather than one derived from the other.
- **How the rollover time interacts with the fill clock.** A reset at 22:00Z mid-burst is
  realistic and is exactly the case worth having, but it needs the sending-time
  distribution and the session policy to be aware of each other rather than layered
  blindly.
