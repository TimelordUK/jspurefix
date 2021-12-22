import { IJsFixConfig } from '../../../config'
import { Launcher } from '../../launcher'
import { SkeletonClient } from './skeleton-client'
import { RecoveringTcpInitiator, TcpAcceptorListener, TcpInitiatorConnector } from '../../../transport/tcp'
import { RespawnAcceptor } from './respawn-acceptor'
import { AsciiChars } from '../../../buffer/ascii'
import { DependencyContainer } from 'tsyringe'
import { TradeCaptureClient, TradeCaptureServer } from '../trade-capture'

class AppLauncher extends Launcher {

  public constructor () {
    super(
      'data/session/test-initiator.json',
      'data/session/test-acceptor.json')
  }

  protected getAcceptor (sessionContainer: DependencyContainer): Promise<any> {
    const config: IJsFixConfig = sessionContainer.resolve<IJsFixConfig>('IJsFixConfig')
    // use a different log delimiter as an example
    config.logDelimiter = AsciiChars.Carat
    const respawn = new RespawnAcceptor(config)
    return respawn.waitFor()
  }

  protected getInitiator (sessionContainer: DependencyContainer): Promise<any> {
    const config: IJsFixConfig = sessionContainer.resolve<IJsFixConfig>('IJsFixConfig')
    return new RecoveringTcpInitiator(config, c => new SkeletonClient(c)).run()
  }
}

const l = new AppLauncher()
l.run().then(() => {
  console.log('finished.')
}).catch((e: Error) => {
  console.error(e.message)
})
