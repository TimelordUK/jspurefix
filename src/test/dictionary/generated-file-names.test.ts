import 'reflect-metadata'
import * as fs from 'fs'
import * as os from 'os'
import * as path from 'path'

import { QuickFixGraphParser } from '../../dictionary/parser/quickfix/quick-fix-graph-parser'
import { EnumCompiler, ICompilerSettings, MsgCompiler } from '../../dictionary/compiler'

/**
 * eCryptfs, which backs encrypted home directories on Linux and encrypted shares on Synology,
 * refuses any file name longer than 143 characters, so `npm install` fails on a package that
 * ships one. The generated types are named after the group they declare, qualified by the
 * component holding it, and a few FIX.5.0SP2 groups come to over 140 characters before the
 * build adds .js.map beside them.
 */
const FILE_NAME_LIMIT = 143
const LONGEST_BUILD_OUTPUT = '.js.map'

const LONG_COMPONENT = 'UnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenterGrp'
const LONG_GROUP = 'NoUnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenters'
// shares every character of LONG_GROUP up to the last word
const SIBLING_GROUP = LONG_GROUP + 'Alt'
const LONG_ENUM_FIELD = 'VeryLongEnumeratedFieldName'.repeat(6)

const xml = `<fix major="5" minor="0" servicepack="2">
  <header><field name="BeginString" required="Y" /></header>
  <trailer><field name="CheckSum" required="Y" /></trailer>
  <messages>
    <message name="TestMsg" msgtype="Z" msgcat="app">
      <component name="${LONG_COMPONENT}" required="N" />
      <component name="ShortComp" required="N" />
    </message>
  </messages>
  <components>
    <component name="${LONG_COMPONENT}">
      <group name="${LONG_GROUP}" required="N">
        <field name="BusinessCenter" required="N" />
      </group>
      <group name="${SIBLING_GROUP}" required="N">
        <field name="SiblingBusinessCenter" required="N" />
      </group>
    </component>
    <component name="ShortComp">
      <group name="NoShortGroup" required="N">
        <field name="ShortField" required="N" />
      </group>
    </component>
  </components>
  <fields>
    <field number="8" name="BeginString" type="STRING" />
    <field number="10" name="CheckSum" type="STRING" />
    <field number="5001" name="${LONG_GROUP}" type="NUMINGROUP" />
    <field number="5002" name="BusinessCenter" type="STRING" />
    <field number="5003" name="${SIBLING_GROUP}" type="NUMINGROUP" />
    <field number="5004" name="SiblingBusinessCenter" type="STRING" />
    <field number="5005" name="NoShortGroup" type="NUMINGROUP" />
    <field number="5006" name="ShortField" type="STRING" />
    <field number="5007" name="${LONG_ENUM_FIELD}" type="CHAR">
      <value enum="A" description="ALPHA" />
      <value enum="B" description="BRAVO" />
    </field>
  </fields>
</fix>`

function walk (dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(dir, entry.name)
    return entry.isDirectory() ? walk(full) : [full]
  })
}

function tooLong (files: string[]): string[] {
  return files
    .map(f => path.basename(f, '.ts'))
    .filter(stem => stem.length + LONGEST_BUILD_OUTPUT.length > FILE_NAME_LIMIT)
}

describe('generated type files', () => {
  let output: string
  let generated: string[]

  beforeAll(async () => {
    output = fs.mkdtempSync(path.join(os.tmpdir(), 'jspurefix-file-names-'))
    for (const dir of ['set', 'enum']) {
      fs.mkdirSync(path.join(output, dir), { recursive: true })
    }
    const defs = QuickFixGraphParser.parse(xml)
    const settings: ICompilerSettings = { standard: false, spaces: 2, comment: true, tags: true, output }
    await new MsgCompiler(defs, settings).generate()
    await new EnumCompiler(defs, settings).oneEnum(defs.simple.get(LONG_ENUM_FIELD)!, null)
    generated = walk(output)
  })

  afterAll(() => {
    fs.rmSync(output, { recursive: true, force: true })
  })

  test('none is named too long for its .js.map to be written on an encrypted drive', () => {
    expect(tooLong(generated)).toEqual([])
  })

  test('every import and export names a file that was generated', () => {
    const missing: string[] = []
    for (const file of generated.filter(f => f.endsWith('.ts'))) {
      const text = fs.readFileSync(file, 'utf-8')
      for (const match of text.matchAll(/from '(\.[^']+)'/g)) {
        // the enum folder is written by the enum compiler's own run, not by this test
        if (match[1] === './enum') continue
        const target = path.resolve(path.dirname(file), match[1] + '.ts')
        if (!fs.existsSync(target)) missing.push(`${path.relative(output, file)} -> ${match[1]}`)
      }
    }
    expect(missing).toEqual([])
  })

  test('each long group is written to its own file under its full interface name', () => {
    const declaring = (name: string): string[] => generated
      .filter(f => fs.readFileSync(f, 'utf-8').includes(`export interface I${name} {`))
      .map(f => path.relative(output, f))
    const long = declaring(LONG_COMPONENT + LONG_GROUP)
    const sibling = declaring(LONG_COMPONENT + SIBLING_GROUP)
    expect(long).toHaveLength(1)
    expect(sibling).toHaveLength(1)
    expect(long[0]).not.toEqual(sibling[0])
  })

  test('the component imports its long groups by the interface names they declare', () => {
    const component = fs.readFileSync(path.join(output, 'set', 'underlying_provision_option_relevant_underlying_date_business_center_grp.ts'), 'utf-8')
    expect(component).toContain(`import { I${LONG_COMPONENT + LONG_GROUP} } from './`)
    expect(component).toContain(`import { I${LONG_COMPONENT + SIBLING_GROUP} } from './`)
  })

  test('names that already fit are written as they always were', () => {
    expect(walk(output).map(f => path.relative(output, f)).sort()).toEqual(expect.arrayContaining([
      'test_msg.ts',
      path.join('set', 'short_comp.ts'),
      path.join('set', 'short_comp_no_short_group.ts'),
      path.join('set', 'underlying_provision_option_relevant_underlying_date_business_center_grp.ts')
    ]))
  })

  test('an enum with a long field name is written to a file that fits', () => {
    const files = fs.readdirSync(path.join(output, 'enum'))
    expect(files).toHaveLength(1)
    expect(fs.readFileSync(path.join(output, 'enum', files[0]), 'utf-8')).toContain(`enum ${LONG_ENUM_FIELD}`)
  })
})

describe('the generated types committed in the package', () => {
  test('none is named too long for its .js.map to be written on an encrypted drive', () => {
    expect(tooLong(walk(path.resolve(__dirname, '../../types')))).toEqual([])
  })
})
