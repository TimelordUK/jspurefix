import * as path from 'path'
import { AsciiParser } from '../buffer/ascii/ascii-parser'
import { AsciiView } from '../buffer/ascii/ascii-view'
import { ILooseObject } from '../collections/collection'
import { FixDefinitions } from '../dictionary/definition'
import { Ascii } from '../buffer'
import { JsonHelper, getDefinitions } from '../util'
import { AsciiMsgTransmitter } from '../transport/ascii'
import { ISessionDescription, SessionMsgFactory } from '../transport'
import { JsFixConfig } from '../config'

let definitions: FixDefinitions
let jsonHelper: JsonHelper
let session: AsciiMsgTransmitter
const root: string = path.join(__dirname, '../../data')

beforeAll(async () => {
  const sessionDescription: ISessionDescription = require(path.join(root, 'session/test-initiator.json'))
  definitions = await getDefinitions(sessionDescription.application.dictionary)
  jsonHelper = new JsonHelper(definitions)
  const config = new JsFixConfig(new SessionMsgFactory(sessionDescription), definitions, sessionDescription, Ascii.Pipe)
  session = new AsciiMsgTransmitter(config)
}, 45000)

async function testEncodeDecode (msgType: string, msg: ILooseObject): Promise<ILooseObject> {
  // encode to FIX format from provided object.
  return new Promise(async (resolve, reject) => {
    const parser: AsciiParser = new AsciiParser(definitions, session.encodeStream, Ascii.Pipe)
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

test('AE object to ascii fix to object', async () => {
  const msgType: string = 'AE'
  const file: string = path.join(root, 'examples/FIX.4.4/repo/trade-capture/object.json')
  const msg: ILooseObject = jsonHelper.fromJson(file, msgType)
  const o: ILooseObject = await testEncodeDecode(msgType, msg)

  await expect(o).toEqual(msg)
}, 1000)

test('d object to ascii fix to object', async () => {
  const msgType: string = 'd'
  const file: string = path.join(root, 'examples/FIX.4.4/repo/security-definition/object.json')
  const msg: ILooseObject = jsonHelper.fromJson(file, msgType)
  const o: ILooseObject = await testEncodeDecode(msgType, msg)

  await expect(o).toEqual(msg)
}, 1000)

test('D object to ascii fix to object', async () => {
  const msgType: string = 'D'
  const file: string = path.join(root, 'examples/FIX.4.4/repo/new-order-single/object.json')
  const msg: ILooseObject = jsonHelper.fromJson(file, msgType)
  const o: ILooseObject = await testEncodeDecode(msgType, msg)

  await expect(o).toEqual(msg)
}, 1000)
