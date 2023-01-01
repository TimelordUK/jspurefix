import 'reflect-metadata'
import * as path from 'path'
import { AsciiParser, AsciiView } from '../../buffer/ascii'
import { ILooseObject } from '../../collections/collection'
import { FixDefinitions } from '../../dictionary/definition'
import { JsonHelper } from '../../util'
import { ElasticBuffer, IJsFixConfig, MsgType } from '../../index'
import { AsciiMsgTransmitter } from '../../transport/ascii/ascii-msg-transmitter'
import { Setup } from '../env/setup'
import { DITokens } from '../../runtime'
import { ParsingResult } from '../env/parsing-result'

let definitions: FixDefinitions
let jsonHelper: JsonHelper
let config: IJsFixConfig
const root: string = path.join(__dirname, '../../../data/examples/FIX.4.4/quickfix')
let setup: Setup

beforeAll(async () => {
  setup = new Setup('session/qf-fix44.json', null)
  await setup.init()
  definitions = setup.definitions
  jsonHelper = new JsonHelper(definitions)
  config = setup.clientConfig
}, 45000)

async function testEncodeDecode (msgType: string, msg: ILooseObject): Promise<ILooseObject> {
  // encode to FIX format from provided object.
  return await new Promise(async (resolve, reject) => {
    const session: AsciiMsgTransmitter = new AsciiMsgTransmitter(config)
    const parseBuffer = config.sessionContainer.resolve<ElasticBuffer>(DITokens.ParseBuffer)
    const parser: AsciiParser = new AsciiParser(config, session.encodeStream, parseBuffer)
    parser.on('msg', (msgType: string, view: AsciiView) => {
      const o = view.toObject()
      delete o.StandardHeader
      delete o.StandardTrailer
      resolve(o)
    })
    parser.on('error', (e: Error) => {
      reject(e)
    })
    session.send(msgType, msg)
  })
}

test('test logon JSON => object => fix => object', async () => {
  const msgType: string = MsgType.Logon
  const file: string = path.join(root, 'logon/object.json')
  const msg: ILooseObject = jsonHelper.fromJson(file, msgType)
  await expect(testEncodeDecode(msgType, msg)).resolves.toEqual(msg)
}, 1000)

test('test execution report JSON => object => fix => object', async () => {
  const msgType: string = MsgType.ExecutionReport
  const file: string = path.join(root, 'execution-report/object.json')
  const msg: ILooseObject = jsonHelper.fromJson(file, msgType)
  await expect(testEncodeDecode(msgType, msg)).resolves.toEqual(msg)
}, 2000)

test('test order cxl reject JSON => object => fix => object', async () => {
  const msgType: string = MsgType.OrderCancelReject
  const file: string = path.join(root, 'order-cancel-reject/object.json')
  const msg: ILooseObject = jsonHelper.fromJson(file, msgType)
  await expect(testEncodeDecode(msgType, msg)).resolves.toEqual(msg)
}, 1000)

test('test quote request JSON => object => fix => object', async () => {
  const msgType: string = MsgType.QuoteRequest
  const file: string = path.join(root, 'quote-request/object.json')
  const msg: ILooseObject = jsonHelper.fromJson(file, msgType)
  await expect(testEncodeDecode(msgType, msg)).resolves.toEqual(msg)
}, 1000)

test('test md request JSON => object => fix => object', async () => {
  const msgType: string = MsgType.MarketDataSnapshotFullRefresh
  const file: string = path.join(root, 'md-data-snapshot/object.json')
  const msg: ILooseObject = jsonHelper.fromJson(file, msgType)
  await expect(testEncodeDecode(msgType, msg)).resolves.toEqual(msg)
}, 1000)

test('parse MD snapshot msg', async () => {
  const msg = '8=FIX.4.4|9=224|35=W|34=8|49=TEST|56=TEST|52=20220621-17:16:16.414|262=#GBPUSD#0#|55=GBPUSD|268=3|269=0|270=1.22759|271=1|63=0|272=20220623|768=0|269=1|270=1.22759|271=1|63=0|272=20220623|768=0|269=H|270=1.22759|63=0|272=20220623|768=0|10=066|'
  const res: ParsingResult = await setup.client.parseText(msg)
  expect(res.event).toEqual('msg')
  expect(res.msgType).toEqual(MsgType.MarketDataSnapshotFullRefresh)
  const v2 = res.view?.getView('MDFullGrp')
  const o = v2?.toObject()
  expect(o).toBeTruthy()
  // console.log(JSON.stringify(o, null, 4))
})
