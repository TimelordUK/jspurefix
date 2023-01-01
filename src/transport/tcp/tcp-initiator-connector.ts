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

  async start (reconnectTimeout: number = 0): Promise<any> {
    // eslint-disable-next-line no-async-promise-executor
    return await new Promise<any>(async (resolve, reject) => {
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
          resolve(true)
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

  async delay (p: number): Promise<any> {
    return await new Promise<any>((resolve, reject) => {
      try {
        if (!p) {
          resolve(true)
        }
        setTimeout(() => {
          resolve(true)
        }, p)
      } catch (e) {
        reject(e)
      }
    })
  }

  async connect (initiatorSession: FixSession): Promise<any> {
    const logger = this.config.logFactory.logger('initiator')
    const initiator: FixInitiator = this.config.sessionContainer.resolve<FixInitiator>(TcpInitiator)
    logger.info('connecting ...')
    const initiatorTransport: MsgTransport = await initiator.connect(22)
    logger.info('... connected, run session')
    await initiatorSession.run(initiatorTransport)
    logger.info('ends')
    return true
  }
}
