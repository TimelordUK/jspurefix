import 'reflect-metadata'

import { SessionLauncher, EngineFactory } from '../../../runtime'
import { SkeletonSession } from './skeleton-session'
import { IJsFixConfig } from '../../../config'

class AppLauncher extends SessionLauncher {
  public constructor () {
    super(
      'data/session/test-initiator.json',
      'data/session/test-acceptor.json')
  }

  protected override makeFactory (config: IJsFixConfig): EngineFactory {
    return {
      makeSession: () => new SkeletonSession(config, 45, false)
    } as EngineFactory
  }
}

const l = new AppLauncher()
l.exec()
