import { MsgView, SegmentType } from '../../buffer'
import { MsgTag, MsgType, SessionRejectReason } from '../../types'
import { IJsFixConfig } from '../../config'
import { IMsgApplication } from '../session-description'
import { SessionState, TickAction } from '../fix-session-state'
import { FixSession } from '../fix-session'
import { FixMsgAsciiStoreResend, FixMsgMemoryStore, IFixMsgStore, IFixMsgStoreRecord } from '../../store'

export abstract class AsciiSession extends FixSession {

  public heartbeat: boolean = true
  protected store: IFixMsgStore = null
  protected resender: FixMsgAsciiStoreResend

  protected constructor (public readonly config: IJsFixConfig) {
    super(config)
    this.requestLogoutType = this.respondLogoutType = MsgType.Logout
    this.requestLogonType = MsgType.Logon
    this.store = new FixMsgMemoryStore(this.config.description.SenderCompId, this.config)
    this.resender = new FixMsgAsciiStoreResend(this.store, this.config)
  }

  private checkSeqNo (msgType: string, view: MsgView): boolean {

    switch (msgType) {
      case MsgType.SequenceReset: {
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
          // resend request required as have missed messages.

          // We process a Logon beforehand to confirm the connection even we out of sync
          if (msgType === MsgType.Logon) {
            this.peerLogon(view)
          }
          // If the out of sync message is a resend request itself, then we handle it first in order
          // to avoid triggering an endless loop of both sides sending resend requests in response to resend requests.
          if (msgType === MsgType.ResendRequest) {
            this.onResendRequest(view)
          }
          this.sendResendRequest(lastSeq, seqNo)
        } else {
          ret = true
          state.lastPeerMsgSeqNum = seqNo
        }
        return ret
      }
    }
  }

  protected checkForwardMsg (msgType: string, view: MsgView): void {
    const okToForward = this.validStateApplicationMsg()
    if (okToForward) {
      this.sessionLogger.info(`ascii forwarding msgType = '${msgType}' to application`)
      this.setState(SessionState.ActiveNormalSession)
      this.onApplicationMsg(msgType, view)
    } else {
      this.terminate(new Error(`msgType ${msgType} received in state ${this.stateString()}`))
    }
  }

  private sendReject (msgType: string, seqNo: number, msg: string, reason: number): void {
    const factory = this.config.factory
    const reject = factory.reject(msgType, seqNo, msg, reason)
    this.sessionLogger.warning(`rejecting with ${JSON.stringify(reject)}`)
    this.send(MsgType.Reject, reject)
  }

  protected sendResendRequest (lastSeq: number, receivedSeq: number) {
    const resend = this.config.factory.resendRequest(lastSeq + 1, 0)
    this.sessionLogger.warning(`received seq ${receivedSeq}, but last known seq is ${lastSeq}. Sending resend request for all messages > ${lastSeq}`)
    this.send(MsgType.ResendRequest, resend)
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
      case SessionState.InitiationLogonReceived:
      case SessionState.InitiationLogonResponse: {
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

  /**
   * Override to resend stored messages following a sequence reset.
   * @protected
   */
  protected onResendRequest (view: MsgView) {
    // if no records are in store then send a gap fill for entire sequence
    this.setState(SessionState.HandleResendRequest)
    const [beginSeqNo, endSeqNo] = view.getTypedTags([MsgTag.BeginSeqNo, MsgTag.EndSeqNo])
    this.sessionLogger.info(`onResendRequest getResendRequest beginSeqNo = ${beginSeqNo}, endSeqNo = ${endSeqNo}`)
    this.resender.getResendRequest(beginSeqNo, endSeqNo).then((records: IFixMsgStoreRecord[]) => {
      const validRecords = records.filter(rec => rec.obj !== null)
      this.sessionLogger.info(`sending ${validRecords.length}`)
      validRecords.forEach(rec => {
        this.send(rec.msgType, rec.obj)
      })
      this.setState(SessionState.ActiveNormalSession)
    }).catch(e => {
      this.sessionLogger.error(e)
    })
  }

  okForLogon (): boolean {
    const state = this.sessionState.state
    if (this.acceptor) {
      return state === SessionState.WaitingForALogon
    }
    return state === SessionState.InitiationLogonSent
  }

  protected onSessionMsg (msgType: string, view: MsgView): void {

    const logger = this.sessionLogger

    switch (msgType) {
      case MsgType.Logon: {
        // only valid to receive a logon when in LogonSent or WaitingALogon
        // else will drop connection immediately.
        if (this.okForLogon()) {
          this.peerLogon(view)
        } else {
          this.terminate(new Error(`state ${this.stateString()} is illegal for Logon`))
        }
        break
      }

      case MsgType.Logout: {
        this.peerLogout(view)
        break
      }

      case MsgType.TestRequest: {
        const req: string = view.getString(MsgTag.TestReqID)
        this.sendHeartbeat(req)
        break
      }

      case MsgType.Heartbeat: {
        this.sessionState.lastTestRequestAt = null
        this.setState(SessionState.ActiveNormalSession)
        break
      }

      case MsgType.ResendRequest: {
        logger.info(`peer sends '${msgType}' resend request.`)
        this.onResendRequest(view)
        break
      }

      case MsgType.SequenceReset: {
        const newSeqNo: number = view.getTyped(MsgTag.NewSeqNo)
        logger.info(`peer sends '${msgType}' sequence reset. newSeqNo = ${newSeqNo}`)
        // expect  newSeqNo to be the next message's sequence number.
        this.sessionState.lastPeerMsgSeqNum = newSeqNo - 1
        break
      }

      case MsgType.Reject: {
        logger.info(`peer rejects type '${msgType}' with text '${view.getTyped(MsgTag.Text)}'`)
        break
      }
    }
  }

  protected onMsg (msgType: string, view: MsgView): void {

    if (!this.checkSeqNo(msgType, view)) {
      this.sessionLogger.info(`message '${msgType}' failed checkSeqNo.`)
      return
    }

    if (this.checkMsgIntegrity && !this.checkIntegrity(msgType, view)) {
      this.sessionLogger.info(`message '${msgType}' failed checkIntegrity.`)
      switch (msgType) {
        case MsgType.Logon: {
          this.setState(SessionState.PeerLogonRejected)
          this.startTimer()
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

  private startTimer (interval: number = 200) {
    this.timer = setInterval(() => {
      this.tick()
    }, interval)
  }

  private peerLogon (view: MsgView) {
    const logger = this.sessionLogger
    const [heartBtInt, peerCompId, userName, password] = view.getTypedTags([MsgTag.HeartBtInt, MsgTag.SenderCompID, MsgTag.Username, MsgTag.Password])
    logger.info(`peerLogon Username = ${userName}, heartBtInt = ${heartBtInt}, peerCompId = ${peerCompId}, userName = ${userName}`)
    const state = this.sessionState
    state.peerHeartBeatSecs = view.getTyped(MsgTag.HeartBtInt)
    state.peerCompId = view.getTyped(MsgTag.SenderCompID)
    const res = this.onLogon(view, userName, password)
    // currently not using this.
    logger.info(`peerLogon onLogon returns ${res}`)
    if (this.acceptor) {
      this.setState(SessionState.InitiationLogonResponse)
      logger.info('acceptor responds to logon request')
      this.sendLogon() // if res send response else reject, terminate
    } else { // as an initiator the acceptor has responded
      logger.info('initiator receives logon response')
      this.setState(SessionState.InitiationLogonReceived)
    }
    if (this.heartbeat) {
      logger.debug(`start heartbeat timer.`)
      this.startTimer()
    }
    logger.info(`system ready, inform app`)
    this.onReady(view)
  }

  private sendTestRequest () {
    const factory = this.config.factory
    this.setState(SessionState.AwaitingProcessingResponseToTestRequest)
    this.send(MsgType.TestRequest, factory.testRequest())
  }

  private sendHeartbeat (testReqId: string) {
    const factory = this.config.factory
    this.send(MsgType.Heartbeat, factory.heartbeat(testReqId))
  }

  private tick (): void {
    const sessionState = this.sessionState
    const action: TickAction = sessionState.calcAction(new Date())
    const application: IMsgApplication = this.transport.config.description.application
    const logger = this.sessionLogger

    switch (action) {
      case TickAction.Nothing: {
        // all is well
        break
      }

      case TickAction.TestRequest: {
        logger.debug(`send test req. state = ${sessionState.toString()}`)
        this.sendTestRequest()
        break
      }

      case TickAction.Heartbeat: {
        logger.debug(`send heartbeat. state = ${sessionState.toString()}`)
        this.sendHeartbeat(sessionState.now.toUTCString())
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
}
