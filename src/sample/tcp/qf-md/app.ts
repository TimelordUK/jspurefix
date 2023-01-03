import 'reflect-metadata'

import { MDClient } from './md-client'
import { MDServer } from './md-server'
import { IJsFixConfig } from '../../../config'
import { EngineFactory, SessionLauncher } from '../../../runtime'

class AppLauncher extends SessionLauncher {
  public constructor () {
    super(
      'data/session/test-qf44-initiator.json',
      'data/session/test-qf44-acceptor.json')
  }

  protected override makeFactory (config: IJsFixConfig): EngineFactory {
    const isInitiator = this.isInitiator(config.description)
    return {
      makeSession: () => isInitiator
        ? new MDClient(config)
        : new MDServer(config)
    } as EngineFactory
  }
}

const l = new AppLauncher()
l.exec()
