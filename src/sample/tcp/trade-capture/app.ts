import { TradeCaptureServer } from './trade-capture-server'
import { IJsFixConfig } from '../../../config'
import { Launcher } from '../../launcher'
import { TcpInitiatorConnector, TcpAcceptorListener } from '../../../transport/tcp'
import { TradeCaptureClient } from './trade-capture-client'

class AppLauncher extends Launcher {
  public constructor () {
    super(
      'data/session/test-initiator.json',
      'data/session/test-acceptor.json')
  }

  protected getAcceptor (config: IJsFixConfig): Promise<any> {
    return new TcpAcceptorListener(config, c => new TradeCaptureServer(c)).start()
  }

  protected getInitiator (config: IJsFixConfig): Promise<any> {
    return new TcpInitiatorConnector(config, c => new TradeCaptureClient(c)).start()
  }
}

const l = new AppLauncher()
l.run().then(() => {
  console.log('finished.')
}).catch(e => {
  console.error(e)
})
