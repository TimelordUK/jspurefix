import * as path from 'path'
import { AsciiParser, AsciiView, AsciiChars } from '../buffer'
import { ILooseObject } from '../collections/collection'
import { FixDefinitions } from '../dictionary'
import { JsonHelper, getDefinitions } from '../util'
import { ISessionDescription } from '../transport'
import { JsFixConfig } from '../config'
import { AsciiMsgTransmitter, AsciiSessionMsgFactory } from '../transport/ascii'
import { MsgType } from '..'

let definitions: FixDefinitions
let jsonHelper: JsonHelper
let session: AsciiMsgTransmitter
const root: string = path.join(__dirname, '../../data/examples/FIX.4.4/repo/')

beforeAll(async () => {
  const sessionDescription: ISessionDescription = require(path.join(root, '../../../session/test-initiator.json'))
  definitions = await getDefinitions(sessionDescription.application.dictionary)
  jsonHelper = new JsonHelper(definitions)
  const config = new JsFixConfig(new AsciiSessionMsgFactory(sessionDescription), definitions, sessionDescription, AsciiChars.Pipe)
  session = new AsciiMsgTransmitter(config)
}, 45000)

async function testEncodeDecode (msgType: string, msg: ILooseObject): Promise<ILooseObject> {
  // encode to FIX format from provided object.
  return new Promise(async (resolve, reject) => {
    const parser: AsciiParser = new AsciiParser(definitions, session.encodeStream, AsciiChars.Pipe)
    parser.on('msg', (msgType: string, view: AsciiView) => {
      const o = view.toObject()
      delete o['StandardHeader']
      delete o['StandardTrailer']
      resolve(o)
    })
    parser.on('error', (e: Error) => {
      reject(e)
    })
    // encode the message
    session.send(msgType, msg)
  })
}

test('check 1 digit checksum format', async () => {
  const factory = session.config.factory
  const cs = factory.trailer(1)
  expect(cs.CheckSum).toEqual('001')
})

test('check 2 digit checksum format', async () => {
  const factory = session.config.factory
  const cs = factory.trailer(10)
  expect(cs.CheckSum).toEqual('010')
})

test('check 3 digit checksum format', async () => {
  const factory = session.config.factory
  const cs = factory.trailer(100)
  expect(cs.CheckSum).toEqual('100')
})

test('AE object to ascii fix to object', async () => {
  const msgType: string = MsgType.TradeCaptureReport
  const file: string = path.join(root, 'trade-capture/object.json')
  const msg: ILooseObject = jsonHelper.fromJson(file, msgType)
  const o: ILooseObject = await testEncodeDecode(msgType, msg)

  expect(o).toEqual(msg)
}, 1000)

test('d object to ascii fix to object', async () => {
  const msgType: string = MsgType.SecurityDefinition
  const file: string = path.join(root, 'security-definition/object.json')
  const msg: ILooseObject = jsonHelper.fromJson(file, msgType)
  const o: ILooseObject = await testEncodeDecode(msgType, msg)

  expect(o).toEqual(msg)
}, 1000)

test('D object to ascii fix to object', async () => {
  const msgType: string = MsgType.NewOrderSingle
  const file: string = path.join(root, 'new-order-single/object.json')
  const msg: ILooseObject = jsonHelper.fromJson(file, msgType)
  const o: ILooseObject = await testEncodeDecode(msgType, msg)

  expect(o).toEqual(msg)
}, 1000)
