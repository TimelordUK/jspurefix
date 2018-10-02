import { IJsFixConfig } from '../../config/js-fix-config'
import { FixAcceptor } from '../fix-acceptor'
import { MsgTransport } from '../msg-transport'
import { HttpAcceptor } from '../http/http-acceptor'
import { MakeFixmlSession } from './make-fixml-session'

export function acceptor (config: IJsFixConfig, sessionFactory: MakeFixmlSession): Promise<any> {
  return new Promise<any>(async (accept, reject) => {
    const logger = config.logFactory.logger('acceptor')
    logger.info('starting.')
    const acceptor: FixAcceptor = new HttpAcceptor(config)
    acceptor.on('transport', (t: MsgTransport) => {
      logger.info('creates new transport.')
      const acceptorSession = sessionFactory(config)
      acceptorSession.run(t).then(() => {
        logger.info('ends')
        acceptor.close(() => {
          logger.info('acceptor closed.')
          accept()
        })
      }).catch((e: Error) => {
        logger.error(e)
        logger.info(e.stack)
        reject(e)
      })
    })
    acceptor.listen()
  })
}
