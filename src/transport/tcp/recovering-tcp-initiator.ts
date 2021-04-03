import { IMsgApplication, ITcpTransportDescription } from '../session-description'
import { IJsFixConfig, IJsFixLogger } from '../../config'
import { MakeFixSession } from '../make-fixl-session'
import { FixSession } from '../fix-session'
import * as events from 'events'
import { SessionState } from '../fix-session-state'
import { TcpInitiator } from './tcp-initiator'
import { MsgTransport } from '../msg-transport'

/*
   create one application session instance - and recover a lost transport.  Hence the application
   will automatically re-connected and the "message recovery" policy enacted i.e. replay from
   last known sequence number or sequence reset.
 */

export class RecoveringTcpInitiator extends events.EventEmitter {
  public tcp: ITcpTransportDescription
  public session: FixSession
  private readonly logger: IJsFixLogger
  private application: IMsgApplication
  private initiator: TcpInitiator
  private transport: MsgTransport

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
    this.initiator = new TcpInitiator(jsFixConfig)
    this.session.setState(SessionState.DisconnectedNoConnectionToday)
  }

  public getState (): SessionState {
    return this.session.getState()
  }

  private newTransport (transport: MsgTransport) {
    this.transport = transport
    this.emit('transport', transport)
    this.logger.info(`initiator connects id ${(transport.id)}`)
    const session = this.session
    session.setState(SessionState.NetworkConnectionEstablished)
    transport.receiver.on('end', () => {
      // this.harvestTransport(id)
    })
    transport.receiver.on('error', (e: Error) => {
      this.logger.error(e)
      this.emit('error', e)
      // this.harvestTransport(id)
    })
    this.logger.info(`running session with transport ${transport.id} state = ${session.getState()}`)
  }

  public run (initialTimeout: number = 30): Promise<MsgTransport> {
    return new Promise<MsgTransport>((resolve, reject) => {
      this.logger.info(`start initiator timeout ${initialTimeout}`)
      this.session.setState(SessionState.InitiateConnection)
      this.initiator.connect(initialTimeout).then((transport: MsgTransport) => {
        this.newTransport(transport)
      }).catch(e => {
        this.session.setState(SessionState.DetectBrokenNetworkConnection)
        reject(e)
      })
    })
  }
}
