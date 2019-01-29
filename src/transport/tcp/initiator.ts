import { IJsFixConfig } from '../../config'
import { FixInitiator } from '../fix-initiator'
import { TcpInitiator } from './tcp-initiator'
import { MsgTransport } from '../msg-transport'
import { MakeFixSession } from '../make-fixl-session'
import { FixSession } from '../fix-session'

export function initiator (config: IJsFixConfig, sessionFactory: MakeFixSession, reconnectTimeout: number = 0): Promise<any> {
  return new Promise<any>(async (accept, reject) => {
    const logger = config.logFactory.logger('initiator')
    logger.info('create session')
    const initiatorSession = sessionFactory(config)
    let connecting: boolean = true
    while (connecting) {
      try {
        await once(config, initiatorSession)
        logger.info('session has ended')
        connecting = false
        accept()
      } catch (e) {
        if (!reconnectTimeout) {
          reject(e)
        } else {
          logger.info(`waiting ${reconnectTimeout} to reconnect following error`)
          await delay(reconnectTimeout)
        }
      }
    }
  })
}

function delay (p: number): Promise<any> {
  return new Promise<any>((accept) => {
    if (!p) {
      accept()
    }
    setTimeout(() => {
      accept()
    }, p)
  })
}

function once (config: IJsFixConfig, initiatorSession: FixSession): Promise<any> {
  return new Promise<any>(async (accept, reject) => {
    const logger = config.logFactory.logger('initiator')
    const initiator: FixInitiator = new TcpInitiator(config)
    logger.info('connecting ...')
    const initiatorTransport: MsgTransport = await initiator.connect(22)
    logger.info('... connected, run session')
    initiatorSession.run(initiatorTransport).then(() => {
      logger.info('ends')
      accept()
    }).catch((e: Error) => {
      logger.error(e)
      reject(e)
    })
  })
}
