import { IJsFixConfig } from '../../config'
import { MsgTransport } from '../msg-transport'
import { HttpDuplex } from '../duplex'
import { MakeFixSession } from '../make-fixl-session'
import { FixSession } from '../fix-session'

export function httpInitiator (config: IJsFixConfig, sessionFactory: MakeFixSession): Promise<any> {
  const initiatorSession = sessionFactory(config)
  return once(config, initiatorSession)
}

// the adapter will be provided on config
function once (config: IJsFixConfig, initiatorSession: FixSession): Promise<any> {
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
      accept()
    }).catch((e: Error) => {
      logger.error(e)
      reject(e)
    })
  })
}
