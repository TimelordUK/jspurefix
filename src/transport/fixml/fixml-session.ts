import * as events from 'events'
import { IJsFixLogger } from '../../config/js-fix-logger'
import { FixSessionState, SessionState } from '../fix-session-state'
import { MsgTransport } from '../msg-transport'
import { IJsFixConfig } from '../../config/js-fix-config'
import { MsgType } from '../../types/enum/msg_type'
import { MsgView } from '../../buffer/msg-view'
import { SegmentType } from '../../buffer/segment-description'
import { ElasticBuffer } from '../../buffer/elastic-buffer'
import { ILooseObject } from '../../collections/collection'

export abstract class FixmlSession {

  public readonly me: string
  public logReceivedMsgs: boolean = false

  private readonly initiator: boolean
  private readonly acceptor: boolean
  private readonly emitter: events.EventEmitter
  private readonly sessionLogger: IJsFixLogger
  private readonly sessionState: FixSessionState
  private transport: MsgTransport = null

  private timer: NodeJS.Timer = null

  protected constructor (public readonly config: IJsFixConfig) {
    const description = config.description
    this.emitter = new events.EventEmitter()
    this.me = description.application.name
    this.sessionLogger = config.logFactory.logger(`${this.me}:FixSession`)
    this.initiator = description.application.type === 'initiator'
    this.acceptor = !this.initiator
    this.sessionState = new FixSessionState(description.HeartBtInt)
    this.sessionState.compId = description.SenderCompId
  }

  protected send (msgType: string, obj: ILooseObject) {
    switch (this.sessionState.state) {
      case SessionState.Stopped: {
        this.sessionLogger.warning(`can't send in stopped state`)
        break
      }

      default: {
        this.sessionState.LastSentAt = new Date()
        this.transport.transmitter.send(msgType, obj)
        break
      }
    }
  }

  public run (transport: MsgTransport): Promise<any> {
    const logger = this.sessionLogger
    if (this.transport) {
      logger.info('reset from previous transport.')
      this.reset()
    }
    this.transport = transport
    this.subscribe()
    return new Promise<any>((accept, reject) => {
      if (this.initiator) {
        logger.debug('sending logon')
        this.send(MsgType.Logon, this.config.factory.logon())
      }
      this.emitter.on('error', (e: Error) => {
        logger.error(e)
        reject(e)
      })
      this.emitter.on('done', () => {
        accept()
      })
    })
  }

  public reset (): void {
    this.transport = null
    this.sessionState.state = SessionState.Connected
    this.sessionState.lastPeerMsgSeqNum = 0
  }

  // application responsible for writing its own log
  protected abstract onDecoded (msgType: string, txt: string): void
  protected abstract onEncoded (msgType: string, txt: string): void
  // an application level message to be handled by implementation, unless
  // manageSession = false in which case all messages will be forwarded
  protected abstract onApplicationMsg (msgType: string, view: MsgView): void
  // inform application peer has logged in - provide login message
  protected abstract onReady (view: MsgView): void
  // inform application this session has now ended - either from logout or connection dropped
  protected abstract onStopped (): void
  // does the application accept the inbound logon request
  protected abstract onLogon (view: MsgView, user: string, password: string): boolean

  private subscribe () {

    const transport = this.transport
    const logger = this.sessionLogger

    const rx = transport.receiver
    const tx = transport.transmitter

    rx.on('msg', (msgType: string, view: MsgView) => {
      if (this.logReceivedMsgs) {
        const name = view.segment.type !== SegmentType.Unknown ? view.segment.set.name : 'unknown'
        logger.info(`${msgType}: ${name}`)
        logger.info(`${view.toString()}`)
      }
      this.sessionState.lastReceivedAt = new Date()
      this.onApplicationMsg(msgType, view)
    }
    )

    rx.on('error', (e: Error) => {
      logger.warning(`rx error event: ${e.message} ${e.stack || ''}`)
      this.terminate(e)
    })

    rx.on('done', () => this.done())

    rx.on('decoded', (msgType: string, data: ElasticBuffer, ptr: number) => {
      logger.debug(`rx: [${msgType}] ${ptr} bytes`)
      this.onDecoded(msgType, data.toString(ptr))
    })

    tx.on('error', (e: Error) => {
      logger.warning(`tx error event: ${e.message} ${e.stack || ''}`)
      this.terminate(e)
    })

    tx.on('encoded', (msgType: string, data: Buffer) => {
      logger.debug(`tx: [${msgType}] ${data.length} bytes`)
      this.onEncoded(msgType, data.toString())
    })
  }

  private terminate (error: Error): void {
    this.sessionLogger.error(error)
    clearInterval(this.timer)
    this.emitter.emit('error', error)
  }

  public done (): void {
    switch (this.sessionState.state) {
      case SessionState.PeerLoggedOn: {
        this.sessionLogout()
        break
      }

      case SessionState.Stopped:
        this.sessionLogger.info(`done. session is now stopped`)
        break

      default: {
        this.stop()
        break
      }
    }
    this.sessionLogger.info(`done. check logout sequence`)
  }

  private sessionLogout (): void {
    const sessionState = this.sessionState
    if (sessionState.logoutSentAt) {
      return
    }
    const factory = this.config.factory
    switch (sessionState.state) {
      case SessionState.PeerLoggedOn: {
        // this instance initiates logout
        sessionState.state = SessionState.WaitingLogoutConfirm
        sessionState.logoutSentAt = new Date()
        const msg = `${this.me} initiate logout`
        this.sessionLogger.info(msg)
        this.send(MsgType.Logout, factory.logout(msg))
        break
      }

      case SessionState.ConfirmingLogout: {
        // this instance responds to logout
        sessionState.logoutSentAt = new Date()
        const msg = `${this.me} confirming logout`
        this.sessionLogger.info(msg)
        this.send(MsgType.Logout, factory.logout(msg))
        break
      }

      default: {
        this.sessionLogger.info(`sessionLogout ignored as in state ${sessionState.state}`)
      }
    }
  }

  private stop (): void {
    if (this.sessionState.state === SessionState.Stopped) {
      return
    }
    clearInterval(this.timer)
    this.sessionLogger.info(`stop: kill transport`)
    this.transport.end()
    this.emitter.emit('done')
    this.sessionState.state = SessionState.Stopped
    this.onStopped()
    this.transport = null
  }
}
