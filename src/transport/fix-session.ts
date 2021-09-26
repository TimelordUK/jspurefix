import { ElasticBuffer, MsgView, SegmentType } from '../buffer'
import { IJsFixConfig, IJsFixLogger } from '../config'
import { FixSessionState, SessionState } from './fix-session-state'
import { MsgTransport } from './msg-transport'
import { MsgTag } from '../types'
import { ILooseObject } from '../collections/collection'

import * as events from 'events'

export abstract class FixSession extends events.EventEmitter {
  public logReceivedMsgs: boolean = false
  protected timer: NodeJS.Timer = null
  protected transport: MsgTransport = null
  public manageSession: boolean = true
  public checkMsgIntegrity: boolean = false
  protected readonly me: string
  protected readonly initiator: boolean
  protected readonly acceptor: boolean
  protected readonly sessionState: FixSessionState
  protected readonly sessionLogger: IJsFixLogger
  protected requestLogoutType: string
  protected respondLogoutType: string
  protected requestLogonType: string

  protected constructor (public readonly config: IJsFixConfig) {
    super()
    const description = config.description
    this.me = description.application.name
    this.sessionState = new FixSessionState(
      { heartBeat: config.description.HeartBtInt,
        lastPeerMsgSeqNum: config.description.LastReceivedSeqNum})
    this.sessionLogger = config.logFactory.logger(`${this.me}:FixSession`)
    this.initiator = description.application.type === 'initiator'
    this.acceptor = !this.initiator
    this.checkMsgIntegrity = this.acceptor
    this.sessionState.compId = description.SenderCompId
  }

  public setState (state: SessionState) {
    if (state === this.sessionState.state) return
    const logger = this.sessionLogger
    const prevState = this.sessionState.state
    logger.info(`current state ${SessionState[prevState]} (${prevState}) moves to ${SessionState[state]} (${state})`)
    this.sessionState.state = state
  }

  public getState (): SessionState {
    return this.sessionState.state
  }

  public run (transport: MsgTransport): Promise<number> {
    const logger = this.sessionLogger
    if (this.transport) {
      logger.info('reset from previous transport.')
      this.reset()
    }
    this.transport = transport
    this.subscribe()
    return new Promise<any>((accept, reject) => {
      if (this.initiator) {
        logger.debug('initiator sending logon')
        this.send(this.requestLogonType, this.config.factory.logon())
        this.setState(SessionState.InitiationLogonSent)
      } else {
        logger.debug('acceptor waits for logon')
        this.setState(SessionState.WaitingForALogon)
      }

      this.on('error', (e: Error) => {
        logger.error(e)
        reject(e)
      })
      this.on('done', () => {
        accept(this.transport.id)
      })
    })
  }

  protected subscribe () {

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
      if (this.manageSession) {
        this.onMsg(msgType, view)
      } else {
        this.checkForwardMsg(msgType, view)
      }
    })

    rx.on('error', (e: Error) => {
      logger.warning(`rx error event: ${e.message} ${e.stack || ''}`)
      this.terminate(e)
    })

    rx.on('done', () => {
      logger.info('rx done received')
      this.done()
    })

    rx.on('end', () => {
      logger.info(`rx end received sessionState = [${this.sessionState.toString()}]`)
      switch (this.sessionState.state) {
        case SessionState.ReceiveLogout:
        case SessionState.Stopped:
        case SessionState.ConfirmingLogout: {
          logger.info(`rx graceful end state = ${SessionState[this.sessionState.state]}`)
          this.done()
        }
          break

        default: {
          const e = new Error(`unexpected state - transport failed? = ${SessionState[this.sessionState.state]}`)
          logger.info(`rx error ${e.message}`)
          this.terminate(e)
        }
          break
      }
    })

    rx.on('decoded', (msgType: string, data: ElasticBuffer, ptr: number) => {
      logger.debug(`rx: [${msgType}] ${ptr} bytes`)
      this.onDecoded(msgType, data.toString(ptr))
    })

    tx.on('error', (e: Error) => {
      logger.warning(`tx error event: ${e.message} ${e.stack || ''}`)
      this.terminate(e)
    })

    tx.on('encoded', (msgType: string, data: string) => {
      logger.debug(`tx: [${msgType}] ${data.length} bytes`)
      this.onEncoded(msgType, data)
    })
  }

  protected checkForwardMsg (msgType: string, view: MsgView): void {
    this.sessionLogger.info(`forwarding msgType = '${msgType}' to application`)
    this.onApplicationMsg(msgType, view)
  }

  protected terminate (error: Error): void {
    this.sessionLogger.error(error)
    clearInterval(this.timer)
    this.transport.end()
    this.transport = null
    this.sessionState.state = SessionState.Stopped
    this.emit('error', error)
  }

  protected peerLogout (view: MsgView) {
    const msg = view.getString(MsgTag.Text)
    switch (this.sessionState.state) {
      case SessionState.WaitingLogoutConfirm: {
        this.sessionLogger.info(`peer confirms logout Text = '${msg}'`)
        this.stop()
        break
      }

      case SessionState.InitiationLogonResponse:
      case SessionState.InitiationLogonReceived: {
        this.setState(SessionState.ConfirmingLogout)
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
      case SessionState.InitiationLogonResponse:
      case SessionState.InitiationLogonReceived: {
        // this instance initiates logout
        this.setState(SessionState.WaitingLogoutConfirm)
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
      case SessionState.InitiationLogonResponse:
      case SessionState.InitiationLogonReceived: {
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
    this.sessionState.reset(true) // from header def ... eventually
    this.setState(SessionState.NetworkConnectionEstablished)
  }

  protected stop (error: Error = null): void {
    if (this.sessionState.state === SessionState.Stopped) {
      return
    }
    clearInterval(this.timer)
    this.sessionLogger.info(`stop: kill transport`)
    this.transport.end()
    if (error) {
      this.sessionLogger.info(`stop: emit error ${error.message}`)
      this.emit('error', error)
    } else {
      this.emit('done')
    }

    this.setState(SessionState.Stopped)
    this.onStopped(error)
    this.transport = null
  }

  protected abstract onMsg (msgType: string, view: MsgView): void
  // application responsible for writing its own log
  protected abstract onDecoded (msgType: string, txt: string): void
  protected abstract onEncoded (msgType: string, txt: string): void
  // an application level message to be handled by implementation, unless
  // manageSession = false in which case all messages will be forwarded
  protected abstract onApplicationMsg (msgType: string, view: MsgView): void
  // inform application peer has logged in - provide login message
  protected abstract onReady (view: MsgView): void
  // inform application this session has now ended - either from logout or connection dropped
  protected abstract onStopped (error?: Error): void
  // does the application accept the inbound logon request
  protected abstract onLogon (view: MsgView, user: string, password: string): boolean
}
