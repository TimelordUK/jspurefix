import { TradeCaptureClient, TradeCaptureServer } from '../trade-capture'
import { IJsFixConfig } from '../../../config'
import { Launcher } from '../../launcher'
import { TcpInitiatorConnector, TcpAcceptorListener } from '../../../transport/tcp'
import { DependencyContainer } from 'tsyringe'

class AppLauncher extends Launcher {
  public constructor () {
    super(
      'data/session/test-initiator-tls.json',
      'data/session/test-acceptor-tls.json')
  }

  protected getAcceptor (sessionContainer: DependencyContainer): Promise<any> {
    const config: IJsFixConfig = sessionContainer.resolve<IJsFixConfig>('IJsFixConfig')
    return new TcpAcceptorListener(config, c => new TradeCaptureServer(c)).start()
  }

  protected getInitiator (sessionContainer: DependencyContainer): Promise<any> {
    const config: IJsFixConfig = sessionContainer.resolve<IJsFixConfig>('IJsFixConfig')
    return new TcpInitiatorConnector(config, c => new TradeCaptureClient(c)).start()
  }
}

const l = new AppLauncher()
l.run().then(() => {
  console.log('finished.')
}).catch(e => {
  console.error(e)
})
