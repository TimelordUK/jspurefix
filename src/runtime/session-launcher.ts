import * as path from 'path'
import { IJsFixConfig, IJsFixLogger, JsFixWinstonLogFactory, WinstonLogger } from '../config'
import { ISessionDescription, FixEntity, FixSession } from '../transport'
import { DependencyContainer } from 'tsyringe'
import { EngineFactory } from './engine-factory'
import { SessionContainer } from './session-container'
import { DITokens } from './di-tokens'

const root = '../../'
const logFactory = new JsFixWinstonLogFactory(WinstonLogger.consoleOptions('info'))

export abstract class SessionLauncher {
  protected readonly logger: IJsFixLogger
  protected constructor (public readonly initiatorConfig: string,
                         public readonly acceptorConfig: string = null) {
    this.logger = logFactory.logger('launcher')
  }
  protected sessionContainer: SessionContainer = new SessionContainer()

  private empty (): Promise<any> {
    return new Promise((resolve, _) => {
      setImmediate(() => {
        this.logger.info('resolving an empty promise')
        resolve(null)
      })
    })
  }

  protected getAcceptor (sessionContainer: DependencyContainer): Promise<any> {
    if (sessionContainer.isRegistered<FixEntity>(DITokens.FixEntity)) {
      const entity = sessionContainer.resolve<FixEntity>(DITokens.FixEntity)
      return entity.start()
    } else {
      return this.empty()
    }
  }

  protected getInitiator (sessionContainer: DependencyContainer): Promise<any> {
    if (sessionContainer.isRegistered<FixEntity>(DITokens.FixEntity)) {
      const entity = sessionContainer.resolve<FixEntity>(DITokens.FixEntity)
      return entity.start()
    } else {
      return this.empty()
    }
  }

  protected makeFactory (config: IJsFixConfig): EngineFactory {
    return null
  }

  public run () {
    return new Promise<any>((accept, reject) => {
      const logger = this.logger
      logger.info('launching ..')
      this.setup().then(() => {
        logger.info('.. done')
        accept(true)
      }).catch((e: Error) => {
        logger.error(e)
        reject(e)
      })
    })
  }

  public exec () {
    this.run().then(() => {
      console.log('finished.')
    }).catch(e => {
      console.error(e)
    })
  }

  public isAscii (description: ISessionDescription): boolean {
    return this.sessionContainer.isAscii(description)
  }

  public isInitiator (description: ISessionDescription): boolean {
    return this.sessionContainer.isInitiator(description)
  }

  protected registerApplication (sessionContainer: DependencyContainer): void {
    this.logger.info('bypass register via DI')
  }

  private makeSystem (description: ISessionDescription): Promise<DependencyContainer> {
    this.logger.info(`creating app ${description.application.name} [protocol ${description.application.protocol}]`)
    return this.sessionContainer.makeSystem(description)
  }

  private register (container: DependencyContainer): void {
    const config = container.resolve<IJsFixConfig>(DITokens.IJsFixConfig)
    const factory = this.makeFactory(config)
    if (!factory) {
      this.registerApplication(container)
    } else {
      if (factory.makeSession) {
        container.register<FixSession>(DITokens.FixSession, {
          useFactory: () => factory.makeSession(config)
        })
      }
    }
  }

  private async makeClient (): Promise<any> {
    const description: ISessionDescription = require(path.join(root, this.initiatorConfig))
    const sessionContainer = await this.makeSystem(description)
    this.register(sessionContainer)
    this.logger.info('create initiator')
    return this.getInitiator(sessionContainer)
  }

  private async makeServer (): Promise<any> {
    const description: ISessionDescription = require(path.join(root, this.acceptorConfig))
    const sessionContainer = await this.makeSystem(description)
    this.register(sessionContainer)
    this.logger.info('create acceptor')
    return this.getAcceptor(sessionContainer)
  }

  private async setup () {
    this.sessionContainer.registerGlobal()
    const server = this.initiatorConfig ? this.makeServer() : this.empty()
    const client = this.acceptorConfig ? this.makeClient() : this.empty()
    this.logger.info('launching ....')
    return Promise.all([server, client])
  }
}
