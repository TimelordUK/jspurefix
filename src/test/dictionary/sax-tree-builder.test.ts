import * as fs from 'fs'
import * as path from 'path'
import { SaxTreeBuilder } from '../../dictionary/parser/quickfix/sax-tree-builder'
import { XDocument } from '../../dictionary/parser/quickfix/x-element'

const dataRoot = path.join(__dirname, '../../../data')

describe('SaxTreeBuilder.parse', () => {
  test('parse minimal XML', () => {
    const doc = SaxTreeBuilder.parse('<fix major="4" minor="4"><fields></fields></fix>')
    expect(doc.root.name).toBe('fix')
    expect(doc.root.attribute('major')).toBe('4')
    expect(doc.root.attribute('minor')).toBe('4')
    expect(doc.root.elements('fields').length).toBe(1)
  })

  test('parse self-closing elements', () => {
    const xml = '<fix><fields><field name="Account" number="1" type="STRING" /></fields></fix>'
    const doc = SaxTreeBuilder.parse(xml)
    const fields = doc.firstDescendant('fields')
    expect(fields).toBeDefined()
    const fieldNodes = fields!.elements('field')
    expect(fieldNodes.length).toBe(1)
    expect(fieldNodes[0].attribute('name')).toBe('Account')
    expect(fieldNodes[0].attribute('number')).toBe('1')
    expect(fieldNodes[0].attribute('type')).toBe('STRING')
  })

  test('parse nested structure', () => {
    const xml = `
      <fix major="4" minor="4">
        <components>
          <component name="Instrument">
            <field name="Symbol" required="Y" />
            <field name="SecurityID" required="N" />
            <component name="InstrumentExtension" required="N" />
          </component>
        </components>
      </fix>`
    const doc = SaxTreeBuilder.parse(xml)
    const component = doc.firstDescendant('component')
    expect(component).toBeDefined()
    expect(component!.attribute('name')).toBe('Instrument')
    expect(component!.elements('field').length).toBe(2)
    expect(component!.elements('component').length).toBe(1)
  })

  test('descendants finds at all depths', () => {
    const xml = `
      <fix>
        <messages>
          <message name="Heartbeat" msgtype="0">
            <field name="TestReqID" required="N" />
          </message>
          <message name="Logon" msgtype="A">
            <field name="EncryptMethod" required="Y" />
            <group name="NoMsgTypes" required="N">
              <field name="RefMsgType" required="N" />
            </group>
          </message>
        </messages>
      </fix>`
    const doc = SaxTreeBuilder.parse(xml)
    const allFields = doc.descendants('field')
    expect(allFields.length).toBe(3)
    const messages = doc.descendants('message')
    expect(messages.length).toBe(2)
  })

  test('firstDescendant returns first match', () => {
    const xml = '<fix><fields><field name="A" /><field name="B" /></fields></fix>'
    const doc = SaxTreeBuilder.parse(xml)
    const first = doc.firstDescendant('field')
    expect(first).toBeDefined()
    expect(first!.attribute('name')).toBe('A')
  })

  test('firstDescendant returns undefined for no match', () => {
    const doc = SaxTreeBuilder.parse('<fix></fix>')
    expect(doc.firstDescendant('nonexistent')).toBeUndefined()
  })

  test('requiredAttribute throws on missing', () => {
    const doc = SaxTreeBuilder.parse('<fix></fix>')
    expect(() => doc.root.requiredAttribute('major')).toThrow('missing required attribute')
  })

  test('elements without name returns all children', () => {
    const xml = '<fix><header /><trailer /><fields /></fix>'
    const doc = SaxTreeBuilder.parse(xml)
    expect(doc.root.elements().length).toBe(3)
  })

  test('line numbers are tracked', () => {
    const xml = '<fix>\n<fields>\n<field name="A" />\n</fields>\n</fix>'
    const doc = SaxTreeBuilder.parse(xml)
    expect(doc.root.line).toBe(1)
    const field = doc.firstDescendant('field')
    expect(field).toBeDefined()
    expect(field!.line).toBe(3)
  })

  test('empty XML throws', () => {
    expect(() => SaxTreeBuilder.parse('')).toThrow()
  })
})

describe('SaxTreeBuilder with real FIX dictionaries', () => {
  const fixFiles = ['FIX42.xml', 'FIX43.xml', 'FIX44.xml', 'FIX50SP2.xml']

  fixFiles.forEach(file => {
    const filePath = path.join(dataRoot, file)
    if (!fs.existsSync(filePath)) return

    describe(file, () => {
      let doc: XDocument

      beforeAll(() => {
        const xml = fs.readFileSync(filePath, 'utf-8')
        doc = SaxTreeBuilder.parse(xml)
      })

      test('root element is fix', () => {
        expect(doc.root.name).toBe('fix')
      })

      test('has major/minor version attributes', () => {
        expect(doc.root.attribute('major')).toBeDefined()
        expect(doc.root.attribute('minor')).toBeDefined()
      })

      test('has header section', () => {
        const header = doc.firstDescendant('header')
        expect(header).toBeDefined()
        expect(header!.elements('field').length).toBeGreaterThan(0)
      })

      test('has trailer section', () => {
        const trailer = doc.firstDescendant('trailer')
        expect(trailer).toBeDefined()
      })

      test('has fields section with field definitions', () => {
        const fields = doc.firstDescendant('fields')
        expect(fields).toBeDefined()
        const fieldNodes = fields!.elements('field')
        expect(fieldNodes.length).toBeGreaterThan(100)
        // Every field has name, number, type
        fieldNodes.forEach(f => {
          expect(f.attribute('name')).toBeDefined()
          expect(f.attribute('number')).toBeDefined()
          expect(f.attribute('type')).toBeDefined()
        })
      })

      test('has components section', () => {
        const components = doc.firstDescendant('components')
        expect(components).toBeDefined()
        const componentNodes = components!.elements('component')
        // FIX 4.2 has no components — later versions do
        componentNodes.forEach(c => {
          expect(c.attribute('name')).toBeDefined()
        })
      })

      test('has messages section', () => {
        const messages = doc.firstDescendant('messages')
        expect(messages).toBeDefined()
        const messageNodes = messages!.elements('message')
        expect(messageNodes.length).toBeGreaterThan(0)
        // Every message has name and msgtype
        messageNodes.forEach(m => {
          expect(m.attribute('name')).toBeDefined()
          expect(m.attribute('msgtype')).toBeDefined()
        })
      })

      test('field definitions include enums as value children', () => {
        const fields = doc.firstDescendant('fields')!
        const fieldsWithEnums = fields.elements('field').filter(
          f => f.elements('value').length > 0
        )
        expect(fieldsWithEnums.length).toBeGreaterThan(0)
        // Enum values have enum and description attributes
        const firstEnum = fieldsWithEnums[0].elements('value')[0]
        expect(firstEnum.attribute('enum')).toBeDefined()
        expect(firstEnum.attribute('description')).toBeDefined()
      })

      test('components contain nested groups', () => {
        const allGroups = doc.descendants('group')
        expect(allGroups.length).toBeGreaterThan(0)
        // Groups have a name attribute
        allGroups.forEach(g => {
          expect(g.attribute('name')).toBeDefined()
        })
      })

      test('descendants counts match elements traversal', () => {
        const messagesSection = doc.firstDescendant('messages')!
        const viaDescendants = doc.descendants('message').length
        const viaElements = messagesSection.elements('message').length
        // descendants finds messages only inside <messages>, so counts should match
        expect(viaDescendants).toBe(viaElements)
      })
    })
  })
})

describe('SaxTreeBuilder.parseStream', () => {
  test('parse FIX44.xml from stream', async () => {
    const filePath = path.join(dataRoot, 'FIX44.xml')
    const stream = fs.createReadStream(filePath, 'utf-8')
    const doc = await SaxTreeBuilder.parseStream(stream)
    expect(doc.root.name).toBe('fix')
    expect(doc.root.attribute('major')).toBe('4')
    const fields = doc.firstDescendant('fields')
    expect(fields).toBeDefined()
    expect(fields!.elements('field').length).toBeGreaterThan(100)
  })
})
