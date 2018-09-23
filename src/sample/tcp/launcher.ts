import * as path from 'path'
import { Fix44MsgFactory } from '../../transport/ascii/fix44-msg-factory'
import { JsFixWinstonLogFactory } from '../../config/js-fix-winston-log-factory'
import { MakeAppSession } from '../../transport/make-app-session'
import { makeConfig } from '../../transport/make-config'
import { initiator } from '../../transport/tcp/initiator'
import { acceptor } from '../../transport/tcp/acceptor'
import { WinstonLogger } from '../../config/winston-logger'

const root = '../../../'
const logFactory = new JsFixWinstonLogFactory(WinstonLogger.consoleOptions('info'))

async function app (sessionFactory: MakeAppSession) {
  const clientDescription = require(path.join(root, './data/session/test-initiator.json'))
  const serverDescription = require(path.join(root, './data/session/test-acceptor.json'))
  const clientConfig = await makeConfig(clientDescription, logFactory, new Fix44MsgFactory(clientDescription))
  const serverConfig = await makeConfig(serverDescription, logFactory, new Fix44MsgFactory(serverDescription))
  const client = initiator(clientConfig, sessionFactory)
  const server = acceptor(serverConfig, sessionFactory)
  return Promise.all([server, client])
}

export async function runner (sessionFactory: MakeAppSession): Promise<any> {
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
