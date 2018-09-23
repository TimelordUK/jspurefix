import { TradeCaptureClient } from './trade-capture-client'
import { TradeCaptureServer } from './trade-capture-server'
import { runner } from '../launcher'
import { IJsFixConfig } from '../../../config/js-fix-config'

runner((config: IJsFixConfig) => {
  const logger = config.logFactory.logger('sessionFactory')
  switch (config.description.application.type) {
    case 'initiator': {
      logger.info('creating TradeCaptureClient')
      return new TradeCaptureClient(config)
    }
    default: {
      logger.info('creating TradeCaptureServer')
      return new TradeCaptureServer(config)
    }
  }
}).then(() => {
  console.log('finished.')
})
