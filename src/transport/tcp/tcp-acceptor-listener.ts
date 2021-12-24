import { IJsFixConfig } from '../../config'
import { FixAcceptor } from '../fix-acceptor'
import { TcpAcceptor } from './tcp-acceptor'
import { MsgTransport } from '../factory'
import { inject, injectable } from 'tsyringe'
import { FixSession } from '../fix-session'
import { DITokens } from '../../runtime'

@injectable()
export class TcpAcceptorListener {
  constructor (@inject(DITokens.IJsFixConfig) public readonly config: IJsFixConfig) {
  }

  start (): Promise<any> {
    return new Promise<any>(async (accept, reject) => {
      const logger = this.config.logFactory.logger('acceptor')
      const sessionContainer = this.config.sessionContainer
      if (!sessionContainer.isRegistered(DITokens.FixSession)) {
        reject(new Error(`application must register a DI token '${DITokens.FixSession}' - see src/sample`))
      }
      logger.info('starting.')
      const acceptor: FixAcceptor = sessionContainer.resolve<FixAcceptor>(TcpAcceptor)
      acceptor.on('transport', (t: MsgTransport) => {
        logger.info(`creates new transport using DI token ${DITokens.FixSession}.`)
        const acceptorSession = sessionContainer.resolve<FixSession>(DITokens.FixSession)
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
