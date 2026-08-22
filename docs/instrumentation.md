# Instrumentation — design note

**Status: design, nothing implemented.** This is the shape being argued about before any
code is written, because the contract has to be right in two engines at once. Comments
and disagreement welcome on the tracking issue.

The goal is that an operator running jspurefix in production can answer, without adding
their own code: is the session up, how much is going through it, what is it costing me,
and has anything started going wrong. Today they can answer none of those except by
reading log prose.

## What this is not

[`docs/benchmarking.md`](benchmarking.md) already measures parser throughput and
allocation. That is **offline**: `jsfix-bench` drives synthetic bytes under
`--expose-gc` so a change to a hot path can be argued about with a number.

This note is about the **live** engine — the same quantities, in a running process, at a
cost low enough to leave switched on. The two should agree on names wherever they
measure the same thing, so a bench figure and a production figure can be put side by
side.

## Principles

1. **The snapshot is the contract.** Prometheus, OpenTelemetry, a JSON endpoint and a
   CLI table are four *renderings* of one data structure. Design that structure; the
   renderings are then cheap, independent, and none of them is in the way of the others.
2. **Zero cost when off.** A disabled sink is a no-op method call, never a string format
   or an object allocation. `EmptyLogger` is the existing precedent.
3. **Nothing new in `dependencies`.** See [packaging](#packaging-boundary) — this is the
   trap most likely to be walked into.
4. **One spec, two engines.** Metric names and semantics are defined here and
   implemented identically in cspurefix. A shared dashboard is most of the value.

## Layer 0 — the snapshot

A plain object, no dependencies, produced on demand. Everything else renders it.

There is already a rough version of this: `TcpAcceptor` logs an *acceptor census*
(`transports=1 [1@::1:57598 up 0s] sessions=0 []`). It is a stats snapshot that only
knows how to be a log line.

```ts
interface ISessionStats {
  sessionId: string          // BeginString-Sender-Target
  peerCompId: string
  role: 'initiator' | 'acceptor'
  state: SessionState        // the enum, not a rendered string
  upSince: Date | null
  // sequence
  lastSentSeqNum: number
  lastPeerMsgSeqNum: number
  // traffic, since process start
  msgsSent: number
  msgsReceived: number
  bytesSent: number
  bytesReceived: number
  // health
  resendRequestsSent: number
  resendRequestsReceived: number
  gapsDetected: number
  reconnects: number
  lastReceivedAt: Date | null
  lastSentAt: Date | null
}
```

Gauges are read from state that already exists — `FixSessionState` holds
`lastPeerMsgSeqNum`, `LastSentAt`, `lastReceivedAt`, `peerCompId`; `SessionState` is the
enum; `SessionRegistry` knows the live set. Counters are the new part.

**Open question.** Whether the snapshot is per-session with an aggregate rolled up by the
registry, or one flat structure. Per-session with rollup is more useful to a venue and
more work; a single acceptor with one counterparty gets the same answer either way.

## Layer 1 — chokepoints

Counters are pushed through a narrow sink with a no-op default. The seams already exist;
none of these needs a new abstraction to hang off.

| what | where (jspurefix) | notes for the port |
| --- | --- | --- |
| bytes in, parse time | `AsciiParser.parseBuffer` / `parse` | the byte count is the write, not the message — a segment may hold several or half of one |
| messages decoded, by msgType | `AsciiParser.msg` | bounded label set, ~30 values |
| parse buffer high water | `ElasticBuffer.currentSize` vs `returnTo` | a buffer that keeps growing past `returnTo` is the early warning for a slow consumer |
| messages encoded, bytes out | `MsgTransmitter.send` / `settle` | `settle` already carries the payload and any error |
| session state transitions | `FixSession.setState` | transition counts, and time spent in each state |
| application vs session traffic | `AsciiSession.dispatchMsg` | the split matters: heartbeats are not throughput |
| gaps, resends, logon retries | `SessionSequenceCoordinator` | `pendingResendRequests`, `logonRetryCount` are already tracked |
| store depth, put latency | `FixMsgMemoryStore` / `FileSessionStore` | file store latency is the one that will surprise people |
| transports accepted, harvested | `TcpAcceptor` | already emits `transport` and `harvested` |
| reconnects, recovery attempts | `RecoveringTcpInitiator` | see `recovery policy` logging added in 5.11.0 |

**Bytes per second through the parser is the headline number** and deserves care: it is
what an evaluator asks for, and it is the one most easily measured wrongly. Count bytes
where they enter the parser, not where they leave the socket, and keep decode time
separate from `toObject()` — the benchmarking doc already draws that line as
`parse:view` against `parse:object`, and live instrumentation should draw it in the same
place.

## The metric set

Names in Prometheus form; OpenTelemetry and the C# port use the same words. Prefix is
`fix_` rather than `jspurefix_` so both engines populate one dashboard.

| metric | type | labels |
| --- | --- | --- |
| `fix_session_up` | gauge (0/1) | `session`, `role` |
| `fix_session_state` | gauge (enum value) | `session` |
| `fix_messages_total` | counter | `session`, `direction`, `msg_type`, `class` (admin/app) |
| `fix_bytes_total` | counter | `session`, `direction` |
| `fix_parse_duration_seconds` | histogram | — |
| `fix_encode_duration_seconds` | histogram | — |
| `fix_seq_num` | gauge | `session`, `direction` |
| `fix_resend_requests_total` | counter | `session`, `direction` |
| `fix_gaps_detected_total` | counter | `session` |
| `fix_reconnects_total` | counter | `session` |
| `fix_store_depth` | gauge | `session` |
| `fix_transports_open` | gauge | `listener` |

Alerting mostly falls out of these: `fix_session_up == 0` during trading hours,
`rate(fix_gaps_detected_total[5m]) > 0`, a seq num that stops advancing, a store depth
that only grows.

### Cardinality

A wildcard acceptor (`TargetCompID: '*'`) can meet an unbounded set of counterparties, so
**`session` is not automatically a safe label**. A venue with churny clients would grow
the series set without limit. Options: cap the labelled set and bucket the rest as
`other`, make per-session labelling opt-in, or expose per-session detail only through the
diagnostics endpoint and keep the scrape aggregated. Decide before shipping, not after
someone's Prometheus falls over.

`msg_type` is safe — bounded by the dictionary.

## Structured logging

**This lands first, on its own.** Not because it is smaller — because it delivers the
whole Elastic story by itself, and because the pass that adds fields is the pass that
locates every future counter site.

Worth separating two consumers that want opposite things:

- **Filebeat and Elastic are push.** The engine writes JSON lines, Filebeat harvests,
  Kibana does the drill-down. No server in the engine at all.
- **A live diagnostics endpoint is pull.** For when there is no Elastic stack, or when
  someone wants the state of a process now rather than after a harvest cycle.

The click-through-and-drill-down picture is entirely the first of those. That makes the
web server in [packaging](#packaging-boundary) an independent, later, optional thing
rather than a prerequisite.

**Since revised, for a reason outside this note.**
[`engine-services.md`](engine-services.md) needs an HTTP surface regardless — a broker log
inspector, a projection service and a replay endpoint all live on one. There should be a
single surface rather than two, which makes the diagnostics endpoint the smallest and best
understood service on something that is going to exist anyway, and therefore the right
service to build it with. Still optional to *use*; no longer optional to *design around*.

That note also observes that everything in [the metric set](#the-metric-set) is derivable
from a FIX log by an offline indexer — same names, two sources. Worth knowing here because
it supplies the thing live instrumentation otherwise lacks: an oracle. A counter that
silently under-counts is indistinguishable from quiet traffic, unless the same quantity is
computed a second, dumber way and the two are required to agree.

### The leverage is bound context, not the call sites

The engine has **307 logger call sites** (239 `info`, 39 `warning`, 15 `error`, 14 `debug`)
but only **29 places a logger is constructed**. And the identity is already at those 29:

```ts
this.sessionLogger = config.logFactory.logger(`${this.me}:${peerCompId}:FixSession`)
```

That is the session identity, built once, and completely opaque downstream — the "regex
over English" problem, except it is not even English, it is punctuation. So the first move
is not widening 307 call sites, it is widening the 29. Bound context makes every one of the
307 filterable without touching any of them.

Per-call fields then matter only where a line carries a *value* worth aggregating —
`msgType`, seq nums, byte counts, state transitions, gap ranges. Perhaps 25 lines, chosen
deliberately. They are the same chokepoints [layer 1](#layer-1--chokepoints) lists, which
is why doing this first leaves the metrics work half-located.

### The interface

```ts
export type JsFixLogFields = Record<string, unknown>

export interface IJsFixLogger {
  info: (message: string, fields?: JsFixLogFields) => void
  warning: (message: string, fields?: JsFixLogFields) => void
  debug: (message: string, fields?: JsFixLogFields) => void
  error: (e: Error, fields?: JsFixLogFields) => void
}

export abstract class JsFixLoggerFactory {
  public abstract logger (type: string, context?: JsFixLogFields): IJsFixLogger
}
```

Non-breaking, and worth being precise about why: TypeScript lets an implementation declare
*fewer* parameters than the interface, so a client's existing `info(message: string)` still
satisfies it, and their `JsFixLoggerFactory` subclass keeps working while ignoring the new
argument. Callers are unaffected either way.

`error` gains fields as well as the others. It currently takes only an `Error` — no
message, no context — and those 15 sites are the ones most wanted at 3am.

**Bound context, not a `child()` logger.** It fits the 29 construction sites, and it ports:
a `child()` would put an object lifecycle in the contract. See
[porting](#porting-to-cspurefix).

### Not breaking the existing line

The engine has been live for years; people have grep and scrapers built on the current
output. That output must not move.

```
2026-08-16T14:14:56.102Z [skeleton_server:skeleton-client:FixSession] info: peer sent ...
```

The shipped format names exactly four fields:

```ts
printf(info => `${info.timestamp} [${info.type}] ${info.level}: ${info.message}`)
```

So as long as context and per-call fields go into the winston info object as **separate
keys**, that printf never sees them. Verified: the same call with and without the new keys
renders byte-identically apart from the millisecond.

Three rules follow, and each has bitten already:

1. **`type` stays verbatim at all 29 sites.** It cannot be composed from the fields — the
   sites have no single rule between them (bare literals `'acceptor'`, one-part
   `` `${this.me}` ``, two-part `` `${name}:TcpInitiator` ``, three-part
   `` `${me}:${peer}:FixSession` ``, and one dotted `` `${type}.${t}` ``). Deriving it
   means per-site rules, which is the same edit with more ways to get a string subtly
   wrong. The resulting duplication between `type` and the fields is the price of not
   breaking grep, and it is cheap. In a JSON rendering `type` is simply dropped, because
   `component` and `app` carry it properly.
2. **Fields are namespaced, never spread.** They travel under `context` and `fields` keys
   and the *formatter* decides how to flatten. Spreading at the top level lets a caller's
   `{ message: … }` clobber the real message. It also keeps the contract
   transport-agnostic, which is what makes it port.
3. **A winston format function must mutate `info`, not return a new object.** Returning a
   fresh object drops `Symbol.for('level')` and winston discards the record silently — no
   output, no error. Found the hard way while proving the above.

### The default does not change

`WinstonLogger.consoleOptions()` does **not** emit JSON today — it is a `printf` rendering
prose, so "winston gives JSON for free" is not true as things stand. JSON arrives as a new
opt-in `ecsOptions()`, and the console default stays exactly as it is. Not only for this
release: changing a default log format is a major-version event at best and probably never
worth it.

`WinstonLogger.plain()` is message-only and used for FIX wire logs. That is a replay
artifact, not structured-log material, and stays as it is.

Two things make "same output after upgrade" a guarantee rather than a promise:

- **A golden-output test** rendering lines through `consoleOptions()` with and without
  context and fields, asserting the strings are identical. Anyone later improving
  `appFormat` then fails a test instead of breaking a customer's scraper.
- **The fields commit rewords no messages.** Mixing the two makes a before/after log diff
  unreadable. Keep them separate so the diff at a given level is genuinely empty.

### Field names

ECS names where they exist — `service.name`, `log.level`, `error.message`,
`error.stack_trace` — and everything engine-specific under `fix.*`. Context keys are plain
words; the formatter applies the prefix.

Two things the ECS format does that the console one must not, both found by reading real
output rather than by design:

- **winston's own `level` is dropped.** It would otherwise sit beside `log.level` carrying
  the same value on every line. Transports filter on `Symbol.for('level')`, not the
  property, so removing it changes nothing about what gets logged.
- **an error's message is the bare `Error.message`.** The console record composes
  `message : stack` because that is what has always been rendered there; in JSON the stack
  has `error.stack_trace` of its own, and repeating it doubles the largest line a pipeline
  carries.

Neither touches how the record is built, only how the ECS format reads it — so a caller who
supplied their own format via `fileOptions` still sees exactly what they saw before.

| context key | rendered | meaning |
| --- | --- | --- |
| `component` | `fix.component` | the class, e.g. `FixSession`, `TcpAcceptor` |
| `app` | `fix.app` | application name from the session description |
| `peer` | `fix.peer` | counterparty comp id, once known |
| `role` | `fix.role` | `initiator` or `acceptor` |

This is the metric prefix decision applied to logs: `fix.msg_type` in a log line,
`fix_messages_total{msg_type}` in a metric — same words, each in its own convention's
punctuation, so one dashboard serves both engines.

`fix.session` in the canonical `BeginString-Sender-Target` form is deliberately **not** in
the table above. A wildcard acceptor does not know its peer until bind time, so the field
would be absent or wrong on exactly the sessions that need it most. It arrives with the
metrics work, where `SessionId` is properly to hand — `AsciiSession` already rebuilds its
logger at bind for this reason, so the seam is there.

Rendered, one call site gives either:

```
2026-08-16T14:17:31.864Z [skeleton_server:skeleton-client:FixSession] info: peer sent ResetSeqNumFlag=Y with seqNum=1, weAlsoReset=true
```

```json
{"@timestamp":"2026-08-16T14:17:59.278Z","log.level":"info","service.name":"jspurefix",
 "message":"peer sent ResetSeqNumFlag=Y with seqNum=1, weAlsoReset=true",
 "fix.component":"FixSession","fix.app":"skeleton_server","fix.peer":"skeleton-client",
 "fix.reset_seq_num_flag":true,"fix.seq_num":1,"fix.we_also_reset":true}
```

## Packaging boundary

`express` and `axios` are **already** in `dependencies`, which is the unfinished half of
[#91](https://github.com/TimelordUK/jspurefix/issues/91): every consumer installs them
whether or not they are used. A diagnostics web server is exactly how that happens a
second time, and the fact that express is already present is what will make it tempting.

Proposed:

- **core** — snapshot, sink interface, counters. No new dependencies at all.
- **exporters** — Prometheus text format is about fifty lines and needs nothing;
  OpenTelemetry needs `@opentelemetry/api` as an **optional peer** dependency.
- **diagnostics endpoint** — a separate package, or optional peer. It should also be off
  by default and bind to loopback unless told otherwise: an unauthenticated page
  describing your counterparties and sequence numbers is not something to open by
  accident.

## Porting to cspurefix

The contract above is deliberately language-neutral. Points where the runtimes genuinely
differ, and the spec should not pretend otherwise:

- **GC and heap.** V8 exposes collections through `perf_hooks`; the CLR has its own
  counters. Do not invent a common schema — report each natively and let the dashboard
  hold two panels.
- **Sink interface.** A plain interface with a no-op implementation in both; no
  `EventEmitter` in the contract, since that would not port.
- **Logging shape.** .NET expresses this differently: bound context is `BeginScope`, and
  per-call fields come from message templates (`"session {SessionId} up"`) rather than a
  separate object. Both can emit identical JSON, but they are not the same API. The
  portable contract is *bound fields plus per-call fields*, and each engine renders it
  idiomatically — forcing the TypeScript shape onto `Microsoft.Extensions.Logging` would
  produce something unidiomatic that nobody on that side would want to use. What must
  match is the emitted field names, not the call signature.
- **Histograms.** Prometheus histograms need fixed buckets. Agree the bucket boundaries
  here so latency panels are comparable between engines rather than merely similar.

## Decisions still open

1. Per-session snapshot with registry rollup, or one flat structure?
2. Is `session` a metric label, and if so how is cardinality bounded?
3. ~~Does structured logging land first, on its own?~~ **Yes** — see
   [structured logging](#structured-logging). Bound context on the factory rather than a
   `child()` logger, `type` kept verbatim, console format unchanged.
4. Histogram buckets for parse and encode duration.
5. Does the diagnostics endpoint live in this repository at all, or its own package? It
   needs no framework — `node:http` and about a hundred lines — which is what stops
   `express` being reached for a second time.
6. Sampling: are parse timings measured on every message, or 1-in-N once throughput is
   high enough for the measurement itself to show up in the measurement?
7. Does the engine own the ECS field names, or hand people a formatter to remap? Someone
   with an existing Splunk convention will want the latter.
8. When per-call fields land, do the ~25 chosen lines also get their message text left
   alone permanently, so the prose and the fields never drift apart?
