import 'reflect-metadata'

import { Launcher } from '../../launcher'
import { SkeletonSession } from './skeleton-session'
import { DependencyContainer } from 'tsyringe'
import { DITokens } from '../../../runtime/DITokens'

class AppLauncher extends Launcher {
  public constructor () {
    super(
      'data/session/test-initiator.json',
      'data/session/test-acceptor.json')
  }

  protected override registerApplication (sessionContainer: DependencyContainer) {
    sessionContainer.register(DITokens.FixSession, {
      useClass: SkeletonSession
    })
    sessionContainer.register('logoutSeconds', {
      useValue: 45
    })
    sessionContainer.register('useInMemoryStore', {
      useValue: false
    })
  }
}

const l = new AppLauncher()
l.exec()
