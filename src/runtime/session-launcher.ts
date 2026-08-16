import * as path from 'path'
import { IJsFixConfig, IJsFixLogger, JsFixLoggerFactory, JsFixWinstonLogFactory, WinstonLogger } from '../config'
import { FixEntity, FixSession, ISessionDescription, ISessionMsgFactory } from '../transport'
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
    this.logger = this.loggerFactory.logger('launcher', { component: 'SessionLauncher' })
    this.initiatorConfig = initiatorConfig ? this.loadConfig(initiatorConfig) : null
    this.acceptorConfig = acceptorConfig ? this.loadConfig(acceptorConfig) : null
  }

  // the arrow defers to makeSessionMsgFactory at resolve time, so a subclass need
  // only override that one method - no SessionContainer subclass required
  protected sessionContainer: SessionContainer =
    new SessionContainer((d: ISessionDescription) => this.makeSessionMsgFactory(d))

  /**
   * Override to supply this application's own session message factory - the place to
   * put a Logon carrying tags the standard message does not, or a header a
   * counterparty stamps differently.  Return null (the default) for the stock
   * factory.
   *
   * For a Logon that only needs extra fields, prefer the "Logon" block in the session
   * description - it needs no code at all.  Reach for a factory when the values are
   * computed at run time (a signature, a nonce, a token fetched at start up).
   */
  protected makeSessionMsgFactory (_description: ISessionDescription): ISessionMsgFactory | null {
    return null
  }

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

  private acceptorEntity: FixEntity | null = null
  private initiatorEntity: FixEntity | null = null
  private stopRequested: boolean = false

  protected async getAcceptor (sessionContainer: DependencyContainer): Promise<any> {
    if (sessionContainer.isRegistered<FixEntity>(DITokens.FixEntity)) {
      const entity = sessionContainer.resolve<FixEntity>(DITokens.FixEntity)
      this.acceptorEntity = entity
      // a stop can arrive while the container is still being built - the listener has
      // no existence yet to close, so honour the request by never opening it
      if (this.stopRequested) {
        this.logger.info('stop requested before the acceptor started - not listening')
        return this.empty()
      }
      return entity.start()
    } else {
      return this.empty()
    }
  }

  protected async getInitiator (sessionContainer: DependencyContainer): Promise<any> {
    if (sessionContainer.isRegistered<FixEntity>(DITokens.FixEntity)) {
      const entity = sessionContainer.resolve<FixEntity>(DITokens.FixEntity)
      this.initiatorEntity = entity
      if (this.stopRequested) {
        this.logger.info('stop requested before the initiator started - not connecting')
        return this.empty()
      }
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

  /**
   * Stop what this launcher started - close the acceptor's listener, and give up a
   * resilient initiator's attempts to get its transport back.
   *
   * An acceptor is meant to outlive any one counterparty, so nothing closes its
   * listener on its own.  That is right for a venue and wrong for an application
   * which knows it is finished: the listening socket alone keeps node alive, long
   * after every session has logged out and every transport has been harvested.
   *
   * Until now the only caller was the both-roles branch of setup() below, which an
   * application cannot reach once it gives the acceptor a launcher of its own - the
   * usual arrangement as soon as more than one client is involved.  There was then
   * no way to shut a listener down short of killing the process.
   *
   * A resilient initiator had the same problem from the other side: losing the
   * transport schedules another attempt, so it too kept the process alive with no way
   * to call it off.  See issue #72.
   *
   * Safe before start (the request is remembered and neither is opened), and safe to
   * call twice.  run() resolves once the listener has closed and the initiator has
   * given up.
   */
  public stop (): void {
    this.stopRequested = true
    this.stopAcceptor()
    this.stopInitiator()
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
        // resolve the config from the container doing the resolving, not the one
        // captured here.  An acceptor resolves each session from a per-connection
        // child scope which re-registers IJsFixConfig, so this is how an application
        // receives that session's own description, store and message factory.
        container.register<FixSession>(DITokens.FixSession, {
          useFactory: (c) => factory.makeSession(c.resolve<IJsFixConfig>(DITokens.IJsFixConfig))
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
    if (this.acceptorConfig && this.initiatorConfig) {
      // Both mode: client drives the lifecycle. When client finishes,
      // stop the acceptor so the process can exit cleanly.
      await client
      this.logger.info('client finished, stopping acceptor')
      this.stop()
      return true
    }
    return await Promise.all([server, client])
  }

  private stopAcceptor (): void {
    const entity = this.acceptorEntity as any
    if (entity && typeof entity.stop === 'function') {
      entity.stop()
    }
  }

  // only a resilient initiator has anything to call off - a plain one ends with its
  // session, so it has no stop to find here
  private stopInitiator (): void {
    const entity = this.initiatorEntity as any
    if (entity && typeof entity.stop === 'function') {
      entity.stop()
    }
  }

  private loadConfig (config: string | ISessionDescription): ISessionDescription {
    if (typeof config === 'string') {
      return require(path.join(this.root, config))
    }
    return config
  }
}
