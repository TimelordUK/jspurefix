import 'reflect-metadata'
import * as fs from 'fs'
import * as path from 'path'

import { QuickFixGraphParser } from '../../dictionary/parser/quickfix/quick-fix-graph-parser'
import { DictionaryValidationException } from '../../dictionary/parser/quickfix/validation-error'
import { DefinitionFactory } from '../../util/definition-factory'
import { FixDefinitions } from '../../dictionary/definition'
import { ContainedFieldType } from '../../dictionary/contained/contained-field-type'

const dataRoot = path.join(__dirname, '../../../data')
const fixFiles = ['FIX42.xml', 'FIX43.xml', 'FIX44.xml', 'FIX50SP2.xml']

describe('QuickFixGraphParser — basic parsing', () => {
  test('parses FIX44 minimal structure', () => {
    const xml = fs.readFileSync(path.join(dataRoot, 'FIX44.xml'), 'utf-8')
    const defs = QuickFixGraphParser.parse(xml)
    expect(defs).toBeTruthy()
    expect(defs.simple.size).toBeGreaterThan(0)
    expect(defs.message.size).toBeGreaterThan(0)
    expect(defs.component.size).toBeGreaterThan(0)
  })

  test('parsed message has StandardHeader and StandardTrailer', () => {
    const xml = fs.readFileSync(path.join(dataRoot, 'FIX44.xml'), 'utf-8')
    const defs = QuickFixGraphParser.parse(xml)
    const logon = defs.message.get('Logon')
    expect(logon).toBeTruthy()
    expect(logon!.components.has('StandardHeader')).toBe(true)
    expect(logon!.components.has('StandardTrailer')).toBe(true)
  })

  test('field definitions have tags and types', () => {
    const xml = fs.readFileSync(path.join(dataRoot, 'FIX44.xml'), 'utf-8')
    const defs = QuickFixGraphParser.parse(xml)
    const beginString = defs.simple.get('BeginString')
    expect(beginString).toBeTruthy()
    expect(beginString!.tag).toBe(8)
  })

  test('throws on invalid xml when validation enabled', () => {
    const badXml = '<fix><fields><field number="1" /></fields></fix>'
    expect(() => QuickFixGraphParser.parse(badXml)).toThrow(DictionaryValidationException)
  })

  test('skips validation when disabled', () => {
    const xml = `<fix major="4" minor="4">
      <header><field name="BeginString" required="Y" /></header>
      <trailer><field name="CheckSum" required="Y" /></trailer>
      <fields>
        <field number="8" name="BeginString" type="STRING" />
        <field number="10" name="CheckSum" type="STRING" />
      </fields>
      <messages />
    </fix>`
    expect(() => QuickFixGraphParser.parse(xml, { validateBeforeParsing: false })).not.toThrow()
  })
})

describe('QuickFixGraphParser — comparison with existing parser', () => {
  const factory = new DefinitionFactory()
  const cache = new Map<string, { graph: FixDefinitions, legacy: FixDefinitions }>()

  async function loadBoth (file: string): Promise<{ graph: FixDefinitions, legacy: FixDefinitions }> {
    if (cache.has(file)) return cache.get(file)!
    const filePath = path.join(dataRoot, file)
    const xml = fs.readFileSync(filePath, 'utf-8')
    const graph = QuickFixGraphParser.parse(xml, { validateBeforeParsing: false })
    const legacy = await factory.getDefinitions(filePath)
    const result = { graph, legacy }
    cache.set(file, result)
    return result
  }

  fixFiles.forEach(file => {
    const filePath = path.join(dataRoot, file)
    if (!fs.existsSync(filePath)) return

    describe(file, () => {
      test('same number of simple field definitions (by tag)', async () => {
        const { graph, legacy } = await loadBoth(file)
        // simple map has many aliases — compare unique tag count
        const graphTags = new Set(Array.from(graph.simple.values()).map(s => s.tag))
        const legacyTags = new Set(Array.from(legacy.simple.values()).map(s => s.tag))
        expect(graphTags.size).toBe(legacyTags.size)
      })

      test('all legacy field tags exist in graph', async () => {
        const { graph, legacy } = await loadBoth(file)
        const graphTags = new Set(Array.from(graph.simple.values()).map(s => s.tag))
        for (const sd of legacy.simple.values()) {
          expect(graphTags.has(sd.tag)).toBe(true)
        }
      })

      test('same number of messages', async () => {
        const { graph, legacy } = await loadBoth(file)
        // Messages map by both name and msgType — count unique
        const graphMsgs = new Set(Array.from(graph.message.values()))
        const legacyMsgs = new Set(Array.from(legacy.message.values()))
        expect(graphMsgs.size).toBe(legacyMsgs.size)
      })

      test('all legacy messages exist in graph by msgType', async () => {
        const { graph, legacy } = await loadBoth(file)
        const seen = new Set<string>()
        for (const md of legacy.message.values()) {
          if (seen.has(md.msgType)) continue
          seen.add(md.msgType)
          const graphMd = graph.message.get(md.msgType)
          expect(graphMd).toBeTruthy()
          expect(graphMd!.name).toBe(md.name)
        }
      })

      test('messages have same field counts (top level)', async () => {
        const { graph, legacy } = await loadBoth(file)
        const seen = new Set<string>()
        for (const md of legacy.message.values()) {
          if (seen.has(md.msgType)) continue
          seen.add(md.msgType)
          const graphMd = graph.message.get(md.msgType)!
          // Both should include StandardHeader + body + StandardTrailer
          expect(graphMd.fields.length).toBe(md.fields.length)
        }
      })

      test('graph parser includes all legacy flattened tags (may have more)', async () => {
        const { graph, legacy } = await loadBoth(file)
        const seen = new Set<string>()
        for (const md of legacy.message.values()) {
          if (seen.has(md.msgType)) continue
          seen.add(md.msgType)
          const graphMd = graph.message.get(md.msgType)!
          const graphTags = new Set(Object.keys(graphMd.containedTag).map(Number))
          const legacyTags = new Set(Object.keys(md.containedTag).map(Number))
          // Graph parser correctly resolves deeply nested forward references
          // that the legacy 5-pass parser truncates — so graph may be superset.
          for (const t of legacyTags) {
            expect(graphTags.has(t)).toBe(true)
          }
          expect(graphTags.size).toBeGreaterThanOrEqual(legacyTags.size)
        }
      })

      test('components have same counts', async () => {
        const { graph, legacy } = await loadBoth(file)
        // Component map may include StandardHeader/StandardTrailer too
        expect(graph.component.size).toBe(legacy.component.size)
      })

      test('components have same field counts', async () => {
        const { graph, legacy } = await loadBoth(file)
        for (const [name, legacyComp] of legacy.component.entries()) {
          const graphComp = graph.component.get(name)
          expect(graphComp).toBeTruthy()
          expect(graphComp!.fields.length).toBe(legacyComp.fields.length)
        }
      })

      test('graph parser includes all legacy groups (may have more)', async () => {
        const { graph, legacy } = await loadBoth(file)
        const seen = new Set<string>()
        for (const md of legacy.message.values()) {
          if (seen.has(md.msgType)) continue
          seen.add(md.msgType)
          const graphMd = graph.message.get(md.msgType)!

          const legacyGroups = collectGroupNames(md)
          const graphGroups = collectGroupNames(graphMd)
          // Graph parser may resolve more deeply nested groups than legacy.
          for (const g of legacyGroups) {
            expect(graphGroups.has(g)).toBe(true)
          }
          expect(graphGroups.size).toBeGreaterThanOrEqual(legacyGroups.size)
        }
      })
    })
  })
})

function collectGroupNames (set: any, acc: Set<string> = new Set(), visited: Set<any> = new Set()): Set<string> {
  if (visited.has(set)) return acc
  visited.add(set)
  for (const f of set.fields) {
    if (f.type === ContainedFieldType.Group) {
      acc.add(f.name)
      if (f.definition) collectGroupNames(f.definition, acc, visited)
    } else if (f.type === ContainedFieldType.Component) {
      if (f.definition) collectGroupNames(f.definition, acc, visited)
    }
  }
  return acc
}
