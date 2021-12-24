import { IJsFixConfig } from '../../config'
import { FixAcceptor } from '../fix-acceptor'
import { HttpAcceptor } from './http-acceptor'
import { MsgTransport } from '../factory/msg-transport'
import { inject, injectable } from 'tsyringe'
import { DITokens } from '../../runtime'
import { FixSession } from '../fix-session'

@injectable()
export class HttpAcceptorListener {
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
      const acceptor: FixAcceptor = new HttpAcceptor(this.config)
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
          logger.error(e)
          logger.info(e.stack)
          reject(e)
        })
      })
      acceptor.listen()
    })
  }
}
