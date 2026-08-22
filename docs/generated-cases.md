# Generated cases — measuring the scattered component problem

Companion to [`scattered-components.md`](scattered-components.md). That note argues from
the shape of the dictionary; this one reports what actually happens when messages of that
shape are put through the parser.

Everything here is produced by `src/generator/`, reachable from the command line:

```
npm run scenarios
npm run scenario -- --scenario=spread-trade-capture
npm run doll      -- --scenario=spread-trade-capture --russian-doll=2
```

## How a case is built

Four steps, and the third is the one that makes the results worth anything.

1. **Generate** an object for a message type, populated to look like traffic rather than
   to exercise the dictionary — a book of real instruments, prices on tick, quantities in
   whole lots, dates that agree with each other, and optional fields chosen by how likely
   a real counterparty is to send them.
2. **Encode** it. The encoder emits in dictionary order, so the result is contiguous by
   construction.
3. **Parse the canonical encoding.** This is the oracle. There is no hand-written
   expectation anywhere in the corpus that could itself be wrong.
4. **Permute the body tokens** so that one or more components become non-adjacent, in a
   way the specification still permits, and parse that. It is the same message, so any
   difference is the engine losing information.

Because step 4 only re-orders, the byte count and the sum of the bytes are unchanged, so
`BodyLength` and `CheckSum` remain correct without being recomputed. The only ordering
the wire genuinely constrains is honoured: a repeating group run is atomic and moves as a
block, and the delimiter stays first inside each instance.

## What `--russian-doll n` means

A **site** is one component made non-adjacent within its level. Depth `n` asks for `n`
sites along one path into the message. Each site records its **structure depth** — how
many group instance bodies enclose it — and that number turns out to be the whole story.

## The measurement — repo44

Ten scenarios against `repo44`, forty seeds each, doll depths 1 to 3: 1,200 cases.

| Sites at | Cases | Scattered parse matches the oracle |
| --- | --- | --- |
| structure depth 0 (message body) | 749 | **749** |
| structure depth 1 (inside a group instance) | 238 | **0** |
| no scatterable site in the message | 213 | — |

Two things stand out.

**The shipped repair holds completely at depth 0.** Every case the generator could
construct with a component scattered in the message body round-tripped exactly, across
equities, futures, options, bonds, spreads, market data and allocations. Eight years
without a complaint looks less like luck than it did.

**Nothing at depth 1 survives, and nothing at depth 1 is rejected either.** Not one case
in 238 produced a parse error. The message is accepted, `invalid()`, `missing()` and
`undefinedForMsg()` all report nothing wrong, and the application is handed a component
with fields missing. This is the outcome the design note calls strictly worse than the
bug being fixed, and it is what actually happens today.

A depth-1 case reduced to its essentials — an ICE Brent calendar spread whose
`InstrumentLeg` is scattered inside its leg group instance:

```
canonical  ...|555=2|600=BRN|607=217|611=20260822|623=1|624=1|539=1|...
scattered  ...|555=2|600=BRN|539=1|524=NPID-60012|566=71.32|607=217|611=20260822|623=1|624=1|...

InstrumentLeg.LegProduct        canonical 217          scattered absent
InstrumentLeg.LegMaturityDate   canonical 20260822     scattered absent
InstrumentLeg.LegRatioQty       canonical 1            scattered absent
InstrumentLeg.LegSide           canonical 1            scattered absent
```

On `repo44` the loss is always a subset — no case produced a *wrong* value, only a
missing one. That does not survive contact with the next dictionary.

## The measurement — qf50sp2

The same sweep against the QuickFIX FIX50SP2 dictionary, 750 cases, is a different and
less comfortable picture.

| Sites at | Contended tag on the wire | Cases | Match the oracle |
| --- | --- | --- | --- |
| structure depth 0 | yes | 319 | 174 |
| structure depth 0 | no | 181 | 176 |
| structure depth 1 | yes | 164 | 36 |
| structure depth 1 | no | 62 | 0 |

**Depth 0 is no longer safe.** 150 of 500 message-body cases produce a different object,
and 145 of those 150 are the collision phase 0 predicted. The QuickFIX FIX50SP2 dictionary
declares `Currency(15)` inside `Instrument` *and* again beside it at message level, in 57
places. When `Instrument` arrives scattered, the shipped repair attributes the message
level `Currency` to `Instrument`:

```
Instrument.Currency   canonical absent     scattered "USD"
```

That is a different failure from the depth-1 one, and a worse one. At depth 1 the engine
loses a field, which a careful application can notice. Here it **invents** one that looks
entirely legitimate. This is the shipped repair, in the library today, on a dictionary the
library ships — pinned by
[`src/test/ascii/fragment-contention.test.ts`](../src/test/ascii/fragment-contention.test.ts).

It also settles open decision 1 in the design note from the evidence rather than from
taste: the collision map is not a nicety for the generalisation, it is missing from the
repair that already exists.

## The true russian doll does exist — just not in 4.4

**Standard FIX 4.4 almost never offers a component nested inside another component where
both own two or more tags of their own.** The components inside `Instrument` are group
wrappers owning a single `NoXXX`, so the literal doll of the design note —
`SecurityXLinkage` scattered within a scattered `Instrument` — has no instance in `repo44`
at all. The reachable second level there is a component scattered inside a *group
instance*: a different axis, the same defect, since detection is populated only while
`structureStack.length === 1`.

FIX 5.0SP2 does have it. `Instrument.PricingDateTime` and `Instrument.OptionExercise` are
components inside `Instrument` carrying several tags each, and every generated case that
scattered one inside a scattered `Instrument` produced a wrong object — at structure depth
0, where the repair is supposed to work. These are the remaining 5 depth-0 failures that
the `Currency` collision does not explain.

So phase 3 has two independent things to handle, and a dictionary to test each against:
recursion into nested components (5.0SP2) and repair below the message body (either).

## Which shapes a dictionary can express

The cases with no site at all are not a failure of the tool. `InstrmtMDReqGrp` in FIX 4.4
contains nothing but `Instrument`, so there is no sibling field to interleave and the
component cannot be made non-adjacent. Worth knowing before designing a repair for a shape
the wire cannot carry.

## The corpus

`data/corpus/` holds edge cases as **bytes**, not as recipes. One directory per case:

```
data/corpus/<name>/case.json       metadata, the scatter plan, and the expected outcome
data/corpus/<name>/canonical.txt   the contiguous encoding - the oracle
data/corpus/<name>/scattered.txt   the same bytes, legally re-ordered
```

The generator is how a case is *found*; it is not what a case *is*. A seed reproduces a
message only while the generator is unchanged — move one probability in the value
conventions and the random stream reshuffles, so every seed yields a different message and
every recorded expectation quietly stops describing what it was written for. A corpus that
has to be regenerated to be read is not a corpus. `case.json` records the seed under
`origin` as provenance, not as a way to rebuild.

Each entry records not just *whether* the engine copes but *how* it fails, so a change in
the shape of the damage fails the test too:

| outcome | meaning |
| --- | --- |
| `round-trips` | the scattered ordering parses to the same object |
| `loses-fields` | parses with fields dropped; every value present is still correct |
| `mis-attributes` | parses, and carries a value the message never said — the dangerous one |
| `rejected` | refused outright, which for a legal ordering is a defect, but a loud one |

### What is in it

| case | dictionary | outcome |
| --- | --- | --- |
| `instrument-scattered-in-body` | repo44 | round-trips |
| `equity-fill-instrument-scattered` | repo44 | round-trips |
| `bond-instrument-scattered` | repo44 | round-trips |
| `allocation-instrument-scattered` | repo44 | round-trips |
| `leg-scattered-in-group-instance` | repo44 | loses-fields |
| `md-entry-instrument-scattered` | repo44 | loses-fields |
| `currency-inside-instrument` | qf50sp2 | round-trips |
| `currency-claimed-by-sibling` | qf50sp2 | **mis-attributes** |
| `nested-component-in-instrument` | qf50sp2 | loses-fields |

Four cases where the engine is right, four where it drops data, one where it invents data —
across two dictionaries, at both structure depths, in five message types.

### Growing it

```
npm run doll -- --scenario=spread-trade-capture --russian-doll=2 --seed=1   --as-of=2026-01-15T10:30:00Z --corpus-add=my-case --note="what this shows"
```

The tool prints what it found, writes the three files, and tells you what outcome it
recorded. **Read it before committing** — the recorded expectation is an assertion about
this engine, and nothing checks that a human agreed with it.

A case whose outcome is not `round-trips` is a defect described precisely enough that
fixing it will fail this test. That is the point. When one is fixed, update the entry
rather than deleting it.

## The tests

Three files, doing three different jobs.

[`corpus.test.ts`](../src/test/ascii/corpus.test.ts) walks `data/corpus/` and asserts each
entry still behaves as recorded, down to which leaf paths are missing or added. It also
asserts the corpus stays worth having — non-empty, covering more than one dictionary, both
structure depths, and all three of working / losing / inventing.

[`generated-scatter.test.ts`](../src/test/ascii/generated-scatter.test.ts) is breadth. It
sweeps 400 freshly generated cases on every run — 272 message-body sites over 8 scenarios,
62 below-body sites over 4 — and asserts the *rule*: everything at structure depth 0 round
trips, nothing below it does, and nothing is ever rejected. Every assertion is over a
counted population with a floor, so a generator that stopped producing sites fails the
suite instead of passing it quietly.

> An earlier version of that file used `test.each` with an early `return` for cases the
> generator could not produce. Eight of its forty tests passed while asserting nothing at
> all. Counted populations with floors are the fix, and the lesson generalises: a test that
> can skip itself is a test that can stop testing.

[`fragment-contention.test.ts`](../src/test/ascii/fragment-contention.test.ts) proves the
`qf50sp2` `Currency` defect is systemic rather than one unlucky message, and that it fires
only where the collision is declared: every value the engine invents is that one contended
tag, and a message not carrying it is never harmed.

Both non-round-trip groups are written to be **inverted, not deleted**, when the repair is
generalised. They are the acceptance criteria for phase 3.

## Reproducing a case

A seed fixes every choice the generator makes, but dates are read off the wall clock
unless anchored, so both are needed:

```
npm run doll -- --scenario=spread-trade-capture --russian-doll=2 \
  --seed=42 --as-of=2026-01-15T10:30:00Z --unit
```

`--unit` writes `canonical.txt`, `fix.txt` (the scattered ordering), `object.json`,
`plan.json` and `case.txt` into the working directory.
