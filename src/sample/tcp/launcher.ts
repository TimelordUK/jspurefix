import * as path from 'path'
import { SessionMsgFactory } from '../../transport/session-msg-factory'
import { JsFixWinstonLogFactory } from '../../config/js-fix-winston-log-factory'
import { MakeAsciiSession } from '../../transport/ascii/make-ascii-session'
import { WinstonLogger } from '../../config/winston-logger'
import { makeConfig } from '../../transport/make-config'
import { initiator } from '../../transport/tcp/initiator'
import { acceptor } from '../../transport/tcp/acceptor'

const root = '../../../'
const logFactory = new JsFixWinstonLogFactory(WinstonLogger.consoleOptions('info'))

async function app (sessionFactory: MakeAsciiSession) {
  const clientDescription = require(path.join(root, './data/session/test-initiator.json'))
  const serverDescription = require(path.join(root, './data/session/test-acceptor.json'))
  const clientConfig = await makeConfig(clientDescription, logFactory, new SessionMsgFactory(clientDescription))
  const serverConfig = await makeConfig(serverDescription, logFactory, new SessionMsgFactory(serverDescription))
  const client = initiator(clientConfig, sessionFactory)
  const server = acceptor(serverConfig, sessionFactory)
  return Promise.all([server, client])
}

export async function runner (sessionFactory: MakeAsciiSession): Promise<any> {
  return new Promise<any>((accept, reject) => {
    const logger = logFactory.logger('app')
    logger.info('launching ..')
    app(sessionFactory).then(() => {
      logger.info('.. done')
      accept()
    }).catch((e: Error) => {
      logger.error(e)
      reject(e)
    })
  })
}
