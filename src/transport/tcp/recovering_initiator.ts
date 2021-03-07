import { IMsgApplication, ITcpTransportDescription } from '../session-description'
import { IJsFixConfig, IJsFixLogger } from '../../config'
import { InitiatorState } from './tcp-initiator'
import { MakeFixSession } from '../make-fixl-session'

export class RecoveringInitiator {
  public tcp: ITcpTransportDescription
  public state: InitiatorState = InitiatorState.Idle
  private readonly logger: IJsFixLogger
  private application: IMsgApplication
  constructor (public readonly jsFixConfig: IJsFixConfig, sessionFactory: MakeFixSession) {
    this.application = this.jsFixConfig.description.application
    this.logger = jsFixConfig.logFactory.logger(`${this.application.name}:TcpInitiator`)
    if (!this.application) {
      const e: Error = new Error(`no application in session description.`)
      this.logger.error(e)
      throw e
    }
    this.tcp = this.application.tcp
    if (!this.tcp) {
      const e = new Error(`no tcp in session description need tcp { host: hostname, port: port }`)
      this.logger.error(e)
      throw e
    }
  }
}
