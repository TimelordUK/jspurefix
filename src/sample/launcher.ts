import 'reflect-metadata'
import * as path from 'path'
import { IJsFixConfig, IJsFixLogger, JsFixLoggerFactory, JsFixWinstonLogFactory, WinstonLogger } from '../config'
import { ISessionDescription, ISessionMsgFactory } from '../transport'
import { FixmlSessionMsgFactory } from '../transport/fixml'
import { AsciiSessionMsgFactory } from '../transport/ascii'
import { RuntimeFactory } from '../runtime'
import { container, DependencyContainer } from 'tsyringe'
import { DefinitionFactory } from '../util'

const root = '../../'
const logFactory = new JsFixWinstonLogFactory(WinstonLogger.consoleOptions('info'))

export abstract class Launcher {
  protected readonly logger: IJsFixLogger
  protected constructor (public readonly initiatorConfig: string, public readonly acceptorConfig: string) {
    this.logger = logFactory.logger('launcher')
  }

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

  protected makeSessionFactory (description: ISessionDescription): ISessionMsgFactory {
    const fixml = description.application.protocol !== 'ascii'
    return fixml ?
      new FixmlSessionMsgFactory(description) :
      new AsciiSessionMsgFactory(description)
  }

  protected registerGlobal (): void {
    container.registerInstance(DefinitionFactory, new DefinitionFactory())
    const lf = new JsFixWinstonLogFactory(WinstonLogger.consoleOptions('info'))
    container.registerInstance('JsFixLoggerFactory', lf)
    container.register<RuntimeFactory>(RuntimeFactory, {
      useClass: RuntimeFactory
    })
  }

  private makeSystem (description: ISessionDescription): Promise<DependencyContainer> {
    return new Promise<DependencyContainer>((resolve, reject) => {
      this.logger.info(`creating app ${description.application.name} [protocol ${description.application.protocol}] ...`)
      const sessionContainer = container.createChildContainer()
      const sf = this.makeSessionFactory(description)
      sessionContainer.registerInstance('ISessionDescription', description)
      sessionContainer.registerInstance('ISessionMsgFactory', sf)
      const factory = sessionContainer.resolve<RuntimeFactory>(RuntimeFactory)
      factory.makeConfig().then((c: IJsFixConfig) => {
        sessionContainer.registerInstance('IJsFixConfig', c)
        resolve(sessionContainer)
      }).catch(e => {
        reject(e)
      })
    })
  }

  private async makeClient (): Promise<any> {
    const description: ISessionDescription = require(path.join(root, this.initiatorConfig))
    const sessionContainer = await this.makeSystem(description)
    this.logger.info('create initiator')
    return this.getInitiator(sessionContainer)
  }

  private async makeServer (): Promise<any> {
    const description: ISessionDescription = require(path.join(root, this.acceptorConfig))
    const sessionContainer = await this.makeSystem(description)
    this.logger.info('create acceptor')
    return this.getAcceptor(sessionContainer)
  }

  private async setup () {
    this.registerGlobal()
    const server = this.makeServer()
    const client = this.makeClient()
    this.logger.info('launching ....')
    return Promise.all([server, client])
  }
}
