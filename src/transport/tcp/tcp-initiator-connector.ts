import { IJsFixConfig } from '../../config'
import { FixInitiator } from '../fix-initiator'
import { TcpInitiator } from './tcp-initiator'
import { MsgTransport } from '../factory/msg-transport'
import { MakeFixSession } from '../make-fix-session'
import { FixSession } from '../fix-session'

export class TcpInitiatorConnector {
  constructor (public readonly config: IJsFixConfig, public readonly sessionFactory: MakeFixSession) {
  }
  start (reconnectTimeout: number = 0): Promise<any> {
    return new Promise<any>(async (accept, reject) => {
      const logger = this.config.logFactory.logger('initiator')
      logger.info('create session')
      const initiatorSession = this.sessionFactory(this.config)
      let connecting: boolean = true
      while (connecting) {
        try {
          await this.once(initiatorSession)
          logger.info('session has ended')
          connecting = false
          accept(true)
        } catch (e) {
          if (!reconnectTimeout) {
            connecting = false
            reject(e)
          } else {
            logger.info(`waiting ${reconnectTimeout} to reconnect following error`)
            await this.delay(reconnectTimeout)
          }
        }
      }
    })
  }

  delay (p: number): Promise<any> {
    return new Promise<any>((accept) => {
      if (!p) {
        accept(true)
      }
      setTimeout(() => {
        accept(true)
      }, p)
    })
  }

  once (initiatorSession: FixSession): Promise<any> {
    return new Promise<any>(async (accept, reject) => {
      const logger = this.config.logFactory.logger('initiator')
      const initiator: FixInitiator = new TcpInitiator(this.config)
      logger.info('connecting ...')
      const initiatorTransport: MsgTransport = await initiator.connect(22)
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
