import { SessionState } from '../fix-session-state'
import { MsgTransport } from '../msg-transport'
import { IJsFixConfig } from '../../config/js-fix-config'
import { MsgView } from '../../buffer/msg-view'
import { SegmentType } from '../../buffer/segment-description'
import { ElasticBuffer } from '../../buffer/elastic-buffer'
import { ILooseObject } from '../../collections/collection'
import { UserRequestType, UserStatus } from '../../types/FIXML50SP2/enum/all-enum'
import { MsgTag } from '../../types/enum/msg_tag'
import {FixSession} from '../fix-session'

export abstract class FixmlSession extends FixSession {

  private transport: MsgTransport = null
  private timer: NodeJS.Timer = null

  protected constructor (public readonly config: IJsFixConfig) {
    super(config)
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
        this.send('UserReq', this.config.factory.logon())
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

    rx.on('done', () => this.done())
    rx.on('end', () => {
      this.done()
    })

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

  private onMsg (msgType: string, view: MsgView): void {

    switch (msgType) {
      case 'UserReq':
      case 'UserRsp': {
        this.onSessionMsg(msgType, view)
        break
      }

      default: {
        this.checkForwardMsg(msgType, view)
        break
      }
    }
  }

  private onSessionMsg (msgType: string, view: MsgView): void {
    switch (msgType) {
      case 'UserReq': {
        const reqType: number = view.getTyped('UserReqTyp')
        switch (reqType) {
          case UserRequestType.LogOnUser: {
            this.peerLogon(view)
            break
          }

          case UserRequestType.LogOffUser: {
            this.peerLogout(view)
            break
          }
        }
        break
      }

      case 'UserRsp': {
        const userStatus: number = view.getTyped('UserStatus')
        switch (userStatus) {
          case UserStatus.LoggedIn: {
            this.peerLogon(view)
            break
          }

          case UserStatus.NotLoggedIn: {
            this.peerLogout(view)
            break
          }
        }
        break
      }
    }
  }

  private peerLogout (view: MsgView) {
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

  private peerLogon (view: MsgView) {
    const logger = this.sessionLogger
    const state = this.sessionState
    state.state = SessionState.PeerLoggedOn
    state.peerCompId = view.getTyped(MsgTag.SenderCompID)
    if (this.acceptor) {
      const reqId: string = view.getString('UserReqID')
      this.send('UserRsp', this.config.factory.logon(reqId, true))
    }
    logger.info(`system ready, inform app`)
    this.onReady(view)
  }

  private checkForwardMsg (msgType: string, view: MsgView): void {
    this.sessionLogger.info(`forwarding msgType = '${msgType}' to application`)
    this.onApplicationMsg(msgType, view)
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
        this.send('UserReq', factory.logout(msg))
        break
      }

      case SessionState.ConfirmingLogout: {
        // this instance responds to logout
        sessionState.logoutSentAt = new Date()
        const msg = `${this.me} confirming logout`
        this.sessionLogger.info(msg)
        this.send('UserRsp', factory.logout(msg, true))
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
