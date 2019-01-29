import * as path from 'path'
import { SegmentDescription, SegmentType, Structure, Ascii, MsgView } from '../buffer'
import { ILooseObject } from '../collections/collection'
import { FixDefinitions } from '../dictionary/definition'
import { AsciiMsgTransmitter } from '../transport/ascii'
import { ISessionDescription } from '../transport'
import { replayFixFile, getDefinitions } from '../util'
import { JsFixConfig } from '../config'

const root: string = path.join(__dirname, '../../data')

let definitions: FixDefinitions
let session: AsciiMsgTransmitter
let views: MsgView[]
let structure: Structure

const asStrings: string[] = [
  'FIX4.4',
  '0000208',
  'A',
  'sender-10',
  'target-20',
  '1',
  'sub-a',
  '20180610-10:39:01.621',
  '2',
  '62441',
  '20',
  'VgfoSqo56NqSVI1fLdlI',
  'Y',
  '4886',
  '20',
  '1',
  'ipsum',
  'R',
  'N',
  'sit',
  'consectetur',
  '49'
]

beforeAll(async () => {
  const sessionDescription: ISessionDescription = require(path.join(root, 'session/qf-fix44.json'))
  definitions = await getDefinitions(sessionDescription.application.dictionary)
  const config = new JsFixConfig(null, definitions, sessionDescription, Ascii.Pipe)
  session = new AsciiMsgTransmitter(config)
  views = await replayFixFile(definitions, sessionDescription, path.join(root, 'examples/FIX.4.4/quickfix/logon/fix.txt'), Ascii.Pipe)
  if (views && views.length > 0) {
    structure = views[0].structure
  }
}, 45000)

test('expect a structure from fix msg', () => {
  expect(structure).toBeTruthy()
})

test('Logon structure', () => {
  const logon: SegmentDescription = structure.layout.Logon
  expect(logon).toBeTruthy()
  expect(logon.type).toEqual(SegmentType.Msg)
  expect(logon.startPosition).toEqual(0)
  expect(logon.startTag).toEqual(8)
  expect(logon.endPosition).toEqual(21)
  expect(logon.endTag).toEqual(554)
})

test('Logon MsgTypes', () => {
  const msgTypes: SegmentDescription = structure.layout.NoMsgTypes
  expect(msgTypes).toBeTruthy()
  expect(msgTypes.type).toEqual(SegmentType.Group)
  expect(msgTypes.delimiterTag).toEqual(372)
  expect(msgTypes.delimiterPositions.length).toEqual(1)
  expect(msgTypes.delimiterPositions).toEqual([16])
})

test('Logon Object', () => {
  const logonAsObject: ILooseObject = views[0].toObject()
  expect(logonAsObject).toBeTruthy()
  expect(logonAsObject.Username).toEqual('sit')
  expect(logonAsObject.Password).toEqual('consectetur')
  expect(logonAsObject.NoMsgTypes).toEqual([
    {
      MsgDirection: 'R',
      RefMsgType: 'ipsum'
    }])
})

test('values as strings', () => {
  const view: MsgView = views[0]
  const strings: string[] = view.getStrings()
  expect(strings).toEqual(asStrings)
})
