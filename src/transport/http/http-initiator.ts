import { IJsFixConfig } from '../../config'
import { MsgTransport } from '../factory/msg-transport'
import { HttpDuplex } from '../duplex'
import { FixSession } from '../fix-session'
import { MakeFixSession } from '../make-fix-session'

export class HttpInitiator {

  constructor (public readonly config: IJsFixConfig, public readonly sessionFactory: MakeFixSession) {
  }

  start (): Promise<any> {
    const initiatorSession = this.sessionFactory(this.config)
    return this.once(this.config, initiatorSession)
  }

// the adapter will be provided on config
  once (config: IJsFixConfig, initiatorSession: FixSession): Promise<any> {
    return new Promise<any>(async (accept, reject) => {
      const logger = config.logFactory.logger('initiator')
      const adapter = config.description.application.http.adapter
      if (!adapter) {
        reject('http initiator needs config.description.application.http.adapter')
      }
      logger.info('connecting ...')
      const initiatorTransport: MsgTransport = new MsgTransport(0, config, new HttpDuplex(adapter))
      logger.info('... connected, run session')
      initiatorSession.run(initiatorTransport).then(() => {
        logger.info('ends')
        accept(true)
      }).catch((e: Error) => {
        logger.error(e)
        reject(e)
      })
    })
  }
}
