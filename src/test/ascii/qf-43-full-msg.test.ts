import 'reflect-metadata'
import * as path from 'path'
import { ILooseObject } from '../../collections/collection'
import { FixDefinitions } from '../../dictionary/definition'
import { JsonHelper } from '../../util'
import { FixVersion, IJsFixConfig, MsgType } from '../../index'
import { Setup } from '../env/setup'
import { testEncodeDecode } from '../env/helper-fn.tst'

let definitions: FixDefinitions
let jsonHelper: JsonHelper
let config: IJsFixConfig
const root: string = path.join(__dirname, '../../../data/examples/FIX.4.3/quickfix')
let setup: Setup

test('check definitions version', () => {
  expect(setup.definitions.getMajor()).toEqual(4)
  expect(setup.definitions.getMinor()).toEqual(3)
  expect(setup.definitions.getServicePack()).toEqual(0)
  expect(setup.definitions.version).toEqual(FixVersion.FIX43)
})

beforeAll(async () => {
  setup = new Setup('session/test-qf43-initiator.json', null)
  await setup.init()
  definitions = setup.definitions
  jsonHelper = new JsonHelper(definitions)
  config = setup.clientConfig
}, 45000)

test('test new order single JSON => object => fix => object', async () => {
  const msgType: string = MsgType.NewOrderSingle
  const file: string = path.join(root, 'new-order-single/object.json')
  const msg: ILooseObject = jsonHelper.fromJson(file, msgType)
  await expect(testEncodeDecode(config, msgType, msg)).resolves.toEqual(msg)
}, 1000)
