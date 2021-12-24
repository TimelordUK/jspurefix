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
    sessionContainer.register<RespawnAcceptor>(RespawnAcceptor, {
      useClass: RespawnAcceptor
    })
    const isInitiator = this.isInitiator(config.description)
    if (isInitiator) {
      sessionContainer.register(DITokens.FixSession, {
        useClass: SkeletonClient
      })
    } else {
      sessionContainer.register(DITokens.FixSession, {
        useClass: SkeletonServer
      })
    }
    sessionContainer.register('logoutSeconds', {
      useValue: 45
    })
    sessionContainer.register('useInMemoryStore', {
      useValue: false
    })
  }

  protected getAcceptor (sessionContainer: DependencyContainer): Promise<any> {
    const listener = sessionContainer.resolve<RespawnAcceptor>(RespawnAcceptor)
    return listener.waitFor()
  }

  protected getInitiator (sessionContainer: DependencyContainer): Promise<any> {
    const initiator = sessionContainer.resolve<RecoveringTcpInitiator>(RecoveringTcpInitiator)
    return initiator.run()
  }
}

const l = new AppLauncher()
l.run().then(() => {
  console.log('finished.')
}).catch((e: Error) => {
  console.error(e.message)
})
