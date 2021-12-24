import 'reflect-metadata'

import { TradeCaptureClient, TradeCaptureServer } from '../trade-capture'
import { IJsFixConfig } from '../../../config'
import { Launcher } from '../../launcher'
import { TcpInitiatorConnector, TcpAcceptorListener } from '../../../transport/tcp'
import { DependencyContainer } from 'tsyringe'
import { DITokens } from '../../../runtime'

class AppLauncher extends Launcher {
  public constructor () {
    super(
      'data/session/test-initiator-tls.json',
      'data/session/test-acceptor-tls.json')
  }

  protected registerSession (sessionContainer: DependencyContainer) {
    const config: IJsFixConfig = sessionContainer.resolve<IJsFixConfig>(DITokens.IJsFixConfig)
    const isInitiator = config.description.application.type === 'initiator'
    if (isInitiator) {
      sessionContainer.register(DITokens.FixSession, {
        useClass: TradeCaptureClient
      })
    } else {
      sessionContainer.register(DITokens.FixSession, {
        useClass: TradeCaptureServer
      })
    }
  }

  protected getAcceptor (sessionContainer: DependencyContainer): Promise<any> {
    this.registerSession(sessionContainer)
    const listener = sessionContainer.resolve<TcpAcceptorListener>(TcpAcceptorListener)
    return listener.start()
  }

  protected getInitiator (sessionContainer: DependencyContainer): Promise<any> {
    this.registerSession(sessionContainer)
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
