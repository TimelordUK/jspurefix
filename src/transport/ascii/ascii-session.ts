import { MsgView } from '../../buffer/msg-view'
import { MsgType } from '../../types/enum/msg_type'
import { MsgTag } from '../../types/enum/msg_tag'
import { IJsFixConfig } from '../../config/js-fix-config'
import { IMsgApplication } from '../session-description'
import { SessionState, TickAction } from '../fix-session-state'
import { SessionRejectReason } from '../../types/enum/sess_rej_rsn'
import { SegmentType } from '../../buffer/segment-description'
import { FixSession } from '../fix-session'

export abstract class AsciiSession extends FixSession {

  public heartbeat: boolean = true

  protected constructor (public readonly config: IJsFixConfig) {
    super(config)
    this.requestLogoutType = this.respondLogoutType = MsgType.Logout
    this.requestLogonType = MsgType.Logon
  }

  public static asPiped (txt: string) {
    return txt.replace(/\x01/g,'|')
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

  protected onMsg (msgType: string, view: MsgView): void {

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
}
