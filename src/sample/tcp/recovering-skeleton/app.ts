import 'reflect-metadata'

import { IJsFixConfig } from '../../../config'
import { Launcher } from '../../launcher'
import { SkeletonClient } from './skeleton-client'
import { RecoveringTcpInitiator } from '../../../transport/tcp'
import { RespawnAcceptor } from './respawn-acceptor'
import { AsciiChars } from '../../../buffer/ascii'
import { DependencyContainer } from 'tsyringe'
import { SkeletonServer } from './skeleton-server'
import { DITokens } from '../../../runtime/DITokens'
import { FixEntity } from '../../../transport/FixEntity'
import { FixSession } from '../../../transport'

class AppLauncher extends Launcher {

  public constructor () {
    super(
      'data/session/test-initiator.json',
      'data/session/test-acceptor.json')
  }

  protected override registerApplication (sessionContainer: DependencyContainer) {
    const config: IJsFixConfig = sessionContainer.resolve<IJsFixConfig>(DITokens.IJsFixConfig)
    // use a different log delimiter as an example
    config.logDelimiter = AsciiChars.Carat

    const isInitiator = this.isInitiator(config.description)
    if (isInitiator) {
      sessionContainer.register<FixSession>(DITokens.FixSession, {
        useClass: SkeletonClient
      })
      sessionContainer.register<FixEntity>(DITokens.FixEntity, {
        useClass: RecoveringTcpInitiator
      })
    } else {
      sessionContainer.register<FixEntity>(DITokens.FixEntity, {
        useClass: RespawnAcceptor
      })
      sessionContainer.register<FixSession>(DITokens.FixSession, {
        useClass: SkeletonServer
      })
      sessionContainer.register('logoutSeconds', {
        useValue: 45
      })
    }
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
