import 'reflect-metadata'

import { TradeCaptureServer } from './trade-capture-server'
import { Launcher } from '../../launcher'
import { TcpAcceptorListener, TcpInitiatorConnector } from '../../../transport/tcp'
import { TradeCaptureClient } from './trade-capture-client'
import { DependencyContainer } from 'tsyringe'
import { DITokens } from '../../../runtime'

class AppLauncher extends Launcher {
  public constructor () {
    super(
      'data/session/test-initiator.json',
      'data/session/test-acceptor.json')
  }

  protected getAcceptor (sessionContainer: DependencyContainer): Promise<any> {
    sessionContainer.register(DITokens.FixSession, {
      useClass: TradeCaptureServer
    })
    const listener = sessionContainer.resolve<TcpAcceptorListener>(TcpAcceptorListener)
    return listener.start()
  }

  protected getInitiator (sessionContainer: DependencyContainer): Promise<any> {
    sessionContainer.register(DITokens.FixSession, {
      useClass: TradeCaptureClient
    })
    const initiator = sessionContainer.resolve<TcpInitiatorConnector>(TcpInitiatorConnector)
    return initiator.start()
  }
}

const l = new AppLauncher()
l.run().then(() => {
  console.log('finished.')
}).catch(e => {
  console.error(e)
})
