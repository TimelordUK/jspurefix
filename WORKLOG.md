# Worklog

Running notes on what has been done and what is worth doing next, so a session can
be resumed cold. The long-form plans live in `BACKPORT_PLAN.md` (engine, cspurefix →
jspurefix), `DEMO_PORT_PLAN.md` (the jspf-demo reference app) and `ATDL_PLAN.md` (a
FIXatdl renderer and test harness — a prospective sibling project, not engine work).

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

## 2026-08-08 — customising the Logon, and making silent drops visible, released as 5.10.0

Started from [#93](https://github.com/TimelordUK/jspurefix/issues/93), open since
December 2024, and ended up somewhere broader. Two issues that look unrelated turned
out to share a theme: **the engine failed quietly in several places, and nobody could
see it.**

**Merged (PR #164):**

- a `Logon` block in the session description, merged over the fields the engine
  derives. `AsciiSessionMsgFactory.logon()` had read exactly five values off the
  description and ignored everything else, so an `"Account"` in the config was never
  looked at. A null in the block suppresses a field.
- `AsciiEncoder` now reports a key it cannot resolve, via
  `MsgEncoder.onUnknownField`. This was the real cause of the confusion: `Account` is
  tag 1 but is not a field of FIX 4.4 `Logon`, so it was discarded with no error and
  no log line. Only runs on the miss path — a key that resolves costs nothing.
- `SessionContainer(provider)` and `SessionLauncher.makeSessionMsgFactory()`, so
  supplying a factory no longer needs a `SessionContainer` subclass
- `AsciiSessionMsgFactory` / `FixmlSessionMsgFactory` exported from the package root.
  Extending the ascii factory — the thing every previous answer to these issues told
  people to do — used to require importing through `dist/transport/ascii/...`.
- an optional callback on `send`, giving back the stamped `StandardHeader` (and so
  the sequence number) or an error. Writing it exposed three drops that told nobody:
  `encodeMessage` returning null for an unknown msgType, a session in state
  `Stopped`, and no transport at all. All three still reach the error channel; the
  callback is additive.

**Issues resolved:** #93, #86, #39, #96 (all commented with the full explanation).
#69 verified fixed — `SenderSubID` has been in the header since `dd9a540` — and left
open pending the reporter, since their actual complaint was "no response from the
server".

**Docs:** `docs/custom-logon.md`, plus README sections on the `Logon` block and on
send callbacks.

**Perf:** flat. Parse benchmarks moved inside the noise floor; Logon encode 2.26
µs/msg against the 2.3 in the README table. The encoder change is genuinely off the
hot path.

**Demos:** `jspf-demo` gained a `custom-logon` mode (config block + generated
dictionary + run-time factory, and one field deliberately left undeclared so the new
warning is visible). `jspf-md-demo`'s `Msg44Fact` had a `logon()` that was a verbatim
copy of the stock one — it showed the hook and never the point — and now sends a real
bespoke tag; its generated types were regenerated in a separate commit, having
drifted a long way behind the generator.

**Found along the way:** jspf-demo had been sending every `TradeCaptureReportRequest`
without its dates for as long as the demo has existed. `TrdCapDtGrp` was built as a
flat array, which is how the FIX repository models it, but those sessions load the
QuickFIX dictionary where it is a component wrapping `NoDates`. The encoder dropped
it silently. The new warning is what caught it, about an hour after it existed — a
fair advertisement for the feature.

---

## Next up

### 1. Toolchain major bumps

Deliberately held back from 5.9.1 so a regression could not be confused with the
acceptor work:

- `typescript` 6 → 7
- `eslint` 9 → 10
- `eslint-config-love` 151 → 154
- `@types/node` 25 → 26

Expect lint churn. The 17 pre-existing lint errors noted here were cleared in
`1d2f267` — `npx eslint src/` is clean on master as of 5.10.0, so any churn from the
bump is genuinely new and worth reading. `npm audit` is clean.

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

Most of this list was cleared in 5.10.0. What remains:

- **#69** — verified fixed and commented; awaiting the reporter before closing. Their
  literal question (`SenderSubID`) works; their real complaint was silence from
  cServer, which is a different problem.
- **#85** — `ASessionMsgFactory` types patch. Possibly superseded twice over now, by
  `cloneFor` and by the root exports added in 5.10.0. Worth reading the patch against
  current master before doing anything.
- **#72** — `session-launcher.run()` never resolves when the connection is
  established. Not looked at. Given how #140 and #77 went, verify against 5.10.0
  before trusting the thread.

The lesson from this batch, worth repeating: **several of these were already fixed,
or were one line plus a docs gap.** Reading the thread is a poor substitute for
running the reporter's config.

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
