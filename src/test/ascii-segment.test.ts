import { AsciiParser, AsciiChars, MsgView, SegmentDescription } from '../buffer'
import { FixDefinitions } from '../dictionary/definition'
import { ISessionDescription, StringDuplex } from '../transport'
import { ILogon } from '../types/FIX4.4/repo'
import { getDefinitions, JsonHelper } from '../util'
import * as path from 'path'

let definitions: FixDefinitions
let jsonHelper: JsonHelper
const root: string = path.join(__dirname, '../../data')
const logon: string = '8=FIX4.4|9=0000208|35=A|49=sender-10|56=target-20|34=1|57=sub-a|52=20180610-10:39:01.621|98=2|108=62441|95=20|96=VgfoSqo56NqSVI1fLdlI|141=Y|789=4886|383=20|384=1|372=ipsum|385=R|464=N|553=sit|554=consectetur|10=49|'

beforeAll(async () => {
  const sessionDescription: ISessionDescription = require(path.join(root, 'session/test-initiator.json'))
  definitions = await getDefinitions(sessionDescription.application.dictionary)
  jsonHelper = new JsonHelper(definitions)
}, 45000)

class ParsingResult {
  constructor (public readonly event: string,
               public readonly msgType: string,
               public readonly view: MsgView,
               public readonly contents: string,
               public readonly parser: AsciiParser) {
  }
}

function toParse (text: string, chunks: boolean = false): Promise<ParsingResult> {
  return new Promise<any>((resolve, reject) => {
    const parser = new AsciiParser(definitions, new StringDuplex(text, chunks).readable, AsciiChars.Pipe)
    parser.on('error', (e: Error) => {
      reject(e)
    })
    parser.on('msg', (msgType: string, view: MsgView) => {
      resolve(new ParsingResult('msg', msgType, view.clone(), parser.state.elasticBuffer.toString(), parser))
    })
    parser.on('done', () => {
      resolve(new ParsingResult('done', null,null, parser.state.elasticBuffer.toString(), parser))
    })
  })
}

test('0 gaps', async () => {
  const res: ParsingResult = await toParse(logon)
  expect(res.event).toEqual('msg')
  expect(res.msgType).toEqual('A')
  const unknowns: SegmentDescription[] = res.view.structure.layout['.undefined']
  expect(unknowns).toBeFalsy()
  const o: ILogon = res.view.toObject()
  expect(o).toBeTruthy()
  expect(o.Password).toEqual('consectetur')
  expect(o.Username).toEqual('sit')
})

test('1 gap', async () => {
  const gap = logon.replace('108=62441|', '108=62441|9999=im not here')
  const res: ParsingResult = await toParse(gap)
  expect(res.event).toEqual('msg')
  expect(res.msgType).toEqual('A')
  const unknown: SegmentDescription = res.view.structure.layout['.undefined']
  expect(unknown).toBeTruthy()
  expect(unknown.startTag).toEqual(9999)
  expect(unknown.startPosition).toEqual(10)
  const o: ILogon = res.view.toObject()
  expect(o).toBeTruthy()
  expect(o.Password).toEqual('consectetur')
  expect(o.Username).toEqual('sit')
})

test('1 gap next to 1 gap', async () => {
  const gap = logon.replace('108=62441|', '108=62441|1=gap|2=gap|')
  const res: ParsingResult = await toParse(gap)
  expect(res.event).toEqual('msg')
  expect(res.msgType).toEqual('A')
  const unknowns: SegmentDescription[] = res.view.structure.layout['.undefined']
  expect(unknowns).toBeTruthy()
  expect(Array.isArray(unknowns)).toEqual(true)
  expect(unknowns[0].startTag).toEqual(1)
  expect(unknowns[0].startPosition).toEqual(10)
  expect(unknowns[1].startTag).toEqual(2)
  expect(unknowns[1].startPosition).toEqual(11)
  const o: ILogon = res.view.toObject()
  expect(o).toBeTruthy()
  expect(o.Password).toEqual('consectetur')
  expect(o.Username).toEqual('sit')
})

test('1 gap undefined msg', async () => {
  const gap = logon.replace('108=62441|', '108=62441|9999=im not here')
  const res: ParsingResult = await toParse(gap)
  expect(res.event).toEqual('msg')
  expect(res.msgType).toEqual('A')
  expect(res.view.getUndefined()).toBeTruthy()
  expect(res.view.undefinedForMsg()).toEqual('undefined tag = 9999')
})

test('2 gap undefined msg', async () => {
  const gap = logon.replace('108=62441|', '108=62441|1=gap|2=gap|')
  const res: ParsingResult = await toParse(gap)
  expect(res.event).toEqual('msg')
  expect(res.msgType).toEqual('A')
  expect(res.view.getUndefined()).toBeTruthy()
  expect(res.view.undefinedForMsg()).toEqual('undefined tags = 1, 2')
})
