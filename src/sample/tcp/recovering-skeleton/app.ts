import 'reflect-metadata'

import { IJsFixConfig } from '../../../config'
import { SessionLauncher, DITokens } from '../../../runtime'
import { SkeletonClient } from './skeleton-client'
import { RecoveringTcpInitiator } from '../../../transport/tcp'
import { RespawnAcceptor } from './respawn-acceptor'
import { AsciiChars } from '../../../buffer/ascii'
import { DependencyContainer } from 'tsyringe'
import { SkeletonServer } from './skeleton-server'
import { FixSession, FixEntity, ISessionDescription } from '../../../transport'
import * as path from 'path'

const root: string = '../../../../'

function makeConfig (config: string): ISessionDescription {
  const o = require(path.join(root, config))
  o.ResetSeqNumFlag = false
  return o as ISessionDescription
}

class AppLauncher extends SessionLauncher {
  public constructor () {
    super(
      makeConfig('data/session/test-initiator.json'),
      makeConfig('data/session/test-acceptor.json'))
  }

  private asInitiator (sessionContainer: DependencyContainer): void {
    sessionContainer.register<FixSession>(DITokens.FixSession, {
      useClass: SkeletonClient
    })
    sessionContainer.register<FixEntity>(DITokens.FixEntity, {
      useClass: RecoveringTcpInitiator
    })
  }

  private asAcceptor (sessionContainer: DependencyContainer): void {
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

  protected override registerApplication (sessionContainer: DependencyContainer): void {
    const config: IJsFixConfig = sessionContainer.resolve<IJsFixConfig>(DITokens.IJsFixConfig)
    // use a different log delimiter as an example
    config.logDelimiter = AsciiChars.Carat

    const isInitiator = this.isInitiator(config.description)
    if (isInitiator) {
      this.asInitiator(sessionContainer)
    } else {
      this.asAcceptor(sessionContainer)
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
