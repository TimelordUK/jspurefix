import { IJsFixConfig, IJsFixLogger } from '../../config'
import { FixSession } from '../session/fix-session'
import { TcpInitiator } from './tcp-initiator'
import { MsgTransport } from '../factory'
import Timeout = NodeJS.Timeout
import { SessionState } from '../session/session-state'
import { inject, injectable } from 'tsyringe'
import { DITokens } from '../../runtime/di-tokens'
import { ITcpTransportDescription } from './tcp-transport-description'
import { IMsgApplication } from '../msg-application'
import { FixEntity } from '../fix-entity'
import { describeConnectError } from './connect-error'

/*
   create one application session instance - and recover a lost transport.  Hence, the application
   will automatically re-connected and the "message recovery" policy enacted i.e. replay from
   last known sequence number or sequence reset.
 */

@injectable()
export class RecoveringTcpInitiator extends FixEntity {
  public tcp: ITcpTransportDescription | null
  public session: FixSession
  private readonly logger: IJsFixLogger
  private readonly application: IMsgApplication | null
  private initiator: TcpInitiator
  private transport: MsgTransport
  private th: Timeout | null = null
  private stopRequested: boolean = false
  public static readonly DefaultRecoveryAttemptSecs = 5
  public static readonly DefaultBackoffFailConnectSecs = 30
  public static readonly DefaultConnectTimeoutSecs = 60

  public recoveryAttemptSecs: number = RecoveringTcpInitiator.DefaultRecoveryAttemptSecs
  public backoffFailConnectSecs: number = RecoveringTcpInitiator.DefaultBackoffFailConnectSecs
  public connectTimeoutSecs: number = RecoveringTcpInitiator.DefaultConnectTimeoutSecs

  constructor (@inject(DITokens.IJsFixConfig) public readonly jsFixConfig: IJsFixConfig) {
    super(jsFixConfig)
    this.application = this.jsFixConfig.description.application ?? null
    const name = this.application?.name ?? 'na'
    this.logger = jsFixConfig.logFactory.logger(`${name}:RecoveringTcpInitiator`,
      { component: 'RecoveringTcpInitiator', app: name, role: 'initiator' })
    if (!this.application) {
      throw new Error('no application in session description.')
    }
    this.tcp = this.application.tcp ?? null
    if (!this.tcp) {
      throw new Error('no tcp in session description need tcp { host: hostname, port: port }')
    }
    // the retry policy used to live only in these fields, which nothing set - an
    // application could not change how hard or how long the engine tried to get its
    // transport back without subclassing the launcher.  See issue #72.
    this.recoveryAttemptSecs = this.application.recoveryAttemptSeconds ?? this.recoveryAttemptSecs
    this.backoffFailConnectSecs = this.application.backoffFailConnectSeconds ?? this.backoffFailConnectSecs
    this.connectTimeoutSecs = this.application.connectTimeoutSeconds ?? this.connectTimeoutSecs
    this.logger.info(`recovery policy: connectTimeout=${this.connectTimeoutSecs}s, ` +
      `recoveryAttempt=${this.recoveryAttemptSecs}s, backoffFailConnect=${this.backoffFailConnectSecs}s`)
    this.createSession(jsFixConfig)
  }

  private createSession (jsFixConfig: IJsFixConfig): void {
    this.logger.info(`creating an application session with DI token ${DITokens.FixSession}.`)
    this.session = jsFixConfig.sessionContainer.resolve<FixSession>(DITokens.FixSession)
    this.session.on('done', () => {
      this.logger.info('session has permanently ended')
      this.emit('end', this)
    })
    this.session.on('end', () => {
      this.logger.info('session has permanently ended')
      this.emit('end', this)
    })
    // A lost transport is this initiator's normal course of events, and recovery is
    // driven by session.run() rejecting rather than by this event.  But whilst waiting
    // between attempts there is no run in flight to carry a listener, so a stop landing
    // then would emit 'error' to nobody - which node treats as fatal.
    this.session.on('error', (e: Error) => {
      this.logger.info(`session error: ${e.message}`)
    })
    this.session.setState(SessionState.DisconnectedNoConnectionToday)
  }

  public getState (): SessionState {
    return this.session.getState()
  }

  public lastSentSeqNum (): number {
    return this.session.lastSentSeqNum()
  }

  private resetSeq (): boolean {
    return this.jsFixConfig.description.ResetSeqNumFlag
  }

  private newTransport (transport: MsgTransport): void {
    this.transport = transport
    this.emit('transport', transport)
    this.logger.info(`initiator connects id ${(transport.id)}`)
    const session = this.session
    if (this.resetSeq()) {
      this.logger.info('reset sequence numbers')
      session.reset()
    }
    session.setState(SessionState.NetworkConnectionEstablished)
    session.run(transport).then((id: number) => {
      if (!transport || id === transport.id) {
        this.emit('end', this)
      } else {
        this.logger.info(`old transport ${id} ends waiting on ${(transport.id)}`)
      }
    }).catch(e => {
      this.logger.info(`transport id ${(transport.id)} failed - session state ${session.getState()}`)
      this.logger.warning(e.message)
      this.recover()
    })
    this.logger.info(`running session with transport ${transport.id} state = ${session.getState()}`)
  }

  private clearTimer (): void {
    if (this.th) {
      clearTimeout(this.th)
      this.th = null
    }
  }

  // at least one connection was established so retry to establish - either
  // succeed in which case can restart session or fails in which case wait and
  // restart an attempt to connect

  /**
   * Give up recovering and end the session for good.
   *
   * Without this a resilient initiator could not be shut down: losing the transport
   * schedules another attempt, and nothing cancelled that timer, so the process stayed
   * alive retrying a counterparty the application had finished with.  Safe to call
   * twice, and safe whilst waiting between attempts with no transport at all.
   */
  public stop (): void {
    if (this.stopRequested) return
    this.stopRequested = true
    this.logger.info('stop requested - cancelling recovery')
    this.clearTimer()
    if (this.session.getState() !== SessionState.Stopped) {
      this.session.requestStop('initiator stopped')
    }
    this.emit('end', this)
  }

  private recover (): void {
    if (this.stopRequested) {
      this.logger.info('transport lost after a stop was requested - not recovering')
      this.emit('end', this)
      return
    }
    this.session.setState(SessionState.DetectBrokenNetworkConnection)
    this.logger.info(`recover session transport - attempt in ${this.recoveryAttemptSecs} secs`)
    if (!this.resetSeq()) {
      const lastSentSeqNum = this.lastSentSeqNum()
      if (lastSentSeqNum > 0) {
        this.logger.info(`recover session set LastSentSeqNum ${lastSentSeqNum} for new transport`)
        this.config.description.LastSentSeqNum = lastSentSeqNum
      }
    }
    this.th = setTimeout(() => {
      this.connect(this.connectTimeoutSecs).then(t => {
        this.logger.info(`new transport ${t.id}`)
      }).catch((e) => {
        this.logger.info(`failed to re-connect: ${describeConnectError(e)} - backoff for ${this.backoffFailConnectSecs}`)
        this.th = setTimeout(() => {
          this.logger.info('returning to recover()')
          setImmediate(() => {
            this.recover()
          })
        }, this.backoffFailConnectSecs * 1000)
      })
    }, this.recoveryAttemptSecs * 1000)
  }

  public async start (): Promise<any> {
    return await this.run()
  }

  // for first connection - reject if no initial connection established within timeout
  // once connection established, will not resolve until session is ended - i.e. lost
  // connections are re-established using the same session instance.  So this promise
  // is the lifetime of the application, not a signal that the session is up: for that,
  // use onReady on the session.  See issue #72.

  public async run (initialTimeout: number = this.connectTimeoutSecs): Promise<any> {
    return await new Promise<any>((resolve, reject) => {
      // 'end' can arrive more than once - a stop both ends the session and calls off
      // recovery, and each path announces itself - so settle only on the first.  The
      // listener goes on before connecting, not after: a stop landing whilst the first
      // connection is still being attempted has to be able to end this too, and until
      // now there was nothing listening that early to hear it.
      let ended = false
      const finish = (): void => {
        if (ended) return
        ended = true
        this.clearTimer()
        this.initiator?.end()
        this.logger.info(`run: transport ${this.transport?.id ?? 'none'} ends - resolving`)
        resolve(null)
      }
      this.on('end', finish)

      this.connect(initialTimeout).catch(e => {
        if (this.stopRequested) {
          this.logger.info('run: first connection abandoned on stop - resolving')
          finish()
          return
        }
        this.logger.info(`run: failed to connect to first transport ${initialTimeout} - rejecting`)
        reject(e)
      })
    })
  }

  // return a promise for new transport - or reject if no connection within timeout

  private async connect (timeout: number): Promise<MsgTransport> {
    return await new Promise<MsgTransport>((resolve, reject) => {
      this.logger.info(`connect: start initiator timeout ${timeout}`)
      this.session.setState(SessionState.InitiateConnection)
      this.initiator = new TcpInitiator(this.jsFixConfig)
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
