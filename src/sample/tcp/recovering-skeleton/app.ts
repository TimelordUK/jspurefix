import { IJsFixConfig, IJsFixLogger } from '../../../config'
import { Launcher } from '../../launcher'
import { SkeletonClient } from './skeleton-client'
import { SkeletonServer } from './skeleton-server'
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
          await acceptor(config, (c) => {
            const dropConnectionTimeout = respawned === 0 ? 5 : -1
            this.logger.info(`getRespawnAcceptor: create a new acceptor session ${respawned}, dropConnectionTimeout = ${dropConnectionTimeout}`)
            return new SkeletonServer(c, dropConnectionTimeout)
          })
          break
        } catch (e) {
          this.logger.info(`getRespawnAcceptor: error in acceptor respawned = ${respawned}`)
        }
        ++respawned
      }
      if (respawned > 0) {
        reject(respawned)
      } else {
        resolve(respawned)
      }
    })
  }

  protected getAcceptor (config: IJsFixConfig): Promise<any> {
    return this.getRespawnAcceptor(config)
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
