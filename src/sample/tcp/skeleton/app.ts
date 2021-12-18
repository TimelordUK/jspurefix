import { IJsFixConfig } from '../../../config'
import { Launcher } from '../../launcher'
import { SkeletonSession } from './skeleton-session'
import { TcpInitiatorConnector, TcpAcceptorListener } from '../../../transport/tcp'

class AppLauncher extends Launcher {
  public constructor () {
    super(
      'data/session/test-initiator.json',
      'data/session/test-acceptor.json')
  }

  protected getAcceptor (config: IJsFixConfig): Promise<any> {
    return new TcpAcceptorListener(config, c => new SkeletonSession(c)).start()
  }

  protected getInitiator (config: IJsFixConfig): Promise<any> {
    return new TcpInitiatorConnector(config, c => new SkeletonSession(c)).start()
  }
}

const l = new AppLauncher()
l.run().then(() => {
  console.log('finished.')
}).catch((e: Error) => {
  console.log(e.message)
})
