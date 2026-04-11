# Demo Port Plan: cspurefix standalone-demo → jspf-demo

## Background

With Phase 6 of the cspurefix backport complete (jspurefix 5.5.0), jspurefix is at functional parity with cspurefix. The next major track is bringing `~/dev/ts/jspf-demo` up to the level of `~/dev/cs/purefix-standalone-demo` — the C# reference application that has been built up incrementally over months of soak testing.

The C# standalone demo is the **golden source for "what production-grade jspurefix usage looks like"**, including all the bugs that surfaced during a 17-day continuous soak test (Jan 28–Feb 13, 2026: ~92 hours runtime, 12 transport disruptions, 100% recovery, zero manual intervention).

This work follows the same incremental approach as the backport: small PRs, each independently mergeable, each adding a coherent feature and not trying to do everything at once.

---

## Current state of jspf-demo

**What exists** (4 TypeScript files in `src/trade_capture/`):
- `app.ts` — `AppLauncher extends SessionLauncher` boots client + server in same process
- `trade-capture-client.ts` — initiator that sends `TradeCaptureReportRequest`, receives reports, hard-coded `done()` after 32s
- `trade-capture-server.ts` — acceptor that responds with 5 trades + a `setInterval` for live trades
- `trade-factory.ts` — synthetic trade generator (Gold, Silver, Platinum, Magnesium, Steel)

**What's missing** (in rough order of importance):
1. State reset on reconnect (timers, counters, caches all leak)
2. Timer cleanup tracking (the "timer keeps running after disconnect" bug)
3. CLI options (--client / --server / --skeleton / --store / --disconnect-after)
4. Config-based scenarios (reset / recovery / broker-reset session configs)
5. File store wiring and persistent sequence tests
6. Multi-client support with session registry
7. Sequence mismatch test scenarios
8. Skeleton mode and soak-test scripts
9. README + docs (current README is 3 lines of CI badges)
10. Trade capture flow alignment with C# (sec def request → 5 securities → trade request → trades)

---

## Scope decisions

**In scope**: everything that demonstrates jspurefix resilience and recovery features, plus the test scenario scripts that validate them. The goal is a reference app that shows how to use jspurefix correctly in production, with smoke tests that exercise the hard cases.

**Out of scope (for now)**:
- TLS support — nice-to-have, defer to a follow-up if there's demand
- GC monitoring — .NET-specific; Node has different profiling tools (`--inspect`, V8 heap snapshots) that don't fit the same API
- `--clients 1..5` multi-initiator support — soak-test scaffolding, not core feature; defer
- Generated FIX types — `jspurefix` already has runtime parsing; the demo currently uses `ILooseObject`-style access which is fine for a demo

These can become follow-up phases if/when needed.

---

## Lessons learned from C# git history

These are real bugs that surfaced during soak testing in the C# demo. **Each one is a hazard for the TypeScript port.** The plan below explicitly addresses each.

| Bug | Fix | Phase |
|-----|-----|-------|
| Unsolicited trade timer kept running after session disconnect — eventually multiple timers running concurrently | Track timer with cancellation token / clearable handle stored as instance field; cancel on `onStopped()` | **D2** |
| Application state (counters, flags, caches) leaked across reconnects | Explicitly reset all state in `onReady()` | **D2** |
| Duplicate trade requests sent on reconnect | Add guard flag (`hasSentTradeRequest`) and reset it in `onReady()` | **D2** |
| Old transport handle still alive when client reconnected fast → multiple sessions for same CompID, each with its own timer | Session registry on acceptor: stop the old session when a new logon arrives with the same CompID | **D6** |
| Shared parser instance across multiple concurrent sessions caused state corruption | Per-session parser instance via session factory | **D6** |
| Wildcard `TargetCompID="*"` for multi-client acceptor was overwritten on first logon, breaking subsequent sessions | Store original CompID at factory init; restore on each clone | **D6** |
| Buffer corruption when OS wakes from sleep mid-read | Already fixed in jspurefix Phase 2 (parser reset on disconnect) ✓ | done |
| Sequence mismatch loops on reconnect | Already fixed in jspurefix Phase 3 (coordinator) ✓ | done |
| Hard to debug multi-client logs without session tagging | Tag logs with SenderCompID | **D6** |

The good news: many of the underlying engine bugs are already fixed in jspurefix. The demo-level bugs are application-layer hazards we need to avoid.

---

## Delivery: 9 PRs (D1 through D9)

### PR D1: Hygiene + jspurefix bump (zero risk)

**Goal**: Get the demo onto jspurefix 5.5.0 and modernise the project skeleton.

| File | Action |
|------|--------|
| `package.json` | Bump `jspurefix` dependency to `^5.5.0`. Remove unused deps (`request`, `typings`). Add a real `test` script. |
| `README.md` | Replace 3-line badge-only README with a basic intro that says what the demo does. Add "build / run" section. |
| `.travis.yml` | Remove (Travis is gone, AppVeyor + GitHub Actions cover us). Keep `appveyor.yml`. |
| `tslint.json` | Remove (eslint is the canonical linter now). |

**Risk**: None. New deps and docs only.

---

### PR D2: Resilience fixes for the existing flow (low risk, high value)

**Goal**: Fix the hard-won bugs from C# soak testing in the existing TS code, before we add anything new. These are real bugs that exist in the current `trade-capture-client.ts` and `trade-capture-server.ts`.

| File | Action |
|------|--------|
| `src/trade_capture/trade-capture-server.ts` | Track the `setInterval` handle as a class field. Clear it in `onStopped()` AND at the start of any new request handler (defensive). Currently it's already cleared in `onStopped()` per the agent's read — verify and harden. |
| `src/trade_capture/trade-capture-client.ts` | Add `onReady()` state reset: clear received trades map, reset any guard flags. Add a `hasSentTradeRequest` guard so reconnect doesn't double-send. The current `done()`-after-32s scheduler should also be guarded against firing twice on reconnect. |
| `src/trade_capture/trade-capture-server.ts` | Same `onReady()` reset for any server-side state (next trade ID counter is OK to keep monotonic across reconnects but verify). |
| New: `src/test/trade-capture-resilience.test.ts` | Smoke test: start server, connect client, force disconnect, reconnect, verify exactly one set of trades is exchanged (not two). |

**Risk**: Low. We're hardening existing code, not changing observable behaviour in the happy path.

**Critical**: This PR fixes the "timer keeps running" and "duplicate sends after reconnect" classes of bugs at the demo level. Even before we add CLI options or new features, the existing demo will be more correct.

---

### PR D3: Match the C# trade capture flow (low risk)

**Goal**: Make the message flow match the C# reference: client requests securities first, then requests trades after receiving 5 security definitions.

**Why**: Two reasons:
1. It exercises more of the FIX surface (SecurityDefinition messages)
2. It's the canonical flow the C# demo uses, which means test scripts written against C# can be ported with minimal changes

| File | Action |
|------|--------|
| `src/trade_capture/trade-capture-client.ts` | In `onReady()`: send `SecurityDefinitionRequest` for `MarketID="20"` instead of going straight to `TradeCaptureReportRequest`. On receiving each `SecurityDefinition`, increment counter; once 5 received, send `TradeCaptureReportRequest`. |
| `src/trade_capture/trade-capture-server.ts` | Add handler for `SecurityDefinitionRequest` that responds with 5 `SecurityDefinition` messages (Gold/Silver/Platinum/Copper/Steel — match C# names). Existing `TradeCaptureReportRequest` handler unchanged. |
| `src/trade_capture/trade-factory.ts` | Add helper for `SecurityDefinition` message construction. |

**Risk**: Low. New message handlers added, existing ones unchanged.

---

### PR D4: CLI options + mode switching (medium risk)

**Goal**: Replace the hard-coded "boot client and server in same process" launcher with a real CLI that can run client-only, server-only, or both.

| File | Action |
|------|--------|
| New: `src/cli/cli-options.ts` | Define CLI shape using `commander` or `yargs` (we should agree which — leaning `commander` for simplicity). Options: `--client`, `--server`, `--config <path>`, `--store <dir>`, `--disconnect-after <secs>`, `--timeout <secs>`, `--skeleton`, `--log`. |
| New: `src/cli/cli-options-binder.ts` | Validate flags (mutually exclusive flags, range checks). |
| `src/trade_capture/app.ts` | Refactor `AppLauncher` to accept `CliOptions`. Dispatch to `runClient()`, `runServer()`, or `runBoth()`. Preserve "run both" as the default for backward compat. |
| New: `src/cli/index.ts` | Entry point that parses argv and calls the launcher. |
| `package.json` | Update bin/scripts so `npm run tcp-tc` still works but new CLI is also available. |

**Risk**: Medium. Touches the entry point and could break the existing `npm run tcp-tc` workflow if not done carefully. Mitigation: preserve the existing behaviour as the default mode.

---

### PR D5: File store + persistent scenario configs (medium risk)

**Goal**: Wire up the `IFixSessionStore` (added in jspurefix Phase 4) to the demo so we can run reset / recovery / broker-reset scenarios. This is where persistence comes online.

| File | Action |
|------|--------|
| New: `data/session/recovery-initiator.json` | File store, ResetSeqNumFlag=N, port 2345, store dir `store/initiator`. Mirrors C# `recovery-initiator.json`. |
| New: `data/session/recovery-acceptor.json` | File store, ResetSeqNumFlag=N, port 2345, store dir `store/acceptor`. |
| New: `data/session/broker-reset-initiator.json` | File store, client wants resume (reset=N), reconnectSeconds=10, store dir `store/broker-initiator`. |
| New: `data/session/broker-reset-acceptor.json` | File store, server forces reset (reset=Y), store dir `store/broker-acceptor`. |
| `src/trade_capture/app.ts` | Pick up `--store <dir>` from CLI to override store factory at runtime (matches C# behaviour). |
| `data/session/test-initiator.json` / `test-acceptor.json` | Document them as the "reset mode (default)" configs. Keep their behaviour unchanged. |
| New: `src/test/file-store-roundtrip.test.ts` | Smoke test: run a session with file store, kill it, restart, verify sequences resumed. |

**Risk**: Medium. The file store API was added recently — needs careful testing in the demo context.

---

### PR D6: Multi-client + session registry (medium-high risk)

**Goal**: Support multiple concurrent clients to the same acceptor without state corruption. This is where the hardest soak-test bugs lived in C#.

**Note**: the C# `SessionRegistry` is itself work-in-progress (lost when leaving the hedge fund where the original was written). The broader vision is loading ~20 broker dictionaries and using first-message metadata to dispatch — that's a future expansion. For D6 we're building the **minimum viable registry** to fix the stale-transport bug.

| File | Action |
|------|--------|
| New: `src/trade_capture/session-registry.ts` | A map from `(SenderCompID, TargetCompID)` to active session. On new logon, stop the old session for the same key before accepting. Designed so the broker-multiplex use case can be layered on later. |
| `src/trade_capture/trade-capture-server.ts` | Use the registry to detect and stop stale sessions. |
| `data/session/multi-client-acceptor.json` | New config with `TargetCompID="*"` (wildcard mode). |
| `src/trade_capture/app.ts` | If `TargetCompID === "*"`, clone the description per session so each session has its own actual TargetCompID after logon. Store the original `*` value at factory init. |
| Logging | Tag every log line with the session's SenderCompID so multi-client logs can be traced. |
| New: `src/test/multi-client.test.ts` | Two clients connecting concurrently, both receive trades, no cross-talk, no duplicate timers. |

**Risk**: Medium-high. This is where most of the C# soak-test bugs lived. The session registry is new code; the wildcard CompID handling is tricky.

**Future expansion** (post-D6, not in scope here):
- Load multiple broker dictionaries at startup
- Inspect first message of incoming FIX file/connection to pick the right dictionary
- Expose registry state to a React frontend (or any HTTP/SSE consumer)
- This was the original use case at the hedge fund — capture it as a follow-up phase once the basic registry is solid.

---

### PR D7: Scenario test scripts (low risk, high value)

**Goal**: Port the C# `test-scenarios.sh` to TypeScript-runnable scenarios. These are the smoke/soak tests that drove all the bug fixes.

| File | Action |
|------|--------|
| New: `scripts/test-scenarios/seq-mismatch.ts` | Truncate client sequence, restart, verify mismatch recovery loop completes. |
| New: `scripts/test-scenarios/server-bounce.ts` | Server timeout, restart, client should resume. |
| New: `scripts/test-scenarios/client-bounce.ts` | Client timeout, restart, server should accept resumed client. |
| New: `scripts/test-scenarios/broker-reset.ts` | First session establishes sequences, second session has server send `ResetSeqNumFlag=Y`, verify reset to 1. |
| New: `scripts/test-scenarios/run-all.sh` | Wrapper that runs all scenarios in sequence, reports pass/fail. |
| `package.json` | Add scripts: `npm run scenario:seq-mismatch`, `npm run scenario:all`, etc. |

**Risk**: Low. These are test scripts that exercise the demo, not changes to production code. If they break, they break in obvious ways.

**Implementation note**: prefer Node scripts over bash where possible — easier for cross-platform (Windows/macOS/Linux) and avoids the bash compatibility issues the C# demo has between `.sh` and `.ps1`.

---

### PR D8: Skeleton mode + long-running smoke test (low risk)

**Goal**: Add skeleton mode (heartbeat-only handler) to enable long-running stability tests without trade traffic noise.

| File | Action |
|------|--------|
| New: `src/trade_capture/skeleton-handler.ts` | Bare-bones session that accepts logon and exchanges heartbeats only. Does not subscribe to trades, does not handle app messages beyond logging. |
| `src/trade_capture/app.ts` | Add `--skeleton` CLI flag that swaps in `SkeletonHandler` instead of full client/server. |
| New: `scripts/soak-test.sh` | Mirror C# `soak-test.sh`: kill any running, start skeleton server + client, wait. |
| New: `docs/soak-testing.md` | How to run the soak test, what to look for in heap snapshots, expected memory profile. |

**Risk**: Low. New mode, doesn't touch existing code paths.

---

### PR D9: Documentation (zero risk)

**Goal**: Real README + scenario docs so a new user can understand what the demo does and how to extend it.

| File | Action |
|------|--------|
| `README.md` | Real intro: what the demo is, what it demonstrates, quickstart, CLI reference, scenario list. |
| New: `docs/architecture.md` | Diagram of client/server flow, session lifecycle, state reset on reconnect. |
| New: `docs/scenarios.md` | Each scenario script: what it tests, what it proves, how to run it, what success looks like. |
| New: `docs/extending.md` | How to add new message handlers, how to wire your own application logic. |

**Risk**: None. Docs only.

---

## Dependency graph

```
D1 (hygiene) ──→ D2 (resilience fixes) ──→ D3 (sec def flow) ──→ D4 (CLI)
                                                                     │
                                                                     ↓
                                          D5 (file store) ──→ D6 (multi-client)
                                                                     │
                                                                     ↓
                                                              D7 (scenarios)
                                                                     │
                                                                     ↓
                                                              D8 (skeleton/soak)
                                                                     │
                                                                     ↓
                                                              D9 (docs)
```

Most PRs are sequential because they build on each other (CLI → store → multi-client → scenarios). D1 and D9 can happen out of order if useful.

---

## Risk summary

| PR | Risk | Reason |
|----|------|--------|
| D1 | None | Deps + docs |
| D2 | Low | Hardens existing code, no new flows |
| D3 | Low | New message handlers, existing ones unchanged |
| D4 | Medium | Refactors entry point |
| D5 | Medium | New persistence, depends on Phase 4 store API |
| D6 | Medium-high | Concurrency, hard bugs lived here in C# |
| D7 | Low | Test scripts only |
| D8 | Low | Additive new mode |
| D9 | None | Docs |

---

## General principles (reminder, same as backport plan)

1. **Incremental PRs** — one PR per phase, smallest safe changes
2. **Tests first** — write the smoke test before the fix
3. **Maintain backward compat** — `npm run tcp-tc` should keep working through every PR
4. **Each PR is independently mergeable and useful** — no half-finished features
5. **Reference the C# demo when in doubt** — it's the golden source
6. **Move slowly** — this is a lot of work and will span multiple sessions

---

## Decisions

1. **CLI library**: either `commander` or `yargs` is fine — both are mature and well-supported. Pick whichever feels cleaner when we get to D4 (no strong preference).

2. **Session registry**: this is application-level code, not in jspurefix itself. The concept comes from real-world hedge fund work where one server hosts ~20 broker dictionaries simultaneously and uses metadata from the first FIX message to pick the right one. The registry there fed into a React frontend for selecting brokers. **The C# `SessionRegistry` is itself a work-in-progress** — work that was lost when leaving the fund and needs re-adding. So in D6 we're not just porting an existing piece, we're collaboratively designing it. Keep it minimal in D6 (just enough to fix the multi-client stale-transport bug); the broader broker-multiplex use case is a future expansion.

3. **TypeScript modernisation in jspf-demo**: defer. The existing TS in the demo is old, but stack-wide modernisation can wait until D1–D9 are done. We don't want to mix two refactors.

4. **Test framework**: **jest**, for consistency with jspurefix and the user's other projects.
