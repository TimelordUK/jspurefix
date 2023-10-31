import 'reflect-metadata'
import * as path from 'path'
import { ILooseObject } from '../../collections/collection'
import { FixDefinitions } from '../../dictionary/definition'
import { JsonHelper } from '../../util'
import { IJsFixConfig, MsgType } from '../../index'
import { Setup } from '../env/setup'
import { testEncodeDecode } from '../env/helper-fn.tst'

let definitions: FixDefinitions
let jsonHelper: JsonHelper
let config: IJsFixConfig
const root: string = path.join(__dirname, '../../../data/examples/FIX.5.0SP2/quickfix')
let setup: Setup

beforeAll(async () => {
  setup = new Setup('session/test-qf50sp2-initiator.json', null)
  await setup.init()
  definitions = setup.definitions
  jsonHelper = new JsonHelper(definitions)
  config = setup.clientConfig
}, 45000)

test('test md snapshot JSON => object => fix => object', async () => {
  const msgType: string = MsgType.MarketDataSnapshotFullRefresh
  const file: string = path.join(root, 'md-data-snapshot/object.json')
  const msg: ILooseObject = jsonHelper.fromJson(file, msgType)
  await expect(testEncodeDecode(config, msgType, msg)).resolves.toEqual(msg)
}, 1000)

test('test md inc snapshot JSON => object => fix => object', async () => {
  const msgType: string = MsgType.MarketDataIncrementalRefresh
  const file: string = path.join(root, 'md-data-inc-snapshot/object.json')
  const msg: ILooseObject = jsonHelper.fromJson(file, msgType)
  await expect(testEncodeDecode(config, msgType, msg)).resolves.toEqual(msg)
}, 1000)
