import { IJsFixConfig, IJsFixLogger } from '../../../config'
import { acceptor } from '../../../transport'
import { SkeletonServer } from './skeleton-server'

export class RespawnAcceptor {
  private readonly logger: IJsFixLogger

  constructor (public readonly config: IJsFixConfig) {
    this.logger = config.logFactory.logger('RespawnAcceptor')
  }

  // if acceptor errors e.g. via a forced connection drop, then respawn
  // a set number of times.

  public async waitFor (respawns: number = 1): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
      let respawned = 0
      while (respawned <= respawns) {
        try {
          this.logger.info(`waitFor: waiting for acceptor respawned = ${respawned}`)
          await acceptor(this.config, (c) => {
            const dropConnectionTimeout = respawned === 0 ? 5 : -1
            this.logger.info(`waitFor: create a new acceptor session respawned = ${respawned}, dropConnectionTimeout = ${dropConnectionTimeout}`)
            return new SkeletonServer(c, dropConnectionTimeout)
          })
          break
        } catch (e) {
          this.logger.info(`waitFor: error in acceptor respawned = ${respawned}`)
        }
        ++respawned
      }
      if (respawned > 0) {
        this.logger.info(`acceptor respawned reject = ${respawned}`)
        reject(respawned)
      } else {
        this.logger.info(`resolve = ${respawned}`)
        resolve(respawned)
      }
    })
  }
}
