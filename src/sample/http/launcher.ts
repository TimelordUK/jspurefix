import * as path from 'path'
import { AsciiSessionMsgFactory } from '../../transport/ascii/fix44-msg-factory'
import { JsFixWinstonLogFactory } from '../../config/js-fix-winston-log-factory'
import { WinstonLogger } from '../../config/winston-logger'
import { makeConfig } from '../../transport/make-config'
import { acceptor } from '../../transport/fixml/acceptor'
import { MakeFixmlSession } from '../../transport/fixml/make-fixml-session'

const root = '../../../'
const logFactory = new JsFixWinstonLogFactory(WinstonLogger.consoleOptions('info'))

async function app (sessionFactory: MakeFixmlSession) {
  const clientDescription = require(path.join(root, './data/session/test-http-initiator.json'))
  const serverDescription = require(path.join(root, './data/session/test-http-acceptor.json'))
  // const clientConfig = await makeConfig(clientDescription, logFactory, new Fix44MsgFactory(clientDescription))
  const serverConfig = await makeConfig(serverDescription, logFactory, new AsciiSessionMsgFactory(serverDescription))
  const server = acceptor(serverConfig, sessionFactory)
  return Promise.all([server])
}

export async function runner (sessionFactory: MakeFixmlSession): Promise<any> {
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
