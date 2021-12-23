import 'reflect-metadata'

import { MDClient } from './md-client'
import { MDServer } from './md-server'
import { IJsFixConfig } from '../../../config'
import { TcpInitiatorConnector, TcpAcceptorListener } from '../../../transport/tcp'
import { Launcher } from '../../launcher'
import { DependencyContainer } from 'tsyringe'

class AppLauncher extends Launcher {
  public constructor () {
    super(
      'data/session/test-qf44-initiator.json',
      'data/session/test-qf44-acceptor.json')
  }

  protected getAcceptor (sessionContainer: DependencyContainer): Promise<any> {
    sessionContainer.register('FixSession', {
      useClass: MDServer
    })
    const listener = sessionContainer.resolve<TcpAcceptorListener>(TcpAcceptorListener)
    return listener.start()
  }

  protected getInitiator (sessionContainer: DependencyContainer): Promise<any> {
    const config: IJsFixConfig = sessionContainer.resolve<IJsFixConfig>('IJsFixConfig')
    return new TcpInitiatorConnector(config, c => new MDClient(c)).start()
  }
}

const l = new AppLauncher()
l.run().then(() => {
  console.log('finished.')
})
