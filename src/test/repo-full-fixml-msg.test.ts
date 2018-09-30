import * as path from 'path'
import { ILooseObject } from '../collections/collection'
import { FixDefinitions } from '../dictionary/definition/fix-definitions'
import { Ascii } from '../buffer/ascii'
import { JsonHelper } from '../util/json-helper'
import { ISessionDescription } from '../transport/session-description'
import { JsFixConfig } from '../config/js-fix-config'
import { MsgParser } from '../buffer/msg-parser'
import { FiXmlParser } from '../buffer/fixml/fixml-parser'
import { MsgView } from '../buffer/msg-view'
import { FixmlEncoder } from '../buffer/fixml/fixml-encoder'
import { ElasticBuffer } from '../buffer/elastic-buffer'
import { StringDuplex } from '../transport/duplex/string-duplex'
import { getDefinitions } from '../util/dictionary-definitions'

let definitions: FixDefinitions
let jsonHelper: JsonHelper
let sessionDescription: ISessionDescription
const root: string = path.join(__dirname, '../../data')

beforeAll(async () => {
  sessionDescription = require(path.join(root, 'session/test-initiator.json'))
  definitions = await getDefinitions('data/fix_repo/fixmlschema_FIX.5.0SP2_EP228')
  jsonHelper = new JsonHelper(definitions)
}, 45000)

async function testEncodeDecode (asObj: ILooseObject, msgType: string): Promise<ILooseObject> {
  // encode to FIXML format from provided object.
  return new Promise(async (resolve, reject) => {
    const fe = new FixmlEncoder(new ElasticBuffer(), definitions)
    fe.encode(asObj, msgType)
    const fixml: string = fe.buffer.toString()
    const config = new JsFixConfig(null, definitions, sessionDescription, Ascii.Pipe)
    const xmlParser: MsgParser = new FiXmlParser(config, new StringDuplex(fixml).readable)
    if (asObj.Batch) {
      xmlParser.on('batch', (msgType: string, v: MsgView) => {
        const o: ILooseObject = v.toObject()
        resolve(o)
      })
    } else {
      xmlParser.on('msg', (msgType: string, v: MsgView) => {
        const o: ILooseObject = v.toObject()
        resolve(o)
      })
    }

    xmlParser.on('error', (e) => {
      reject(e)
    })
  })
}

test('AllocInstrctn fixml object', async () => {
  const msgType: string = 'AllocInstrctn'
  const file: string = path.join(root,'examples/FIXML/cme/alloc/Claiming Firm Requests Sub-allocation with Allocation Instructions/')
  const asObj: ILooseObject = jsonHelper.fromJson(`${file}/object.json`, msgType)
  const o: ILooseObject = await testEncodeDecode(asObj, msgType)
  expect(o).toEqual(asObj)
}, 1000)

test('AllocRpt fixml object', async () => {
  const msgType: string = 'AllocRpt'
  const file: string = path.join(root,'examples/FIXML/cme/alloc/Clearing System Notifies Allocation to the Claiming Firm - Cross-Exchange/')
  const asObj: ILooseObject = jsonHelper.fromJson(`${file}/object.json`, msgType)
  const o: ILooseObject = await testEncodeDecode(asObj, msgType)
  expect(o).toEqual(asObj)
}, 1000)

test('TrdCaptRpt fixml object', async () => {
  const msgType: string = 'TrdCaptRpt'
  const file: string = path.join(root,'examples/FIXML/cme/tc/Delivery Fixed Commodity Swap')
  const asObj: ILooseObject = jsonHelper.fromJson(`${file}/object.json`, msgType)
  const o: ILooseObject = await testEncodeDecode(asObj, msgType)
  expect(o).toEqual(asObj)
}, 1000)

test('MktDataFull fixml object', async () => {
  const msgType: string = 'MktDataFull'
  const file: string = path.join(root,'examples/FIXML/cme/md/futures')
  const asObj: ILooseObject = jsonHelper.fromJson(`${file}/object.json`, msgType)
  const o: ILooseObject = await testEncodeDecode(asObj, msgType)
  expect(o).toEqual(asObj)
}, 1000)

test('MktDataFull settle fixml object', async () => {
  const msgType: string = 'MktDataFull'
  const file: string = path.join(root,'examples/FIXML/cme/md/settle')
  const asObj: ILooseObject = jsonHelper.fromJson(`${file}/object.json`, msgType)
  const o: ILooseObject = await testEncodeDecode(asObj, msgType)
  expect(o).toEqual(asObj)
}, 1000)

test('UserReq logon fixml object', async () => {
  const msgType: string = 'UserReq'
  const file: string = path.join(root,'examples/FIXML/cme/ur/logon')
  const asObj: ILooseObject = jsonHelper.fromJson(`${file}/object.json`, msgType)
  const o: ILooseObject = await testEncodeDecode(asObj, msgType)
  expect(o).toEqual(asObj)
}, 1000)

test('UserReq logoff fixml object', async () => {
  const msgType: string = 'UserReq'
  const file: string = path.join(root,'examples/FIXML/cme/ur/logoff')
  const asObj: ILooseObject = jsonHelper.fromJson(`${file}/object.json`, msgType)
  const o: ILooseObject = await testEncodeDecode(asObj, msgType)
  expect(o).toEqual(asObj)
}, 1000)

test('TrdCaptRpt 2 fixml object', async () => {
  const msgType: string = 'TrdCaptRpt'
  const file: string = path.join(root,'examples/FIXML/cme/tc/Initial Single Side Submission')
  const asObj: ILooseObject = jsonHelper.fromJson(`${file}/object.json`, msgType)
  const o: ILooseObject = await testEncodeDecode(asObj, msgType)
  expect(o).toEqual(asObj)
}, 1000)

test('TrdCaptRpt 3 fixml object', async () => {
  const msgType: string = 'TrdCaptRpt'
  const file: string = path.join(root,'examples/FIXML/cme/tc/Accepted Unmatched')
  const asObj: ILooseObject = jsonHelper.fromJson(`${file}/object.json`, msgType)
  const o: ILooseObject = await testEncodeDecode(asObj, msgType)
  expect(o).toEqual(asObj)
}, 1000)
