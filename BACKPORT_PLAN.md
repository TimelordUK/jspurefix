# Backport Plan: C# cspurefix → TypeScript jspurefix

## Background

The C# dotnet core port (`~/dev/cs/cspurefix`) has accumulated significant improvements over the TypeScript version which has had no real improvements for some time. The two codebases are structurally very similar, making incremental backporting feasible. The goal is to bring the TS version up to the same quality level through careful, non-disruptive changes.

A standalone demo at `~/dev/cs/purefix-standalone-demo` demonstrates the C# store/recovery working end-to-end including restart scenarios and extended soak testing.

---

## Phase 1: Non-Contiguous Tag Parsing (Correctness Fix)

**Priority: Highest | Risk: Medium | Scope: Contained to `src/buffer/`**

### Problem

The TS segment parser assumes component tags appear in a contiguous block within the message body. Some brokers (discovered when using the C# engine) send messages where root-level component tags are scattered. For example, an Instrument component's tags (Symbol=55, SecurityIDSource=22, SecurityID=48) can be interleaved with non-Instrument tags (HandlInst=21, OrderQty=38, OrdType=40, Price=44, Side=54).

This is valid FIX — the spec does not require component tags to be contiguous at the root level. The TS parser fails to correctly resolve these messages.

### Example (from fixsim-examples.txt NewOrderSingle)

```
8=FIX.4.4|9=193|35=D|34=5|49=FIXSIMDEMO|52=20241013-14:09:45.126|56=sjames8888@gmail_com|
11=567638644253361428000|15=GBP|21=2|22=5|38=100|40=2|44=100|48=VOD.L|54=1|55=VOD.L|
59=0|60=20241013-14:09:45.126|388=1|10=091|
```

Instrument tags (15, 22, 48, 55) are scattered among order tags (21, 38, 40, 44, 54, 59, 60).

### C# Solution

| File | Purpose |
|------|---------|
| `PureFix.Buffer/Ascii/AsciiSegmentParser.cs` | Stack-based parser with fragment detection |
| `PureFix.Buffer/Ascii/AsciiSegmentParser.Context.cs` | Parse state with `ExitedDepth1Components` and `FragmentedComponents` tracking |
| `PureFix.Buffer/Ascii/TagIndex.cs` | Indexes tags for non-contiguous access via `_tagSpans` dictionary |
| `PureFix.Buffer/Segment/SegmentView.cs` | Transparent access to scattered tags as if contiguous |
| `PureFix.Buffer/Segment/SegmentDescription.cs` | Segment metadata with position tracking |

**Algorithm:**

1. **Discovery**: Stack-based recursive descent through tags. When a depth-1 component is popped from the stack, it's added to `ExitedDepth1Components`.
2. **Fragment Detection**: If a tag belonging to an already-exited depth-1 component is encountered, that component is added to `FragmentedComponents`.
3. **Optimised Access**: Only fragmented components get expensive `SegmentView` construction via `TagIndex`. Non-fragmented components use simple position ranges (no overhead).

### Status: **DONE**

Completed in PR #110 (commits `17bcf9b`, `9223192`). Tag index, fragment detection, and segment view ported. Also includes `d660460` (relax body length constraint) and `4197ce0` (relax raw data length constraint for replayed messages).

---

## Phase 2: Parser Reset on Disconnect (Quick Win)

**Priority: High | Risk: Low | Scope: Small**

### Problem

When a TCP connection drops mid-message, the ASCII parser retains partial buffer state. On reconnect, the stale buffer can corrupt the next message parse. The C# version explicitly resets the parser during reconnection preparation.

### C# Solution

In `FixSession.cs` → `PrepareForReconnect()`:
```csharp
m_parser.Reset();
```

Also resets transient coordinator state (logon retry count, timeout recovery attempts) while preserving sequence numbers.

### Status: **DONE**

Completed in PR #111 (commit `deaccc3`). Parser state reset on disconnect to prevent buffer corruption.

---

## Phase 3: SessionSequenceCoordinator (Foundation)

**Priority: High | Risk: Medium | Scope: Medium**

### Problem

The TS version has sequence state scattered across `fix-session-state.ts` and `ascii-session.ts` with no single source of truth. This makes it hard to reason about recovery, reset, and reconnect behaviour. The C# version centralises all of this.

### Delivery: 3 PRs

#### PR 3A: Coordinator + Minimal Interfaces (new files only, zero risk)

| File | Action |
|------|--------|
| New: `src/transport/session/session-sequence-coordinator.ts` | Port from `SessionSequenceCoordinator.cs` — single source of truth for sender/target sequences, logon retry, timeout recovery |
| New: `src/transport/session/session-sequence-store.ts` | Minimal `ISessionSequenceStore` interface (senderSeqNum, targetSeqNum, setSenderSeqNum, setTargetSeqNum, reset) |
| New: `src/transport/session/fix-clock.ts` | `IFixClock` interface (just `now(): Date`) |
| New: `src/transport/session/resend-manager-config.ts` | Config options with defaults |
| New: `src/test/session/session-sequence-coordinator.test.ts` | ~20 unit tests: init, sender/target tracking, gap detection, reset, logon retry, timeout recovery |

**Key design:** No threading in TS (unlike C# locks), so coordinator is plain synchronous code. Async only for store calls. The `ISessionSequenceStore` interface is intentionally minimal — both `FixMsgMemoryStore` (adapted) and future `IFixSessionStore` will implement it.

#### PR 3B: ResendRequestManager (new files only, zero risk)

| File | Action |
|------|--------|
| New: `src/transport/session/resend-request-manager.ts` | Port `ResendRequestManager`, `PendingResendRange`, `ResendAction`, `ResendActionType` |
| New: `src/test/session/resend-request-manager.test.ts` | ~10 unit tests: storm protection, pending tracking, overlap detection, timeout cleanup |

PRs 3A and 3B can be done **in parallel** — no dependencies between them.

#### PR 3C: Integrate coordinator into AsciiSession — pure refactor (HIGH RISK)

**Approach:** Same behaviour, same tests pass, just routing through the coordinator. No new features.
This makes it reviewable and safe despite touching `checkSeqNo`.

| File | Action |
|------|--------|
| `src/transport/ascii/ascii-session.ts` | Refactor `checkSeqNo` to delegate to coordinator; `onSessionMsg` SequenceReset uses `coordinator.onGapFillReceived()`; `sendResendRequest` uses coordinator gap detection + `recordResendRequestSent()`; `tick` TerminateOnError uses `coordinator.incrementTimeoutRecovery()`; `peerLogon` calls `coordinator.resetLogonRetryCount()` |
| `src/transport/session/fix-session.ts` | Add coordinator as member |
| `src/transport/session/fix-session-state.ts` | `lastPeerMsgSeqNum` becomes pass-through getter/setter to coordinator (backward compat) |
| `src/config/js-fix-config.ts` | Add optional `IFixClock` |

**Risk areas:**
- `checkSeqNo` is the core message acceptance path — any mistake breaks all session tests
- `FixSessionState.lastPeerMsgSeqNum` is read by tests directly — must remain as pass-through
- `AsciiMsgTransmitter.msgSeqNum` owns outgoing sequence — leave as-is for now, keep coordinator in sync

**Validation:** All existing tests must pass with zero changes.

#### PR 3D: New coordinator capabilities (MEDIUM RISK)

Add new features that the C# version has, one at a time with new tests for each:

| Feature | Method | What it does |
|---------|--------|-------------|
| **Logon retry** | `handleLogonRejected()` | Uses `coordinator.onLogonRejectedForSequence()` — retries failed logons when sequence numbers mismatch |
| **PossDupFlag handling** | in `checkSeqNo` | Messages with PossDupFlag=Y bypass normal sequence checks — they are replays we may have already seen |
| **ResetSeqNumFlag coordination** | in `peerLogon` | Comprehensive reset handling: `coordinator.handlePeerReset()` when peer sends reset, `coordinator.resetAsAcceptor()` when we initiate |
| **PrepareForReconnect** | new method | Calls `coordinator.prepareForReconnect()` to reset transient state while preserving sequences |

Each capability has a clear C# reference implementation and can be tested independently.

---

## Phase 4: Persistent Message Store

**Priority: Medium-High | Risk: Medium | Scope: Medium**

### Problem

The TS version only has `FixMsgMemoryStore` — all message history and sequence state is lost on process restart. The C# version has a QuickFix-compatible file store that persists across restarts.

### Delivery: 4 PRs

#### PR 4A: IFixSessionStore interface + MemorySessionStore (new files only, zero risk)

| File | Action |
|------|--------|
| New: `src/store/fix-session-store.ts` | Port `IFixSessionStore` — unified interface combining message storage and sequence management |
| New: `src/store/session-id.ts` | Port `SessionId` record |
| New: `src/store/memory-session-store.ts` | Port `MemorySessionStore` implementing `IFixSessionStore` |
| New: `src/store/fix-session-store-factory.ts` | `IFixSessionStoreFactory`, `MemorySessionStoreFactory` |
| New: `src/test/store/memory-session-store.test.ts` | ~10 unit tests |

Old `IFixMsgStore` and `FixMsgMemoryStore` remain untouched.

#### PR 4B: Stream Providers for file I/O (new files only, zero risk)

| File | Action |
|------|--------|
| New: `src/store/session-stream-provider.ts` | `ISessionStreamProvider` interface — adapted for Node.js `fs.promises` |
| New: `src/store/file-session-stream-provider.ts` | Node.js file implementation using `fs.open()` for random-access read/write |
| New: `src/store/memory-session-stream-provider.ts` | In-memory implementation for testing |
| New: `src/test/store/memory-session-stream-provider.test.ts` | ~5 tests |

PRs 4A and 4B can be done **in parallel**.

#### PR 4C: FileSessionStore (new files only, low risk)

| File | Action |
|------|--------|
| New: `src/store/file-session-store.ts` | Port QuickFix-compatible file store (`.seqnums`, `.session`, `.header`, `.body` files) |
| New: `src/store/file-session-store-factory.ts` | `FileSessionStoreFactory` |
| New: `src/test/store/file-session-store.test.ts` | ~10 tests (using MemorySessionStreamProvider + 1 integration test with real files) |

Depends on 4A + 4B.

#### PR 4D: Wire store into AsciiSession (medium risk)

| File | Action |
|------|--------|
| `src/config/js-fix-config.ts` | Add optional `sessionStoreFactory?: IFixSessionStoreFactory` |
| `src/transport/ascii/ascii-session.ts` | Create store from factory; store messages on `txOnEncoded` |
| `src/store/fix-msg-ascii-store-resend.ts` | Accept `IFixSessionStore` (add overload, keep old constructor) |
| `src/store/index.ts` | Export new types |

**Risk area:** Storing messages in the send path — must handle store errors gracefully (log and continue, never block sends).

**Validation:** All existing tests pass (default MemorySessionStoreFactory is the fallback).

---

## Phase 5: Resend Request Improvements

**Priority: Medium | Risk: Low | Scope: Small**

### Delivery: 2 PRs

#### PR 5A: Storm protection wiring (low risk)

### Status: **DONE**

Storm protection was largely wired during PR 3C/3D. Remaining gaps completed:
- Accept gap-triggering message instead of dropping it (match C# behaviour)
- Add pending gap range check for delayed messages with `seqDelta <= 0`
- Add `coordinator.tick()` to session tick loop for resend request timeout cleanup

#### PR 5B: ResendGapFillOnly mode (zero risk, independent)

| File | Action |
|------|--------|
### Status: **DONE**

Added `resendGapFillOnly` option to `StoreConfig`. When enabled, `FixMsgAsciiStoreResend` always returns a single GapFill instead of replaying stored messages — prevents accidental duplicate order execution for client/initiator sessions. 5 tests added.

---

## Dependency Graph

```
PR 3A (Coordinator) ────────────┐
                                 ├─→ PR 3C (Pure refactor) ──→ PR 3D (New capabilities) ──→ PR 5A (Storm wiring)
PR 3B (ResendRequestManager) ──┘

PR 4A (IFixSessionStore) ──────┐
                                 ├─→ PR 4C (FileSessionStore) ──→ PR 4D (Wire into session)
PR 4B (StreamProviders) ───────┘

PR 5B (ResendGapFillOnly) ──── independent, can be done anytime
```

## Risk Summary

| PR | Risk | Reason |
|----|------|--------|
| 1 | Medium | Non-contiguous tag parsing — **DONE** (PR #110) |
| 2 | Low | Parser reset on disconnect — **DONE** (PR #111) |
| 3A, 3B | None | New files only — **DONE** |
| 3C | HIGH | Refactors `checkSeqNo` — pure refactor, same behaviour, but core message path — **DONE** |
| 3D | Medium | Adds new capabilities (logon retry, PossDupFlag, ResetSeqNum, timeout recovery) — **DONE** |
| 4A, 4B | None | New files only — **DONE** |
| 4C | Low | New file, tested with mocks — **DONE** (PR #120) |
| 4D | Medium | Changes send path, store errors must not block sends — **DONE** |
| 5A | Low | Wiring only, coordinator makes decisions — **DONE** |
| 5B | None | Additive config option — **DONE** |

---

## Phase 6: QuickFix XML Parser Rework

**Priority: Medium | Risk: HIGH | Scope: Large (multi-session)**

### Background

The C# QuickFix XML parser (`QuickFixXmlFileParser.cs`) is architecturally superior:
- **DOM-based**: parses XML once into `XDocument`, then walks the tree
- **Graph-based resolution**: nodes + edges + work queue, deterministic single logical pass
- **Post-processor**: `IndexVisitor` + `ContainedFieldCollector` with memoisation ensures every `ContainedFieldSet` knows all tags below it
- **Pre-parse validation**: `DictionaryValidator` catches missing fields, duplicates, undefined references with Levenshtein typo suggestions

The TS parser uses SAX streaming with iterative N-pass (up to 5x) forward reference resolution. This works but is fragile, hard to reason about, and diverges from C#.

**Scope**: Only the QuickFix parser chain needs rework. FIXML (XSD, already has include graph) and Repository (sequential file parsing) are fine as-is.

### Strategy: SAX → In-Memory Tree → Graph Resolution

Rather than replacing SAX with a new XML library, wrap SAX to build a lightweight in-memory element tree on a single pass. This tree then provides DOM-like random access for the graph resolver, without introducing new dependencies.

```typescript
interface XElement {
  name: string
  attributes: Record<string, string>
  children: XElement[]
  line?: number
}
```

### Delivery: 6 PRs

#### PR 6A: XElement tree builder (new files only, zero risk)

| File | Action |
|------|--------|
| New: `src/dictionary/parser/quickfix/x-element.ts` | `XElement` interface + `XDocument` wrapper with query methods (`descendants()`, `elements()`, `attribute()`) |
| New: `src/dictionary/parser/quickfix/sax-tree-builder.ts` | Single SAX pass builds `XElement` tree from XML text/stream |
| New: `src/test/dictionary/sax-tree-builder.test.ts` | Tests: parse FIX44.xml into tree, verify structure, query elements |

Query API should mirror C# `XDocument`/`XElement` for easy porting:
- `descendants(name)` — all descendants with given tag name
- `elements(name)` — direct children with given tag name  
- `attribute(name)` — attribute value by name

#### PR 6B: DictionaryValidator (new files only, zero risk)

| File | Action |
|------|--------|
| New: `src/dictionary/parser/quickfix/dictionary-validator.ts` | Port from C# — three-pass validation (collect, validate refs, check unused) |
| New: `src/test/dictionary/dictionary-validator.test.ts` | Tests with valid and deliberately broken XML dictionaries |

Independent of 6A. Works against `XElement` tree (depends on 6A's `XDocument`).

PRs 6A and 6B can be done **in parallel** once `XElement` interface is agreed.

#### PR 6C: Graph-based parser — new implementation (medium risk)

| File | Action |
|------|--------|
| New: `src/dictionary/parser/quickfix/quick-fix-graph-parser.ts` | Port C# graph-based parser: `Node`, `Edge`, `ElementType`, work queue, field/component/group/message resolution |
| New: `src/test/dictionary/quick-fix-graph-parser.test.ts` | Parse all FIX versions (4.2–5.0SP2), compare output against existing parser |

Key design decisions:
- Takes `XDocument` (from 6A) as input, not SAX stream
- Produces `FixDefinitions` — same output type as existing parser
- **Validation gate**: run 6B validator before parsing (optional, configurable)
- New parser sits alongside old one — both available, switchable

**Critical test**: parse every FIX XML dictionary with both old and new parser, assert identical `FixDefinitions` output. This is the safety net.

#### PR 6D: IndexVisitor + ContainedFieldCollector with memoisation (medium risk)

| File | Action |
|------|--------|
| New: `src/dictionary/contained/contained-field-collector.ts` | Port memoised tree collector from C# |
| New or modify: `src/dictionary/contained/contained-set-builder.ts` | Add `Index()` method to `ContainedFieldSet` — recomputes aggregated tag sets from children |
| New: `src/dictionary/parser/quickfix/index-visitor.ts` | Port breadth-first tree walker that calls `Index()` on each set |
| New: `src/test/dictionary/index-visitor.test.ts` | Verify tag aggregation matches expected results |

This changes how parent tag awareness is computed. Currently `ContainedSetBuilder.add()` does eager indexing during construction. The C# approach separates construction from indexing — build the tree first, then run the indexer as a post-process step.

**Risk**: `ContainedSetBuilder` is used by all three parser types (QuickFix, FIXML, Repository). Changes here must not break FIXML or Repository output.

#### PR 6E: Switch default parser (HIGH risk)

| File | Action |
|------|--------|
| `src/dictionary/definition-factory.ts` (or equivalent) | Default to graph-based parser for QuickFix XML |
| `src/dictionary/parser/quickfix/quick-fix-xml-file-parser.ts` | Mark as deprecated / legacy fallback |
| Remove: `parse-progress.ts`, `parse-state.ts` | No longer needed (old multi-pass state machine) |

Only after extensive testing across all FIX versions and trim round-trips.

#### PR 6F: Fix Trim function (medium risk)

| File | Action |
|------|--------|
| `src/dictionary/parser/quickfix/quick-fix-xml-file-builder.ts` | Fix known bugs from C# port — dependency collection, field completeness |
| `src/test/dictionary/trim-round-trip.test.ts` | Parse → trim → reparse, verify definitions match for all message types |

Can be done at any point after 6C is stable. The trim function produces XML that must be parseable by the new parser.

### Dependency Graph

```
PR 6A (XElement tree) ──────────┐
                                 ├──→ PR 6C (Graph parser) ──→ PR 6E (Switch default)
PR 6B (DictionaryValidator) ───┘                │
                                                 ↓
                                      PR 6D (IndexVisitor) ──→ PR 6E
                                      
PR 6F (Fix Trim) ──── after 6C is stable
```

### Risk Summary

| PR | Risk | Reason |
|----|------|--------|
| 6A | None | New files only, SAX wrapper |
| 6B | None | New files only, validation |
| 6C | Medium | New parser, but sits alongside old one — switchable |
| 6D | Medium | Changes `ContainedSetBuilder` shared by all parsers |
| 6E | HIGH | Switches default parser — must pass all tests across all FIX versions |
| 6F | Medium | Changes trim output — must round-trip correctly |

### Test Strategy

The parser is the foundation of the entire system. Test strategy must be comprehensive:

1. **Comparison tests**: parse every FIX XML dictionary (4.2, 4.3, 4.4, 5.0SP2) with both old and new parser, diff the resulting `FixDefinitions`
2. **Round-trip tests**: parse → trim → reparse, verify definitions match
3. **Micro-dictionary tests** (future hardening): use Trim to create single-message dictionaries, then mutate them (remove fields, duplicate tags, etc.) to test validator edge cases
4. **Regression anchor**: snapshot the `FixDefinitions` output for each FIX version before any changes — tests assert against snapshots

---

## General Principles

1. **Incremental PRs** — one phase at a time, smallest safe changes
2. **Test first** — port test data and write failing tests before fixing
3. **Maintain compatibility** — existing tests must continue to pass
4. **Align code structure** — where reasonable, keep TS looking similar to C# for easier future maintenance
5. **No big bang** — each phase should be independently mergeable and useful
