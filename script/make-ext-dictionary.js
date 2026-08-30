/*
 * Derives data/FIX44-EXT.xml from data/FIX44.xml.
 *
 * A venue hands you a definition document, not an XML, and you build the dictionary from
 * it.  So the dialect is expressed here as a list of stated divergences from base 4.4
 * rather than as a hand-edited 327KB file whose provenance nobody can reconstruct - run
 * it again and the dialect is rebuilt from whatever base FIX44.xml currently says.
 *
 * Three classes of divergence, which is what real venue dictionaries actually contain:
 *
 *   1. relocated standard components - a component allowed somewhere base 4.4 does not
 *      allow it.  Parties inside a trade capture leg is the example: base 4.4 puts
 *      NestedParties (539) there, and a venue sending Parties (453) is not merely
 *      unusual, it is unparseable in a way nothing reports.
 *   2. backported FIX 5.0 fields - instrument attributes that did not exist in 4.4 and
 *      that every commodity venue needs.  Carried at their real 5.0 tag numbers.
 *   3. proprietary fields above 24000 - things with no standard tag at all, or whose
 *      obvious tag already means something else in 4.4.
 *
 * Provenance markers: `spec` unchanged from FIX 4.4, `plausible` reconstructed and
 * typical, `invented` ours.  See docs/trade-stories.md.
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
  // proprietary. AssetCode would naturally be 695, but 695 is QuoteQualifier in 4.4 -
  // a real collision, and exactly why a venue reaches above 24000 instead.
  [24001, 'StrategyLinkID', 'STRING', 'invented'],
  [24002, 'MarketCode', 'INT', 'invented'],
  [24003, 'AssetCode', 'STRING', 'invented'],
  [24004, 'TickValue', 'AMT', 'invented']
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

let x = fs.readFileSync(base, 'utf8')

// ---------------------------------------------------------------- 1. relocations

// a trade capture leg carries Parties as well as NestedParties
x = inBlock(x, "<component name='TrdInstrmtLegGrp'>", '</component>', [
  ["<component name='NestedParties' required='N' />",
    "<component name='NestedParties' required='N' />\n    <component name='Parties' required='N' />"]
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

const added = newFields.length
console.log(`data/FIX44-EXT.xml written from data/FIX44.xml`)
console.log(`  ${added} fields added, ${newFields.filter(f => f[3] === 'invented').length} of them proprietary`)
console.log(`  register as qf44ext in data/dictionary.json`)
