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
so the selector has to say how groups collapse:

- **At most one group may be the row axis.** Exploding it yields one row per instance.
  Exploding two produces a cross product — a trade capture with two legs and two sides
  becomes four rows, and every leg/side pairing in it is fiction. This restriction is the
  single most important rule in the projection.
- Every other selected group is **widened** — `Legs_1.LegSymbol`, `Legs_2.LegSymbol` — up
  to a declared cap, with overflow *reported* rather than silently truncated. Silent
  truncation in an analysis tool is worse than an error.
- The default row axis is none: exactly one row per message.

Three details that decide whether the output is actually usable downstream:

- **Column names come from the dictionary path, not the tag number** — `Instrument.Symbol`,
  `TrdCapRptSideGrp.Side` — so a query survives a broker renumbering a custom field. Tag
  numbers stay available as aliases.
- **Values are typed.** The wire is all text, but a SQL engine wants to sum a quantity and
  group by a date. The dictionary knows each field's `TagType`, so the projection should
  emit numbers unquoted and dates in one consistent form, and publish a schema alongside
  rather than making the consumer sniff.
- **An empty cell means absent.** FIX forbids an empty value, so there is no ambiguity to
  resolve, which is a rare and welcome simplification. Raw data fields are excluded by
  default — their contents can contain anything, including the delimiter and newlines.

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
2. **Pass one, measured.** Prototype the indexer in jspurefix and run it against a
   genuinely large file. Everything above rests on that number.
3. **Session fault injection.** Small, self-contained, independently useful.
4. **The projection service.** Highest leverage per line of code, and it needs only pass
   one plus group framing.
5. **The UI, last and deliberately.** It was most of the work the first time, and it is the
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
