import * as path from 'path'
import { IJsFixLogger, JsFixWinstonLogFactory, WinstonLogger } from '../config'
import { ISessionDescription } from '../transport'
import { DependencyContainer } from 'tsyringe'
import { SessionContainer } from '../runtime/session-container'

const root = '../../'
const logFactory = new JsFixWinstonLogFactory(WinstonLogger.consoleOptions('info'))

export abstract class Launcher {
  protected readonly logger: IJsFixLogger
  protected constructor (public readonly initiatorConfig: string, public readonly acceptorConfig: string) {
    this.logger = logFactory.logger('launcher')
  }
  protected sessionContainer: SessionContainer = new SessionContainer()
  protected abstract getInitiator (sessionContainer: DependencyContainer): Promise<any>
  protected abstract getAcceptor (sessionContainer: DependencyContainer): Promise<any>

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

  public isAscii (description: ISessionDescription): boolean {
    return description.application.protocol === 'ascii'
  }

  public isInitiator (description: ISessionDescription): boolean {
    return description.application.type === 'initiator'
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
    const server = this.makeServer()
    const client = this.makeClient()
    this.logger.info('launching ....')
    return Promise.all([server, client])
  }
}
