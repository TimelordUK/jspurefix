import * as path from 'path'
import { IJsFixConfig, IJsFixLogger, JsFixWinstonLogFactory, WinstonLogger } from '../config'
import { ISessionDescription, ISessionMsgFactory } from '../transport'
import { FixmlSessionMsgFactory } from '../transport/fixml'
import { AsciiSessionMsgFactory } from '../transport/ascii'
import { makeConfig } from '../runtime'

const root = '../../'
const logFactory = new JsFixWinstonLogFactory(WinstonLogger.consoleOptions('info'))

export abstract class Launcher {
  protected readonly logger: IJsFixLogger
  protected constructor (public readonly initiatorConfig: string, public readonly acceptorConfig: string) {
    this.logger = logFactory.logger('launcher')
  }

  protected abstract getInitiator (config: IJsFixConfig): Promise<any>
  protected abstract getAcceptor (config: IJsFixConfig): Promise<any>

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

  private makeSessionFactory (description: ISessionDescription): ISessionMsgFactory {
    const fixml = description.application.protocol !== 'ascii'
    return fixml ?
      new FixmlSessionMsgFactory(description) :
      new AsciiSessionMsgFactory(description)
  }

  private async setup () {
    const clientDescription: ISessionDescription = require(path.join(root, this.initiatorConfig))
    const serverDescription: ISessionDescription = require(path.join(root, this.acceptorConfig))
    this.logger.info(`launching [protocol ${clientDescription.application.protocol}] ...`)
    const clientConfig = await
    makeConfig(clientDescription, logFactory, this.makeSessionFactory(clientDescription))
    const serverConfig = await
    makeConfig(serverDescription, logFactory, this.makeSessionFactory(serverDescription))
    this.logger.info('create acceptor')
    const server = this.getAcceptor(serverConfig)
    this.logger.info('create initiator')
    const client = this.getInitiator(clientConfig)
    this.logger.info('launching ....')
    return Promise.all([server, client])
  }
}
