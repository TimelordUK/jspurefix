# Worklog

Running notes on what has been done and what is worth doing next, so a session can
be resumed cold. The long-form plans live in `BACKPORT_PLAN.md` (engine, cspurefix →
jspurefix) and `DEMO_PORT_PLAN.md` (the jspf-demo reference app).

---

## 2026-08-01 — acceptor hardening, released as 5.9.1

Started from [#153](https://github.com/TimelordUK/jspurefix/issues/153) and ended up
rewriting how the acceptor handles connections.

**Merged (PRs #154, #156, #157, #158):**

- transport subscribe/unsubscribe symmetry — `subscribe()` attached closures,
  `unsubscribe()` removed method references, so it removed nothing. A dead transport
  could drive a session that had moved to a newer connection.
- per-connection DI scopes — `ParseBuffer` / `TransmitBuffer` were process-wide
  singletons and the description was shared, so concurrent clients interleaved bytes
  in one buffer and computed one `SessionId`
- `SessionRegistry` — one live session per `SessionId`, stopping the stale one on
  reconnect
- wildcard `TargetCompID` — bound after the Logon, so each counterparty gets its own
  store (cspurefix binds in the constructor and keys a wildcard store on `*`)
- transport lifecycle — keep-alive, `destroy()`, linger, harvest on `close`, census
  logging
- custom session message factories preserved into per-session scopes (`cloneFor`)
- `@jest/globals` moved out of `dependencies` — it was never imported, and shipped
  the Babel toolchain to every consumer. Production tree 303 → 147 packages.
- `npm run pack:local` for consuming unpublished builds

**Issues resolved:** #153, #87, #140 (verified and closed), #77 (awaiting reporter
confirmation — see below).

**Docs:** `docs/acceptor.md` describes the resulting model.

---

## Next up

### 1. Toolchain major bumps

Deliberately held back from 5.9.1 so a regression could not be confused with the
acceptor work:

- `typescript` 6 → 7
- `eslint` 9 → 10
- `eslint-config-love` 151 → 154
- `@types/node` 25 → 26

Expect lint churn. There are 17 pre-existing lint errors on master (`fix-clock`,
`resend-request-manager`, `session-sequence-*`, `tcp-initiator`) — worth clearing in
the same pass, since they make it hard to tell new problems from old. `npm audit` is
currently clean.

### 2. #77 — confirm or close

[#77](https://github.com/TimelordUK/jspurefix/issues/77) is very likely fixed by the
per-connection parse buffers in 5.9.1, not by the field-ordering work the issue is
named after. Both orderings of the reporter's message parse correctly today, and
they always did — a test on the `fix 52` branch in 2023 also parsed the swapped
message, which is why the issue stalled.

The better explanation: until 5.9.0 all accepted connections shared one `ParseBuffer`
while each parser kept its own state, and `beginMessage()` resets the shared buffer.
Sweeping every split point of the reporter's MarketDataRequest, a shared buffer
corrupts it at 170 of 170 — the trigger is one connection being mid-message, which
needs a message that straddles a TCP segment, which is why small session messages
never expose it. The reporter's deployment (per #87) was a multi-client acceptor
publishing market data.

Pinned in `src/test/ascii/interleaved-parse-isolation.test.ts`. Awaiting the
reporter running 5.9.1 before closing — the exact `unknown tag type 146` was never
reproduced.

### 3. Other open issues worth a look

Several are old and may already be fixed, in the way #140 turned out to be — worth
verifying against 5.9.1 rather than reading the thread:

- #96 / #69 — `DefaultApplVerID` / `SenderSubID` missing during login
- #93 — customising the Logon message
- #86 — make `encoderStream` protected
- #85 — `ASessionMsgFactory` types patch (may be superseded by `cloneFor`)
- #72 — `session-launcher.run()` never resolves when connection established

### 4. Small things noticed, none urgent

- on an acceptor, the parent container's `ParseBuffer` / `TransmitBuffer` are still
  allocated and now serve only as a size template for the per-connection clones —
  ~170KB of dead allocation per listener
- `script/certs/` is untracked and contains private keys; worth a `.gitignore` entry
  so it cannot be committed by accident
- per-connection buffers cost ~170KB per connection (160KB parse + 10KB transmit).
  Verified released on disconnect via `WeakRef` — a tsyringe parent keeps no
  reference to its children — but it is the number to know if someone runs hundreds
  of counterparties

---

## Corrected earlier note

An earlier version of this work recorded the demo's `server-bounce` scenario as
failing because of a fire-and-forget store write in `AsciiSession.txOnEncoded`
leaving the acceptor's persisted sender sequence behind what it had sent.

**That was wrong.** Reproducing the run by hand: after phase 1 the two stores agree
exactly (client `4 : 14`, server `14 : 4`), and a second session started against them
recovers and trades normally, including with the scenario's tight 5-second client
budget.

The real cause was in the scenario harness — `run_quiet_bg` published its pid via
command substitution, so `$!` belonged to a subshell and `wait` failed instantly
instead of blocking. The first server was therefore still bound to the port when the
second started. Fixed in jspf-demo; all six scenarios now pass.

Worth remembering as a general lesson: a `|| true` on a `wait` hid this for months,
and the failure looked exactly like an engine sequencing bug.
