import { IJsFixConfig } from '../../config'
import { FixAcceptor } from '../fix-acceptor'
import { TcpAcceptor } from './tcp-acceptor'
import { MsgTransport } from '../factory'
import { MakeFixSession } from '../make-fix-session'

export class TcpAcceptorListener {
  constructor (public readonly config: IJsFixConfig, public readonly sessionFactory: MakeFixSession) {
  }

  start (): Promise<any> {
    return new Promise<any>(async (accept, reject) => {
      const logger = this.config.logFactory.logger('acceptor')
      logger.info('starting.')
      const acceptor: FixAcceptor = new TcpAcceptor(this.config)
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
          logger.info(`error in session - close listener ${e.message}`)
          acceptor.close(() => {
            logger.info('acceptor closed.')
            reject(e)
          })
        })
      })
      acceptor.listen()
    })
  }
}
