import { IJsFixConfig, IJsFixLogger } from '../../config'
import { MsgTransport } from '../factory/msg-transport'
import { HttpDuplex } from '../duplex'
import { FixSession } from '../fix-session'
import { inject, injectable } from 'tsyringe'
import { DITokens } from '../../runtime/DITokens'

@injectable()
export class HttpInitiator {
  logger: IJsFixLogger
  constructor (@inject(DITokens.IJsFixConfig) public readonly config: IJsFixConfig) {
    this.logger = config.logFactory.logger('initiator')
  }

  start (): Promise<any> {
    return this.once(this.config)
  }

// the adapter will be provided on config
  once (config: IJsFixConfig): Promise<any> {
    return new Promise<any>(async (accept, reject) => {
      const adapter = config.description.application.http.adapter
      if (!adapter) {
        reject('http initiator needs config.description.application.http.adapter')
      }
      const sessionContainer = this.config.sessionContainer
      if (!sessionContainer.isRegistered(DITokens.FixSession)) {
        reject(new Error(`application must register a DI token '${DITokens.FixSession}' - see src/sample`))
      }
      this.logger.info(`create session with DI Token ${DITokens.FixSession}`)
      const initiatorSession = sessionContainer.resolve<FixSession>(DITokens.FixSession)
      this.logger.info('connecting ...')
      const initiatorTransport: MsgTransport = new MsgTransport(0, config, new HttpDuplex(adapter))
      this.logger.info('... connected, run session')
      initiatorSession.run(initiatorTransport).then(() => {
        this.logger.info('ends')
        accept(true)
      }).catch((e: Error) => {
        this.logger.error(e)
        reject(e)
      })
    })
  }
}
