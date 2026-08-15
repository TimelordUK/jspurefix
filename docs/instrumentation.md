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

Filebeat wants fields, not prose, and today `IJsFixLogger` cannot carry any:

```ts
export interface IJsFixLogger {
  info: (message: string) => void
  warning: (message: string) => void
  debug: (message: string) => void
  error: (e: Error) => void
}
```

Every line arrives pre-formatted, so nothing downstream can filter by `sessionId` or
`msgType` without regex over English. Making the engine log-shippable means widening
this — an optional second argument keeps every existing implementation compiling:

```ts
info: (message: string, fields?: Record<string, unknown>) => void
```

winston is already the default factory and emits JSON without further work, so most of
the cost is deciding which fields belong on which line, and doing it consistently enough
to be worth filtering on.

This is separable from metrics and could land first — it is smaller, and it is the half
that helps someone debugging a live session at 3am.

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
- **Histograms.** Prometheus histograms need fixed buckets. Agree the bucket boundaries
  here so latency panels are comparable between engines rather than merely similar.

## Decisions still open

1. Per-session snapshot with registry rollup, or one flat structure?
2. Is `session` a metric label, and if so how is cardinality bounded?
3. Does structured logging land first, on its own?
4. Histogram buckets for parse and encode duration.
5. Does the diagnostics endpoint live in this repository at all, or its own package?
6. Sampling: are parse timings measured on every message, or 1-in-N once throughput is
   high enough for the measurement itself to show up in the measurement?
