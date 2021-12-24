import 'reflect-metadata'

import { Launcher } from '../../launcher'
import { SkeletonSession } from './skeleton-session'
import { TcpInitiatorConnector, TcpAcceptorListener } from '../../../transport/tcp'
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

  protected getAcceptor (sessionContainer: DependencyContainer): Promise<any> {
    const listener = sessionContainer.resolve<TcpAcceptorListener>(TcpAcceptorListener)
    return listener.start()
  }

  protected getInitiator (sessionContainer: DependencyContainer): Promise<any> {
    const initiator = sessionContainer.resolve<TcpInitiatorConnector>(TcpInitiatorConnector)
    return initiator.start()
  }
}

const l = new AppLauncher()
l.run().then(() => {
  console.log('finished.')
}).catch((e: Error) => {
  console.log(e.message)
})
