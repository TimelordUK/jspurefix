import { FixDefinitions } from '../dictionary/definition'
import { DITokens } from '../runtime/di-tokens'
import { SessionContainer } from '../runtime/'
import { ISessionDescription, ISessionMsgFactory } from '../transport'
import { DependencyContainer } from 'tsyringe'
import { IJsFixConfig } from '../config'
import * as path from 'path'
const root: string = path.join(__dirname, '../../data')

export class TestEntity {
  public readonly fixContainer: SessionContainer = new SessionContainer()
  public readonly description: ISessionDescription
  public sessionContainer: DependencyContainer
  public config: IJsFixConfig

  public sessionMsgFactory: ISessionMsgFactory

  constructor (public readonly sessionPath: string) {
    this.description = require(path.join(root, this.sessionPath))
  }

  async make () {
    this.fixContainer.reset()
    this.fixContainer.registerGlobal()
    this.sessionContainer = await this.fixContainer.makeSystem(this.description)
    this.config = this.sessionContainer.resolve<IJsFixConfig>(DITokens.IJsFixConfig)
    this.config.delimiter = this.config.logDelimiter
    this.sessionMsgFactory = this.sessionContainer.resolve<ISessionMsgFactory>(DITokens.ISessionMsgFactory)
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
               public readonly serverPath: string = 'session/test-acceptor.json') {

    this.client = new TestEntity(clientPath)
    if (serverPath) {
      this.server = new TestEntity(serverPath)
    }
  }

  async init () {
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
