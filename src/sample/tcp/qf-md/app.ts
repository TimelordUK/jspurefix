import 'reflect-metadata'

import { MDClient } from './md-client'
import { MDServer } from './md-server'
import { IJsFixConfig } from '../../../config'
import { TcpInitiatorConnector, TcpAcceptorListener } from '../../../transport/tcp'
import { Launcher } from '../../launcher'
import { DependencyContainer } from 'tsyringe'
import { DITokens } from '../../../runtime'

class AppLauncher extends Launcher {
  public constructor () {
    super(
      'data/session/test-qf44-initiator.json',
      'data/session/test-qf44-acceptor.json')
  }

  protected override registerApplication (sessionContainer: DependencyContainer) {
    const config: IJsFixConfig = sessionContainer.resolve<IJsFixConfig>(DITokens.IJsFixConfig)
    const isInitiator = this.isInitiator(config.description)
    if (isInitiator) {
      sessionContainer.register(DITokens.FixSession, {
        useClass: MDClient
      })
    } else {
      sessionContainer.register(DITokens.FixSession, {
        useClass: MDServer
      })
    }
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
})
