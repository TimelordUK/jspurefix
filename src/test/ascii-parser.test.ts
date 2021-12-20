import { TagPos, SegmentType, MsgView } from '../buffer'
import { AsciiChars, AsciiParser } from '../buffer/ascii'
import { FixDefinitions } from '../dictionary/definition'
import { DefinitionFactory, JsonHelper } from '../util'
import { ISessionDescription, StringDuplex } from '../transport'
import * as path from 'path'
import { MsgType } from '..'

let definitions: FixDefinitions
let jsonHelper: JsonHelper
const root: string = path.join(__dirname, '../../data')
const logon: string = '8=FIX4.4|9=0000208|35=A|49=sender-10|56=target-20|34=1|57=sub-a|52=20180610-10:39:01.621|98=2|108=62441|95=20|96=VgfoSqo56NqSVI1fLdlI|141=Y|789=4886|383=20|384=1|372=ipsum|385=R|464=N|553=sit|554=consectetur|10=49|'
const expectedTagPos = [
  new TagPos(0, 8, 2, 6),
  new TagPos(1, 9, 11, 7),
  new TagPos(2, 35, 22, 1),
  new TagPos(3, 49, 27, 9),
  new TagPos(4, 56, 40, 9),
  new TagPos(5, 34, 53, 1),
  new TagPos(6, 57, 58, 5),
  new TagPos(7, 52, 67, 21),
  new TagPos(8, 98, 92, 1),
  new TagPos(9, 108, 98, 5),
  new TagPos(10, 95, 107, 2),
  new TagPos(11, 96, 113, 20),
  new TagPos(12, 141, 138, 1),
  new TagPos(13, 789, 144, 4),
  new TagPos(14, 383, 153, 2),
  new TagPos(15, 384, 160, 1),
  new TagPos(16, 372, 166, 5),
  new TagPos(17, 385, 176, 1),
  new TagPos(18, 464, 182, 1),
  new TagPos(19, 553, 188, 3),
  new TagPos(20, 554, 196, 11),
  new TagPos(21, 10, 211, 2)]

beforeAll(async () => {
  expect.assertions(1)
  const sessionDescription: ISessionDescription = require(path.join(root, 'session/test-initiator.json'))
  definitions = await new DefinitionFactory().getDefinitions(sessionDescription.application.dictionary)
  jsonHelper = new JsonHelper(definitions)
}, 45000)

class ParsingResult {
  constructor (public readonly event: string, public readonly msgType: string, public readonly view: MsgView,
               public readonly contents: string, public readonly parser: AsciiParser) {
  }
}

function toParse (text: string, chunks: boolean = false): Promise<ParsingResult> {
  return new Promise<any>((resolve, reject) => {
    const parser = new AsciiParser(definitions, new StringDuplex(text, chunks).readable, AsciiChars.Pipe)
    const buffer = parser.state.elasticBuffer
    parser.on('error', (e: Error) => {
      reject(e)
    })
    parser.on('msg', (msgType: string, view: MsgView) => {
      resolve(new ParsingResult('msg', msgType, view.clone(), buffer.toString(), parser))
    })
    parser.on('done', () => {
      resolve(new ParsingResult('done', null,null, buffer.toString(), parser))
    })
  })
}

test('begin string incorrectly placed', () => {
  return expect(toParse('8=FIX4.4|8=FIX4.4|')).rejects.toEqual(
    new Error('BeginString: not expected at position [2]')
  )
})

test('body length incorrectly placed', () => {
  return expect(toParse('8=FIX4.4|9=101|9=101|')).rejects.toEqual(
    new Error('BodyLengthTag: not expected at position [3]')
  )
})

test('msg type incorrectly placed', () => {
  return expect(toParse('8=FIX4.4|9=101|35=A|35=A|')).rejects.toEqual(
    new Error('MsgTag: not expected at position [4]')
  )
})

test('do not start with 8=', () => {
  return expect(toParse('59=FIX4.4|')).rejects.toEqual(
    new Error('position 1 [59] must be BeginString: 8=')
  )
})

test('body length incorrectly placed', () => {
  return expect(toParse('8=FIX4.4|59=101|9=101|')).rejects.toEqual(
    new Error('position 2 [59] must be BodyLengthTag: 9=')
  )
})

test('msgTag incorrectly placed', () => {
  return expect(toParse('8=FIX4.4|9=101|59=A|')).rejects.toEqual(
    new Error('position 3 [59] must be MsgTag: 35=')
  )
})

test('first 3 fields correctly placed', async () => {
  const res: ParsingResult = await toParse('8=FIX4.4|9=101|35=A|')
  expect(res.event).toEqual('done')
})

test('complete msg parsed', async () => {
  const res: ParsingResult = await toParse(logon)
  expect(res.event).toEqual('msg')
  expect(res.msgType).toEqual(MsgType.Logon)
})

test('complete msg in chunks parsed', async () => {
  const res: ParsingResult = await toParse(logon, true)
  expect(res.event).toEqual('msg')
  expect(res.msgType).toEqual(MsgType.Logon)
})

test('msg sent in chunks matches parser buffer', async () => {
  const res: ParsingResult = await toParse(logon, true)
  expect(res.msgType).toEqual(MsgType.Logon)
  expect(res.contents).toEqual(logon)
})

test('logon parsers to correct tag set', async () => {
  const res: ParsingResult = await toParse(logon, true)
  expect(res.msgType).toEqual(MsgType.Logon)
  expect(res.view.structure.tags.tagPos).toEqual(expectedTagPos)
})

test('tags other than 10 past body length', async () => {
  const begin = '8=FIX4.4|9=0000208|'
  const changed = logon.replace('10=49|','555=you know nothin|10=49')
  return expect(toParse(changed)).rejects.toEqual(
    new Error(`Tag: [555] cant be after ${208 + begin.length - 1}`)
  )
})

test('unknown message type', async () => {
  const changed = logon.replace('35=A', '35=ZZ')
  const res = await toParse(changed)
  expect(res.view).toBeTruthy()
  expect(res.view.segment.type).toEqual(SegmentType.Unknown)
})

test('missing 1 required tag', async () => {
  const changed = logon.replace('108=62441|','000=62441|')
  const res = await toParse(changed)
  expect(res.view).toBeTruthy()
  const missing = res.view.missing()
  expect(missing).toEqual([108])
})

test('missing 2 required tags', async () => {
  // const changed = logon.replace('108=62441|','000=62441|')
  const changed = logon.replace('98=2|108=62441|','01=2|000=62441|')
  const res = await toParse(changed)
  expect(res.view).toBeTruthy()
  const missing = res.view.missing()
  expect(missing).toEqual([98, 108])
})
