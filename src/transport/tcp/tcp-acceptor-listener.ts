import { IJsFixConfig } from '../../config'
import { FixAcceptor } from '../fix-acceptor'
import { TcpAcceptor } from './tcp-acceptor'
import { MsgTransport } from '../factory'
import { inject, injectable } from 'tsyringe'
import { FixSession } from '../fix-session'

@injectable()
export class TcpAcceptorListener {
  constructor (@inject('IJsFixConfig') public readonly config: IJsFixConfig) {
  }

  start (): Promise<any> {
    return new Promise<any>(async (accept, reject) => {
      const logger = this.config.logFactory.logger('acceptor')
      const sessionContainer = this.config.sessionContainer
      logger.info('starting.')
      const acceptor: FixAcceptor = new TcpAcceptor(this.config)
      acceptor.on('transport', (t: MsgTransport) => {
        logger.info('creates new transport.')
        const acceptorSession = sessionContainer.resolve<FixSession>('FixSession')
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
