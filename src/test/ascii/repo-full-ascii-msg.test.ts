import 'reflect-metadata'
import * as path from 'path'
import { ILooseObject } from '../../collections/collection'
import { FixDefinitions } from '../../dictionary/definition'
import { JsonHelper } from '../../util'
import { IJsFixConfig } from '../../config'
import { MsgType } from '../../index'
import { AsciiMsgTransmitter } from '../../transport/ascii/ascii-msg-transmitter'
import { Setup } from '../env/setup'
import { DITokens } from '../../runtime'
import { testEncodeDecode } from '../env/helper-fn.tst'

let definitions: FixDefinitions
let jsonHelper: JsonHelper
let session: AsciiMsgTransmitter
const root: string = path.join(__dirname, '../../../data/examples/FIX.4.4/repo/')
let config: IJsFixConfig
let setup: Setup
beforeAll(async () => {
  setup = new Setup()
  await setup.init()
  definitions = setup.definitions
  jsonHelper = new JsonHelper(definitions)
  config = setup.clientConfig
  session = setup.clientSessionContainer.resolve<AsciiMsgTransmitter>(DITokens.MsgTransmitter)
}, 30000)

test('check 1 digit checksum format', async () => {
  const factory = session.config.factory
  const cs = factory?.trailer(1)
  expect(cs?.CheckSum).toEqual('001')
})

test('check 2 digit checksum format', async () => {
  const factory = session.config.factory
  const cs = factory?.trailer(10)
  expect(cs?.CheckSum).toEqual('010')
})

test('check 3 digit checksum format', async () => {
  const factory = session.config.factory
  const cs = factory?.trailer(100)
  expect(cs?.CheckSum).toEqual('100')
})

test('AE object to ascii fix to object', async () => {
  const msgType: string = MsgType.TradeCaptureReport
  const file: string = path.join(root, 'trade-capture/object.json')
  const msg: ILooseObject = jsonHelper.fromJson(file, msgType)
  const o = await testEncodeDecode(config, msgType, msg)

  expect(o).toEqual(msg)
}, 60000)

test('d object to ascii fix to object', async () => {
  const msgType: string = MsgType.SecurityDefinition
  const file: string = path.join(root, 'security-definition/object.json')
  const msg: ILooseObject = jsonHelper.fromJson(file, msgType)
  const o = await testEncodeDecode(config, msgType, msg)

  expect(o).toEqual(msg)
}, 1000)

test('D object to ascii fix to object', async () => {
  const msgType: string = MsgType.NewOrderSingle
  const file: string = path.join(root, 'new-order-single/object.json')
  const msg: ILooseObject = jsonHelper.fromJson(file, msgType)
  const o = await testEncodeDecode(config, msgType, msg)

  expect(o).toEqual(msg)
}, 1000)
