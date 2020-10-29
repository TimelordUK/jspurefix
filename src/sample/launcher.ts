import * as path from 'path'
import { WinstonLogger, IJsFixConfig, JsFixWinstonLogFactory, IJsFixLogger } from '../config'
import { SessionMsgFactory, makeConfig } from '../transport'

const root = '../../'
const logFactory = new JsFixWinstonLogFactory(WinstonLogger.consoleOptions('info'))

export abstract class Launcher {
  private readonly logger: IJsFixLogger
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

  private async setup () {
    const clientDescription = require(path.join(root, this.initiatorConfig))
    const serverDescription = require(path.join(root, this.acceptorConfig))
    this.logger.info('launching ..')
    const clientConfig = await
    makeConfig(clientDescription, logFactory, new SessionMsgFactory(clientDescription))
    const serverConfig = await
    makeConfig(serverDescription, logFactory, new SessionMsgFactory(serverDescription))
    this.logger.info('create acceptor')
    const server = this.getAcceptor(serverConfig)
    this.logger.info('create initiator')
    const client = this.getInitiator(clientConfig)
    this.logger.info('launching ....')
    return Promise.all([server, client])
  }
}
