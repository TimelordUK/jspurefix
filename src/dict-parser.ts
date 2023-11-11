import * as path from 'path'
import { ILooseObject } from './collections/collection'
import { MessageGenerator, JsonHelper, getWords, DefinitionFactory } from './util'
import { MsgView, MsgParser, ElasticBuffer } from './buffer'
import { AsciiChars, AsciiParser, AsciiView } from './buffer/ascii'
import { FiXmlParser, FixmlEncoder } from './buffer/fixml'
import { ReadStream } from 'fs'
import { ISessionDescription, StringDuplex, MsgPayload } from './transport'
import { FixDefinitions } from './dictionary/definition'
import { MsgType } from './types'
import { JsFixWinstonLogFactory, JsFixConfig, WinstonLogger, IJsFixConfig } from './config'
import { BusinessRejectReason, IBusinessMessageReject } from './types/FIXML50SP2'
import * as rp from 'request-promise-native'
import { EnumCompiler, ICompilerSettings, MsgCompiler } from './dictionary/compiler'
import { AsciiMsgTransmitter } from './transport/ascii/ascii-msg-transmitter'

async function testEncodeDecode (): Promise<any> {
  const msgType: string = 'W'
  const root: string = path.join(__dirname, '../')
  const sessionDescription: ISessionDescription = require('../data/session/test-initiator.json')
  const definitions = await new DefinitionFactory().getDefinitions(path.join(root, sessionDescription.application?.dictionary ?? ''))
  const jh: JsonHelper = new JsonHelper(definitions)
  const msg: ILooseObject = jh.fromJson(path.join(root, 'data/examples/FIXML/cme/tc/Initial Single Side Submission/fix.xml'), msgType)
  const config = new JsFixConfig(null, definitions, sessionDescription, AsciiChars.Pipe)
  const session: AsciiMsgTransmitter = new AsciiMsgTransmitter(config)
  const payload: MsgPayload = new MsgPayload(msgType, msg)
  const encoderStream = session.encodeStream
  encoderStream.write(payload)
  session.encodeMessage(msgType, msg)
  const parser: MsgParser = new AsciiParser(config, encoderStream, new ElasticBuffer(160 * 1024))
  const fix: string = session.buffer.toString()
  console.log(fix)
  return await new Promise(async (resolve, reject) => {
    parser.on('msg', (msgType: string, view: AsciiView) => {
      resolve(view.toObject())
    })
    parser.on('error', (e: Error) => {
      reject(e)
    })
  })
}

async function testGenerator (): Promise<any> {
  const root: string = path.join(__dirname, '../')
  const sessionDescription: ISessionDescription = require('../data/session/test-initiator.json')
  const definitions = await new DefinitionFactory().getDefinitions('C:/Users/Stephen/dev/ts/jsfix/data/fix_repo/FIX.4.4/Base')
  const lipsum: string[] = await getWords(path.join(root, 'data/examples/lipsum.txt'))
  const generator: MessageGenerator = new MessageGenerator(lipsum, definitions)
  const msgType: string = MsgType.NewOrderSingle
  const example: ILooseObject = generator.generate(msgType)
  console.log(JSON.stringify(example, null, 4))
  const config: IJsFixConfig = new JsFixConfig(null, definitions, sessionDescription, AsciiChars.Pipe)
  const session: AsciiMsgTransmitter = new AsciiMsgTransmitter(config)
  session.encodeMessage(msgType, example)
  const fix: string = session.buffer.toString()
  const encoderStream = session.encodeStream
  const payload: MsgPayload = new MsgPayload(msgType, example)
  encoderStream.write(payload)
  const parser: MsgParser = new AsciiParser(config, encoderStream, new ElasticBuffer(160 * 1024))
  parser.on('msg', (mt: string, view: MsgView) => {
    console.log(view.toString())
  })
  console.log(fix)
}

/*
fix.xml
Clearing System Confirms Allocation to Executing Firm.xml
Clearing System Confirms Allocation to CME Executing Firm_Cross-exchange.xml
Clearing System Confirms Completed Reversal to Executing Firm.xml
Clearing System Notifies Allocation to the Claiming Firm.xml
fix.xml
Clearing System Notifies Claiming Firm of Completed Reversal.xml
Clearing System Notifies Executing Firm of Alleged Reversal.xml
Executing Firm Un-completes Group-Average_Price.xml
Executing Firm Marks a Trade for Give-up.xml
 */
async function repository (): Promise<any> {
  const root: string = path.join(__dirname, '../')
  const definitions: FixDefinitions = await new DefinitionFactory().getDefinitions('repofixml')
  // cme/alloc/Clearing System Notifies Allocation to the Claiming Firm - Cross-Exchange
  // const file: string = path.join(root,'data/examples/FIXML/cme/alloc/Claiming Firm Requests Sub-allocation with Allocation Instructions/')
  // const file: string = path.join(root,'data/examples/FIXML/cme/md/settle')
  // const file: string = path.join(root, 'data/examples/FIXML/cme/alloc/Clearing System Notifies Allocation to the Claiming Firm - Cross-Exchange/')
  const file: string = path.join(root, 'data/examples/FIXML/cme/tc/Delivery Fixed Commodity Swap/')
  // const file: string = path.join(root, 'data/examples/FIXML/cme/tc/Trading Firm Continued Subscription')
  // const file: string = path.join(root,'data/examples/FIXML/cme/md/futures')
  // const file: string = path.join(root, 'data/examples/FIXML/cme/tc/Delivery Fixed Commodity Swap')
  // const file: string = path.join(root, 'data/examples/FIXML/cme/tc/Initial Single Side Submission/')
  // const file: string = path.join(root, 'data/examples/FIXML/cme/tc/Accepted Unmatched')
  // const file: string = path.join(root, 'data/examples/FIXML/cme/tc/Trading Firm Continued Subscription/')
  // const file: string = path.join(root, 'data/examples/FIXML/om/nso/')
  // const file: string = path.join(root, 'data/examples/FIXML/om/er/')
  const so = definitions.message.get('ExecutionReport')
  const t855 = definitions.simple.get('SecondaryTrdType')

  const reject = {
    Text: 'no response',
    BusinessRejectReason: BusinessRejectReason.ApplicationNotAvailable
  } as IBusinessMessageReject
  const fe = new FixmlEncoder(new ElasticBuffer(), definitions)
  fe.encode(reject, 'BusinessMessageReject')
  const fixml: string = fe.buffer.toString()
  // console.log(fixml)
  const jh: JsonHelper = new JsonHelper(definitions)
  const fs: any = require('fs')
  const readStream: ReadStream = fs.createReadStream(`${file}/fix.xml`)
  const sessionDescription: ISessionDescription = require('../data/session/test-initiator.json')
  const config = new JsFixConfig(null, definitions, sessionDescription, AsciiChars.Pipe)
  const xmlParser: MsgParser = new FiXmlParser(config, readStream)
  xmlParser.on('batch', (msgType: string, v: MsgView) => {
    console.log(`received message ${msgType}`)
    const o: ILooseObject = v.toObject() as ILooseObject
    console.log(JSON.stringify(o, null, 4))
    const fe = new FixmlEncoder(new ElasticBuffer(), definitions)
    fe.encode(o, msgType)
    const fixml: string = fe.buffer.toString()
    console.log(fixml)
    console.log(v.toString())
  })
  xmlParser.on('msg', (msgType: string, v: MsgView) => {
    console.log(`received message ${msgType}`)
    const o: ILooseObject = v.toObject() as ILooseObject
    console.log(JSON.stringify(o, null, 4))
    console.log(v.toString())
    const fe = new FixmlEncoder(new ElasticBuffer(), definitions)
    fe.encode(o, msgType)
    const fixml: string = fe.buffer.toString()
    console.log(fixml)
  })
}

async function runTest (): Promise<any> {
  return await new Promise<any>(async (resolve, reject) => {
    try {
      const res: any = await testGenerator()
      resolve(res)
    } catch (e) {
      console.log(e.message)
      reject(e)
    }
  })
}

async function compileDefinitions (definitionPath: string, outputPath: string): Promise<void> {
  const definitions = await new DefinitionFactory().getDefinitions(definitionPath)
  const compilerSettings: ICompilerSettings = require('../data/compiler.json')
  compilerSettings.output = outputPath
  const msgCompiler: MsgCompiler = new MsgCompiler(definitions, compilerSettings)
  await msgCompiler.generate()
  const enumCompiler: EnumCompiler = new EnumCompiler(definitions, compilerSettings)
  const writeFile = path.join(compilerSettings.output, './enum/all-enum.ts')
  await enumCompiler.generate(writeFile)

  const writeFileTypes = path.join(compilerSettings.output, './enum/msg-type.ts')
  await enumCompiler.generate(writeFile)
}

async function compiler (): Promise<void> {
  // 'C:/Users/Stephen/dev/js/jsfix/data/fix_repo/fixmlschema_FIX.5.0SP2_EP228'
  // await compileDefinitions('data/fix_repo/FIX.4.4/Base', 'C:/Users/Stephen/dev/ts/jsfix/src/types/FIX4.4/repo')
  // await compileDefinitions('data/FIX44.xml', 'C:/Users/Stephen/dev/ts/jsfix/src/types/FIX4.4/quickfix')
  await compileDefinitions('data/fix_repo/fixmlschema_FIX.5.0SP2_EP228', 'C:/Users/Stephen/dev/ts/jsfix/src/types/FIXML50SP2')
}

async function generateMessage (): Promise<void> {
  await testGenerator()
}

async function decode (): Promise<any> {
  const definitions: FixDefinitions = await new DefinitionFactory().getDefinitions('data/fix_repo/FIX.4.4/Base')
  const txt = '8=FIX4.4|9=0001022|35=AE|49=init-comp|56=accept-comp|34=1|57=fix|52=20180909-14:22:09.841|571=Lorem|487=23513|856=1|568=ipsum|828=6|855=23619|830=dolor|150=F|748=17140|912=N|325=N|263=1|881=sit|818=amet,|820=consectetur|880=adipiscing|17=elit.|39=3|527=Nunc|570=N|423=8|55=odio|65=orci,|48=blandit|22=3|460=4|461=vel|167=MPT|762=semper|200=sed,|541=20180909|201=0|224=20180909|225=20180909|227=-8796.1|228=-23.537|255=bibendum|543=cursus|470=lectus.|471=Aenean|472=vel|240=20180909|202=891.7|947=-2928.1|231=5.7237|223=-1894.1|106=diam|348=9|349=6YYz0zu5s|350=8|351=TuH3tTNd|691=magna.|667=Aenean|875=99|876=et|873=20180909|874=20180909|913=viverra|914=leo,|915=20180909|916=20180909|919=0|898=0.5594|38=96682|152=19226|516=9.1251|854=0|235=PREVCLOSE|236=-2833.5|701=20180909|696=20180909|697=-6.095|698=26303|823=non|32=9253|31=2065.4|194=-73.233|30=iaculis|75=20180909|715=20180909|6=5.9279|218=0.0001953|221=neque.|222=Nullam|663=16216|699=arcu|761=lectus,|824=dignissim|63=3|64=20180909|573=0|574=M3|797=Y|852=Y|853=3|10=16|'
  const startsAt: Date = new Date()
  const sessionDescription: ISessionDescription = require('../data/session/test-initiator.json')
  const config = new JsFixConfig(null, definitions, sessionDescription, AsciiChars.Pipe)
  let i = 0
  const repeats = 1
  const asciiParser: MsgParser = new AsciiParser(config, new StringDuplex(txt.repeat(repeats)).readable, new ElasticBuffer(160 * 1024))
  asciiParser.on('msg', (msgType: string, v: MsgView) => {
    ++i
    console.log(v.toJson())
    if (i === repeats) {
      const elapsed: number = new Date().getTime() - startsAt.getTime()
      console.log(`elapsed ms ${elapsed} ${(elapsed / repeats) * 1000} micros per msg`)
    }
  })
}

async function http (): Promise<any> {
  const sessionDescription: ISessionDescription = require('../data/session/test-http-acceptor.json')
  const definitions = await new DefinitionFactory().getDefinitions(sessionDescription.application?.dictionary ?? '')
  const logFactory = new JsFixWinstonLogFactory(WinstonLogger.consoleOptions('info'))
  const config = new JsFixConfig(null, definitions, sessionDescription, AsciiChars.Pipe, logFactory)
  // const acceptor = acceptor(config)
  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<FIXML v="5.0 SP2" s="20090815" xv="109" cv="CME.0001">\n' +
    '    <UserReq UserReqID="123456" UserReqTyp="1" Username="user123" Password="User!Pass5">\n' +
    '        <Hdr SID="BRKR" SSub="user123" TID="CME" TSub="CPAPI"/>\n' +
    '    </UserReq>\n' +
    '</FIXML>'
  // acceptor.listen()
  rp({
    method: 'POST',
    uri: 'http://localhost:2343/session',
    body: {
      fixml: xml
    },
    json: true // Automatically stringifies the body to JSON
  }).then(function (parsedBody) {
    console.log(parsedBody)
    // POST succeeded...
  })
    .catch((err: Error) => {
      console.log(err)
      // POST failed...
    })
}

// http()
// decode()
// generateMessage()
// compiler()
// stronglyTyped()
// streamExample()
// testEncodeDecode()
repository().then(() => {}).catch(e => {
  console.error(e)
})
// testEncodeDecode()
// runTest();
// testSocket()
// testRead();
