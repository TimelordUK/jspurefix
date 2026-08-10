# FIXatdl renderer and end-to-end test harness

Design notes from 2026-08-08, fixtures added 2026-08-09. Nothing is built yet. This
exists so the next session can start from the thinking rather than redo it.

**Where this lives:** staying in jspurefix for now (decided 2026-08-09). It is not
engine work and will want its own repository once there is code, but the back-end half
is a jspurefix acceptor and there is no benefit to a second repository holding only a
markdown file.

---

## The problem

A broker publishes a FIXatdl document per algorithm: an XML definition of its
parameters and the order ticket used to fill them in. An EMS — Bloomberg EMSX,
Flextrade, Portware, Fidessa, ITG Triton — renders the ticket from that document, and
the values map onto FIX tags.

The observed pain, in more than one shop: getting a definition rendered is cobbled
together, and **you cannot tell whether a definition is sound until a vendor renders
it**. The loop is write it, send it, wait, discover it renders differently in EMSX
than in Triton, repeat. Nothing good and open exists to shorten that.

The goal is to close the loop locally, and then go one step further than any renderer
does — send the resulting order to a back end that answers, so a definition can be
proved end to end before it goes to clients.

## What it actually is

**An interpreter, not an application.** The UI is entirely data driven: you never
hand-write a component per algorithm, you walk the layout tree. That single
observation drives every technology choice below.

The state is a flat map of control id to value. There is no routing, no server state,
no virtualised list, no async rendering. Almost nothing a UI framework is good at is
in play.

## Technology

Deliberately small. FIXatdl is *already* a declarative UI description — wrapping it in
React means writing a compiler from one declarative tree into another and inheriting a
second lifecycle model, build chain and version churn, for a form with thirty
controls.

- **`DOMParser` for the XML.** ATDL is split across several namespaces — core,
  layout, validation, flow control — and `getElementsByTagNameNS` is exactly the tool
  for that. Built into every browser, zero dependencies.
- **Plain DOM for rendering.** Walk the layout tree, emit a label and an input per
  control. On any change, re-evaluate every state rule and edit, then toggle
  `disabled` / `hidden`. Tens of rules, not thousands — a full re-evaluation is
  microseconds, so the machinery that exists to avoid one is dead weight.
- **TypeScript for the model and interpreter**, built to a single ESM module. A build
  step for the author, not for anyone using it.
- **Static hosting, dynamic page.** One HTML file plus one module, opening from
  `file://` if need be. Drag an ATDL file on, see it render, edit the XML, drop it
  again.

Note the distinction that matters: static **hosting**, not static **generation**.
Generating HTML at build time would need a rebuild per edit, and the tight edit loop
is the entire product.

## Build order

**The expression engine first, headless, with tests.** `StateRule` and `StrategyEdit`
form a small expression language — operators, logical combinators, references to other
controls — and that is where the time will go and where correctness actually matters.
Unit-test it against real broker ATDL documents before drawing a single widget. If
that engine is right the tool is good; if it is approximate, it is one more
cobbled-together thing.

Controls are the easy half and should come second.

## Pluggable skins

Part of the value is answering "roughly how will EMSX lay this out, versus Fidessa" —
the question people genuinely cannot answer today. Keep layout strategy and CSS behind
an adapter so the same definition can render two ways side by side. CSS custom
properties cover it; still no framework.

## The back end

A browser cannot open a TCP FIX session, so:

```
page  --(WebSocket, composed order as JSON)-->  bridge  --(FIX)-->  test acceptor
      <--(ExecutionReports)---------------------
```

The bridge owns a jspurefix initiator; the acceptor validates the strategy parameters
against the same ATDL definition and answers. This keeps the page genuinely static and
the FIX where it belongs.

A thin WebSocket server is the right shape here — the engine's existing HTTP acceptor
is FIXML-shaped and is not a good fit for this.

## Rough size

~1,500 lines of interpreter, zero runtime dependencies.

## Fixtures

The expression engine is only as good as what it is tested against, and this is the
part most likely to be underestimated. Real broker documents vary enormously and most
are proprietary — the user has worked at a bank where every algo was defined in ATDL,
none of it publishable.

### routefire/rf-fix-atdl

`rf_strategies-v1.1.xml` — the first public fixture, 184 lines, 7 strategies (TWAP,
VWAP, PVOL, ISO, FAST, ULMT, RLMT).

What it settles:

- **Version is 1.1.** Namespaces are `.../FIXatdl-1-1/Core`, `/Validation`, `/Layout`,
  `/Flow`, `/Timezones`. Target 1.1 and stop worrying about it.
- **Strategy identification is an attribute of `<Strategies>`:**
  `strategyIdentifierTag="847"` and `versionIdentifierTag="7621"`, with each
  `<Strategy>` carrying `wireValue`. So the algorithm is named on the wire in tag 847
  and the parameters go elsewhere.
- **Parameters carry their own `fixTag`** — `126`, `168`, and customs `8001`–`8004`
  here. This resolves the earlier open question about `NoStrategyParameters`: the
  mapping is *data driven per parameter*, not a per-broker configuration switch. Build
  it from the `fixTag` attribute; treat the strategy-parameters group as a second
  mode for documents that omit `fixTag`, not as the default.
- Useful attributes in the wild: `use="required|optional"`, `minValue`/`maxValue`,
  `localMktTz`, `initValue`, `initValueMode`, `increment`.

**What it does not exercise, which matters more.** This file is a skeleton — good for
proving the parser, nearly useless for proving the interpreter:

| | |
|---|---|
| `StateRule` | **none at all** — zero occurrences |
| Control types | only `Clock_t`, `SingleSpinner_t`, `TextField_t` |
| Parameter types | only `Float_t`, `Int_t`, `UTCTimestamp_t` |
| `EnumPair` | none — so no dropdowns, no radio groups, no checkboxes |
| Validation | two `val:StrategyEdit`, each a single `val:Edit`, operator `GT` only |
| `logicOperator` / `editRef` | none — no AND/OR, no reusable named edits |
| `flow:` | namespace declared, never used |

So it will not tell us whether the hard half is right. Enable/disable/visibility logic
is entirely absent, and validation never gets beyond one field-to-field comparison.

### What a representative fixture needs

Worth building by hand from experience rather than waiting to find one. Aim to cover:

- `StateRule` driving `enabled`, `visible` and value assignment, keyed off another
  control's value
- a `StateRule` chain — B depends on A, C depends on B — to prove evaluation order and
  catch cycles
- `DropDownList_t` and `RadioButtonList_t` with `EnumPair` (`wireValue` distinct from
  `uiRep`, which is where renderers commonly go wrong)
- `CheckBox_t` and its `checkedEnumRef` / `uncheckedEnumRef`
- `val:Edit` with `logicOperator="AND"` / `"OR"` and nested edits
- `val:Edit` comparing against a literal `value=` as well as `field2=`
- a named `<val:Edit id="...">` referenced by `editRef`, since reuse is where scoping
  bugs live
- `use="required"` interacting with a control that a `StateRule` has disabled — what
  should validation do then? Real documents disagree, and vendors disagree with each
  other
- a deliberately broken document, so the tool's error reporting is exercised too

## Open questions for next session

1. ~~Own repository or a folder here?~~ Settled: stays here for now.
2. ~~Which FIXatdl version?~~ Settled: 1.1.
3. ~~How do parameters map onto the order?~~ Settled: per-parameter `fixTag`, with the
   strategy-parameters group as a fallback mode.
4. Can any further public documents be found, or is the hand-built fixture above the
   realistic path? The user has significant algo trading experience and can produce
   something representative — that is likely to be worth more than another public file
   of the routefire kind.
5. What does the harness do when a `StateRule` disables a `required` parameter? Decide
   deliberately and document it, because it is the sort of thing that differs between
   EMSs and is exactly what the tool exists to surface.
