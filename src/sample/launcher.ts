import * as path from 'path'
import { JsFixWinstonLogFactory } from '../config/js-fix-winston-log-factory'
import { WinstonLogger } from '../config/winston-logger'
import { IJsFixConfig } from '../config/js-fix-config'
import { SessionMsgFactory } from '../transport/session-msg-factory'
import { makeConfig } from '../transport/make-config'

const root = '../../'
const logFactory = new JsFixWinstonLogFactory(WinstonLogger.consoleOptions('info'))

export abstract class Launcher {
  protected constructor (public readonly initiatorConfig: string, public readonly acceptorConfig: string) {
  }

  protected abstract getInitiator (config: IJsFixConfig): Promise<any>
  protected abstract getAcceptor (config: IJsFixConfig): Promise<any>

  public run () {
    return new Promise<any>((accept, reject) => {
      const logger = logFactory.logger('app')
      logger.info('launching ..')
      this.setup().then(() => {
        logger.info('.. done')
        accept()
      }).catch((e: Error) => {
        logger.error(e)
        reject(e)
      })
    })
  }

  private async setup () {
    const clientDescription = require(path.join(root, this.initiatorConfig))
    const serverDescription = require(path.join(root, this.acceptorConfig))
    const clientConfig = await
    makeConfig(clientDescription, logFactory, new SessionMsgFactory(clientDescription))
    const serverConfig = await
    makeConfig(serverDescription, logFactory, new SessionMsgFactory(serverDescription))
    const server = this.getAcceptor(serverConfig)
    const client = this.getInitiator(clientConfig)
    return Promise.all([server, client])
  }
}

/*
async function app (sessionFactory: MakeFixSession, getInitiator: IGetFixSystem, getAcceptor: IGetFixSystem) {
  const clientDescription = require(path.join(root, './data/session/test-http-initiator.json'))
  const serverDescription = require(path.join(root, './data/session/test-http-acceptor.json'))
  const clientConfig = await makeConfig(clientDescription, logFactory, new SessionMsgFactory(clientDescription))
  const serverConfig = await makeConfig(serverDescription, logFactory, new SessionMsgFactory(serverDescription))
  const server = getAcceptor(serverConfig, sessionFactory)
  const client = getInitiator(clientConfig, sessionFactory)
  return Promise.all([server, client])
}

export async function runner (sessionFactory: MakeFixSession,
                              getInitiator: IGetFixSystem,
                              getAcceptor: IGetFixSystem): Promise<any> {
  return new Promise<any>((accept, reject) => {
    const logger = logFactory.logger('app')
    logger.info('launching ..')
    app(sessionFactory, getInitiator, getAcceptor).then(() => {
      logger.info('.. done')
      accept()
    }).catch((e: Error) => {
      logger.error(e)
      reject(e)
    })
  })
} */
