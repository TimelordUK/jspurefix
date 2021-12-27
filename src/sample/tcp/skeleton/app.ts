import 'reflect-metadata'

import { Launcher } from '../../launcher'
import { SkeletonSession } from './skeleton-session'
import { DependencyContainer } from 'tsyringe'
import { DITokens } from '../../../runtime'
import { IJsFixConfig } from '../../../config'

class AppLauncher extends Launcher {
  public constructor () {
    super(
      'data/session/test-initiator.json',
      'data/session/test-acceptor.json')
  }

  protected override registerApplication (sessionContainer: DependencyContainer) {
    sessionContainer.register(DITokens.FixSession, {
      useFactory: (c) => new SkeletonSession(c.resolve<IJsFixConfig>(DITokens.IJsFixConfig), 45,false)
    })
  }
}

const l = new AppLauncher()
l.exec()
