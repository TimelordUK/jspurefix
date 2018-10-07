import { IJsFixConfig } from '../config/js-fix-config'
import * as events from 'events'
import { IJsFixLogger } from '../config/js-fix-logger'
import { FixSessionState, SessionState } from './fix-session-state'
import { MsgTransport } from './msg-transport'
import { MsgView } from '../buffer/msg-view'
import { MsgTag } from '../types/enum/msg_tag'
import { ILooseObject } from '../collections/collection'

export abstract class FixSession {
  public logReceivedMsgs: boolean = false
  protected timer: NodeJS.Timer = null
  protected transport: MsgTransport = null
  public manageSession: boolean = true
  public checkMsgIntegrity: boolean = false
  protected readonly me: string
  protected readonly initiator: boolean
  protected readonly acceptor: boolean
  protected readonly sessionState: FixSessionState
  protected readonly emitter: events.EventEmitter
  protected readonly sessionLogger: IJsFixLogger
  protected requestLogoutType: string
  protected respondLogoutType: string

  protected constructor (public readonly config: IJsFixConfig) {
    const description = config.description
    this.emitter = new events.EventEmitter()
    this.me = description.application.name
    this.sessionState = new FixSessionState(description.HeartBtInt)
    this.sessionLogger = config.logFactory.logger(`${this.me}:FixSession`)
    this.initiator = description.application.type === 'initiator'
    this.acceptor = !this.initiator
    this.checkMsgIntegrity = this.acceptor
    this.sessionState.compId = description.SenderCompId
  }

  protected terminate (error: Error): void {
    this.sessionLogger.error(error)
    clearInterval(this.timer)
    this.emitter.emit('error', error)
  }

  protected peerLogout (view: MsgView) {
    const msg = view.getString(MsgTag.Text)
    switch (this.sessionState.state) {
      case SessionState.WaitingLogoutConfirm: {
        this.sessionLogger.info(`peer confirms logout Text = '${msg}'`)
        this.stop()
        break
      }

      case SessionState.PeerLoggedOn: {
        this.sessionState.state = SessionState.ConfirmingLogout
        this.sessionLogger.info(`peer initiates logout Text = '${msg}'`)
        this.sessionLogout()
      }
    }
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

  protected sessionLogout (): void {
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
        this.send(this.requestLogoutType, factory.logout(this.requestLogoutType,msg))
        break
      }

      case SessionState.ConfirmingLogout: {
        // this instance responds to logout
        sessionState.logoutSentAt = new Date()
        const msg = `${this.me} confirming logout`
        this.sessionLogger.info(msg)
        this.send(this.respondLogoutType, factory.logout(this.respondLogoutType,msg))
        break
      }

      default: {
        this.sessionLogger.info(`sessionLogout ignored as in state ${sessionState.state}`)
      }
    }
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

  public reset (): void {
    this.transport = null
    this.sessionState.state = SessionState.Connected
    this.sessionState.lastPeerMsgSeqNum = 0
  }

  protected stop (): void {
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
}
