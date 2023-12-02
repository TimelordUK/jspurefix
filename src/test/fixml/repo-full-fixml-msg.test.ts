import 'reflect-metadata'

import * as path from 'path'
import { ILooseObject } from '../../collections/collection'
import { FixDefinitions } from '../../dictionary/definition'
import { ISessionDescription, StringDuplex } from '../../transport'
import { JsFixConfig } from '../../config'
import { MsgView, ElasticBuffer, MsgParser } from '../../buffer'
import { AsciiChars } from '../../buffer/ascii'
import { FixmlEncoder, FiXmlParser } from '../../buffer/fixml'
import { DefinitionFactory, JsonHelper } from '../../util'
import { Setup } from '../env/setup'
import { FixVersion } from '../../dictionary'

let definitions: FixDefinitions
let jsonHelper: JsonHelper
let sessionDescription: ISessionDescription
const root: string = path.join(__dirname, '../../../data/examples/FIXML')
let setup: Setup

beforeAll(async () => {
  setup = new Setup('session/test-initiator.json', null)
  await setup.init()
  sessionDescription = setup.client.description
  definitions = await new DefinitionFactory().getDefinitions('repofixml')
  jsonHelper = new JsonHelper(definitions)
}, 45000)

async function testEncodeDecode (asObj: ILooseObject, msgType: string): Promise<ILooseObject> {
  // encode to FIXML format from provided object.
  return await new Promise(async (resolve, reject) => {
    const fe = new FixmlEncoder(new ElasticBuffer(), definitions)
    fe.encode(asObj, msgType)
    const fixml: string = fe.buffer.toString()
    const config = new JsFixConfig(null, definitions, sessionDescription, AsciiChars.Pipe)
    const xmlParser: MsgParser = new FiXmlParser(config, new StringDuplex(fixml).readable)
    if (asObj.Batch) {
      xmlParser.on('batch', (_: string, v: MsgView) => {
        const o: ILooseObject = v.toObject() as ILooseObject
        resolve(o)
      })
    } else {
      xmlParser.on('msg', (_: string, v: MsgView) => {
        const o: ILooseObject = v.toObject() as ILooseObject
        resolve(o)
      })
    }

    xmlParser.on('error', (e) => {
      reject(e)
    })
  })
}

test('check definitions version', () => {
  expect(definitions.getMajor()).toEqual(5)
  expect(definitions.getMinor()).toEqual(0)
  expect(definitions.getServicePack()).toEqual(2)
  expect(definitions.version).toEqual(FixVersion.FIXML50SP2)
})

test('MktDataFull settle fixml object', async () => {
  const msgType: string = 'MktDataFull'
  const file: string = path.join(root, 'cme/md/settle')
  const asObj: ILooseObject = jsonHelper.fromJson(`${file}/object.json`, msgType)
  const o: ILooseObject = await testEncodeDecode(asObj, msgType)
  expect(o).toEqual(asObj)
}, 1000)

test('AllocInstrctn fixml object', async () => {
  const msgType: string = 'AllocInstrctn'
  const file: string = path.join(root, 'cme/alloc/Claiming Firm Requests Sub-allocation with Allocation Instructions/')
  const asObj: ILooseObject = jsonHelper.fromJson(`${file}/object.json`, msgType)
  const o: ILooseObject = await testEncodeDecode(asObj, msgType)
  expect(o).toEqual(asObj)
}, 1000)

test('AllocRpt fixml object', async () => {
  const msgType: string = 'AllocRpt'
  const file: string = path.join(root, 'cme/alloc/Clearing System Notifies Allocation to the Claiming Firm - Cross-Exchange/')
  const asObj: ILooseObject = jsonHelper.fromJson(`${file}/object.json`, msgType)
  const o: ILooseObject = await testEncodeDecode(asObj, msgType)
  expect(o).toEqual(asObj)
}, 1000)

test('TrdCaptRpt fixml object', async () => {
  const msgType: string = 'TrdCaptRpt'
  const file: string = path.join(root, 'cme/tc/Delivery Fixed Commodity Swap')
  const asObj: ILooseObject = jsonHelper.fromJson(`${file}/object.json`, msgType)
  const o: ILooseObject = await testEncodeDecode(asObj, msgType)
  expect(o).toEqual(asObj)
}, 1000)

test('MktDataFull fixml object', async () => {
  const msgType: string = 'MktDataFull'
  const file: string = path.join(root, 'cme/md/futures')
  const asObj: ILooseObject = jsonHelper.fromJson(`${file}/object.json`, msgType)
  const o: ILooseObject = await testEncodeDecode(asObj, msgType)
  expect(o).toEqual(asObj)
}, 1000)

test('UserReq logon fixml object', async () => {
  const msgType: string = 'UserReq'
  const file: string = path.join(root, 'cme/ur/logon')
  const asObj: ILooseObject = jsonHelper.fromJson(`${file}/object.json`, msgType)
  const o: ILooseObject = await testEncodeDecode(asObj, msgType)
  expect(o).toEqual(asObj)
}, 1000)

test('UserReq logoff fixml object', async () => {
  const msgType: string = 'UserReq'
  const file: string = path.join(root, 'cme/ur/logoff')
  const asObj: ILooseObject = jsonHelper.fromJson(`${file}/object.json`, msgType)
  const o: ILooseObject = await testEncodeDecode(asObj, msgType)
  expect(o).toEqual(asObj)
}, 1000)

test('TrdCaptRpt 2 fixml object', async () => {
  const msgType: string = 'TrdCaptRpt'
  const file: string = path.join(root, 'cme/tc/Initial Single Side Submission')
  const asObj: ILooseObject = jsonHelper.fromJson(`${file}/object.json`, msgType)
  const o: ILooseObject = await testEncodeDecode(asObj, msgType)
  expect(o).toEqual(asObj)
}, 1000)

test('TrdCaptRpt 3 fixml object', async () => {
  const msgType: string = 'TrdCaptRpt'
  const file: string = path.join(root, 'cme/tc/Accepted Unmatched')
  const asObj: ILooseObject = jsonHelper.fromJson(`${file}/object.json`, msgType)
  const o: ILooseObject = await testEncodeDecode(asObj, msgType)
  expect(o).toEqual(asObj)
}, 1000)

test('TrdCaptRptReq fixml object', async () => {
  const msgType: string = 'TrdCaptRptReq'
  const file: string = path.join(root, 'cme/tc/Trading Firm Continued Subscription')
  const asObj: ILooseObject = jsonHelper.fromJson(`${file}/object.json`, msgType)
  const o: ILooseObject = await testEncodeDecode(asObj, msgType)
  expect(o).toEqual(asObj)
}, 1000)

test('Order fixml object', async () => {
  const msgType: string = 'Order'
  const file: string = path.join(root, 'om/nso')
  const asObj: ILooseObject = jsonHelper.fromJson(`${file}/object.json`, msgType)
  const o: ILooseObject = await testEncodeDecode(asObj, msgType)
  expect(o).toEqual(asObj)
}, 1000)

test('ExecRpt fixml object', async () => {
  const msgType: string = 'ExecRpt'
  const file: string = path.join(root, 'om/er')
  const asObj: ILooseObject = jsonHelper.fromJson(`${file}/object.json`, msgType)
  const o: ILooseObject = await testEncodeDecode(asObj, msgType)
  expect(o).toEqual(asObj)
}, 1000)
