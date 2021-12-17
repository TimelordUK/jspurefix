import { IJsFixConfig } from '../../../config'
import { Launcher } from '../../launcher'
import { SkeletonClient } from './skeleton-client'
import { RecoveringTcpInitiator } from '../../../transport'
import { RespawnAcceptor } from './respawn-acceptor'
import { AsciiChars } from '../../../buffer'

class AppLauncher extends Launcher {

  public constructor () {
    super(
      'data/session/test-initiator.json',
      'data/session/test-acceptor.json')
  }

  protected getAcceptor (config: IJsFixConfig): Promise<any> {
    // use a different log delimiter as an example
    config.logDelimiter = AsciiChars.Carat
    const respawn = new RespawnAcceptor(config)
    return respawn.waitFor()
  }

  protected getInitiator (config: IJsFixConfig): Promise<any> {
    return new RecoveringTcpInitiator(config, c => new SkeletonClient(c)).run()
  }
}

const l = new AppLauncher()
l.run().then(() => {
  console.log('finished.')
}).catch((e: Error) => {
  console.error(e.message)
})
