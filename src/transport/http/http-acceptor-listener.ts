import { IJsFixConfig } from '../../config'
import { FixAcceptor } from '../fix-acceptor'
import { HttpAcceptor } from './http-acceptor'
import { MsgTransport } from '../factory'
import { inject, injectable } from 'tsyringe'
import { DITokens } from '../../runtime/di-tokens'
import { FixSession } from '../session/fix-session'
import { FixEntity } from '../fix-entity'

@injectable()
export class HttpAcceptorListener extends FixEntity {
  constructor (@inject(DITokens.IJsFixConfig) public readonly config: IJsFixConfig) {
    super(config)
  }

  async start (): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
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
        this.emit('session', acceptorSession, t)
        acceptorSession.run(t).then(() => {
          logger.info('ends')
          acceptor.close(() => {
            logger.info('acceptor closed.')
            resolve(true)
          })
        }).catch((e: Error) => {
          logger.error(e)
          logger.info(e?.stack ?? '')
          reject(e)
        })
      })
      acceptor.listen()
    })
  }
}
