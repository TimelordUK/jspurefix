import { MsgTransport } from '../msg-transport'
import { MsgView } from '../../buffer/msg-view'
import { ILooseObject } from '../../collections/collection'
import { MsgType } from '../../types/enum/msg_type'
import { MsgTag } from '../../types/enum/msg_tag'
import { IJsFixConfig } from '../../config/js-fix-config'
import { IMsgApplication } from '../session-description'
import { ElasticBuffer } from '../../buffer/elastic-buffer'
import { SessionState, TickAction } from '../fix-session-state'
import { SessionRejectReason } from '../../types/enum/sess_rej_rsn'
import { SegmentType } from '../../buffer/segment-description'
import { FixSession } from '../fix-session'

export abstract class AsciiSession extends FixSession {

  public heartbeat: boolean = true

  private transport: MsgTransport = null
  private timer: NodeJS.Timer = null

  protected constructor (public readonly config: IJsFixConfig) {
    super(config)
  }

  public static asPiped (txt: string) {
    return txt.replace(/\x01/g,'|')
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

  private checkSeqNo (msgType: string, view: MsgView): boolean {

    switch (msgType) {
      case MsgType.TestRequest:
      case MsgType.SequenceReset:
      case MsgType.ResendRequest: {
        return true
      }

      default: {
        const state = this.sessionState
        const lastSeq: number = state.lastPeerMsgSeqNum
        const seqNo: number = view.getTyped(MsgTag.MsgSeqNum)
        let ret: boolean = false
        const seqDelta: number = seqNo - lastSeq
        if (seqDelta <= 0) {
          // serious problem ... drop immediately
          this.sessionLogger.warning(`terminate as seqDelta (${seqDelta}) < 0 lastSeq = ${lastSeq} seqNo = ${seqNo}`)
          this.stop()
        } else if (seqDelta > 1) {
          // reset required as have missed messages.
          const resend = this.config.factory.resendRequest(lastSeq, seqNo)
          this.sessionLogger.warning(`sending resend last received ${lastSeq} seqNo ${seqNo}`)
          this.send(MsgType.ResendRequest, resend)
        } else {
          ret = true
          state.lastPeerMsgSeqNum = seqNo
        }
        return ret
      }
    }
  }

  private sendReject (msgType: string, seqNo: number, msg: string, reason: number): void {
    const factory = this.config.factory
    const reject = factory.reject(msgType, seqNo, msg, reason)
    this.sessionLogger.warning(`rejecting with ${JSON.stringify(reject)}`)
    this.send(MsgType.Reject, reject)
  }

  private checkIntegrity (msgType: string, view: MsgView): boolean {
    const state = this.sessionState
    const seqNum = view.getTyped(MsgTag.MsgSeqNum)

    const received: number = parseInt(view.getString(MsgTag.CheckSum), 10)
    const computed = view.checksum()
    if (received !== computed) {
      const msg: string = `msgType ${msgType} checksum failed. received = ${received} computed = ${computed}`
      this.sendReject(msgType, seqNum, msg, SessionRejectReason.ValueIsIncorrect)
      return false
    }

    if (view.segment.type === SegmentType.Unknown) {
      const msg: string = `msgType ${msgType} unknown`
      this.sendReject(msgType, seqNum, msg, SessionRejectReason.InvalidMsgType)
      return false
    }

    const invalid = view.invalid()
    if (invalid.length > 0) {
      const msg: string = `msgType ${msgType} invalid tag${invalid.length > 1 ? 's' : ''} ${invalid.join(', ')}`
      this.sendReject(msgType, seqNum, msg, SessionRejectReason.InvalidTagNumber)
      return false
    }

    const undefinedMsg: string = view.undefinedForMsg()
    if (undefinedMsg) {
      const msg: string = `msgType ${msgType} ${undefinedMsg}`
      this.sendReject(msgType, seqNum, msg, SessionRejectReason.TagNotDefinedForThisMessageType)
      return false
    }

    const missingRequired = view.missing()
    if (missingRequired.length > 0) {
      const msg: string = `msgType ${msgType} missing required tag${missingRequired.length > 1 ? 's' : ''} ${missingRequired.join(', ')}`
      this.sendReject(msgType, seqNum, msg, SessionRejectReason.RequiredTagMissing)
      return false
    }

    switch (state.state) {
      case SessionState.PeerLoggedOn: {
        const targetCompId = view.getString(MsgTag.TargetCompID)
        if (targetCompId !== state.compId) {
          const msg: string = `msgType ${msgType} unexpected TargetCompID ${targetCompId}`
          this.sendReject(msgType, seqNum, msg, SessionRejectReason.CompIDProblem)
          return false
        }

        const peerCompId = view.getString(MsgTag.SenderCompID)
        if (peerCompId !== state.peerCompId) {
          const msg: string = `msgType ${msgType} unexpected SenderCompID ${peerCompId}`
          this.sendReject(msgType, seqNum, msg, SessionRejectReason.CompIDProblem)
          return false
        }
      }
        break

      default: {
        break
      }
    }

    return true
  }

  private onSessionMsg (msgType: string, view: MsgView): void {

    const factory = this.config.factory
    const logger = this.sessionLogger

    switch (msgType) {
      case MsgType.Logon: {
        this.peerLogon(view)
        break
      }

      case MsgType.Logout: {
        this.peerLogout(view)
        break
      }

      case MsgType.TestRequest: {
        const req: string = view.getString(MsgTag.TestReqID)
        this.send(MsgType.Heartbeat, factory.heartbeat(req))
        break
      }

      case MsgType.Heartbeat: {
        this.sessionState.lastTestRequestAt = null
        break
      }

      case MsgType.ResendRequest: {
        logger.info(`peer sends '${msgType}' resend reset.`)
        const endSeqNo: number = view.getTyped(MsgTag.EndSeqNo)
        const resend = factory.sequenceReset(endSeqNo)
        this.send(MsgType.SequenceReset, resend)
        break
      }

      case MsgType.SequenceReset: {
        const newSeqNo: number = view.getTyped(MsgTag.NewSeqNo)
        logger.info(`peer sends '${msgType}' sequence reset. newSeqNo = ${newSeqNo}`)
        this.sessionState.lastPeerMsgSeqNum = newSeqNo
        break
      }

      case MsgType.Reject: {
        logger.info(`peer rejects type '${msgType}' with text '${view.getTyped(MsgTag.Text)}'`)
        break
      }
    }
  }

  private onMsg (msgType: string, view: MsgView): void {

    if (!this.checkSeqNo(msgType, view)) {
      this.sessionLogger.info(`message '${msgType}' failed checkSeqNo.`)
      return
    }

    if (this.checkMsgIntegrity && !this.checkIntegrity(msgType, view)) {
      this.sessionLogger.info(`message '${msgType}' failed checkIntegrity.`)
      switch (msgType) {
        case MsgType.Logon: {
          this.sessionState.state = SessionState.PeerLogonRejected
          this.timer = setInterval(() => {
            this.tick()
          }, 200)
          break
        }
      }
      return
    }

    switch (msgType) {
      case MsgType.Logon:
      case MsgType.Logout:
      case MsgType.TestRequest:
      case MsgType.Reject:
      case MsgType.SequenceReset:
      case MsgType.Heartbeat:
      case MsgType.ResendRequest: {
        this.onSessionMsg(msgType, view)
        break
      }

      default: {
        this.checkForwardMsg(msgType, view)
        break
      }
    }
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
    const heartBtInt = view.getTyped(MsgTag.HeartBtInt)
    const peerCompId = view.getTyped(MsgTag.SenderCompID)
    const userName = view.getString(MsgTag.Username)
    logger.info(`peerLogon Username = ${userName}, heartBtInt = ${heartBtInt}, peerCompId = ${peerCompId}, userName = ${userName}`)
    const state = this.sessionState
    state.state = SessionState.PeerLoggedOn
    state.peerHeartBeatSecs = view.getTyped(MsgTag.HeartBtInt)
    state.peerCompId = view.getTyped(MsgTag.SenderCompID)
    if (this.acceptor) {
      this.send(MsgType.Logon, this.config.factory.logon())
    }
    if (this.heartbeat) {
      logger.debug(`start heartbeat timer.`)
      this.timer = setInterval(() => {
        this.tick()
      }, 200)
    }
    logger.info(`system ready, inform app`)
    this.onReady(view)
  }

  private tick (): void {
    const sessionState = this.sessionState
    const action: TickAction = sessionState.calcAction(new Date())
    const application: IMsgApplication = this.transport.config.description.application
    const factory = this.config.factory
    const logger = this.sessionLogger

    switch (action) {
      case TickAction.Nothing: {
        // all is well
        break
      }

      case TickAction.TestRequest: {
        logger.debug(`send test req. state = ${sessionState.toString()}`)
        this.send(MsgType.TestRequest, factory.testRequest())
        break
      }

      case TickAction.Heartbeat: {
        logger.debug(`send heartbeat. state = ${sessionState.toString()}`)
        this.send(MsgType.Heartbeat, factory.heartbeat(sessionState.now.toUTCString()))
        break
      }

      case TickAction.TerminateOnError: {
        logger.info(sessionState.toString())
        this.terminate(new Error(`${application.name}: peer not responding`))
        break
      }

      case TickAction.Stop: {
        logger.info(sessionState.toString())
        logger.info('stopping')
        this.stop()
        break
      }

      default:
        throw new Error(`unexpected action`)
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

  private terminate (error: Error): void {
    this.sessionLogger.error(error)
    clearInterval(this.timer)
    this.emitter.emit('error', error)
  }
}
