import 'reflect-metadata'

import { IJsFixConfig } from '../../../config'
import { Launcher } from '../../launcher'
import { SkeletonClient } from './skeleton-client'
import { RecoveringTcpInitiator } from '../../../transport/tcp'
import { RespawnAcceptor } from './respawn-acceptor'
import { AsciiChars } from '../../../buffer/ascii'
import { DependencyContainer } from 'tsyringe'
import { SkeletonServer } from './skeleton-server'

class AppLauncher extends Launcher {

  public constructor () {
    super(
      'data/session/test-initiator.json',
      'data/session/test-acceptor.json')
  }

  protected registerSession (sessionContainer: DependencyContainer) {
    const config: IJsFixConfig = sessionContainer.resolve<IJsFixConfig>('IJsFixConfig')
    // use a different log delimiter as an example
    config.logDelimiter = AsciiChars.Carat
    sessionContainer.register<RespawnAcceptor>(RespawnAcceptor, {
      useClass: RespawnAcceptor
    })
    const isInitiator = config.description.application.type === 'initiator'
    if (isInitiator) {
      sessionContainer.register('FixSession', {
        useClass: SkeletonClient
      })
    } else {
      sessionContainer.register('FixSession', {
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
    this.registerSession(sessionContainer)
    const listener = sessionContainer.resolve<RespawnAcceptor>(RespawnAcceptor)
    return listener.waitFor()
  }

  protected getInitiator (sessionContainer: DependencyContainer): Promise<any> {
    const config: IJsFixConfig = sessionContainer.resolve<IJsFixConfig>('IJsFixConfig')
    return new RecoveringTcpInitiator(config, c => new SkeletonClient(c, 45)).run()
  }
}

const l = new AppLauncher()
l.run().then(() => {
  console.log('finished.')
}).catch((e: Error) => {
  console.error(e.message)
})
