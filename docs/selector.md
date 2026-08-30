# The selector — FIX to rectangles

Companion to [`trade-stories.md`](trade-stories.md). That note describes how we produce
realistic drop-copy logs; this one describes the thing that turns them into something a
SQL engine can load.

## What it is not

It is not a query engine. No joins, no expressions, no aggregate functions, no
sub-selects. Those belong to whatever consumes the CSV, and every one of them added here
is a feature the real engine already has, implemented worse.

What it does is the part a SQL engine genuinely cannot do for itself: take a tree — a FIX
message with nested repeating groups — and produce a rectangle, or a small set of related
rectangles, without lying about the quantities on the way.

That last clause is the whole design.

## The invariant

> **A scalar value appears exactly once per message across the entire output, or the
> output declares that it does not.**

Every failure mode this component can have is a violation of that sentence.

The prototype ran into the benign end of it. It handled one message with several
allocations, flattening a group's fields into parallel columns — `20, 100, 300` against
`acc1, acc2, acc3` — and it worked precisely because it produced one row per message.
Nothing could double-count.

The malign end arrives as soon as expansion becomes general. Our own first story produces
the worst case in the corpus: an `AllocationInstruction` carries `NoOrders`, `NoExecs` and
`NoAllocs` as *siblings* under the message. Four orders, three hundred executions covered,
two accounts. Expand all three and the cartesian product is 2,400 rows for one message,
with `AllocQty` repeated 1,200 times. No error is raised, the CSV loads cleanly, and the
first `sum()` anyone writes is wrong by three orders of magnitude.

So the rule is not a caution to be documented. It is a constraint on which expansions the
interface is allowed to express. **Cascading is sound only down a single lineage** — parent
to child to grandchild. Sibling groups never multiply.

## Four modes

Two of them preserve one row per message, and two do not. The distinction is worth making
explicit in the mode names, because it is the distinction that determines whether a naive
aggregate over the result is correct.

### `none` — scalars only

Groups dropped, or reduced to their count (`NoAllocs` as an integer column). One row per
message, narrow, and safe by construction. The right default for "what happened on this
session, by message" questions, and for the message-count and timing views an inspector
wants.

### `pivot` — the group as positional columns

What the prototype did, and worth keeping rather than treating as a stepping stone. A
group of bounded, small cardinality becomes parallel columns:

```
  AllocAccount#0  AllocQty#0  AllocAccount#1  AllocQty#1  AllocAccount#2  AllocQty#2
  acc1            20          acc2            100         acc3            300
```

One row per message, so quantities cannot explode, and for a human reading a small
allocation the row is legible in a way the normalised form is not. Its limits are real and
should be stated rather than discovered: the cardinality must be bounded and declared, a
message exceeding it has to be a loud error rather than silent truncation, and SQL cannot
aggregate across positional columns without an `UNPIVOT` it may not have. Use it for
small, fixed shapes — allocations across two funds, a four-leg strategy — not for
execution streams.

### `cascade` — one lineage, repeated parents

The wide denormalised rectangle. One row per instance of the deepest expanded group, with
ancestor values repeated down the rows. Restricted to **one nominated path**; siblings are
collapsed to counts or dropped, which is what makes it safe.

Repeating the parent is the point of the mode and also the violation of the invariant, so
it has to be declared. Two policies, both useful:

- **`repeat`** (default) — every row carries the parent scalars, so every row is
  self-contained and `WHERE Symbol = 'FGBL'` behaves as expected. An extra
  `first_of_msg` column marks the first row of each message, so a correct sum is
  `SUM(LastQty) WHERE first_of_msg = 1`.
- **`once`** — parent scalars populated on the first row and NULL thereafter, control-break
  style. `SUM(LastQty)` is then simply correct, because SQL ignores NULLs, at the cost of
  rows that cannot be filtered independently.

Neither is right in general. `repeat` is the better default because a surprising NULL is
harder to diagnose than a documented flag column.

### `split` — one rectangle per group path

The normalised form, and the one to reach for by default when the destination is a SQL
engine. Each group path becomes its own file, carrying the message key and its ordinal:

```
  exec.csv            one row per ExecutionReport, scalars only
  exec.parties.csv    one row per party, keyed back to the message
  alloc.csv           one row per AllocationInstruction
  alloc.execs.csv     one row per covered execution
  alloc.accounts.csv  one row per allocated account
```

The invariant holds trivially — a scalar lives in exactly one rectangle — and the joins
are handed to the engine whose job they are, with the keys it needs to do them correctly.
The cost is that a question spanning two groups is now a query rather than a file, which
is the correct place for it to be.

## Row identity

Every row carries a key, and the key is not `MsgSeqNum`.

The session note in `trade-stories.md` settles on a broker-side daily reset, which means a
multi-day log contains sequence number 1 several times. Keying on seq alone gives a
three-day trade four rows all claiming to be the same message. The key is therefore:

```
  src       which log file
  session   ordinal of the session within the file, incrementing at each reset
  seq       MsgSeqNum
  offset    byte offset of the message in the file
```

`(src, session, seq)` is the join key. `offset` is not part of it but is carried anyway,
because an inspector wants to select a row and land on the bytes that produced it, and
re-deriving that later means parsing the file a second time.

In `cascade` and `split`, each expanded level adds an ordinal column — `NoLegs#`,
`NoAllocs#` — zero-based and in wire order. Wire order matters: it is the only thing that
lets a split rectangle be reassembled into the message it came from.

### On broker-supplied identifiers

The convention worth noting is a rollup parent id with per-leg suffixes — `id.0`, `id.1`,
`id.2`, `id.3` on the four legs of one strategy — which is genuinely how this arrives and
which the futures dialect should therefore emit, because it is what a real projection has
to cope with.

But the selector must not depend on it. It is a string a counterparty chose, with no
guarantee of structure and no obligation to be consistent; the next counterparty numbers
from one, or uses a dash, or reuses the parent id on every leg. So it is *data* — a column
like any other, which a SQL user may split on if they know their counterparty — and the
selector's own keys are synthesised from position in the file, which cannot be wrong.

## Columns

The canonical column name is the **dotted path**: `TrdCapRptSideGrp.Parties.PartyID`.
Verbose, but a committed fixture needs stability more than it needs brevity, and FIX will
hand you `PartyID` at three different depths of one message. A shorter alias mode — leaf
name, disambiguated only on collision — is for reading output interactively, not for
anything asserted against.

**Column order must be dictionary order, not encounter order.** Ordering by first
appearance means two runs over different logs of the same message type produce different
schemas, and a committed expectation becomes a function of which log it was generated
from. Dictionary order is a property of the dictionary alone, so it is stable.

Which columns appear is the remaining question, and there are two defensible answers:
every field the message type *could* carry (stable, and extremely sparse — a FIX 4.4
`ExecutionReport` is well over a hundred columns, most of them empty), or every field
actually present in the selection (narrow, but log-dependent). The proposal is
present-in-selection ordered by dictionary order, with the ability to pin an explicit
column list — which is what the committed shape fixtures will do, so that a field
appearing where it did not before is a test failure rather than a silent schema change.

## Rendering for a SQL engine

The output is consumed by a machine, so the details that would be pedantic in a report
matter here.

- **Numbers unquoted, no thousands separators, no locale.** A price renders from its
  integer tick representation at the contract's precision, so `71.35` is `71.35` on both
  engines and in every locale.
- **Timestamps in ISO-8601 UTC**, not FIX's `YYYYMMDD-HH:MM:SS.sss`, so an engine can
  parse them without being told how.
- **NULL and empty string are different things** and CSV cannot express both. An absent
  field is an empty cell; a present-but-empty one does not occur in practice but if it does
  it is an error, not a silent collapse.
- **Quoting** per RFC 4180, which matters for exactly one class of field in practice —
  free text like `Text(58)` — and for nothing else, since a delimiter cannot appear in a
  FIX value.
- **Booleans as `Y`/`N` unchanged.** Translating them to `0`/`1` loses the ability to
  diff a cell against the message it came from, which is worth more than the convenience.

Alongside each rectangle, a **schema sidecar** — column name, dotted path, tag, FIX type,
suggested SQL type. Without it a CSV loads as all-TEXT and every comparison is a string
comparison; with it the loader can issue a real `CREATE TABLE`. This is the piece that
makes the output usable by sql-cli rather than merely loadable.

## Selection

A closed grammar, deliberately not extensible: a **conjunction of predicates**, no OR, no
precedence, no expressions.

```
  field  op  value        op ∈ { = != in not-in < > between }
```

`between` covers both cases worth having without special-casing either — `seq between
4000 8000`, `SendingTime between ...` — and the default is `35 not-in [0,1,2,3,4,5,A]`, so
the admin traffic that dominates a real session is out of the way without being asked
about.

The moment OR and precedence go in, this becomes a parser project, and anyone who needs
them has a SQL engine one step downstream that has them already.

A day's log interleaves hundreds of unrelated trades, so a trade's messages are scattered
through the file with no adjacency to exploit. It is tempting to have the selector
reassemble them. It should not: grouping rows by an identifier is a `GROUP BY` over a
column that is already in the output, and the engine downstream does it correctly,
including the cases — an identifier reused the next day, a counterparty numbering its legs
in a way we did not anticipate — where our reassembly would quietly be wrong. The selector
emits rows and keys. Relating them is the query.

One observation about the filter that is easy to miss: it is not a convenience, it is what
makes the rectangle narrow enough to be worth loading. Field sets barely overlap across
message types, so a rectangle over a mixed selection is mostly NULL. **The natural unit is
one rectangle per message type**; mixing types is the deliberate exception, not the
default.

```ts
interface ISelection {
  readonly where?: readonly IPredicate[]   // ANDed; default excludes admin
  readonly expand: 'none' | 'pivot' | 'cascade' | 'split'
  readonly path?: string                   // cascade and pivot: the one group
  readonly parents?: 'repeat' | 'once'     // cascade only
  readonly columns?: readonly string[]     // dotted paths; default present-in-selection
}
```

## Streaming and determinism

One message at a time, no whole-file materialisation. A 25,000-message log is nothing, but
a real capture is not, and the instrumentation work wants to measure this on the hot path
rather than on something that has already read the file into memory.

Determinism follows the same rule as the stories: the same log through the same selection
produces the same bytes. Column order from the dictionary, row order from the file, no map
enumeration anywhere in between.

## What it gives the story fixtures

This closes the question left open in `trade-stories.md`. A small committed shape gets an
expectation file per selection under test:

```
  data/shapes/rv-condor-quick/log.txt
  data/shapes/rv-condor-quick/manifest.json
  data/shapes/rv-condor-quick/expect/exec-split.csv
  data/shapes/rv-condor-quick/expect/alloc-pivot.csv
```

The manifest and the CSVs are independent oracles. The manifest states what the trade was,
in domain terms, from the generator that built it. The CSVs state what the projection
renders. Neither is derived from the other, so a defect has to corrupt both consistently to
go unnoticed — and the two together are what let the services be built against something
known rather than against something plausible.

There is a second use worth recording. A rectangle is an unusually good detector for the
depth-1 mis-attribution defect in `scattered-components.md`. A value that moves into the
wrong component does not disappear — it appears in the wrong *column*, against a fixture
whose correct value the manifest independently asserts. The parser reports nothing wrong
in that case; the CSV diff does.

## Open questions

- **Nested group ordinals in `split`.** A party inside a leg needs both `NoLegs#` and
  `NoPartyIDs#` to be addressable. Straightforward, but it means a split rectangle's key
  width varies by depth, and whether that is one column per level or a single composite
  path column (`0.2`) affects how pleasant the SQL is.
- **Where `pivot` declares its bound.** In the selection, or inferred from the dictionary,
  or from the shape? Inferring it from data is the one option that is definitely wrong.
- **Whether `none` should count groups or drop them.** Counting is nearly free and often
  the answer to the question being asked; it also adds columns to a mode whose appeal is
  that it is narrow.
- **Multiple selections in one pass.** A log read once producing several rectangles is
  obviously desirable and slightly complicates the streaming interface. Probably worth it,
  but not before the single case is settled.
