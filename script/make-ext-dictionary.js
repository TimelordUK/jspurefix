/*
 * Derives data/FIX44-EXT.xml from data/FIX44.xml.
 *
 * A venue hands you a definition document, not an XML, and you build the dictionary from
 * it.  So the dialect is expressed here as a list of stated divergences from base 4.4
 * rather than as a hand-edited 327KB file whose provenance nobody can reconstruct - run
 * it again and the dialect is rebuilt from whatever base FIX44.xml currently says.
 *
 * Four classes of divergence, which is what real venue dictionaries actually contain:
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
  [9020, 'NoHedgeAllocs', 'NUMINGROUP', 'invented'],
  [9021, 'HedgeAllocAccount', 'STRING', 'invented'],
  [9022, 'HedgeAllocQty', 'QTY', 'invented'],
  [9023, 'HedgeAllocPercent', 'PERCENTAGE', 'invented']
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

const decls = newFields
  .map(([tag, name, type]) => `  <field number='${tag}' name='${name}' type='${type}' />`)
  .join('\n')
x = x.replace('</fields>', decls + '\n </fields>')

fs.writeFileSync(out, x)

console.log('data/FIX44-EXT.xml written from data/FIX44.xml')
console.log(`  ${newFields.length} fields added, ${newFields.filter(f => f[3] === 'invented').length} of them proprietary`)
console.log('  register as qf44ext in data/dictionary.json')
