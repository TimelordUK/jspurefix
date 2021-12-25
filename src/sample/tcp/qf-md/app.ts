import 'reflect-metadata'

import { MDClient } from './md-client'
import { MDServer } from './md-server'
import { IJsFixConfig } from '../../../config'
import { Launcher } from '../../launcher'
import { DependencyContainer } from 'tsyringe'
import { DITokens } from '../../../runtime/di-tokens'

class AppLauncher extends Launcher {
  public constructor () {
    super(
      'data/session/test-qf44-initiator.json',
      'data/session/test-qf44-acceptor.json')
  }

  protected override registerApplication (sessionContainer: DependencyContainer) {
    const config: IJsFixConfig = sessionContainer.resolve<IJsFixConfig>(DITokens.IJsFixConfig)
    const isInitiator = this.isInitiator(config.description)
    if (isInitiator) {
      sessionContainer.register(DITokens.FixSession, {
        useClass: MDClient
      })
    } else {
      sessionContainer.register(DITokens.FixSession, {
        useClass: MDServer
      })
    }
  }
}

const l = new AppLauncher()
l.exec()
