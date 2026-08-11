import 'reflect-metadata'
import * as fs from 'fs'
import * as os from 'os'
import * as path from 'path'

import { QuickFixGraphParser } from '../../dictionary/parser/quickfix/quick-fix-graph-parser'
import { ICompilerSettings, MsgCompiler } from '../../dictionary/compiler'

/**
 * Regression cover for issue #62 — "Generator does not compile forward referenced
 * components".
 *
 * BaseTradingRules references TickRules / LotTypeRules / PriceLimits, all of which
 * are declared *after* it in the XML. The legacy N-pass SAX parser resolved one step
 * forward at a time, so these references silently dropped out and the generated
 * interface contained only the plain fields. The graph parser resolves them via its
 * node/edge work queue, so the reference order in the document no longer matters.
 */
const xml = `<fix major="5" minor="0" servicepack="2">
  <header><field name="BeginString" required="Y" /></header>
  <trailer><field name="CheckSum" required="Y" /></trailer>
  <messages>
    <message name="TestMsg" msgtype="Z" msgcat="app">
      <component name="BaseTradingRules" required="N" />
    </message>
  </messages>
  <components>
    <component name="BaseTradingRules">
      <component name="TickRules" required="N" />
      <component name="LotTypeRules" required="N" />
      <component name="PriceLimits" required="N" />
      <field name="ExpirationCycle" required="N" />
      <field name="MinTradeVol" required="N" />
      <field name="PriceType" required="N" />
    </component>

    <component name="TickRules">
      <group name="NoTickRules" required="N">
        <field name="StartTickPriceRange" required="N" />
        <field name="EndTickPriceRange" required="N" />
        <field name="TickIncrement" required="N" />
        <field name="TickRuleType" required="N" />
      </group>
    </component>

    <component name="LotTypeRules">
      <group name="NoLotTypeRules" required="N">
        <field name="LotType" required="N" />
        <field name="MinLotSize" required="N" />
      </group>
    </component>

    <component name="PriceLimits">
      <field name="PriceLimitType" required="N" />
      <field name="LowLimitPrice" required="N" />
    </component>
  </components>
  <fields>
    <field number="8" name="BeginString" type="STRING" />
    <field number="10" name="CheckSum" type="STRING" />
    <field number="827" name="ExpirationCycle" type="INT" />
    <field number="562" name="MinTradeVol" type="QTY" />
    <field number="423" name="PriceType" type="INT" />
    <field number="1205" name="NoTickRules" type="NUMINGROUP" />
    <field number="1206" name="StartTickPriceRange" type="PRICE" />
    <field number="1207" name="EndTickPriceRange" type="PRICE" />
    <field number="1208" name="TickIncrement" type="PRICE" />
    <field number="1209" name="TickRuleType" type="INT" />
    <field number="1234" name="NoLotTypeRules" type="NUMINGROUP" />
    <field number="1093" name="LotType" type="CHAR" />
    <field number="1231" name="MinLotSize" type="QTY" />
    <field number="1306" name="PriceLimitType" type="INT" />
    <field number="1148" name="LowLimitPrice" type="PRICE" />
  </fields>
</fix>`

describe('forward referenced components (issue #62) — parser', () => {
  test('component resolves siblings declared later in the document', () => {
    const defs = QuickFixGraphParser.parse(xml)
    const btr = defs.component.get('BaseTradingRules')
    expect(btr).toBeTruthy()
    expect(btr!.components.has('TickRules')).toBe(true)
    expect(btr!.components.has('LotTypeRules')).toBe(true)
    expect(btr!.components.has('PriceLimits')).toBe(true)
  })

  test('members keep their declared order ahead of the plain fields', () => {
    const defs = QuickFixGraphParser.parse(xml)
    const btr = defs.component.get('BaseTradingRules')!
    expect(btr.fields.map(f => f.name)).toEqual([
      'TickRules',
      'LotTypeRules',
      'PriceLimits',
      'ExpirationCycle',
      'MinTradeVol',
      'PriceType'
    ])
  })

  test('tags from a forward referenced subtree reach the parent component', () => {
    const defs = QuickFixGraphParser.parse(xml)
    const btr = defs.component.get('BaseTradingRules')!
    const tags = Object.keys(btr.containedTag).map(Number)
    // 1206 via TickRules group, 1093 via LotTypeRules group, 1306 via PriceLimits
    expect(tags).toEqual(expect.arrayContaining([1205, 1206, 1209, 1234, 1093, 1306, 1148]))
  })

  test('a message using the component sees the full tag set', () => {
    const defs = QuickFixGraphParser.parse(xml)
    const md = defs.message.get('TestMsg')
    expect(md).toBeTruthy()
    const tags = Object.keys(md!.containedTag).map(Number)
    expect(tags).toEqual(expect.arrayContaining([1206, 1209, 1093, 1306, 1148]))
  })
})

describe('forward referenced components (issue #62) — generator', () => {
  test('generated interface declares the forward referenced components', async () => {
    const defs = QuickFixGraphParser.parse(xml)
    const output = fs.mkdtempSync(path.join(os.tmpdir(), 'jspurefix-fwd-ref-'))
    try {
      for (const dir of ['set', 'enum']) {
        fs.mkdirSync(path.join(output, dir), { recursive: true })
      }
      const settings: ICompilerSettings = {
        standard: false,
        spaces: 2,
        comment: true,
        tags: true,
        output
      }
      await new MsgCompiler(defs, settings).generate()

      const generated = fs.readFileSync(path.join(output, 'set', 'base_trading_rules.ts'), 'utf-8')
      expect(generated).toContain('TickRules?: ITickRules')
      expect(generated).toContain('LotTypeRules?: ILotTypeRules')
      expect(generated).toContain('PriceLimits?: IPriceLimits')
      // the imports the legacy parser failed to emit
      expect(generated).toContain("import { ITickRules } from './tick_rules'")
      // plain fields still present and following the components
      expect(generated).toContain('ExpirationCycle?: number')
    } finally {
      fs.rmSync(output, { recursive: true, force: true })
    }
  })
})
