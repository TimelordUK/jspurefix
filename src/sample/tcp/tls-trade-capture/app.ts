import 'reflect-metadata'

import { TradeCaptureClient, TradeCaptureServer } from '../trade-capture'
import { IJsFixConfig } from '../../../config'
import { Launcher } from '../../launcher'
import { DependencyContainer } from 'tsyringe'
import { DITokens } from '../../../runtime'

class AppLauncher extends Launcher {
  public constructor () {
    super(
      'data/session/test-initiator-tls.json',
      'data/session/test-acceptor-tls.json')
  }

  protected override registerApplication (sessionContainer: DependencyContainer) {
    const config: IJsFixConfig = sessionContainer.resolve<IJsFixConfig>(DITokens.IJsFixConfig)
    const isInitiator = this.isInitiator(config.description)
    if (isInitiator) {
      sessionContainer.register(DITokens.FixSession, {
        useFactory: () => new TradeCaptureClient(config)
      })
    } else {
      sessionContainer.register(DITokens.FixSession, {
        useFactory: () => new TradeCaptureServer(config)
      })
    }
  }
}

const l = new AppLauncher()
l.exec()
