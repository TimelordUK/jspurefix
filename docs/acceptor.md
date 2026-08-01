# Running a FIX acceptor

The acceptor in jspurefix began as a smoke-test harness for the initiator — enough
to answer a Logon so the client side could be exercised. It is now used to host real
counterparties, and this document describes the model it follows, what it guarantees,
and what the log tells you.

Much of this is a back-port of
[cspurefix](https://github.com/TimelordUK/cspurefix), where the acceptor was hardened
against real brokers.

## Transports and sessions are not the same thing

A **transport** is one TCP connection. A **session** is one FIX conversation,
identified by `SessionId` = `BeginString`-`SenderCompID`-`TargetCompID`, and owning
the sequence numbers and the message store behind that conversation.

The relationship is one session per transport, but a session **outlives** the
connection it started on: a counterparty that drops and reconnects is resuming the
same FIX session, from the same persisted sequence state, on a new transport.

```
listener (TcpAcceptorListener)
 └── acceptor (TcpAcceptor)          one net/tls Server, one SessionRegistry
      ├── transport 1 ──► session scope ──► FixSession ──► SessionId A ──► store A
      ├── transport 2 ──► session scope ──► FixSession ──► SessionId B ──► store B
      └── transport 3 ──► session scope ──► FixSession ──► SessionId A ──► store A
                                                              (replaces the first)
```

## Session scopes

Every accepted connection gets its own DI child container — a *session scope* —
carrying its own:

- parse buffer and transmit buffer (`ElasticBuffer`)
- `ISessionDescription`, and therefore its own `SessionId` and message store
- session message factory, so outbound headers carry that session's comp ids
- `IJsFixConfig`, which is what the application's session receives

This matters because those are otherwise process-wide singletons on the session
container. Two clients on one listener would parse into the same buffer and compute
the same `SessionId`.

Applications opt in by using the config they are **handed**, not the one they
captured:

```ts
protected override makeFactory (config: IJsFixConfig): EngineFactory {
  const isInitiator = this.isInitiator(config.description)
  return {
    // sessionConfig is this connection's own scope
    makeSession: (sessionConfig: IJsFixConfig) => isInitiator
      ? new MyClient(sessionConfig)
      : new MyServer(sessionConfig)
  } as EngineFactory
}
```

Writing `makeSession: () => new MyServer(config)` closes over the launcher's config
and opts the application out of per-session isolation. It still works for a single
counterparty; it does not work for several.

### Custom session message factories

If you supply your own `ISessionMsgFactory` — usually by overriding
`SessionContainer.makeSessionFactory` to stamp extra header fields — the scope needs
a copy of *your* factory bound to that session's description, not a stock one.

Extending `ASessionMsgFactory` (or `AsciiSessionMsgFactory` / `FixmlSessionMsgFactory`)
gets this for free: the default `cloneFor` reconstructs through the concrete
constructor, so a subclass taking `(description, mutator)` needs no extra work.
Override `cloneFor` if your constructor takes anything else:

```ts
class BrokerMsgFactory extends AsciiSessionMsgFactory {
  constructor (description: ISessionDescription, private readonly desk: string) {
    super(description)
  }

  // the default clone would not know about `desk`
  public override cloneFor (description: ISessionDescription): ISessionMsgFactory {
    return new BrokerMsgFactory(description, this.desk)
  }
}
```

## The session registry

FIX permits exactly one active session per `SessionId`. `SessionRegistry` enforces
that: a session claims its `SessionId` once its store is initialised, and any
*different* session already holding it is stopped first.

This is what answers the half-open socket problem. A counterparty whose network path
disappears without FIN or RST leaves the acceptor holding a socket it believes is
alive. When that counterparty reconnects and logs on, the registry stops the stale
session before the new one proceeds — otherwise two sessions write to one store and
the sequence numbers diverge beyond recovery.

```
[SessionRegistry] FOUND EXISTING SESSION for FIX4.4-accept-comp-init-comp - this is a reconnection scenario
[SessionRegistry] stopping old session to prevent stale transport writes
[...FixSession]   requestStop: replaced by new connection - stopping old session with stale transport
[SessionRegistry] session NOT unregistered (already replaced by new connection or not found): ...
```

That last line is expected, not an error: the displaced session unregisters on its
way out, and the identity check stops it evicting its successor.

The listener creates a registry per listener. Supply your own via
`config.sessionRegistry` if you want to inspect it — `count`, `keys()` and `get()`
are read-only views over the live population.

An application can stop a session itself with `session.requestStop(reason)`.

## Wildcard TargetCompID

An acceptor that sets `"TargetCompID": "*"` does not need to know its counterparties
in advance. On the first Logon the session adopts the peer's `SenderCompID` as its
target and only then builds the identity-derived state: `SessionId`, message store,
sequence coordinator, registry claim, and its logger name.

```json
{
  "SenderCompId": "accept-comp",
  "TargetCompID": "*",
  "store": { "type": "file", "directory": "store/acceptor" }
}
```

Binding is deferred rather than done at construction so that each counterparty gets
its **own** store file — `FIX4.4-accept-comp-<peer>.seqnums` — which is what makes
persisted recovery work for a multi-client acceptor. (cspurefix binds in the
constructor and so keys a wildcard store on the literal `*`; that is fine for
in-memory stores only.)

Messages that arrive while the bind is in flight are queued and replayed in order.
`*` on an initiator is rejected at construction — an initiator has to know who it is
calling.

## Detecting a peer that has gone

Three independent mechanisms, because no single one is sufficient:

| Level | Mechanism | Detects |
|-------|-----------|---------|
| Transport | TCP keep-alive (`tcp.keepAliveMs`, default 30s, `0` disables) | a peer whose host or network path has vanished |
| Protocol | `TestRequest` on heartbeat timeout, then terminate | a peer that is connected but not responding |
| Session | `SessionRegistry` replacing on the next Logon | a peer that has already reconnected |

`MsgTransport.end()` performs a graceful close and then destroys the socket after
`MsgTransport.lingerMs` (default 5s), so an unanswered FIN cannot pin the handle
indefinitely. `TcpAcceptor.close()` releases live connections rather than waiting on
them — `net.Server.close` otherwise blocks on whoever happens to be connected.

## Reading the log

The lifecycle of one connection, in order:

```
[TcpAcceptor] net creates session 2
[TcpAcceptor] transport 2 keep-alive enabled, initial delay 30000ms
[TcpAcceptor] transport 2 from ::1:55642 given its own session scope
[TcpAcceptor] new transport id = 2 from ::1:55642 created total transports = 2
[acceptor]    transport 2: creating session via DI token FixSession [accept-comp -> *]
[acceptor]    acceptor census: transports=2 [...] sessions=1 [...]
[...]         wildcard acceptor: awaiting peer Logon to establish session identity
[...]         wildcard acceptor: binding session identity to peer SenderCompID 'init-comp_2'
[...]         session identity bound: FIX4.4-accept-comp-init-comp_2 nextSender=1, expectedTarget=1
[SessionRegistry] no existing session found - registering new session: FIX4.4-accept-comp-init-comp_2
...
[SessionRegistry] successfully unregistered session: ..., remainingActiveSessions=1
[TcpAcceptor] transport 2 from ::1:55642 harvested after 18s (socket closed) total transports = 1
[acceptor]    acceptor census: transports=1 [...] sessions=1 [...]
```

The **census** line is emitted whenever the population changes and answers "how many
counterparties are connected, and which sessions are claimed" from the log alone.
Transports and sessions can legitimately differ for a moment: a connection that has
not logged on yet has a transport and no session; a session being replaced has both
counted until its socket is released.

Once a wildcard session has bound, its log prefix carries the counterparty
(`[my_server:init-comp_2:FixSession]`), so a multi-client server log can be read one
counterparty at a time.

## Server-side recovery from a persisted store

With `"store": { "type": "file", "directory": "..." }` the acceptor persists, per
`SessionId`, the next sender sequence and the last processed peer sequence, plus the
sent message bodies for replay.

On a reconnect the session reads that store before responding to the Logon, so it
knows what it last sent and what it last received. If the peer's Logon sequence is
ahead of what the store expects, the acceptor issues a `ResendRequest`; if the peer
asks for a resend, the stored bodies are replayed with `PossDupFlag=Y`.
`ResetSeqNumFlag=Y` from either side clears the store and restarts at 1.

Because the store is keyed on `SessionId`, a wildcard acceptor recovers each
counterparty independently.

## See also

- [`src/transport/tcp/tcp-acceptor.ts`](../src/transport/tcp/tcp-acceptor.ts) — listener, transport lifecycle
- [`src/transport/session/session-registry.ts`](../src/transport/session/session-registry.ts) — one session per SessionId
- [`src/runtime/session-scope.ts`](../src/runtime/session-scope.ts) — per-connection DI scope
- [jspf-demo](https://github.com/TimelordUK/jspf-demo) — `multi-client` and `stale-transport` scenarios
