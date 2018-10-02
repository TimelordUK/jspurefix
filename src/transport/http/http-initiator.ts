import { IJsFixConfig } from '../../config/js-fix-config'
import { MsgTransport } from '../msg-transport'
import { MakeFixmlSession } from '../fixml/make-fixml-session'
import { FixmlSession } from '../fixml/fixml-session'
import { HttpDuplex } from '../duplex/http-duplex'

export function httpInitiator (config: IJsFixConfig, sessionFactory: MakeFixmlSession): Promise<any> {
  const initiatorSession = sessionFactory(config)
  return once(config, initiatorSession)
}

// the adapter will be provided on config
function once (config: IJsFixConfig, initiatorSession: FixmlSession): Promise<any> {
  return new Promise<any>(async (accept, reject) => {
    const logger = config.logFactory.logger('initiator')
    logger.info('connecting ...')
    const initiatorTransport: MsgTransport = new MsgTransport(0, config, new HttpDuplex(config.description.application.http.adapter))
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
