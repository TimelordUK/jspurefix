import { IJsFixConfig } from '../../config'
import { FixInitiator } from '../fix-initiator'
import { TcpInitiator } from './tcp-initiator'
import { MsgTransport } from '../factory'
import { FixSession } from '../session/fix-session'
import { inject, injectable } from 'tsyringe'
import { DITokens } from '../../runtime/di-tokens'
import { FixEntity } from '../fix-entity'

@injectable()
export class TcpInitiatorConnector extends FixEntity {
  constructor (@inject(DITokens.IJsFixConfig) public readonly config: IJsFixConfig) {
    super(config)
  }
  start (reconnectTimeout: number = 0): Promise<any> {
    return new Promise<any>(async (accept, reject) => {
      const logger = this.config.logFactory.logger('initiator')
      const sessionContainer = this.config.sessionContainer
      if (!sessionContainer.isRegistered(DITokens.FixSession)) {
        reject(new Error(`application must register a DI token '${DITokens.FixSession}' - see src/sample`))
      }
      logger.info(`create session with DI Token ${DITokens.FixSession}`)
      const initiatorSession = sessionContainer.resolve<FixSession>(DITokens.FixSession)
      let connecting: boolean = true
      while (connecting) {
        try {
          await this.connect(initiatorSession)
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

  async connect (initiatorSession: FixSession): Promise<any> {
    const logger = this.config.logFactory.logger('initiator')
    const initiator: FixInitiator = this.config.sessionContainer.resolve<FixInitiator>(TcpInitiator)
    logger.info('connecting ...')
    try {
      const initiatorTransport: MsgTransport = await initiator.connect(22)
      logger.info('... connected, run session')
      await initiatorSession.run(initiatorTransport)
      logger.info('ends')
      return true
    } catch (e) {
      logger.error(e)
      throw e
    }
  }
}
