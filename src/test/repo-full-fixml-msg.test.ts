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
    xmlParser.on('msg', (msgType: string, v: MsgView) => {
      const o: ILooseObject = v.toObject()
      resolve(o)
    })
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
