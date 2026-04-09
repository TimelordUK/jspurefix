import * as fs from 'fs'
import * as path from 'path'
import { SaxTreeBuilder } from '../../dictionary/parser/quickfix/sax-tree-builder'
import { DictionaryValidator } from '../../dictionary/parser/quickfix/dictionary-validator'
import { ValidationSeverity, DictionaryValidationException } from '../../dictionary/parser/quickfix/validation-error'

const dataRoot = path.join(__dirname, '../../../data')

function validate (xml: string): DictionaryValidator {
  const doc = SaxTreeBuilder.parse(xml)
  const validator = new DictionaryValidator()
  validator.validate(doc)
  return validator
}

function errorsWithCode (validator: DictionaryValidator, code: string) {
  return validator.errors.filter(e => e.code === code)
}

const validMinimalXml = `
<fix major="4" minor="4">
  <header>
    <field name="BeginString" required="Y" />
    <field name="MsgType" required="Y" />
  </header>
  <trailer>
    <field name="CheckSum" required="Y" />
  </trailer>
  <messages>
    <message name="Heartbeat" msgtype="0" msgcat="admin">
      <field name="TestReqID" required="N" />
    </message>
  </messages>
  <components />
  <fields>
    <field number="8" name="BeginString" type="STRING" />
    <field number="10" name="CheckSum" type="STRING" />
    <field number="35" name="MsgType" type="STRING" />
    <field number="112" name="TestReqID" type="STRING" />
  </fields>
</fix>`

describe('DictionaryValidator — valid dictionaries', () => {
  test('minimal valid dictionary has no errors', () => {
    const v = validate(validMinimalXml)
    expect(v.hasErrors).toBe(false)
  })

  test('minimal valid dictionary may have unused field warnings', () => {
    // All fields are referenced, so no warnings either
    const v = validate(validMinimalXml)
    const unused = errorsWithCode(v, 'UNUSED_FIELD')
    expect(unused.length).toBe(0)
  })
})

describe('DictionaryValidator — missing sections', () => {
  test('missing fields section', () => {
    const v = validate('<fix><header /><trailer /><messages /><components /></fix>')
    expect(errorsWithCode(v, 'MISSING_FIELDS').length).toBe(1)
  })

  test('missing messages section', () => {
    const v = validate('<fix><header /><trailer /><fields /><components /></fix>')
    expect(errorsWithCode(v, 'MISSING_MESSAGES').length).toBe(1)
  })

  test('missing header section', () => {
    const v = validate('<fix><trailer /><messages /><fields /><components /></fix>')
    expect(errorsWithCode(v, 'MISSING_HEADER').length).toBe(1)
  })

  test('missing trailer section', () => {
    const v = validate('<fix><header /><messages /><fields /><components /></fix>')
    expect(errorsWithCode(v, 'MISSING_TRAILER').length).toBe(1)
  })
})

describe('DictionaryValidator — field definition errors', () => {
  test('field missing name', () => {
    const xml = `<fix><header /><trailer /><messages /><components />
      <fields><field number="1" type="STRING" /></fields></fix>`
    const v = validate(xml)
    expect(errorsWithCode(v, 'FIELD_NO_NAME').length).toBe(1)
  })

  test('field missing number', () => {
    const xml = `<fix><header /><trailer /><messages /><components />
      <fields><field name="Account" type="STRING" /></fields></fix>`
    const v = validate(xml)
    expect(errorsWithCode(v, 'FIELD_NO_TAG').length).toBe(1)
  })

  test('field missing type is warning', () => {
    const xml = `<fix><header /><trailer /><messages /><components />
      <fields><field name="Account" number="1" /></fields></fix>`
    const v = validate(xml)
    const warnings = errorsWithCode(v, 'FIELD_NO_TYPE')
    expect(warnings.length).toBe(1)
    expect(warnings[0].severity).toBe(ValidationSeverity.Warning)
  })

  test('duplicate field name', () => {
    const xml = `<fix><header /><trailer /><messages /><components />
      <fields>
        <field name="Account" number="1" type="STRING" />
        <field name="Account" number="2" type="STRING" />
      </fields></fix>`
    const v = validate(xml)
    expect(errorsWithCode(v, 'DUPLICATE_FIELD_NAME').length).toBe(1)
  })

  test('duplicate field tag', () => {
    const xml = `<fix><header /><trailer /><messages /><components />
      <fields>
        <field name="Account" number="1" type="STRING" />
        <field name="AdvId" number="1" type="STRING" />
      </fields></fix>`
    const v = validate(xml)
    expect(errorsWithCode(v, 'DUPLICATE_FIELD_TAG').length).toBe(1)
  })
})

describe('DictionaryValidator — enum errors', () => {
  test('enum missing key', () => {
    const xml = `<fix><header /><trailer /><messages /><components />
      <fields>
        <field name="Side" number="54" type="CHAR">
          <value description="Buy" />
        </field>
      </fields></fix>`
    const v = validate(xml)
    expect(errorsWithCode(v, 'ENUM_NO_KEY').length).toBe(1)
  })

  test('enum missing description is warning', () => {
    const xml = `<fix><header /><trailer /><messages /><components />
      <fields>
        <field name="Side" number="54" type="CHAR">
          <value enum="1" />
        </field>
      </fields></fix>`
    const v = validate(xml)
    const warnings = errorsWithCode(v, 'ENUM_NO_DESC')
    expect(warnings.length).toBe(1)
    expect(warnings[0].severity).toBe(ValidationSeverity.Warning)
  })

  test('duplicate enum key', () => {
    const xml = `<fix><header /><trailer /><messages /><components />
      <fields>
        <field name="Side" number="54" type="CHAR">
          <value enum="1" description="Buy" />
          <value enum="1" description="Sell" />
        </field>
      </fields></fix>`
    const v = validate(xml)
    expect(errorsWithCode(v, 'DUPLICATE_ENUM_KEY').length).toBe(1)
  })

  test('duplicate enum description is warning', () => {
    const xml = `<fix><header /><trailer /><messages /><components />
      <fields>
        <field name="Side" number="54" type="CHAR">
          <value enum="1" description="Buy" />
          <value enum="2" description="Buy" />
        </field>
      </fields></fix>`
    const v = validate(xml)
    const warnings = errorsWithCode(v, 'DUPLICATE_ENUM_DESC')
    expect(warnings.length).toBe(1)
    expect(warnings[0].severity).toBe(ValidationSeverity.Warning)
  })
})

describe('DictionaryValidator — component errors', () => {
  test('component missing name', () => {
    const xml = `<fix><header /><trailer /><messages />
      <fields />
      <components><component /></components></fix>`
    const v = validate(xml)
    expect(errorsWithCode(v, 'COMPONENT_NO_NAME').length).toBe(1)
  })

  test('duplicate component name', () => {
    const xml = `<fix><header /><trailer /><messages />
      <fields />
      <components>
        <component name="Instrument" />
        <component name="Instrument" />
      </components></fix>`
    const v = validate(xml)
    expect(errorsWithCode(v, 'DUPLICATE_COMPONENT').length).toBe(1)
  })
})

describe('DictionaryValidator — message errors', () => {
  test('message missing name', () => {
    const xml = `<fix><header /><trailer /><fields /><components />
      <messages><message msgtype="0" /></messages></fix>`
    const v = validate(xml)
    expect(errorsWithCode(v, 'MESSAGE_NO_NAME').length).toBe(1)
  })

  test('message missing msgtype', () => {
    const xml = `<fix><header /><trailer /><fields /><components />
      <messages><message name="Heartbeat" /></messages></fix>`
    const v = validate(xml)
    expect(errorsWithCode(v, 'MESSAGE_NO_MSGTYPE').length).toBe(1)
  })

  test('duplicate message name', () => {
    const xml = `<fix><header /><trailer /><fields /><components />
      <messages>
        <message name="Heartbeat" msgtype="0" />
        <message name="Heartbeat" msgtype="1" />
      </messages></fix>`
    const v = validate(xml)
    expect(errorsWithCode(v, 'DUPLICATE_MESSAGE_NAME').length).toBe(1)
  })

  test('duplicate message type', () => {
    const xml = `<fix><header /><trailer /><fields /><components />
      <messages>
        <message name="Heartbeat" msgtype="0" />
        <message name="TestRequest" msgtype="0" />
      </messages></fix>`
    const v = validate(xml)
    expect(errorsWithCode(v, 'DUPLICATE_MESSAGE_TYPE').length).toBe(1)
  })
})

describe('DictionaryValidator — reference errors', () => {
  test('undefined field reference', () => {
    const xml = `<fix><header /><trailer />
      <fields>
        <field name="BeginString" number="8" type="STRING" />
      </fields>
      <components />
      <messages>
        <message name="Heartbeat" msgtype="0">
          <field name="NonExistent" required="N" />
        </message>
      </messages></fix>`
    const v = validate(xml)
    expect(errorsWithCode(v, 'UNDEFINED_FIELD').length).toBe(1)
  })

  test('undefined field suggests similar name', () => {
    const xml = `<fix><header /><trailer />
      <fields>
        <field name="Account" number="1" type="STRING" />
      </fields>
      <components />
      <messages>
        <message name="Order" msgtype="D">
          <field name="Acount" required="Y" />
        </message>
      </messages></fix>`
    const v = validate(xml)
    const err = errorsWithCode(v, 'UNDEFINED_FIELD')[0]
    expect(err.suggestion).toContain('Account')
  })

  test('undefined component reference', () => {
    const xml = `<fix><header /><trailer />
      <fields />
      <components />
      <messages>
        <message name="Order" msgtype="D">
          <component name="NonExistent" required="N" />
        </message>
      </messages></fix>`
    const v = validate(xml)
    expect(errorsWithCode(v, 'UNDEFINED_COMPONENT').length).toBe(1)
  })

  test('StandardHeader and StandardTrailer are exempt from component check', () => {
    const xml = `<fix><header /><trailer />
      <fields />
      <components />
      <messages>
        <message name="Order" msgtype="D">
          <component name="StandardHeader" required="Y" />
          <component name="StandardTrailer" required="Y" />
        </message>
      </messages></fix>`
    const v = validate(xml)
    expect(errorsWithCode(v, 'UNDEFINED_COMPONENT').length).toBe(0)
  })

  test('undefined group counter field', () => {
    const xml = `<fix><header /><trailer />
      <fields>
        <field name="RefMsgType" number="372" type="STRING" />
      </fields>
      <components />
      <messages>
        <message name="Logon" msgtype="A">
          <group name="NoMsgTypes" required="N">
            <field name="RefMsgType" required="N" />
          </group>
        </message>
      </messages></fix>`
    const v = validate(xml)
    expect(errorsWithCode(v, 'UNDEFINED_GROUP_FIELD').length).toBe(1)
  })

  test('group with defined counter field passes', () => {
    const xml = `<fix><header /><trailer />
      <fields>
        <field name="NoMsgTypes" number="384" type="NUMINGROUP" />
        <field name="RefMsgType" number="372" type="STRING" />
      </fields>
      <components />
      <messages>
        <message name="Logon" msgtype="A">
          <group name="NoMsgTypes" required="N">
            <field name="RefMsgType" required="N" />
          </group>
        </message>
      </messages></fix>`
    const v = validate(xml)
    expect(errorsWithCode(v, 'UNDEFINED_GROUP_FIELD').length).toBe(0)
  })
})

describe('DictionaryValidator — unused definitions', () => {
  test('unused field generates warning', () => {
    const xml = `<fix><header /><trailer />
      <fields>
        <field name="Account" number="1" type="STRING" />
        <field name="UnusedField" number="999" type="STRING" />
      </fields>
      <components />
      <messages>
        <message name="Order" msgtype="D">
          <field name="Account" required="Y" />
        </message>
      </messages></fix>`
    const v = validate(xml)
    const unused = errorsWithCode(v, 'UNUSED_FIELD')
    expect(unused.length).toBe(1)
    expect(unused[0].elementName).toBe('UnusedField')
    expect(unused[0].severity).toBe(ValidationSeverity.Warning)
  })

  test('unused component generates warning', () => {
    const xml = `<fix><header /><trailer />
      <fields />
      <components>
        <component name="UnusedComp" />
      </components>
      <messages /></fix>`
    const v = validate(xml)
    const unused = errorsWithCode(v, 'UNUSED_COMPONENT')
    expect(unused.length).toBe(1)
    expect(unused[0].elementName).toBe('UnusedComp')
    expect(unused[0].severity).toBe(ValidationSeverity.Warning)
  })
})

describe('DictionaryValidator — throwIfErrors', () => {
  test('throws DictionaryValidationException on errors', () => {
    const v = validate('<fix></fix>')
    expect(v.hasErrors).toBe(true)
    expect(() => v.throwIfErrors()).toThrow(DictionaryValidationException)
  })

  test('does not throw when only warnings', () => {
    const v = validate(validMinimalXml)
    expect(v.hasErrors).toBe(false)
    expect(() => v.throwIfErrors()).not.toThrow()
  })
})

describe('DictionaryValidator — Levenshtein distance', () => {
  test('identical strings', () => {
    expect(DictionaryValidator.levenshteinDistance('abc', 'abc')).toBe(0)
  })

  test('single edit', () => {
    expect(DictionaryValidator.levenshteinDistance('abc', 'abd')).toBe(1)
  })

  test('empty strings', () => {
    expect(DictionaryValidator.levenshteinDistance('', 'abc')).toBe(3)
    expect(DictionaryValidator.levenshteinDistance('abc', '')).toBe(3)
  })

  test('findSimilar returns closest match', () => {
    const candidates = ['Account', 'Symbol', 'Side', 'OrderQty']
    expect(DictionaryValidator.findSimilar('Acount', candidates)).toBe('Account')
    expect(DictionaryValidator.findSimilar('Symbl', candidates)).toBe('Symbol')
  })

  test('findSimilar returns null for no close match', () => {
    const candidates = ['Account', 'Symbol']
    expect(DictionaryValidator.findSimilar('XyzAbc', candidates)).toBeNull()
  })
})

describe('DictionaryValidator — real FIX dictionaries', () => {
  const fixFiles = ['FIX42.xml', 'FIX43.xml', 'FIX44.xml', 'FIX50SP2.xml']

  fixFiles.forEach(file => {
    const filePath = path.join(dataRoot, file)
    if (!fs.existsSync(filePath)) return

    test(`${file} has no errors`, () => {
      const xml = fs.readFileSync(filePath, 'utf-8')
      const doc = SaxTreeBuilder.parse(xml)
      const validator = new DictionaryValidator()
      validator.validate(doc)
      const errors = validator.errors.filter(e => e.severity === ValidationSeverity.Error)
      if (errors.length > 0) {
        console.log(`${file} errors:`, errors.slice(0, 5).map(e => `[${e.code}] ${e.message}`))
      }
      expect(errors.length).toBe(0)
    })
  })
})
