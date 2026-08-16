# Scattered components — analysis and plan of attack

**Status: analysis, with phase 0 landed.** Nothing in the parser has changed. This note
sets out a generalisation of the fragmented component repair already shipped, why it is
believed tractable, what it would cost, and the order the work would land in. It is
written to port — the same shape applies to cspurefix.

There is no urgency behind it. The library has been in use for eight years and exactly one
counterparty has produced the shape that motivated the existing repair. This is the
argument being written down while it is fresh, not a queue-jumping defect.

## Where this starts

A component is a fiction of the dictionary. Nothing goes on the wire to say one has begun
or ended, so the segment parser infers a component's extent from *position*: a tag falling
between the first and last tag attributed to a component belongs to it. Every well behaved
counterparty emits a component's tags adjacently and the inference holds.

One did not. It sent a message in which the `Instrument` tags arrived in two runs with
unrelated fields between them, and the positional model could not represent that. The fix,
ported from cspurefix, was to stop describing such a component by a range and describe it
by the actual tags and their positions — `SegmentView` in
[`src/buffer/segment/segment-view.ts`](../src/buffer/segment/segment-view.ts), built by
`TagIndex` and attached in `AsciiSegmentParser.fragments()`. Applications see no
difference; `MsgView` was already position-agnostic.

That repair is deliberately narrow. It fires only for a component at depth 1 of the
message, only when the same component is re-entered after being exited, and only once per
component name.

## The general shape

The narrowness is the question. If `Instrument` can arrive scattered at the top level of a
message, nothing stops `SecurityXLinkage` arriving scattered *within* a scattered
`Instrument`, and nothing stops that recursing. Each level is a dictionary fiction with no
wire representation, so each level has the same freedom. Russian dolls, laid out flat.

The condition under which this is even possible is worth stating exactly, because it is
also the condition that makes it solvable:

> Contiguity is only forced where framing exists, and framing only exists where it is
> needed.

A repeating group is the sole self-describing construct in tag-value FIX — `NoXXX` plus a
fixed delimiter tag. That is the one place the wire *requires* a bounded, ordered run.
Everywhere else the layout is convention.

The complementary half is what makes the general case tractable:

> Within one level of a message, a component occurs at most once.

If a sender needs it twice there is no mechanism but a group. So tag ambiguity — *which*
`Instrument` does this tag belong to — arises only inside groups, and groups are exactly
where scattering cannot happen. **Scattering and ambiguity are disjoint.** Where position
stops being evidence, tag identity starts being sufficient.

## The model

`SegmentDescription` presently conflates two things: identity of a node in the dictionary
tree, and a contiguous `[startPosition, endPosition]` interval. Containment is *inferred*
from the interval — `contains()`, feeding `Structure.firstContainedWithin` and
`MsgView.resolveChild`.

The generalisation: a segment owns an **ordered set of positions**, and an interval is the
compressed representation of the dense case. Containment becomes set inclusion. Stated in
one line:

> The moment position stops implying structure, the parent/child edges have to be
> materialised instead of re-derived from offsets.

`SegmentView` took the first step — positions instead of a range. It did not take the
second, which is why it cannot nest.

There is precedent in the codebase already. Group instances are not really intervals
either: `SegmentDescription.getInstance` derives an instance's bounds by carving the parent
with `delimiterPositions`. A segment whose extent is computed rather than assigned is a
shape the engine already carries.

### Own tags

Define, for a dictionary set `S`, its **own tag set** `O(S)`: every simple tag reachable
from `S` through components *without crossing a group boundary*, plus the `NoXXX` tag of
each directly reachable group — but not the group's interior tags.

This is the distinction `flattenedTag` does not draw, and it is the crux. A group's members
are framed and are never evidence about the level above. `O(S)` is implemented as
`FragmentSafety.ownTags`.

It also subsumes a special case the current code carries. A component that wraps a single
group owns exactly `{NoXXX}` — non-empty, and locatable — so `TagIndex.isComponentGroupWrapper`
stops needing to exist.

### The claim

```
claim(S, U):                       # U = ordered position set; root: the message body
  for p in U with tag(p) ∈ O(S):
    if tag(p) is NoXXX for group G:
      run ← maximal delimiter-framed extent from p     # contiguous, guaranteed
      assign run to G; for each instance i: claim(instance_i, run_i)
    else:
      assign p to the child of S owning tag(p)
  for each component child C of S:
    claim(C, positions assigned to C's subtree)        # ← universe restriction
```

Recursion is over the dictionary tree, with the universe narrowing at each step. The doll
falls out for free: `SecurityXLinkage` is claimed from `Instrument`'s claimed positions,
not from the message. Group interiors are consumed as whole runs before any component
claim sees them, so framed tags cannot leak upward.

When everything is contiguous this degenerates to what the linear parser already computes.

## What the current code does not do

Five things, roughly in order of how likely each is to be met:

1. **`TagIndex.getInstance` claims by `flattenedTag` across the whole message.**
   `flattenedTag` is transitive through groups, so a fragmented component containing a
   group would claim every member tag in the message. `isComponentGroupWrapper` guards
   this, but only for single-field wrappers. Universe restriction fixes it structurally.
2. **Detection is depth-1 only.** `exitedDepth1Components` is keyed by bare name and only
   populated at `structureStack.length === 1`. Keying by stack path registers re-entry at
   any depth.
3. **Shadow fragments survive.** Repair attaches a view to one description; the other
   fragments keep their original ranges and still participate in `boundLayout`, so a
   nested lookup can be handed the wrong one.
4. **`contains` is interval arithmetic.** A scattered parent's hull can swallow unrelated
   siblings, so `firstContainedWithin` can answer a lookup that should be null.
5. **The one-instance-per-name guard is right for the wrong reason.** It reads as a
   limitation; it is the at-most-once property above. Worth a comment before someone
   "fixes" it.

## Blast radius

Measured, not estimated. Outside `src/buffer/segment/`, everything that *reads* an
interval:

| Site | What it does |
| --- | --- |
| `msg-view.ts` `allStrings` | already branches on `segmentView` |
| `msg-view.ts` `binarySearch` | already branches on `segmentView` |
| `msg-view.ts` `stringify` | display only |
| `segment-description.ts` `contains` | feeds `Structure` and `resolveChild` |

Everything else touching positions is a writer (`ascii-parser`, `fixml-parser`) or
diagnostics (`SegmentSummary`). Two of the four read sites already carry the sparse branch,
so this replaces an `if` rather than introducing a concept.

Unchanged: the dictionary layer, the encoder, session and transport, every generated type,
and the public `MsgView` API. The FIXML path builds structure from the XML tree and never
has the problem.

## Plan of attack

Phasing works here because three of the four pieces have an existing oracle. Only one phase
is irreducible.

### Phase 0 — does the assumption hold? *(landed)*

The claim attributes by tag identity, which is sound only while siblings own disjoint tags.
FIX's numbering conventions — `Underlying*`, `Leg*`, `NestedParties2/3` — exist to
guarantee that, but a house dictionary is under no obligation to honour them. So measure it
before building on it.

[`src/dictionary/fragment-safety.ts`](../src/dictionary/fragment-safety.ts) walks every
message, component and group instance body in a dictionary and reports sibling tag
collisions. It is exported, so anyone with a house dictionary can run it against their own.

The QuickFIX rendering is the one that matters. A broker onboarding pack is now almost
always a prepared QuickFIX XML rather than a reference to a spec version, so that is the
flavour the engine actually meets. Every QuickFIX dictionary shipped here is covered, plus
the repository renderings for comparison:

| Dictionary | Form | Collisions |
| --- | --- | --- |
| `qf42`, `qf43`, `qf44` | QuickFIX | 0 |
| `fix5-mod` (modified test dialect) | QuickFIX | 0 |
| `repo44`, `repo50sp2` | repository | 0 |
| `qf50sp2` | QuickFIX | **57** |

(`data/FIX44-MD.xml` is byte-identical to `data/FIX44.xml`, so it is not a separate sample.)

Every one of the 57 is the same root cause: the QuickFIX `FIX50SP2.xml` dictionary puts
`Currency(15)` inside `Instrument` *and* declares it again beside the component, in
`NewOrderSingle`, `ExecutionReport`, `Quote` and 54 other places. 14 of the 57 are inside
group instance bodies rather than at message level — `NewOrderList.ListOrdGrp.NoOrders` and
the like — which is exactly where a recursive repair would be working. The repository
rendering of the same FIX version does not do it, so this is an authoring difference rather
than a property of FIX 5.0.

Two conclusions, and the second is the uncomfortable one.

The positional parser is untroubled by any of this — whichever `15` falls within
`Instrument`'s span is `Instrument`'s. A repair attributing by tag identity cannot tell. So
`Instrument` has to be refused for repair in those sets specifically, which argues for the
collision map being consulted per set at repair time rather than being a whole-dictionary
yes/no.

And the pattern that produced it — a field declared at message level that a component
already carries — is ordinary dictionary authoring, not an exotic mistake. A broker adding
fields to a message to suit their own flow is *more* likely to write it than a spec
committee is, and the broker dialects are the ones most likely to also send the scattered
messages this whole exercise is about. On the evidence here the collision map is not a
defensive nicety at the edge of the design; it is load-bearing.

### Phase 1 — the accessor seam

Give `SegmentDescription` `owns(pos)` and `forEachPosition(cb)`; move the four `msg-view`
sites onto them; dense implementation loops the range without allocating. Zero behaviour
change, existing suite is a complete oracle. Ships alone, and afterwards every later change
is local rather than cross-cutting.

### Phase 2 — the index, behind the existing call site

Rebuild `TagIndex` as the recursive, universe-restricted claim above, then keep
`getInstance(name)` as a thin wrapper calling `claim(rootSet, wholeMessage)`. Same entry
point, same callers, new engine.

Not purely behaviour-preserving: universe restriction fixes the `flattenedTag` over-claim
as a side effect, so it needs its own test rather than "existing fixtures still green".

**The detail that makes this not-wasted work:** write `claim` with the `universe` parameter
and a per-node result from day one, even though the phase 2 caller only ever passes the
whole message and collapses the result. The signature carries the generality before a
caller needs it. Built instead as a straight optimisation of today's global sweep, phase 3
rewrites it.

### Phase 3 — detection, repair at depth, containment edges

Atomic. Path-keyed detection without repair-at-depth never fires; repair-at-depth without
detection is dead code; and repair that leaves containment alone lets nested lookups pick
up siblings that merely fall inside a scattered parent's hull.

Since repair from the shallowest fragmented ancestor recursively fixes everything beneath,
an over-eager detector is wasteful rather than wrong. Bias it toward false positives.

## Why not replace the linear parser outright

One algorithm would be cleaner than two. Three reasons against:

1. **It is the hot path.** The linear stack pass is single-pass and allocation-light.
   Claim-based parsing needs sorted indices and per-node universes.
2. **The linear pass is what detects malformation.** A pure claim algorithm accepts almost
   anything and produces a plausible object. `SegmentType.Gap` and unknown-tag handling
   depend on stream order. Losing that turns protocol errors into silently wrong data,
   which is strictly worse than the bug being fixed.
3. **Repair is self-limiting.** Only flagged subtrees pay.

## Honest limits

**Repair is exact; detection is heuristic.** Given the at-most-once property, the claim is
sound once pointed at a subtree. Deciding *which* subtrees to point it at relies on
observing re-entry in the stack machine, and at depth the machine may unwind past the
nested node before the stray tag arrives, so re-entry surfaces at whatever ancestor still
claims the tag. That part wants a test matrix rather than an argument.

**Round-tripping.** A repaired message re-encodes canonically contiguous. Byte-for-byte
replay of the original is gone for those messages; retain the raw body where that matters.

**Malformed groups are not scattering.** A broken delimiter run is corruption and must stay
a hard parse error. The two look similar on the wire and conflating them would convert real
protocol errors into wrong objects.

## Open decisions

1. Should a collision found by phase 0 refuse repair for the colliding pair only, or for
   the whole set containing them? The `qf50sp2` result argues for the pair — refusing all
   of `NewOrderSingle` over one contended tag would give up a great deal for very little.
2. Should the collision map be computed once at dictionary load, or lazily on first repair?
3. Should a dictionary with collisions say so at load time? An operator onboarding a broker
   dialect would want to know before a live session does, and phase 0 is cheap enough to
   run eagerly — but it is only meaningful to anyone who has read this note.
4. Does a repaired segment report its hull or its true extent through `SegmentSummary`,
   which is a diagnostic surface people read?
5. Should scattering be *reported* at all — a counterparty emitting non-adjacent components
   is worth knowing about even when the repair succeeds, and today it is silent.
6. Is `stringify` on a scattered segment supposed to render wire order or claimed order?
7. Does cspurefix take the same phase split, or land phases 1 and 2 together given its
   different `MsgView`?
