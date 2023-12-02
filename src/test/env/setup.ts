import { FixDefinitions } from '../../dictionary/definition'
import { DITokens } from '../../runtime/di-tokens'
import { SessionContainer } from '../../runtime'
import {
  ISessionDescription,
  ISessionMsgFactory,
  MsgTransmitter,
  StringDuplex,
  StringDuplexTraits
} from '../../transport'
import { DependencyContainer } from 'tsyringe'
import { IJsFixConfig } from '../../config'
import * as path from 'path'
import { FileReplayer } from '../../util'
import { ElasticBuffer, MsgView } from '../../buffer'
import { AsciiParser } from '../../buffer/ascii'
import { ParsingResult } from './parsing-result'
const root: string = path.join(__dirname, '../../../data')

export class TestEntity {
  public readonly fixContainer: SessionContainer = new SessionContainer()
  public readonly description: ISessionDescription
  public sessionContainer: DependencyContainer
  public config: IJsFixConfig
  public replayer: FileReplayer
  public rxBuffer: ElasticBuffer
  public txBuffer: ElasticBuffer
  public transmitter: MsgTransmitter

  public sessionMsgFactory: ISessionMsgFactory

  constructor (public readonly sessionPath: string) {
    this.description = require(path.join(root, this.sessionPath))
  }

  async getViews (fix: string = 'examples/FIX.4.4/fix.txt'): Promise<MsgView[]> {
    return await this.replayer.replayFixFile(path.join(root, fix))
  }

  getAsciiParser (text: string, chunks: boolean = false): AsciiParser {
    const traits = chunks ? StringDuplexTraits.Hunked | StringDuplexTraits.Terminate : StringDuplexTraits.Terminate
    return new AsciiParser(this.config, new StringDuplex(text, traits).readable, this.rxBuffer)
  }

  async parseText (text: string, chunks: boolean = false): Promise<ParsingResult> {
    return await new Promise<any>((resolve, reject) => {
      const parser = this.getAsciiParser(text, chunks)
      parser.on('error', (e: Error) => {
        reject(e)
      })
      parser.on('msg', (msgType: string, view: MsgView) => {
        resolve(new ParsingResult('msg', msgType, view.clone(), parser.state.elasticBuffer.toString(), parser))
      })
      parser.on('done', () => {
        resolve(new ParsingResult('done', null, null, parser.state.elasticBuffer.toString(), parser))
      })
    })
  }

  async make (): Promise<void> {
    this.fixContainer.reset()
    this.fixContainer.registerGlobal('error')
    this.sessionContainer = await this.fixContainer.makeSystem(this.description)
    const container = this.sessionContainer
    this.config = container.resolve<IJsFixConfig>(DITokens.IJsFixConfig)
    this.config.delimiter = this.config.logDelimiter
    this.replayer = new FileReplayer(this.config)

    this.sessionMsgFactory = container.resolve<ISessionMsgFactory>(DITokens.ISessionMsgFactory)
    if (container.isRegistered(DITokens.ParseBuffer)) {
      this.rxBuffer = container.resolve<ElasticBuffer>(DITokens.ParseBuffer)
    }
    if (container.isRegistered(DITokens.TransmitBuffer)) {
      this.txBuffer = container.resolve<ElasticBuffer>(DITokens.TransmitBuffer)
    }
    if (container.isRegistered(DITokens.MsgTransmitter)) {
      this.transmitter = container.resolve<MsgTransmitter>(DITokens.MsgTransmitter)
    }
  }
}

export class Setup {
  public definitions: FixDefinitions
  client: TestEntity
  server: TestEntity
  clientConfig: IJsFixConfig
  serverConfig: IJsFixConfig
  clientDescription: ISessionDescription
  clientSessionContainer: DependencyContainer

  constructor (public readonly clientPath: string = 'session/test-initiator.json',
    public readonly serverPath: string | null = 'session/test-acceptor.json') {
    this.client = new TestEntity(clientPath)
    if (serverPath) {
      this.server = new TestEntity(serverPath)
    }
  }

  async init (): Promise<void> {
    if (this.client) {
      await this.client.make()
      this.definitions = this.client.config.definitions
      this.clientConfig = this.client.config
      this.clientSessionContainer = this.client.sessionContainer
      this.clientDescription = this.client.description
    }
    if (this.server) {
      await this.server.make()
      this.serverConfig = this.server.config
    }
  }
}
