/*
 * Derives data/FIX44-EXT.xml from data/FIX44.xml.
 *
 * A venue hands you a definition document, not an XML, and you build the dictionary from
 * it.  So the dialect is expressed here as a list of stated divergences from base 4.4
 * rather than as a hand-edited 327KB file whose provenance nobody can reconstruct - run
 * it again and the dialect is rebuilt from whatever base FIX44.xml currently says.
 *
 * Six classes of divergence, which is what real venue dictionaries actually contain:
 *
 *   1. relocated standard components - a component allowed somewhere base 4.4 does not
 *      allow it.  Parties inside a trade capture leg is the example: base 4.4 puts
 *      NestedParties (539) there, and a venue sending Parties (453) is not merely
 *      unusual, it is unparseable in a way nothing reports.
 *   2. backported FIX 5.0 fields - instrument attributes that did not exist in 4.4 and
 *      that every commodity venue needs.  Carried at their real 5.0 tag numbers.
 *   3. a venue component block - the venue's own definition of an instrument, supplied
 *      as a component to paste in rather than as loose fields on Instrument.
 *   4. proprietary fields - things with no standard tag at all, or whose obvious tag
 *      already means something else in 4.4.
 *   5. widened value sets - a standard tag, of the standard type, carrying a code base 4.4
 *      never defined.  The commonest divergence of the lot and the one most easily
 *      mistaken for a bad message, since nothing about the field looks unusual.
 *   6. retained fields from an *earlier* FIX version.  The mirror image of the backport,
 *      and just as common: a drop copy built on a 4.2 codebase and moved to a 4.4 wire
 *      goes on sending the 4.2 field it always sent.  ExecTransType (20) is the classic.
 *
 * Provenance markers: `spec` unchanged from FIX 4.4, `plausible` reconstructed and
 * typical, `invented` ours.  See docs/trade-stories.md.
 *
 * One engine constraint shapes the OTC FX section below, and it is worth stating because
 * it is not obvious: a *plain* component nested inside a repeating group instance is
 * silently dropped by the parser today - the depth-1 defect in
 * docs/scattered-components.md.  Fields sitting directly on the group survive, and so do
 * nested repeating groups.  So where the dialect needs structure inside a leg it uses
 * those two shapes and not a plain component.
 */

const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')
const base = path.join(root, 'data/FIX44.xml')
const out = path.join(root, 'data/FIX44-EXT.xml')

/** fields base 4.4 does not define. tag, name, type, provenance */
const newFields = [
  // backported from FIX 5.0 at their real tag numbers
  [969, 'MinPriceIncrement', 'FLOAT', 'plausible'],
  [996, 'UnitOfMeasure', 'STRING', 'plausible'],
  [1147, 'UnitOfMeasureQty', 'QTY', 'plausible'],
  // a credit index names the annex series it trades under.  5.0 instrument fields, and
  // the rest of the credit detail arrives as XML in the header rather than as tags.
  [1958, 'IndexAnnexVersion', 'INT', 'plausible'],
  [1959, 'IndexAnnexDate', 'LOCALMKTDATE', 'plausible'],
  // the listed venue's proprietary block.  AssetCode would naturally be 695, and 695 is
  // QuoteQualifier in 4.4 - the collision is exactly why a venue reaches above 24000.
  [24001, 'StrategyLinkID', 'STRING', 'invented'],
  [24002, 'MarketCode', 'INT', 'invented'],
  [24003, 'AssetCode', 'STRING', 'invented'],
  [24004, 'TickValue', 'AMT', 'invented'],
  // The OTC FX vendor block.  A different counterparty, and deliberately a different tag
  // range - vendors in this space sit in the 9000s where the listed venues sit above
  // 24000.  In production these would be two dictionaries, one per counterparty; they
  // share one here because nothing collides, and the second can be split out when
  // something does.
  //
  // The drop copy below very nearly forced that split.  As remembered, it sent the desk
  // id on 9003 and the fixing date on 9611 - and 9003 is already OptionExerciseStyle two
  // lines down.  Two counterparties reaching into the same private range and landing on
  // the same number is the ordinary case, not a freak one, which is the whole argument
  // for a dictionary per session rather than a dictionary per engine.  Since the tags are
  // reconstructed anyway the drop copy is renumbered into the free end of this block; a
  // real collision, where both numbers are attested, is what splits the file.
  [9001, 'OptionStrategyType', 'STRING', 'invented'],
  [9002, 'OptionSettlMethod', 'STRING', 'invented'],
  [9003, 'OptionExerciseStyle', 'STRING', 'invented'],
  [9004, 'OptionFixingDate', 'LOCALMKTDATE', 'invented'],
  [9005, 'OptionFixingSource', 'STRING', 'invented'],
  [9006, 'HedgeType', 'STRING', 'invented'],
  [9007, 'LegAllocPercent', 'PERCENTAGE', 'invented'],
  [9008, 'PremiumAmt', 'AMT', 'invented'],
  [9009, 'PremiumCurrency', 'CURRENCY', 'invented'],
  [9010, 'PremiumSettlDate', 'LOCALMKTDATE', 'invented'],
  // The FX drop copy.  A non-deliverable trade settles in the deliverable currency
  // against a published fix, so the date of that fix and the source it reads are the two
  // facts base 4.4 has nowhere to put - and without them an NDF is indistinguishable on
  // the wire from an ordinary forward.  The desk id is the venue stamping which of its
  // dealing systems the fill came off.
  [9011, 'NDFFixingDate', 'LOCALMKTDATE', 'invented'],
  [9012, 'NDFFixingSource', 'STRING', 'invented'],
  [9013, 'ExecVenueID', 'STRING', 'invented'],
  [9020, 'NoHedgeAllocs', 'NUMINGROUP', 'invented'],
  [9021, 'HedgeAllocAccount', 'STRING', 'invented'],
  [9022, 'HedgeAllocQty', 'QTY', 'invented'],
  [9023, 'HedgeAllocPercent', 'PERCENTAGE', 'invented']
]

/**
 * ExecTransType was in FIX up to 4.3 and removed in 4.4, its job taken over by the
 * ExecType codes for correct and cancel.  Drop copies that predate the migration keep
 * sending it, in its old slot right after ExecID, because nothing on their side ever
 * stopped populating it.  Declared with the 4.2 value set it actually carries.
 */
const retainedFields = `  <field number='20' name='ExecTransType' type='CHAR'>
   <value enum='0' description='NEW' />
   <value enum='1' description='CANCEL' />
   <value enum='2' description='CORRECT' />
   <value enum='3' description='STATUS' />
  </field>
`

/**
 * Widened value sets.  Same tag, same type, a code base 4.4 never defined - which is why
 * this class of divergence is the one that bites: a validator sees a known field of the
 * right type and waves it through, and only a reader that knows the venue's codes can
 * tell an FX swap from a cash equity.
 */
const widenedValues = [
  // 4.4 offers FOR and FORWARD for the whole of foreign exchange, which is not enough to
  // tell a spot from a forward from a swap, so the FX vendors all name their own.
  ['SecurityType', [
    ['FXSPOT', 'FX_SPOT'],
    ['FXFORWARD', 'FX_FORWARD'],
    ['FXSWAP', 'FX_SWAP']
  ]],
  // the same drop copy that still sends ExecTransType still sends the 4.2 fill codes.
  // 4.4 replaced both with F (Trade) and removed them; this pipe never noticed.
  ['ExecType', [
    ['1', 'PARTIAL_FILL'],
    ['2', 'FILL']
  ]]
]

function slice (src, startMarker, endMarker) {
  const s = src.indexOf(startMarker)
  if (s < 0) throw new Error(`base dictionary has no ${startMarker}`)
  const e = src.indexOf(endMarker, s) + endMarker.length
  return [s, e, src.slice(s, e)]
}

/** replace within one named block only, and fail loudly if the anchor has moved */
function inBlock (src, startMarker, endMarker, edits) {
  const [s, e, block] = slice(src, startMarker, endMarker)
  let b = block
  for (const [from, to] of edits) {
    if (!b.includes(from)) throw new Error(`anchor moved in ${startMarker}: ${from}`)
    b = b.replace(from, to)
  }
  return src.slice(0, s) + b + src.slice(e)
}

/** append values to a field that already declares a value set */
function addValues (src, fieldName, values) {
  const open = src.indexOf(`name='${fieldName}' type=`)
  if (open < 0) throw new Error(`base dictionary has no field ${fieldName}`)
  const end = src.indexOf('</field>', open)
  // a self-closing declaration has no value set, and indexOf would run on to the *next*
  // field's closing tag and quietly widen the wrong one.  so check the opening tag itself
  // closes with '>' rather than '/>'.
  const openEnd = src.indexOf('>', open)
  if (end < 0 || src[openEnd - 1] === '/') {
    throw new Error(`field ${fieldName} declares no value set to widen`)
  }
  const decls = values
    .map(([v, description]) => `   <value enum='${v}' description='${description}' />\n`)
    .join('')
  return src.slice(0, end - 2) + decls + src.slice(end - 2)
}

/** field references at the indent used inside a group body */
function groupFields (names) {
  return names.map(n => `    <field name='${n}' required='N' />`).join('\n') + '\n'
}

let x = fs.readFileSync(base, 'utf8')

// ---------------------------------------------------------------- 1. relocations

// a trade capture leg carries Parties as well as NestedParties
x = inBlock(x, "<component name='TrdInstrmtLegGrp'>", '</component>', [
  ["<component name='NestedParties' required='N' />",
    "<component name='NestedParties' required='N' />\n    <component name='Parties' required='N' />"]
])

// a credit index instrument states its annex series
x = inBlock(x, "<component name='Instrument'>", '</component>', [
  ["<field name='SecurityType' required='N' />",
    "<field name='SecurityType' required='N' />\n   <field name='IndexAnnexVersion' required='N' />\n" +
    "   <field name='IndexAnnexDate' required='N' />"]
])

// ------------------------------------------- 2. the venue's instrument component

// The venue supplies its instrument attributes as a component block to paste into the
// dictionary, rather than as loose fields on the standard Instrument.  That is how it
// actually arrives, and it is the better shape anyway: the venue's definition of an
// instrument stays separable from FIX's, so a message can carry both and a projection
// can tell which is which.
const venueInstrument = `  <component name='VenueInstrmtExt'>
   <field name='AssetCode' required='N' />
   <field name='UnitOfMeasure' required='N' />
   <field name='UnitOfMeasureQty' required='N' />
   <field name='MinPriceIncrement' required='N' />
   <field name='TickValue' required='N' />
   <field name='MarketCode' required='N' />
  </component>
`
x = x.replace('</components>', venueInstrument + ' </components>')

// a security list entry carries the venue block alongside the standard Instrument,
// and states how the thing trades
x = inBlock(x, "<component name='SecListGrp'>", '</component>', [
  ["<component name='Instrument' required='N' />",
    "<component name='Instrument' required='N' />\n    <component name='VenueInstrmtExt' required='N' />"],
  ["<field name='ExpirationCycle' required='N' />",
    "<field name='ExpirationCycle' required='N' />\n    <field name='TrdType' required='N' />"]
])

// ------------------------------------ 2b. the OTC FX option and its delta hedge

// An FX vanilla structure books as a strategy: option legs, a spot or swap hedge that
// crosses alongside them, and - when the desk allocates in the message rather than later
// - a split into fund accounts attached to each of them.
//
// The option economics sit on the leg as fields.  See the note at the top of this file
// for why they are not wrapped in a component of their own.
const legOptionFields = groupFields([
  'OptionStrategyType', 'OptionSettlMethod', 'OptionExerciseStyle', 'OptionFixingDate',
  'OptionFixingSource', 'PremiumAmt', 'PremiumCurrency', 'PremiumSettlDate'
])

// The per-leg allocation block.  FIX 4.4 already has the right shape for this in
// LegPreAllocGrp (670/671/673) - a repeating group hanging directly off the leg, which
// is exactly a distinct block per leg of account and quantity.  It only lacks the
// percentage the desk actually splits on, so that is the one thing added.
x = inBlock(x, "<component name='LegPreAllocGrp'>", '</component>', [
  ["<field name='LegAllocQty' required='N' />",
    "<field name='LegAllocQty' required='N' />\n    <field name='LegAllocPercent' required='N' />"]
])

x = inBlock(x, "<component name='TrdInstrmtLegGrp'>", '</component>', [
  ["<component name='Parties' required='N' />",
    "<component name='Parties' required='N' />\n" + legOptionFields +
    "    <component name='LegPreAllocGrp' required='N' />"]
])

// The hedge: what kind it is, and its own split into the same accounts so the funds stay
// delta neutral.  No standard group fits a hedge allocation, so this one is invented
// outright - and as a repeating group, not a plain component.
const hedgeAlloc = `  <component name='HedgeAllocGrp'>
   <group name='NoHedgeAllocs' required='N'>
    <field name='HedgeAllocAccount' required='N' />
    <field name='HedgeAllocQty' required='N' />
    <field name='HedgeAllocPercent' required='N' />
   </group>
  </component>
`
x = x.replace('</components>', hedgeAlloc + ' </components>')

x = inBlock(x, "<component name='UndInstrmtGrp'>", '</component>', [
  ["<component name='UnderlyingInstrument' required='N' />",
    "<component name='UnderlyingInstrument' required='N' />\n    <field name='HedgeType' required='N' />\n" +
    "    <component name='HedgeAllocGrp' required='N' />"]
])

// ------------------------------------------- 2c. the FX drop copy: NDF and NDS

// A non-deliverable trade is an ordinary forward everywhere except at settlement: nothing
// changes hands in the restricted currency, and instead the difference against a published
// fix is paid in the deliverable one.  So the *shape* of an NDF on the wire is a plain 4.4
// execution report, and everything that makes it non-deliverable is the two fields 4.4 has
// nowhere to put.  That is exactly why it is worth carrying: here the dialect is the only
// thing that distinguishes the product, and a reader without it books a deliverable
// forward and is wrong about the settlement rather than about the parse.
//
// The swap needs nothing structural at all.  Base 4.4 already puts InstrmtLegExecGrp on
// the execution report, and its NoLegs instance already carries LegSecurityType,
// LegMaturityDate, LegSide and LegPrice - which is precisely the near-leg/far-leg
// description an NDS wants.  Worth stating, because the instinct on seeing legs in an
// execution report is to reach for the dictionary, and the base is enough.
x = inBlock(x, "<message name='ExecutionReport' msgcat='app' msgtype='8'>", '</message>', [
  // the retained 4.2 field, in the slot it occupied in 4.2 - directly after ExecID
  ["<field name='ExecID' required='Y' />",
    "<field name='ExecID' required='Y' />\n   <field name='ExecTransType' required='N' />"],
  // the venue's own trailer.  Late in the message because that is where it arrives: the
  // counterparty appends its block after the standard body rather than interleaving it.
  ["<field name='CopyMsgIndicator' required='N' />",
    "<field name='NDFFixingDate' required='N' />\n   <field name='NDFFixingSource' required='N' />\n" +
    "   <field name='ExecVenueID' required='N' />\n   <field name='CopyMsgIndicator' required='N' />"]
])

// ------------------------------------------------------------ 3. trade capture

x = inBlock(x, "<message name='TradeCaptureReport' msgcat='app' msgtype='AE'>", '</message>', [
  // the source orders behind a spread execution
  ["<component name='TrdInstrmtLegGrp' required='N' />",
    "<component name='TrdInstrmtLegGrp' required='N' />\n   <component name='OrdAllocGrp' required='N' />"],
  // on a multileg capture the economics are per leg, not on the parent
  ["<field name='LastQty' required='Y' />", "<field name='LastQty' required='N' />"],
  ["<field name='LastPx' required='Y' />", "<field name='LastPx' required='N' />"],
  ["<component name='TrdCapRptSideGrp' required='Y' />", "<component name='TrdCapRptSideGrp' required='N' />"],
  // the strategy the legs belong to, and which permissioned market it came from
  ["<field name='TradeReportID' required='Y' />",
    "<field name='TradeReportID' required='Y' />\n   <field name='StrategyLinkID' required='N' />\n" +
    "   <field name='MarketCode' required='N' />"]
])

// the market a security list was requested for
x = inBlock(x, "<message name='SecurityList' msgcat='app' msgtype='y'>", '</message>', [
  ["<field name='SecurityReqID' required='Y' />",
    "<field name='SecurityReqID' required='Y' />\n   <field name='MarketCode' required='N' />"]
])
x = inBlock(x, "<message name='SecurityListRequest' msgcat='app' msgtype='x'>", '</message>', [
  ["<field name='SecurityReqID' required='Y' />",
    "<field name='SecurityReqID' required='Y' />\n   <field name='MarketCode' required='N' />"]
])

// ------------------------------------------------------------- the field table

for (const [fieldName, values] of widenedValues) {
  x = addValues(x, fieldName, values)
}

const decls = newFields
  .map(([tag, name, type]) => `  <field number='${tag}' name='${name}' type='${type}' />`)
  .join('\n')
x = x.replace('</fields>', decls + '\n' + retainedFields + ' </fields>')

fs.writeFileSync(out, x)

console.log('data/FIX44-EXT.xml written from data/FIX44.xml')
console.log(`  ${newFields.length} fields added, ${newFields.filter(f => f[3] === 'invented').length} of them proprietary`)
console.log(`  1 field retained from 4.2, ${widenedValues.reduce((n, w) => n + w[1].length, 0)} values added to ${widenedValues.length} standard fields`)
console.log('  register as qf44ext in data/dictionary.json')
