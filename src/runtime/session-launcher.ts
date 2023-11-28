import * as path from 'path'
import { IJsFixConfig, IJsFixLogger, JsFixLoggerFactory, JsFixWinstonLogFactory, WinstonLogger } from '../config'
import { FixEntity, FixSession, ISessionDescription } from '../transport'
import { DependencyContainer } from 'tsyringe'
import { EngineFactory } from './engine-factory'
import { SessionContainer } from './session-container'
import { DITokens } from './di-tokens'

const defaultLoggerFactory = new JsFixWinstonLogFactory(WinstonLogger.consoleOptions('info'))

export abstract class SessionLauncher {
  public root: string = '../../'
  protected readonly logger: IJsFixLogger
  public readonly initiatorConfig: ISessionDescription | null
  public readonly acceptorConfig: ISessionDescription | null

  protected constructor (
    initiatorConfig: string | ISessionDescription | null = null,
    acceptorConfig: string | ISessionDescription | null = null,
    private readonly loggerFactory: JsFixLoggerFactory = defaultLoggerFactory
  ) {
    this.logger = this.loggerFactory.logger('launcher')
    this.initiatorConfig = initiatorConfig ? this.loadConfig(initiatorConfig) : null
    this.acceptorConfig = acceptorConfig ? this.loadConfig(acceptorConfig) : null
  }

  protected sessionContainer: SessionContainer = new SessionContainer()

  private async empty (): Promise<any> {
    return await new Promise((resolve, reject) => {
      try {
        setImmediate(() => {
          this.logger.info('resolving an empty promise')
          resolve(null)
        })
      } catch (e) {
        reject(e)
      }
    })
  }

  protected async getAcceptor (sessionContainer: DependencyContainer): Promise<any> {
    if (sessionContainer.isRegistered<FixEntity>(DITokens.FixEntity)) {
      const entity = sessionContainer.resolve<FixEntity>(DITokens.FixEntity)
      return entity.start()
    } else {
      return this.empty()
    }
  }

  protected async getInitiator (sessionContainer: DependencyContainer): Promise<any> {
    if (sessionContainer.isRegistered<FixEntity>(DITokens.FixEntity)) {
      const entity = sessionContainer.resolve<FixEntity>(DITokens.FixEntity)
      return entity.start()
    } else {
      return this.empty()
    }
  }

  /**
   * provide a factory which will be invoked with a config where an instance of the application
   * should be constructed and returned.
   * @param config to be provided to the constucted application representing this session
   * @protected
   */
  protected makeFactory (config: IJsFixConfig): EngineFactory | null {
    return null
  }

  public async run (): Promise<boolean> {
    return await new Promise<any>((resolve, reject) => {
      const logger = this.logger
      logger.info('launching ..')
      this.setup().then(() => {
        logger.info('.. done')
        resolve(true)
      }).catch((e: Error) => {
        logger.error(e)
        reject(e)
      })
    })
  }

  public exec (): void {
    this.run().then(() => {
      console.log('finished.')
    }).catch(e => {
      console.error(e)
    })
  }

  /**
   * is this session config representing an ascii based session
   * @param description config to be tested.
   */
  public isAscii (description: ISessionDescription): boolean {
    return this.sessionContainer.isAscii(description)
  }

  /**
   * is this session config representing an initiator based session
   * @param description config to be tested.
   */
  public isInitiator (description: ISessionDescription): boolean {
    return this.sessionContainer.isInitiator(description)
  }

  protected registerApplication (_: DependencyContainer): void {
    this.logger.info('bypass register via DI')
  }

  private async makeSystem (description: ISessionDescription): Promise<DependencyContainer> {
    const name = description.application?.name ?? 'na'
    const protocol = description.application?.protocol ?? 'ascii'
    this.logger.info(`creating app ${name} [protocol ${protocol}]`)
    return await this.sessionContainer.makeSystem(description)
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
    if (!this.initiatorConfig) return
    const sessionContainer = await this.makeSystem(this.initiatorConfig)
    this.register(sessionContainer)
    this.logger.info('create initiator')
    return await this.getInitiator(sessionContainer)
  }

  private async makeServer (): Promise<any> {
    if (!this.acceptorConfig) return
    const sessionContainer = await this.makeSystem(this.acceptorConfig)
    this.register(sessionContainer)
    this.logger.info('create acceptor')
    return await this.getAcceptor(sessionContainer)
  }

  async serverOrEmpty (): Promise<any> {
    return this.acceptorConfig ? this.makeServer() : this.empty()
  }

  async clientOrEmpty (): Promise<any> {
    return this.initiatorConfig ? this.makeClient() : this.empty()
  }

  private async setup (): Promise<any> {
    this.sessionContainer.registerGlobal(this.loggerFactory)
    const server = this.serverOrEmpty()
    const client = this.clientOrEmpty()
    this.logger.info('launching ....')
    return await Promise.all([server, client])
  }

  private loadConfig (config: string | ISessionDescription): ISessionDescription {
    if (typeof config === 'string') {
      return require(path.join(this.root, config))
    }
    return config
  }
}
