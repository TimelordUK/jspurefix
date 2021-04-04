import { IMsgApplication, ITcpTransportDescription } from '../session-description'
import { IJsFixConfig, IJsFixLogger } from '../../config'
import { MakeFixSession } from '../make-fixl-session'
import { FixSession } from '../fix-session'
import { SessionState } from '../fix-session-state'
import { TcpInitiator } from './tcp-initiator'
import { MsgTransport } from '../msg-transport'
import * as events from 'events'

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
    this.logger = jsFixConfig.logFactory.logger(`${this.application.name}:RecoveringTcpInitiator`)
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
    this.session.on('done', () => {
      this.logger.info('session has permanently ended')
      this.emit('end', this)
    })
    this.session.on('end', () => {
      this.logger.info('session has permanently ended')
      this.emit('end', this)
    })
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
    session.run(transport).then((id: number) => {
      if (!transport || id === transport.id) {
        this.emit('end', this)
      } else {
        this.logger.info(`old transport ${id} ends waiting on ${(transport.id)}`)
      }
    }).catch(e => {
      this.logger.info(`transport id ${(transport.id)} failed - session state ${session.getState()}`)
      this.logger.error(e.message)
      this.recover()
    })
    this.logger.info(`running session with transport ${transport.id} state = ${session.getState()}`)
  }

  private recover (): void {
    this.session.setState(SessionState.DetectBrokenNetworkConnection)
    this.logger.info(`recover session transport`)
  }

  // for first connection - reject if no initial connection established within timeout
  // once connection established, will not resolve until session is ended - i.e. lost
  // connections are re-established using the same session instance.

  public run (initialTimeout: number = 60): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.connect(initialTimeout).then(() => {
        this.on('end', () => {
          this.logger.info(`run: transport ${this.transport.id} gracefully ends ${initialTimeout} - resolving`)
          resolve(null)
        })
      }).catch(e => {
        this.logger.info(`run: failed to connect to first transport ${initialTimeout} - rejecting`)
        reject(e)
      })
    })
  }

  // return a promise for new transport - or reject if no connection within timeout

  private connect (timeout: number): Promise<MsgTransport> {
    return new Promise<MsgTransport>((resolve, reject) => {
      this.logger.info(`connect: start initiator timeout ${timeout}`)
      this.session.setState(SessionState.InitiateConnection)
      this.initiator.connect(timeout).then((transport: MsgTransport) => {
        this.logger.info(`connect: receive new transport ${transport.id}`)
        this.newTransport(transport)
        resolve(transport)
      }).catch(e => {
        this.logger.info(`connect: failed to connect within ${timeout} - rejecting`)
        this.session.setState(SessionState.DetectBrokenNetworkConnection)
        reject(e)
      })
    })
  }
}
