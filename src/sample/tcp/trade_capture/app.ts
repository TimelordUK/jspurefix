import { TradeCaptureClient } from './trade-capture-client'
import { TradeCaptureServer } from './trade-capture-server'
import { IJsFixConfig } from '../../../config/js-fix-config'
import { Launcher } from '../../launcher'
import { initiator } from '../../../transport/tcp/initiator'
import { acceptor } from '../../../transport/tcp/acceptor'

class AppLauncher extends Launcher {
  public constructor () {
    super(
      'data/session/test-initiator.json',
      'data/session/test-acceptor.json')
  }

  protected getAcceptor (config: IJsFixConfig): Promise<any> {
    return acceptor(config, c => new TradeCaptureServer(c))
  }

  protected getInitiator (config: IJsFixConfig): Promise<any> {
    return initiator(config, c => new TradeCaptureClient(c))
  }
}

const l = new AppLauncher()
l.run().then(() => {
  console.log('finished.')
})
