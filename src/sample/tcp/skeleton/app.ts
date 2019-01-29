import { IJsFixConfig } from '../../../config'
import { Launcher } from '../../launcher'
import { SkeletonSession } from './skeleton-session'
import { initiator, acceptor } from '../../../transport/tcp'

class AppLauncher extends Launcher {
  public constructor () {
    super(
      'data/session/test-initiator.json',
      'data/session/test-acceptor.json')
  }

  protected getAcceptor (config: IJsFixConfig): Promise<any> {
    return acceptor(config, c => new SkeletonSession(c))
  }

  protected getInitiator (config: IJsFixConfig): Promise<any> {
    return initiator(config, c => new SkeletonSession(c))
  }
}

const l = new AppLauncher()
l.run().then(() => {
  console.log('finished.')
})
