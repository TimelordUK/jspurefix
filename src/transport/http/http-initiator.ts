import { IJsFixConfig, IJsFixLogger } from '../../config'
import { MsgTransport } from '../factory'
import { HttpDuplex } from '../duplex'
import { FixSession } from '../session/fix-session'
import { inject, injectable } from 'tsyringe'
import { DITokens } from '../../runtime/di-tokens'
import { FixEntity } from '../fix-entity'

@injectable()
export class HttpInitiator extends FixEntity {
  logger: IJsFixLogger
  constructor (@inject(DITokens.IJsFixConfig) public readonly config: IJsFixConfig) {
    super(config)
    this.logger = config.logFactory.logger('initiator')
  }

  async start (): Promise<any> {
    return await this.connect(this.config)
  }

  // the adapter will be provided on config
  async connect (config: IJsFixConfig): Promise<any> {
    return await new Promise<any>(async (resolve, reject) => {
      const adapter = config?.description?.application?.http?.adapter
      if (!adapter) {
        reject(new Error('http initiator needs config.description.application.http.adapter'))
      }
      const sessionContainer = this.config.sessionContainer
      if (!sessionContainer.isRegistered(DITokens.FixSession)) {
        reject(new Error(`application must register a DI token '${DITokens.FixSession}' - see src/sample`))
      }
      this.logger.info(`create session with DI Token ${DITokens.FixSession}`)
      const initiatorSession = sessionContainer.resolve<FixSession>(DITokens.FixSession)
      this.logger.info('connecting ...')
      const initiatorTransport: MsgTransport | null = adapter
        ? new MsgTransport(0, config, new HttpDuplex(adapter))
        : null
      if (!initiatorTransport) {
        reject(new Error('no initiatorTransport for http'))
      } else {
        this.logger.info('... connected, run session')
        initiatorSession.run(initiatorTransport).then(() => {
          this.logger.info('ends')
          resolve(true)
        }).catch((e: Error) => {
          this.logger.error(e)
          reject(e)
        })
      }
    })
  }
}
