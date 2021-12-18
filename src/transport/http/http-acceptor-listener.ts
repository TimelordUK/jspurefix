import { IJsFixConfig } from '../../config'
import { FixAcceptor } from '../fix-acceptor'
import { MakeFixSession } from '../make-fix-session'
import { HttpAcceptor } from './http-acceptor'
import { MsgTransport } from '../factory/msg-transport'

export class HttpAcceptorListener {
  constructor (public readonly config: IJsFixConfig, public readonly sessionFactory: MakeFixSession) {
  }
  start (): Promise<any> {
    return new Promise<any>(async (accept, reject) => {
      const logger = this.config.logFactory.logger('acceptor')
      logger.info('starting.')
      const acceptor: FixAcceptor = new HttpAcceptor(this.config)
      acceptor.on('transport', (t: MsgTransport) => {
        logger.info('creates new transport.')
        const acceptorSession = this.sessionFactory(this.config)
        acceptorSession.run(t).then(() => {
          logger.info('ends')
          acceptor.close(() => {
            logger.info('acceptor closed.')
            accept(true)
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
}
