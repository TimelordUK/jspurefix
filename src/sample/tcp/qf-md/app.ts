import { MDClient } from './md-client'
import { MDServer } from './md-server'
import { IJsFixConfig } from '../../../config'
import { TcpInitiatorConnector, TcpAcceptorListener } from '../../../transport'
import { Launcher } from '../../launcher'

class AppLauncher extends Launcher {
  public constructor () {
    super(
      'data/session/test-qf44-initiator.json',
      'data/session/test-qf44-acceptor.json')
  }

  protected getAcceptor (config: IJsFixConfig): Promise<any> {
    return new TcpAcceptorListener(config, c => new MDServer(c)).start()
  }

  protected getInitiator (config: IJsFixConfig): Promise<any> {
    return new TcpInitiatorConnector(config, c => new MDClient(c)).start()
  }
}

const l = new AppLauncher()
l.run().then(() => {
  console.log('finished.')
})
