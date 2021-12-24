import { FixDefinitions } from '../dictionary/definition'
import { DITokens, SessionContainer } from '../runtime'
import { ISessionDescription } from '../transport'
import { DependencyContainer } from 'tsyringe'
import { IJsFixConfig } from '../config'
import * as path from 'path'
const root: string = path.join(__dirname, '../../data')

export class Setup {
  public definitions: FixDefinitions
  public readonly fixContainer: SessionContainer = new SessionContainer()
  public readonly clientDescription: ISessionDescription
  public readonly serverDescription: ISessionDescription
  public clientSessionContainer: DependencyContainer
  public serverSessionContainer: DependencyContainer
  public clientConfig: IJsFixConfig
  public serverConfig: IJsFixConfig

  constructor (public readonly clientPath: string = 'session/test-initiator.json',
               public readonly serverPath: string = 'session/test-initiator.json') {
    this.clientDescription = require(path.join(root, this.clientPath))
    this.serverDescription = require(path.join(root, this.serverPath))
  }

  async init () {
    this.fixContainer.reset()
    this.fixContainer.registerGlobal()
    this.clientSessionContainer = await this.fixContainer.makeSystem(this.clientDescription)
    this.serverSessionContainer = await this.fixContainer.makeSystem(this.serverDescription)
    this.serverConfig = this.serverSessionContainer.resolve<IJsFixConfig>(DITokens.IJsFixConfig)
    this.clientConfig = this.clientSessionContainer.resolve<IJsFixConfig>(DITokens.IJsFixConfig)
    this.serverConfig.delimiter = this.serverConfig.logDelimiter
    this.clientConfig.delimiter = this.clientConfig.logDelimiter
    this.definitions = this.clientConfig.definitions
  }
}
