import { IJsFixConfig, IJsFixLogger } from '../../../config'
import { TcpAcceptorListener } from '../../../transport/tcp'
import { inject, injectable } from 'tsyringe'
import { FixEntity } from '../../../transport'

@injectable()
export class RespawnAcceptor extends FixEntity {
  private readonly logger: IJsFixLogger

  constructor (@inject('IJsFixConfig') public readonly config: IJsFixConfig) {
    super(config)
    this.logger = config.logFactory.logger('RespawnAcceptor')
  }

  // if acceptor errors e.g. via a forced connection drop, then respawn
  // a set number of times.

  public async start (): Promise<any> {
    return await this.waitFor()
  }

  public async waitFor (respawns: number = 1): Promise<any> {
    return await new Promise<any>(async (resolve, reject) => {
      let respawned = 0
      while (respawned <= respawns) {
        try {
          const sessionContainer = this.config.sessionContainer
          const listener = sessionContainer.resolve<TcpAcceptorListener>(TcpAcceptorListener)
          const dropConnectionTimeout = respawned === 0 ? 5 : -1
          sessionContainer.register('dropConnectionTimeout', { useValue: dropConnectionTimeout })
          this.logger.info(`waitFor: waiting for acceptor respawned = ${respawned}`)
          await listener.start()
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
