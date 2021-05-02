import { MDClient } from './md-client'
import { MDServer } from './md-server'
import { IJsFixConfig } from '../../../config'
import { initiator, acceptor } from '../../../transport'
import { Launcher } from '../../launcher'

class AppLauncher extends Launcher {
  public constructor () {
    super(
      'data/session/test-qf44-initiator.json',
      'data/session/test-qf44-acceptor.json')
  }

  protected getAcceptor (config: IJsFixConfig): Promise<any> {
    return acceptor(config, c => new MDServer(c))
  }

  protected getInitiator (config: IJsFixConfig): Promise<any> {
    return initiator(config, c => new MDClient(c))
  }
}

const l = new AppLauncher()
l.run().then(() => {
  console.log('finished.')
})
