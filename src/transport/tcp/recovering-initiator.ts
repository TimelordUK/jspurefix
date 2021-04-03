import { IMsgApplication, ITcpTransportDescription } from '../session-description'
import { IJsFixConfig, IJsFixLogger } from '../../config'
import { InitiatorState } from './tcp-initiator'
import { MakeFixSession } from '../make-fixl-session'
import { FixSession } from '../fix-session'
import * as events from 'events'

/*
   create one application session instance - and recover a lost transport.  Hence the application
   will automatically re-connected and the "message recovery" policy enacted i.e. replay from
   last known sequence number or sequence reset.
 */

export class RecoveringInitiator extends events.EventEmitter {
  public tcp: ITcpTransportDescription
  public session: FixSession
  public state: InitiatorState = InitiatorState.Idle
  private readonly logger: IJsFixLogger
  private application: IMsgApplication

  constructor (public readonly jsFixConfig: IJsFixConfig, public readonly sessionFactory: MakeFixSession) {
    super()
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
    this.logger.info('creating an application session')
    this.session = sessionFactory(jsFixConfig)
  }
}
