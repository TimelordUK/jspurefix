import { TradeCaptureClient, TradeCaptureServer } from '../trade-capture'
import { IJsFixConfig } from '../../../config'
import { Launcher } from '../../launcher'
import { TcpInitiatorConnector, TcpAcceptorListener } from '../../../transport/tcp'

class AppLauncher extends Launcher {
  public constructor () {
    super(
      'data/session/test-initiator-tls.json',
      'data/session/test-acceptor-tls.json')
  }

  protected getAcceptor (config: IJsFixConfig): Promise<any> {
    return new TcpAcceptorListener(config, c => {
      return new TradeCaptureServer(c)
    }).start()
  }

  protected getInitiator (config: IJsFixConfig): Promise<any> {
    return new TcpInitiatorConnector(config, c => {
      return new TradeCaptureClient(c)
    }).start()
  }
}

const l = new AppLauncher()
l.run().then(() => {
  console.log('finished.')
}).catch(e => {
  console.error(e)
})
