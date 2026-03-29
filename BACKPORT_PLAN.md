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

### TS Files to Modify

| File | Change |
|------|--------|
| `src/buffer/ascii/ascii-segment-parser.ts` | Add fragment detection (ExitedDepth1Components, FragmentedComponents tracking) |
| `src/buffer/segment/segment-description.ts` | May need SegmentView reference for fragmented components |
| New: `src/buffer/segment/segment-view.ts` | Port SegmentView for non-contiguous tag access |
| New: `src/buffer/ascii/tag-index.ts` | Port TagIndex for tag span indexing |

### Test Data

Port from `~/dev/cs/cspurefix/PureFix.Test.ModularTypes/Data/examples/FIX.4.4/fixsim-examples.txt` — 46 real FIX messages including fragmented Instrument components. Write a failing test first to prove the problem, then fix.

### C# Test Reference

`~/dev/cs/cspurefix/PureFix.Test.ModularTypes/FixSimTest.cs` — parses all 46 messages, verifies type counts, deserialises ExecutionReport to strongly-typed object.

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

### TS Files to Modify

| File | Change |
|------|--------|
| `src/transport/session/fix-session.ts` | Add parser reset in reconnection path |
| `src/buffer/ascii/ascii-parser.ts` | Ensure `reset()` method clears all partial state |

---

## Phase 3: SessionSequenceCoordinator (Foundation)

**Priority: High | Risk: Medium | Scope: Medium**

### Problem

The TS version has sequence state scattered across `fix-session-state.ts` and `ascii-session.ts` with no single source of truth. This makes it hard to reason about recovery, reset, and reconnect behaviour. The C# version centralises all of this.

### C# Solution

| File | Purpose |
|------|---------|
| `PureFix.Transport/Session/SessionSequenceCoordinator.cs` | Single source of truth for sender/target sequences |

**Key capabilities missing from TS:**

- `PrepareForReconnect()` — resets transient state, preserves sequences
- `HandlePeerReset()` — coordinates ResetSeqNumFlag=Y from peer
- `ResetAsAcceptor()` — acceptor-initiated reset
- `PossDupFlag` handling — messages with PossDupFlag=Y bypass normal sequence checks
- Logon retry with `MaxLogonRetries=100`
- Timeout recovery with `MaxTimeoutRecoveryAttempts=3` (handles sleep/wake scenarios)
- `ResendRequestManager` integration — storm protection, pending request tracking
- Delayed message acceptance — out-of-order messages that fill pending gap ranges

### TS Files to Modify

| File | Change |
|------|--------|
| New: `src/transport/session/session-sequence-coordinator.ts` | Port coordinator |
| `src/transport/session/fix-session.ts` | Integrate coordinator as sequence authority |
| `src/transport/ascii/ascii-session.ts` | Replace inline sequence logic with coordinator calls |
| `src/transport/session/fix-session-state.ts` | May reduce scope — coordinator takes over sequence tracking |

---

## Phase 4: Persistent Message Store

**Priority: Medium-High | Risk: Medium | Scope: Medium**

### Problem

The TS version only has `FixMsgMemoryStore` — all message history and sequence state is lost on process restart. The C# version has a QuickFix-compatible file store that persists across restarts.

### C# Solution

| File | Purpose |
|------|---------|
| `PureFix.Transport/Store/IFixSessionStore.cs` | Unified persistence interface |
| `PureFix.Transport/Store/FileSessionStore.cs` | QuickFix-compatible file storage |
| `PureFix.Transport/Store/MemorySessionStore.cs` | In-memory implementation |
| `PureFix.Transport/Store/FileSessionStoreFactory.cs` | Factory pattern for store creation |
| `PureFix.Transport/Store/FixMsgStoreRecord.cs` | Persisted message record |

**QuickFix file format:**
- `.seqnums` — 20-char padded sender:target sequence numbers
- `.session` — creation timestamp
- `.header` — seqnum,offset,length index
- `.body` — raw FIX message bytes

### Key Integration Points

- `StoreEncodedMessage()` — persist every sent message
- `InitializeSessionStore()` — load state on startup
- Store factory in config — deferred creation
- Store reset on `ResetSeqNumFlag=Y`
- Resender recreation after reset

### TS Files to Modify

| File | Change |
|------|--------|
| New: `src/store/fix-session-store.ts` | Port IFixSessionStore interface |
| New: `src/store/file-session-store.ts` | Port FileSessionStore |
| New: `src/store/file-session-store-factory.ts` | Port factory |
| `src/store/fix-msg-memory-store.ts` | Align with IFixSessionStore interface |
| `src/transport/ascii/ascii-session.ts` | Integrate store lifecycle |
| `src/config/js-fix-config.ts` | Add SessionStoreFactory to config |

---

## Phase 5: Resend Request Improvements

**Priority: Medium | Risk: Low-Medium | Scope: Small**

### Problem

The TS version sends a simple ResendRequest on gap detection with no protection against request storms or tracking of pending requests.

### C# Solution

`ResendRequestManager` in the coordinator provides:
- Pending request tracking (`PendingResendRequests` collection)
- Storm protection — after N requests without response, accepts the gap
- Delayed message detection — clears pending requests when gap-filling messages arrive
- `ResendGapFillOnly` mode — sends GapFill instead of replaying stored messages (prevents duplicate executions)

### TS Files to Modify

| File | Change |
|------|--------|
| New: `src/transport/session/resend-request-manager.ts` | Port manager |
| `src/transport/ascii/ascii-session.ts` | Integrate with gap detection |

---

## Phase 6: Message Generator / XML Parser (Future)

**Priority: Low | Risk: Medium | Scope: Large**

- C# uses nested types for groups (sub-types) in generated code
- QuickFix XML parser has improved design with better error tracking
- Nice to align for maintenance but not critical

---

## General Principles

1. **Incremental PRs** — one phase at a time, smallest safe changes
2. **Test first** — port test data and write failing tests before fixing
3. **Maintain compatibility** — existing tests must continue to pass
4. **Align code structure** — where reasonable, keep TS looking similar to C# for easier future maintenance
5. **No big bang** — each phase should be independently mergeable and useful
