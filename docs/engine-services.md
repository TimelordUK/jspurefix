# Engine services — inspector, projection and simulator

**Status: design note. Nothing is built.** This sets out a small set of services the engine
would expose over HTTP, what belongs in them and what emphatically does not, and the order
they would land in. It is written to port: cspurefix and jspurefix should both implement
it, and nothing above should be able to tell which one answered.

Most of it is a rebuild of something that existed at a previous employer and was left
behind — a broker log inspector with the engine running in Docker behind a React front
end. It worked, it was fast, and it grew organically. The point of writing this down first
is to keep the second attempt from growing the same way.

## The thesis

> The contract is the product. The UI is one client of it.

Everything else here follows from that. A React front end is the obvious consumer, but so
is `jsfix-cmd`, and so — as it turns out — is a SQL engine. If the front end cannot tell
whether jspurefix or cspurefix served it, the line has been drawn in the right place. Some
people will want to run the whole thing in Node; others will want the .NET server for the
very large logs. Neither should require a different client.

## Why the last one sprawled

It was not a discipline failure, it was structural. There was no seam between **what the
engine knows** — dictionaries, parsing, indexing — and **what one firm needs** — a lookup
into that firm's booking system, a replay target on that firm's dev platform. With no seam
every feature landed in the same pile, and the UI became the integration layer by default.
That is also how one pane ended up carrying a tag summary, a bookings table and the test
controls at the same time.

So: firm-specific integrations are plugin panels *behind* the contract, never inside it.
The same decision that keeps the two engines interchangeable is the one that keeps the
tool from turning into one firm's internal app.

## The services

Five, and the third is the one that has surprised people.

### 1. Profiles

`GET /profiles` returns every broker profile and the dictionary metadata behind it, once,
cacheable. Thirty brokers, each with pre-generated types, is the working assumption.

A profile is more than a dictionary. It is everything that is true of one counterparty:

- the dictionary
- **matcher rules** that identify the counterparty from a message header — `BeginString`,
  the CompIDs, `ApplVerID`, or whatever custom tag gives it away. Declarative, so
  onboarding broker 31 is a config edit and not a deploy
- projections: the named tag sets worth lifting out for a given message type (see below)
- presentation hints — colour coding by instrument type, which columns lead
- **field codecs** keyed by tag: the nested XML carried inside a field for complex CDS and
  CDX indices is not a special case, it is one instance of a general hook, alongside JSON
  and base64
- known quirks. [`fragment-safety.ts`](../src/dictionary/fragment-safety.ts) already
  computes sibling tag collisions for a dictionary, so an onboarding report per profile is
  nearly free — and worth having before a live session meets the dialect rather than after.
  See [`scattered-components.md`](scattered-components.md).

### 2. Ingest and index

`POST /logs` takes a file — several broker days concatenated, 200MB was routine — and
returns a handle and an index.

The performance rule, and everything above depends on it:

> Index eagerly, parse lazily.

Pass one scans for message boundaries and lifts a handful of header tags into a flat,
typed structure. No `MsgView`, no object per message, no allocation that scales with the
file. A full parse happens for the one message somebody clicked on, and for nothing else.
Excluding the session layer is a pass-one predicate rather than a mode.

The previous implementation returned a parsed multi-day file in five to ten seconds. That
number should be re-established by measurement rather than by memory, because it is the
load-bearing claim: if pass one is slow, none of the rest of this is worth building. It is
also the natural first thing to write, and the natural place to find out whether the .NET
side really is required — if Node manages 200MB in single-digit seconds, the choice of
engine becomes a preference rather than a constraint.

An index over a 200MB log is a few megabytes. Small enough to hand to the client whole,
which would let filtering and search run locally and reserve round trips for full parses.
That is open decision 1, and it decides whether the server is stateful.

### 3. Projection — the FIX log as a table

`POST /logs/{id}/projection` takes a selector and returns CSV.

This is the service nobody expects and the one with the highest leverage. A selector names
the message types of interest and the tags worth extracting; the response is a rectangle.
Which means a FIX log becomes a table, and anything that consumes tables can be pointed at
it — including `sql-cli`, which can point at a REST endpoint and run its own SQL over the
result, with grouping, partitions and window functions.

The worked example that makes the case: allocations. Explode `NoAllocs` as the row axis,
carry the parent order's fields alongside, and a mis-allocation is one query —

```sql
select ClOrdID, OrderQty, sum(AllocQty) as allocated
from fixlog group by ClOrdID, OrderQty
having sum(AllocQty) <> OrderQty
```

— straight off the raw log, with no ETL and no intermediate database. That is a genuinely
unusual capability and it came from a small service on the engine.

**Flattening is the whole design problem.** FIX is a sparse tree and SQL wants a rectangle,
so the selector has to say what happens to every group it touches. Four choices, and the
constraint between them is the important part:

| mode | result | good for |
| --- | --- | --- |
| ignore | the group contributes nothing | most groups, most of the time |
| widen(n) | `Legs_1.LegSymbol`, `Legs_2.LegSymbol` … | small, fixed arity — a two legged spread |
| explode | one row per instance, parent fields repeated | when the group *is* the grain of the analysis — allocations, fills, book entries |
| aggregate(fn) | one cell — `leg_count`, `sum(LegQty)`, `concat(LegSymbol)` | triage, where "2 legs, BRN/BRN" beats ten columns |

> **At most one explode along any path.**

Not merely one at the top level. If `NoSides` is the row axis then a `NoPartyIDs` inside
each side must widen or aggregate, because exploding both brings the cross product back —
a trade capture with two legs and two sides becomes four rows in which every leg/side
pairing is fiction. The default row axis is none, giving exactly one row per message.

`aggregate` is the mode easiest to overlook and often the one actually wanted. Widening
answers "what were the legs"; aggregating answers "how many, and did they sum", which is
usually the question being asked of a whole day of traffic.

Note that the original use case dodged this entirely: futures allocations where each leg
arrived as its own message. That is common enough to be worth designing for rather than
around — see the union question below.

### Naming the columns

`t_8`, `t_35`, `t_10` is the right **default**: it needs no dictionary, never collides,
and stays stable when a broker renumbers something. Readable names are an option on top,
not the baseline.

They cannot be unconditional, because a tag may be claimed at two levels of the same
message. QuickFIX's FIX50SP2 declares `Currency(15)` inside `Instrument` *and* beside it at
message level in 57 places, which makes a bare `Currency` column ambiguous in exactly the
dialects where it matters. The rule: use the short name where a tag appears at one level in
the selected set, and fall back to the dotted path — `Instrument.Currency` against
`Currency` — where it does not. The ambiguity is already computed;
[`FragmentSafety`](../src/dictionary/fragment-safety.ts) exists for the parser repair and
serves the column namer unchanged.

### Row identity

Every row carries a few underscore-prefixed columns that are not FIX at all:

- `_seq` — `MsgSeqNum`, so rows have a stable order
- `_offset` — byte offset of the message in the file, so a row joins back to the message
  the UI would show
- `_instance` — index within the exploded group, zero when there is no row axis
- `_source` — which file or day, since several broker days routinely arrive concatenated

These matter more than they look. `partition by ClOrdID order by …` needs a deterministic
ordering, and without an offset a query result cannot be turned back into "show me that
message". They are the difference between a CSV you can look at and one you can work with.

### Types, nulls, and one message type or many

- **Values are typed.** The wire is all text, but a SQL engine wants to sum a quantity and
  group by a date. The dictionary knows each field's `TagType`, so the projection emits
  numbers unquoted and dates in one consistent form, and publishes a schema rather than
  making the consumer sniff.
- **An empty cell means absent.** FIX forbids an empty value, so there is no ambiguity to
  resolve — a rare and welcome simplification. Raw data fields are excluded by default;
  their contents can contain anything, including the delimiter and newlines.
- **A projection spans message types by default.** The prototype answered this in practice:
  the analysis that mattered was cross-message — a swathe of `35=8` executions joined to
  the allocations that followed — so a union with sparse columns and `t_35` present, letting
  SQL filter and pivot, is what the work actually looked like. Per-type tables push the join
  back onto the caller for no gain.

Two further observations worth recording.

The projection and the UI's per-broker "lift out these tags for this message type" summary
are **the same object**. Define a projection once in the profile; render it as a pane, or
serialise it as CSV. Two features, one concept — and one less place for the duplication
that made the last build sprawl.

And a projection keyed on tags is **immune to the scattered component problem**. It never
infers a component boundary; only group framing matters, and group framing is
self-describing on the wire. Whatever happens with
[`scattered-components.md`](scattered-components.md), this service is unaffected.

### 4. Message detail

`GET /logs/{id}/messages/{n}` does the full parse for one message and returns the object
and its structure. This is the expensive path, taken once per click, and it is where field
codecs decode the embedded XML into something the UI can render as a tree.

### 5. Replay and simulate

`POST /replay` takes one message, or a family of them selected by order id, optionally
edited, and sends them into a target session.

Worth noticing: **"send to dev" and "run a test scenario" are the same operation.** The
inspector's most useful feature and the test engine's core loop are one endpoint. That is
the argument for designing the two halves together rather than in sequence.

## The test engine

Two layers with quite different characters, and they should not be built as one thing.

**Session misbehaviour belongs inside the engines.** Skip a heartbeat, skip a sequence
number, send a bad checksum, disconnect after N messages, delay a response past the
timeout. These are composable faults on a state machine both engines already implement.
Small, portable, useful on its own, and it improves each engine's own test suite. It is the
cheapest thing here and a good first landing.

**The application simulator is where the design matters.** Given an order, send back an
execution — business logic is unavoidable, and the goal is that it stays clean enough for
somebody to drop in their own.

The recommendation is **rules as data, not code**: match on message type plus field
predicates, emit a template with field mappings and computed values. Data ports between
jspurefix and cspurefix unchanged; a host-language callback does not. Keep the callback as
an escape hatch for the last twenty percent, but make the declarative path the one people
reach for first, because that is the path that works on both engines.

### What already exists

More than it looks. [`src/generator/`](../src/generator) fills a message from a context —
`MarketContext` decides one trade and every field is read off it. **A simulator response is
the same operation with the context seeded from the inbound order instead of from a seed.**
An `ExecutionReport` derived from a `NewOrderSingle` is a context swap, not new machinery.

Which makes the most interesting idea here tractable: **infer the rules from a broker's own
log.** Pair requests to responses by `ClOrdID` and `OrderID`, observe which tags that
counterparty populates on a response for each shape of order, and emit the rule template.
The result is a simulator that behaves like the counterparty it was learned from, built
from a log file somebody already has. The diffing and classification needed for it are in
[`outcome.ts`](../src/generator/outcome.ts) already.

## Common ground with instrumentation

[`instrumentation.md`](instrumentation.md) is designed and unstarted, and looks at first
like a different problem — live health metrics rather than offline analysis. The overlap is
larger than that, and in one place it is load bearing.

**The same principle, arrived at twice.** That note opens with "the snapshot is the
contract: Prometheus, OpenTelemetry, a JSON endpoint and a CLI table are four *renderings*
of one data structure". This note opens with "the contract is the product; the UI is one
client of it". Those are the same sentence about different data. Two design notes reaching
it independently is reasonable evidence it is the right frame for this codebase.

**One HTTP surface, not two.** The instrumentation note treats its diagnostics endpoint as
"an independent, later, optional thing" — correctly, since Filebeat is push and delivers
the whole Elastic story without a server. But these services need a server anyway. There
should be exactly one: `/metrics` and `/diagnostics` beside `/profiles` and `/logs`, one
`node:http` implementation, one packaging decision taken once. That changes the priority of
the diagnostics endpoint for a reason unconnected to instrumentation — it becomes the
smallest, best understood service on a surface that is going to exist regardless, which
makes it the right thing to build the surface *with*.

**One spec, two engines — already solved.** The instrumentation note settled how to write a
portable contract: names and semantics defined in the document, `fix_` rather than
`jspurefix_` so both engines populate one dashboard, and the same words in each
convention's punctuation (`fix.msg_type` in a log line, `fix_messages_total{msg_type}` in a
metric). The services contract should extend that convention rather than invent a second
one.

**Expose, do not analyse.** Neither of these builds a query engine, a chart or a dashboard.
Instrumentation hands Prometheus and Kibana a rectangle; the projection hands sql-cli a
rectangle. A Prometheus exposition line is name plus labels plus value — a projection with
a fixed schema. Refusing to build the analysis layer is the single decision that keeps both
of these small, and it is the same decision twice.

**Bounded output with explicit overflow.** The instrumentation note worries that a wildcard
acceptor meeting an unbounded set of counterparties makes `session` an unsafe label. The
projection has that problem in a different costume: widening a group of unbounded arity
produces unbounded columns. Same answer in both — cap it, and *report* what was dropped.
Silent truncation reads as "I covered everything" when it did not.

### The metric set is computable from a log

This is the one that is more than an analogy.

Look at the metric table in that note — messages by type and direction, bytes, sequence
numbers, gaps detected, resend requests, reconnects, admin against application traffic,
session state transitions. **Every one of those is derivable from a FIX log by pass one of
the indexer.** Same schema, two sources: the live engine emits it from chokepoints, and the
inspector computes it from a file.

Three things fall out, and the third is the valuable one.

- **Onboarding.** Run a prospective counterparty's sample log through the indexer and get
  their traffic profile — message mix, peak rates, how they behave around gaps — before
  connecting to them rather than after.
- **Post mortem.** "The session dropped at 14:32" becomes a chart, in the same vocabulary
  as production, computed from the log that is already on disk.
- **The offline computation is the oracle for the live one.** Run the same traffic through
  both; if the engine's counters and the log-derived counters disagree, one of them is
  wrong, and it is usually clear which. Live instrumentation is otherwise very hard to
  test — a counter that silently under-counts looks exactly like quiet traffic.

That last point is the same move made twice already in this repository: the contiguous
encoding is the oracle for the scattered one in
[`generated-cases.md`](generated-cases.md), and `jsfix-bench` is the offline oracle for
live throughput in the instrumentation note. Deriving the same quantity a second, dumber
way and requiring the two to agree is turning out to be how this codebase gets confidence.

**Throughput is one number in three places.** `benchmarking.md` measures it offline on
synthetic bytes, instrumentation wants it live, and this note's pass one rests on it for a
real file. The instrumentation note already asks that the bench and production figures
share names so they can be put side by side; the indexer is simply the third, and should
use the same words.

### Where they genuinely differ

Worth stating, so the wrong discipline is not inherited.

Instrumentation lives in the hot path and must be **zero cost when off** — a disabled sink
is a no-op call, never a string format or an allocation. These services are cold path and
may allocate freely; a projection over a 200MB file is not the place for that paranoia.
And a metric is a cumulative time series that is scraped, while a projection is a snapshot
of history over an immutable file — different lifecycles, different caching, and only one
of them needs a selector language, because metrics are known ahead of time and projections
are defined by whoever is asking.

## Constraints

**Packaging.** The server belongs in its own package. Every consumer of the engine should
not inherit a web framework — that mistake has been made once already, and the diagnostics
work in [`instrumentation.md`](instrumentation.md) reached the same conclusion: `node:http`
is enough, and roughly a hundred lines.

**Portability.** Anything in the contract has to be expressible in both languages. That
rules out passing engine objects around and argues for JSON shapes defined here rather than
derived from either engine's types.

## Sequencing

1. **The contract.** Settle it before writing code — it is what makes the engines
   interchangeable and what stops the sprawl. This document is the first draft.
2. **The diagnostics endpoint**, from [`instrumentation.md`](instrumentation.md). Roughly a
   hundred lines of `node:http`, already designed, useful on its own merits, and it brings
   the shared HTTP surface into existence at the lowest possible stakes. Building that
   surface with a service whose shape is already settled is worth more than building it
   with one that is not.
3. **Pass one, measured.** Prototype the indexer and run it against a genuinely large file.
   Everything above rests on that number, and it is also the first half of the log-derived
   metric set.
4. **Session fault injection.** Small, self-contained, independently useful.
5. **The projection service.** Highest leverage per line of code, and it needs only pass
   one plus group framing.
6. **The UI, last and deliberately.** It was most of the work the first time, and it is the
   part that benefits most from the contract already being settled.

## Open decisions

1. Does the index live on the server per upload, or is it returned to the client whole?
   The second makes the server stateless and pushes search and filtering to the browser,
   which is attractive for a Docker deployment — but it caps file size at what a browser
   will hold.
2. If stateful, what is the eviction policy? An uploaded log has to survive long enough to
   click on, and no longer.
3. Does the projection publish its schema as a second header row, a sidecar document, or a
   separate endpoint? Whatever sql-cli binds to most naturally should win.
4. Is CSV the only projection format? NDJSON and Arrow are both better for typed data, but
   CSV is what the downstream tool already speaks.
5. Should a projection be allowed to span message types with differing shapes, or should
   each message type get its own table? The union produces a wide sparse rectangle; the
   split produces a join the caller has to perform.
6. Where do profiles live — files beside the dictionaries, or a registry service? Thirty
   brokers is small enough for files, and files diff well in review.
7. Do the simulator rules get their own file format, or ride on the scenario shape already
   in [`scenarios.ts`](../src/generator/scenarios.ts)?
8. Does the replay endpoint validate an edited message before sending, or send exactly what
   it was handed? Debugging a counterparty sometimes means sending something invalid on
   purpose.
9. Do the live and log-derived metric sets share one type, or merely one set of names? One
   type is a stronger guarantee and forces both to stay complete; one set of names lets the
   offline side compute things the live engine cannot cheaply track.
10. Do the diagnostics endpoint and the inspector share an authentication story? A log
    inspector holds a firm's order flow, which is considerably more sensitive than a metrics
    scrape, and the two probably cannot have the same default.
