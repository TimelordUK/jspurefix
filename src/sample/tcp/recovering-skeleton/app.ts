import { IJsFixConfig } from '../../../config'
import { Launcher } from '../../launcher'
import { SkeletonSession } from './skeleton-session'
import { acceptor } from '../../../transport'
import { RecoveringTcpInitiator } from '../../../transport/tcp/recovering-tcp-initiator'

class AppLauncher extends Launcher {
  public constructor () {
    super(
      'data/session/test-initiator.json',
      'data/session/test-acceptor.json')
  }

  // if acceptor errors e.g. via a forced connection drop, then respawn
  // a set number of times.

  protected getRespawnAcceptor (config: IJsFixConfig, respawns: number = 1): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
      let respawned = 0
      while (respawned <= respawns) {
        try {
          await acceptor(config, (c) => new SkeletonSession(c))
          resolve(respawned)
        } catch (e) {
          ++respawned
        }
      }
      reject(respawned)
    })
  }

  protected getAcceptor (config: IJsFixConfig): Promise<any> {
    return this.getRespawnAcceptor(config)
  }

  protected getInitiator (config: IJsFixConfig): Promise<any> {
    return new RecoveringTcpInitiator(config, c => new SkeletonSession(c)).run()
  }
}

const l = new AppLauncher()
l.run().then(() => {
  console.log('finished.')
}).catch((e: Error) => {
  console.error(e.message)
})
