import * as path from 'path'
import { IJsFixLogger, JsFixWinstonLogFactory, WinstonLogger } from '../config'
import { ISessionDescription, FixEntity } from '../transport'
import { DependencyContainer } from 'tsyringe'
import { SessionContainer, DITokens } from '../runtime'

const root = '../../'
const logFactory = new JsFixWinstonLogFactory(WinstonLogger.consoleOptions('info'))

export abstract class Launcher {
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

  protected abstract registerApplication (sessionContainer: DependencyContainer): void

  private makeSystem (description: ISessionDescription): Promise<DependencyContainer> {
    this.logger.info(`creating app ${description.application.name} [protocol ${description.application.protocol}]`)
    return this.sessionContainer.makeSystem(description)
  }

  private async makeClient (): Promise<any> {
    const description: ISessionDescription = require(path.join(root, this.initiatorConfig))
    const sessionContainer = await this.makeSystem(description)
    this.registerApplication(sessionContainer)
    this.logger.info('create initiator')
    return this.getInitiator(sessionContainer)
  }

  private async makeServer (): Promise<any> {
    const description: ISessionDescription = require(path.join(root, this.acceptorConfig))
    const sessionContainer = await this.makeSystem(description)
    this.registerApplication(sessionContainer)
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
