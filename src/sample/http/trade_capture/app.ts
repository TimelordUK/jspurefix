import { HttpServer } from './http-server'
import { HttpClient } from './http-client'
import { IJsFixConfig } from '../../../config/js-fix-config'
import { HttpJsonSampleAdapter } from '../../../transport/http/http-json-sample-adapter'
import { runner } from '../launcher'

runner((config: IJsFixConfig) => {
  const logger = config.logFactory.logger('sessionFactory')
  const type = config.description.application.type
  switch (type) {
    case 'initiator': {
      logger.info('creating HttpClient')
      config.description.application.http.adapter = new HttpJsonSampleAdapter(config)
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
