import 'reflect-metadata'

import * as path from 'path'
import { QuickFixGraphParser } from '../../dictionary/parser/quickfix/quick-fix-graph-parser'
import { DefinitionFactory } from '../../util'
import {
  FragmentSafety,
  FragmentSafetyCode,
  IFragmentSafetyFinding,
  describeFinding
} from '../../dictionary/fragment-safety'

/**
 * Phase 0 of the plan in docs/scattered-components.md.
 *
 * The repair described there attributes a scattered component's tags by tag identity
 * rather than by position, which is only sound while the children of one set own
 * disjoint tags.  FIX's tag numbering conventions are meant to guarantee that; these
 * tests establish whether the dictionaries actually shipped honour it, before anything
 * is built that assumes so.
 */

jest.setTimeout(120000)

function collisions (findings: IFragmentSafetyFinding[]): IFragmentSafetyFinding[] {
  return findings.filter(f => f.code === FragmentSafetyCode.SiblingTagCollision)
}

function analyse (xml: string): IFragmentSafetyFinding[] {
  return FragmentSafety.analyse(QuickFixGraphParser.parse(xml))
}

describe('FragmentSafety — synthetic dictionaries', () => {
  /**
   * the ordinary case.  Instrument and OrderQtyData own disjoint tags, so a scattered
   * instance of either could still be attributed by tag alone
   */
  const disjoint = `<fix major="4" minor="4">
  <header><field name="BeginString" required="Y" /></header>
  <trailer><field name="CheckSum" required="Y" /></trailer>
  <messages>
    <message name="TestMsg" msgtype="Z" msgcat="app">
      <component name="Instrument" required="N" />
      <component name="OrderQtyData" required="N" />
    </message>
  </messages>
  <components>
    <component name="Instrument">
      <field name="Symbol" required="N" />
      <field name="SecurityID" required="N" />
    </component>
    <component name="OrderQtyData">
      <field name="OrderQty" required="N" />
    </component>
  </components>
  <fields>
    <field number="8" name="BeginString" type="STRING" />
    <field number="10" name="CheckSum" type="STRING" />
    <field number="35" name="MsgType" type="STRING" />
    <field number="38" name="OrderQty" type="QTY" />
    <field number="48" name="SecurityID" type="STRING" />
    <field number="55" name="Symbol" type="STRING" />
  </fields>
</fix>`

  /**
   * the same tag reachable through a component and declared again beside it.  position
   * still separates the two for a contiguous message, but tag identity does not
   */
  const collidingWithLocal = disjoint.replace(
    '<component name="OrderQtyData" required="N" />',
    '<component name="OrderQtyData" required="N" />\n      <field name="Symbol" required="N" />')

  /**
   * two sibling components sharing a tag - the case FIX's Underlying* / Leg* / NestedParties2
   * naming conventions exist to prevent, and which a house dictionary may still write
   */
  const collidingSiblings = disjoint.replace(
    '<field name="OrderQty" required="N" />',
    '<field name="OrderQty" required="N" />\n      <field name="Symbol" required="N" />')

  /**
   * a group's interior is delimiter framed, so its member tags are not evidence about
   * the level above and must not count as a collision there
   */
  const groupInteriorRepeatingOuterTag = `<fix major="4" minor="4">
  <header><field name="BeginString" required="Y" /></header>
  <trailer><field name="CheckSum" required="Y" /></trailer>
  <messages>
    <message name="TestMsg" msgtype="Z" msgcat="app">
      <component name="Instrument" required="N" />
      <group name="NoLegs" required="N">
        <field name="Symbol" required="N" />
      </group>
    </message>
  </messages>
  <components>
    <component name="Instrument">
      <field name="Symbol" required="N" />
    </component>
  </components>
  <fields>
    <field number="8" name="BeginString" type="STRING" />
    <field number="10" name="CheckSum" type="STRING" />
    <field number="35" name="MsgType" type="STRING" />
    <field number="55" name="Symbol" type="STRING" />
    <field number="555" name="NoLegs" type="NUMINGROUP" />
  </fields>
</fix>`

  test('sibling components owning disjoint tags raise nothing', () => {
    expect(analyse(disjoint)).toEqual([])
  })

  test('a tag declared beside the component that already owns it collides', () => {
    const found = collisions(analyse(collidingWithLocal))
    expect(found.length).toEqual(1)
    expect(found[0].tag).toEqual(55)
    expect(found[0].set).toEqual('TestMsg')
    expect(found[0].owners.slice().sort()).toEqual(['Instrument', 'Symbol'])
  })

  test('two sibling components sharing a tag collide', () => {
    const found = collisions(analyse(collidingSiblings))
    expect(found.length).toEqual(1)
    expect(found[0].tag).toEqual(55)
    expect(found[0].owners.slice().sort()).toEqual(['Instrument', 'OrderQtyData'])
  })

  /**
   * this is the distinction `flattenedTag` does not draw, and the reason the present
   * TagIndex has to special case group wrapper components
   */
  test('a tag inside a group does not collide with the same tag outside it', () => {
    expect(collisions(analyse(groupInteriorRepeatingOuterTag))).toEqual([])
  })

  test('a group contributes only its NumInGroup tag to the level above', () => {
    const definitions = QuickFixGraphParser.parse(groupInteriorRepeatingOuterTag)
    const msg = definitions.message.get('TestMsg')
    expect(msg).toBeTruthy()
    const instance = new FragmentSafety()
    // Symbol via Instrument, NoLegs standing in for the whole group, and the header and
    // trailer fields the message set carries.  Symbol appears once, not twice, because
    // the copy inside NoLegs is framed by the group and never claimable at this level
    expect(instance.ownTags(msg!).sort((a, b) => a - b)).toEqual([8, 10, 55, 555])
  })
})

/**
 * The QuickFIX rendering matters more than the repository one in practice, because a
 * broker onboarding pack is now almost always a prepared QuickFIX XML rather than a
 * reference to a spec version.  So these cover every QuickFIX flavour shipped here.
 */
describe('FragmentSafety — QuickFIX dictionaries as shipped', () => {
  test.each(['qf42', 'qf43', 'qf44'])('%s has no sibling tag collisions', async (dict) => {
    const definitions = await new DefinitionFactory().getDefinitions(dict)
    expect(collisions(FragmentSafety.analyse(definitions))).toEqual([])
  })

  /**
   * the one real violation in anything shipped here.  The QuickFIX FIX50SP2 dictionary
   * puts Currency(15) inside Instrument *and* declares it again beside the component, in
   * NewOrderSingle, ExecutionReport, Quote and 54 other places.
   *
   * The positional parser is untroubled by it: whichever 15 falls within Instrument's
   * span is Instrument's.  A repair attributing by tag identity cannot tell, so this is
   * the concrete case that has to be refused rather than guessed.
   *
   * Worth noting what produced it - a field declared at message level that a component
   * already carries.  That is ordinary dictionary authoring rather than anything exotic,
   * and a broker adding fields to a message is more likely to do it than a spec is.
   */
  test('qf50sp2 collides on Currency, and only on Currency', async () => {
    const definitions = await new DefinitionFactory().getDefinitions('qf50sp2')
    const found = collisions(FragmentSafety.analyse(definitions))
    expect(found.length).toBeGreaterThan(0)
    expect(found.every(f => f.tag === 15)).toBe(true)
    expect(found.every(f => f.owners.includes('Instrument'))).toBe(true)
    expect(found.every(f => f.owners.includes('Currency'))).toBe(true)
    expect(found.map(f => f.path)).toContain('NewOrderSingle')
    expect(describeFinding(found[0])).toContain('tag 15 is claimed by')
  })

  /**
   * and it is not confined to the top level of a message - the same pair collides inside
   * group instance bodies, which is where a repair would be recursing to
   */
  test('the qf50sp2 collision reaches inside group instance bodies', async () => {
    const definitions = await new DefinitionFactory().getDefinitions('qf50sp2')
    const found = collisions(FragmentSafety.analyse(definitions))
    const nested = found.filter(f => f.path.includes('.'))
    expect(nested.length).toBeGreaterThan(0)
    expect(found.map(f => f.path)).toContain('NewOrderList.ListOrdGrp.NoOrders')
  })

  /**
   * a dialect modified away from the spec, which is the shape a broker actually hands over
   */
  test('the modified FIX5 test dialect has no sibling tag collisions', async () => {
    const dict = path.join(__dirname, '../env/data/fix5-mod.xml')
    const definitions = await new DefinitionFactory().getDefinitions(dict)
    expect(collisions(FragmentSafety.analyse(definitions))).toEqual([])
  })
})

describe('FragmentSafety — repository dictionaries as shipped', () => {
  /**
   * the repository renderings are clean throughout, including the version whose QuickFIX
   * rendering is not - so this is an authoring difference, not a property of FIX 5.0
   */
  test.each(['repo44', 'repo50sp2'])('%s has no sibling tag collisions', async (dict) => {
    const definitions = await new DefinitionFactory().getDefinitions(dict)
    expect(collisions(FragmentSafety.analyse(definitions))).toEqual([])
  })
})
