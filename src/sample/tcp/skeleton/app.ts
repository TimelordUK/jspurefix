import { IJsFixConfig } from '../../../config'
import { Launcher } from '../../launcher'
import { SkeletonSession } from './skeleton-session'
import { TcpInitiatorConnector, TcpAcceptorListener } from '../../../transport/tcp'
import { DependencyContainer } from 'tsyringe'

class AppLauncher extends Launcher {
  public constructor () {
    super(
      'data/session/test-initiator.json',
      'data/session/test-acceptor.json')
  }

  protected getAcceptor (sessionContainer: DependencyContainer): Promise<any> {
    const config: IJsFixConfig = sessionContainer.resolve<IJsFixConfig>('IJsFixConfig')
    return new TcpAcceptorListener(config, c => new SkeletonSession(c)).start()
  }

  protected getInitiator (sessionContainer: DependencyContainer): Promise<any> {
    const config: IJsFixConfig = sessionContainer.resolve<IJsFixConfig>('IJsFixConfig')
    return new TcpInitiatorConnector(config, c => new SkeletonSession(c)).start()
  }
}

const l = new AppLauncher()
l.run().then(() => {
  console.log('finished.')
}).catch((e: Error) => {
  console.log(e.message)
})
