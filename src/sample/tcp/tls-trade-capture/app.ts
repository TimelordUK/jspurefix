import { TradeCaptureClient, TradeCaptureServer } from '../trade-capture'
import { IJsFixConfig } from '../../../config'
import { Launcher } from '../../launcher'
import { initiator, acceptor } from '../../../transport'

class AppLauncher extends Launcher {
  public constructor () {
    super(
      'data/session/test-initiator-tls.json',
      'data/session/test-acceptor-tls.json')
  }

  protected getAcceptor (config: IJsFixConfig): Promise<any> {
    return acceptor(config, c => {
      return new TradeCaptureServer(c)
    })
  }

  protected getInitiator (config: IJsFixConfig): Promise<any> {
    return initiator(config, c => {
      return new TradeCaptureClient(c)
    })
  }
}

const l = new AppLauncher()
l.run().then(() => {
  console.log('finished.')
}).catch(e => {
  console.error(e)
})
