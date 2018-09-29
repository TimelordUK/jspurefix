import { HttpServer } from './http-server'
import { HttpClient } from './http-client'
import { IJsFixConfig } from '../../../config/js-fix-config'
import { runner } from '../launcher'

runner((config: IJsFixConfig) => {
  const logger = config.logFactory.logger('sessionFactory')
  const type = config.description.application.type
  switch (type) {
    case 'initiator': {
      logger.info('creating HttpClient')
      return new HttpClient(config)
    }
    case 'acceptor': {
      logger.info('creating HttpServer')
      return new HttpServer(config)
    }
    default: {
      logger.info(`unknown type ${type} in config`)
      break
    }
  }
}).then(() => {
  console.log('finished.')
})
