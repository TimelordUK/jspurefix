import 'reflect-metadata'

import { IJsFixConfig } from '../../../config'
import { Launcher } from '../../launcher'
import { SkeletonSession } from './skeleton-session'
import { TcpInitiatorConnector, TcpAcceptorListener } from '../../../transport/tcp'
import { DependencyContainer } from 'tsyringe'
import { DITokens } from '../../../runtime'

class AppLauncher extends Launcher {
  public constructor () {
    super(
      'data/session/test-initiator.json',
      'data/session/test-acceptor.json')
  }

  protected registerSession (sessionContainer: DependencyContainer) {
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

  protected getAcceptor (sessionContainer: DependencyContainer): Promise<any> {
    this.registerSession(sessionContainer)
    const listener = sessionContainer.resolve<TcpAcceptorListener>(TcpAcceptorListener)
    return listener.start()
  }

  protected getInitiator (sessionContainer: DependencyContainer): Promise<any> {
    const config: IJsFixConfig = sessionContainer.resolve<IJsFixConfig>(DITokens.FixSession)
    return new TcpInitiatorConnector(config, c => new SkeletonSession(c, 45, false)).start()
  }
}

const l = new AppLauncher()
l.run().then(() => {
  console.log('finished.')
}).catch((e: Error) => {
  console.log(e.message)
})
