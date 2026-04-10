import 'reflect-metadata'
import * as fs from 'fs'
import * as path from 'path'

import { QuickFixGraphParser } from '../../dictionary/parser/quickfix/quick-fix-graph-parser'
import { QuickFixXmlFileBuilder } from '../../dictionary/parser/quickfix/quick-fix-xml-file-builder'
import { FixDefinitions } from '../../dictionary/definition'

const dataRoot = path.join(__dirname, '../../../data')

/**
 * Round-trip: parse a FIX dictionary with the graph parser (complete picture),
 * trim it down to a subset of message types, then re-parse the trimmed XML
 * with the strict graph parser. The validator will catch any undefined
 * field/component references — exactly the kind of bug where deeply nested
 * fields are dropped during trim.
 */
async function trimAndReparse (
  filePath: string,
  msgTypes: string[]
): Promise<{ original: FixDefinitions, trimmed: FixDefinitions, xml: string }> {
  const xml = fs.readFileSync(filePath, 'utf-8')
  const original = QuickFixGraphParser.parse(xml, { validateBeforeParsing: false })
  const builder = new QuickFixXmlFileBuilder(original)
  builder.write(msgTypes)
  const trimmedXml = builder.elasticBuffer.toString()
  // Parse with strict validation enabled — will throw if anything is missing
  const trimmed = QuickFixGraphParser.parse(trimmedXml, { validateBeforeParsing: true })
  return { original, trimmed, xml: trimmedXml }
}

function compareMessageFully (original: FixDefinitions, trimmed: FixDefinitions, msgType: string): void {
  const o = original.message.get(msgType)
  const t = trimmed.message.get(msgType)
  expect(t).toBeTruthy()
  if (!o || !t) return

  // Top-level field count must match
  expect(t.fields.length).toBe(o.fields.length)

  // Flattened tag set must match (catches deeply-nested missing fields)
  const oTags = new Set(Object.keys(o.containedTag).map(Number))
  const tTags = new Set(Object.keys(t.containedTag).map(Number))
  const missing = [...oTags].filter(tag => !tTags.has(tag))
  if (missing.length > 0) {
    const lookup = (tag: number) => {
      for (const sd of original.simple.values()) {
        if (sd.tag === tag) return sd.name
      }
      return `tag${tag}`
    }
    throw new Error(`${msgType}: ${missing.length} tags lost during trim: ${missing.slice(0, 10).map(lookup).join(', ')}${missing.length > 10 ? '...' : ''}`)
  }
  expect(tTags.size).toBe(oTags.size)
}

/**
 * Walk the message tree and check that every nested component/group exists
 * in the trimmed definitions with matching field counts.
 */
function compareNestedSets (original: FixDefinitions, trimmed: FixDefinitions, msgType: string): void {
  const o = original.message.get(msgType)
  const t = trimmed.message.get(msgType)
  if (!o || !t) return

  const visited = new Set<string>()

  function walk (oSet: any, tSet: any, path: string): void {
    if (visited.has(path)) return
    visited.add(path)

    // Direct field count
    if (oSet.fields.length !== tSet.fields.length) {
      throw new Error(`${msgType} ${path}: expected ${oSet.fields.length} fields, got ${tSet.fields.length}`)
    }

    // Component children
    for (const [name, oComp] of oSet.components.entries()) {
      const tComp = tSet.components.get(name)
      if (!tComp) {
        throw new Error(`${msgType} ${path}: missing component '${name}' in trimmed`)
      }
      walk(oComp, tComp, `${path}.${name}`)
    }

    // Group children
    for (const [name, oGrp] of oSet.groups.entries()) {
      const tGrp = tSet.groups.get(name)
      if (!tGrp) {
        throw new Error(`${msgType} ${path}: missing group '${name}' in trimmed`)
      }
      walk(oGrp, tGrp, `${path}.${name}`)
    }
  }

  walk(o, t, msgType)
}

describe('trim round-trip — FIX44', () => {
  const filePath = path.join(dataRoot, 'FIX44.xml')

  test('Heartbeat (0)', async () => {
    const { original, trimmed } = await trimAndReparse(filePath, ['0'])
    compareMessageFully(original, trimmed, '0')
  })

  test('NewOrderSingle (D)', async () => {
    const { original, trimmed } = await trimAndReparse(filePath, ['D'])
    compareMessageFully(original, trimmed, 'D')
  })

  test('ExecutionReport (8)', async () => {
    const { original, trimmed } = await trimAndReparse(filePath, ['8'])
    compareMessageFully(original, trimmed, '8')
  })

  test('multi-message trim', async () => {
    const msgTypes = ['0', '1', '2', '3', '4', '5', 'D', '8']
    const { original, trimmed } = await trimAndReparse(filePath, msgTypes)
    for (const mt of msgTypes) {
      compareMessageFully(original, trimmed, mt)
    }
  })
})

describe('trim round-trip — FIX50SP2', () => {
  const filePath = path.join(dataRoot, 'FIX50SP2.xml')

  test('Heartbeat (0)', async () => {
    const { original, trimmed } = await trimAndReparse(filePath, ['0'])
    compareMessageFully(original, trimmed, '0')
  })

  test('TradeCaptureReport (AE) — deeply nested groups', async () => {
    const { original, trimmed } = await trimAndReparse(filePath, ['AE'])
    compareMessageFully(original, trimmed, 'AE')
    compareNestedSets(original, trimmed, 'AE')
  })

  test('NewOrderSingle (D)', async () => {
    const { original, trimmed } = await trimAndReparse(filePath, ['D'])
    compareMessageFully(original, trimmed, 'D')
  })

  test('many messages', async () => {
    const msgTypes = ['0', '1', '2', '3', '4', '5', 'AE', 'D', '8']
    const { original, trimmed } = await trimAndReparse(filePath, msgTypes)
    for (const mt of msgTypes) {
      compareMessageFully(original, trimmed, mt)
    }
  })

  test('all messages — full round trip with deep comparison', async () => {
    // Parse the full dictionary, trim ALL messages, reparse, compare every message
    // including deeply-nested set structures. This is the strongest check possible.
    const xml = fs.readFileSync(filePath, 'utf-8')
    const original = QuickFixGraphParser.parse(xml, { validateBeforeParsing: false })
    const allMsgTypes = new Set<string>()
    for (const md of original.message.values()) {
      allMsgTypes.add(md.msgType)
    }
    const builder = new QuickFixXmlFileBuilder(original)
    builder.write([...allMsgTypes])
    const trimmedXml = builder.elasticBuffer.toString()
    const trimmed = QuickFixGraphParser.parse(trimmedXml, { validateBeforeParsing: true })
    for (const mt of allMsgTypes) {
      compareMessageFully(original, trimmed, mt)
      compareNestedSets(original, trimmed, mt)
    }
  }, 60000)
})
