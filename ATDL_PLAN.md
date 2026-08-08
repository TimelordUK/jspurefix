# FIXatdl renderer and end-to-end test harness

Design notes from 2026-08-08. Nothing is built yet. This exists so the next session
can start from the thinking rather than redo it.

**First decision to settle:** this is not jspurefix work and should almost certainly
live in its own repository (`jspf-atdl`, or similar). The plan is parked here because
it is where the conversation happened and because the back-end half does use the
engine. Move it when the code starts.

---

## The problem

A broker publishes a FIXatdl document per algorithm: an XML definition of its
parameters and the order ticket used to fill them in. An EMS — Bloomberg EMSX,
Flextrade, Portware, Fidessa, ITG Triton — renders the ticket from that document, and
the values map onto FIX tags, usually the `NoStrategyParameters` group.

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

## Open questions for next session

1. Own repository or a folder here? (Recommendation: own repository.)
2. Which real ATDL documents can be used as test fixtures? The expression engine is
   only as good as what it is tested against, and broker-published files vary a lot.
3. Which FIXatdl version to target. 1.1 is the one in widespread use; confirm before
   writing the parser rather than after.
4. How strategy parameters map onto the outbound order — the `NoStrategyParameters`
   group versus direct custom tags — likely needs to be configurable per broker.
