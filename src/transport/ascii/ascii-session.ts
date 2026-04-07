import { MsgView } from '../../buffer'
import { MsgTag, MsgType, SessionRejectReason } from '../../types'
import { IJsFixConfig } from '../../config'
import { FixSession } from '../session/fix-session'
import { FixMsgAsciiStoreResend, FixMsgMemoryStore, IFixMsgStore, IFixMsgStoreRecord } from '../../store'
import { SessionState } from '../tcp'
import { TickAction } from '../tick-action'
import { IMsgApplication } from '../msg-application'
import { SegmentType } from '../../buffer/segment/segment-type'
import { SessionSequenceCoordinator } from '../session/session-sequence-coordinator'
import { MemorySequenceStore } from '../session/session-sequence-store'
import { DefaultFixClock } from '../session/fix-clock'
import { ResendActionType } from '../session/resend-request-manager'
import { AsciiMsgTransmitter } from './ascii-msg-transmitter'

export abstract class AsciiSession extends FixSession {
  public heartbeat: boolean = true
  protected store: IFixMsgStore | null = null
  protected resender: FixMsgAsciiStoreResend
  protected readonly coordinator: SessionSequenceCoordinator

  protected constructor (public readonly config: IJsFixConfig) {
    super(config)
    this.requestLogoutType = this.respondLogoutType = MsgType.Logout
    this.requestLogonType = MsgType.Logon
    this.store = new FixMsgMemoryStore(this.config.description.SenderCompId, this.config)
    this.resender = new FixMsgAsciiStoreResend(this.store, this.config)

    const sequenceStore = new MemorySequenceStore()
    const clock = new DefaultFixClock()
    this.coordinator = new SessionSequenceCoordinator(sequenceStore, clock)
    const lastReceivedSeqNum = config.description.LastReceivedSeqNum ?? 0
    this.coordinator.initializeFromConfig(undefined, lastReceivedSeqNum + 1)
  }

  private checkSeqNo (msgType: string, view: MsgView): boolean {
    switch (msgType) {
      case MsgType.SequenceReset: {
        return true
      }

      case MsgType.Logon: {
        // If peer sends ResetSeqNumFlag=Y, accept any sequence number.
        // PeerLogon handles the full sequence reset.
        if (view.getTyped(MsgTag.ResetSeqNumFlag) === true) {
          this.sessionLogger.info('logon with ResetSeqNumFlag=Y, accepting regardless of sequence')
          const seqNo = view.getTyped(MsgTag.MsgSeqNum) as number
          this.sessionState.lastPeerMsgSeqNum = seqNo
          this.coordinator.onMessageReceived(seqNo, false)
          return true
        }
      }
      // falls through

      default: {
        const state = this.sessionState
        const lastSeq: number = state.lastPeerMsgSeqNum
        const seqNo: number = view.getTyped(MsgTag.MsgSeqNum) as number
        let ret: boolean = false
        const seqDelta: number = seqNo - lastSeq
        if (seqDelta <= 0) {
          // Check if this is a PossDupFlag=Y message (resend replay) before rejecting.
          // PossDupFlag messages have old sequence numbers and bypass normal checks.
          const possDupFlag = view.getTyped(MsgTag.PossDupFlag) as boolean | undefined
          if (possDupFlag === true) {
            this.sessionLogger.debug(`message '${msgType}' has PossDupFlag=Y, bypassing sequence check`)
            this.coordinator.onMessageReceived(seqNo, true)
            return true
          }
          // Check if this is a delayed message that fills a pending gap range.
          const pendingRequests = this.coordinator.pendingResendRequests
          const inPendingGapRange = pendingRequests.some(p => seqNo >= p.begin && seqNo <= p.end)
          if (inPendingGapRange) {
            this.sessionLogger.info(`accepting delayed message seq ${seqNo} (in pending gap range)`)
            this.coordinator.onMessageReceived(seqNo, false)
            return true
          }
          // serious problem ... drop immediately
          this.sessionLogger.warning(`terminate as seqDelta (${seqDelta}) < 0 lastSeq = ${lastSeq} seqNo = ${seqNo}`)
          this.stop()
        } else if (seqDelta > 1) {
          // resend request required as have missed messages.
          const expectedSeq = lastSeq + 1

          // We process a Logon beforehand to confirm the connection even we out of sync
          if (msgType === MsgType.Logon) {
            this.peerLogon(view)
          }
          // If the out of sync message is a resend request itself, then we handle it first in order
          // to avoid triggering an endless loop of both sides sending resend requests in response to resend requests.
          if (msgType === MsgType.ResendRequest) {
            this.onResendRequest(view)
          }

          // Use coordinator to determine what action to take for the gap
          const action = this.coordinator.onGapDetected(expectedSeq, seqNo)
          this.sessionLogger.info(`gap action: ${action}`)

          switch (action.type) {
            case ResendActionType.SendResendRequest: {
              if (action.begin != null && action.end != null) {
                this.sendResendRequest(lastSeq, seqNo)
                this.coordinator.recordResendRequestSent(action.begin, action.end)
              }
              break
            }
            case ResendActionType.Wait: {
              this.sessionLogger.info(`waiting for existing resend request: ${action.reason}`)
              break
            }
            case ResendActionType.SendGapFill: {
              this.sessionLogger.warning(`gap recovery abandoned (storm protection): ${action.reason}`)
              break
            }
          }

          // Accept the current message — don't block waiting for gap fill.
          // The gap will be filled by the resend response, but this message is valid.
          ret = true
          state.lastPeerMsgSeqNum = seqNo
          this.coordinator.onMessageReceived(seqNo, false)
        } else {
          ret = true
          state.lastPeerMsgSeqNum = seqNo
          this.coordinator.onMessageReceived(seqNo, false)
        }

        // Reset timeout recovery on successful message receipt
        if (ret) {
          this.coordinator.resetTimeoutRecovery()
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
    const reject = factory?.reject(msgType, seqNo, msg, reason)
    if (reject) {
      this.sessionLogger.warning(`rejecting with ${JSON.stringify(reject)}`)
      this.send(MsgType.Reject, reject)
    }
  }

  protected sendResendRequest (lastSeq: number, receivedSeq: number): void {
    const resend = this.config.factory?.resendRequest(lastSeq + 1, 0)
    if (resend) {
      this.sessionLogger.warning(`received seq ${receivedSeq}, but last known seq is ${lastSeq}. Sending resend request for all messages > ${lastSeq}`)
      this.send(MsgType.ResendRequest, resend)
    }
  }

  private checkIntegrity (msgType: string, view: MsgView): boolean {
    const state = this.sessionState
    const seqNum = view.getTyped(MsgTag.MsgSeqNum) as number

    const received: number = parseInt(view.getString(MsgTag.CheckSum) ?? '', 10)
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

    const undefinedMsg: string | null = view.undefinedForMsg()
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
          const msg: string = `msgType ${msgType} unexpected TargetCompID ${targetCompId} expecting ${state.compId})`
          this.sendReject(msgType, seqNum, msg, SessionRejectReason.CompIDProblem)
          return false
        }

        const peerCompId = view.getString(MsgTag.SenderCompID)
        if (peerCompId !== state.peerCompId) {
          const msg: string = `msgType ${msgType} unexpected SenderCompID ${peerCompId}  expecting ${state.compId}`
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
  protected onResendRequest (view: MsgView): void {
    // if no records are in store then send a gap fill for entire sequence
    this.setState(SessionState.HandleResendRequest)
    const [beginSeqNo, requestedEndSeqNo] = view.getTypedTags([MsgTag.BeginSeqNo, MsgTag.EndSeqNo])
    const endSeqNo = requestedEndSeqNo === 0
      ? this.sessionState.lastSentSeqNum()
      : requestedEndSeqNo

    this.sessionLogger.info(`onResendRequest getResendRequest beginSeqNo = ${beginSeqNo}, endSeqNo = ${endSeqNo}`)
    this.resender.getResendRequest(beginSeqNo as number, endSeqNo as number).then((records: IFixMsgStoreRecord[]) => {
      const validRecords = records.filter(rec => rec.obj !== null)
      this.sessionLogger.info(`sending ${validRecords.length}`)
      validRecords.forEach(rec => {
        if (rec.obj) {
          this.send(rec.msgType, rec.obj)
        }
      })
      this.setState(SessionState.ActiveNormalSession)
    }).catch((e: Error) => {
      this.sessionLogger.error(e)
    })
  }

  protected override onPrepareForReconnect (): void {
    this.coordinator.prepareForReconnect()
    this.sessionLogger.info('coordinator reset transient state for reconnect')
  }

  private static readonly MaxLogonRetries = 100
  private static readonly MaxTimeoutRecoveryAttempts = 0

  private handleLogonRejected (text: string | null): void {
    if (!this.coordinator.onLogonRejectedForSequence(AsciiSession.MaxLogonRetries)) {
      this.sessionLogger.warning(`max logon retries (${AsciiSession.MaxLogonRetries}) exceeded, giving up. Text='${text}'`)
      this.setState(SessionState.PeerLogonRejected)
      this.stop()
      return
    }

    // The encoder's msgSeqNum is already incremented after each message is sent,
    // so we just need to retry the logon. The next logon will use the next sequence number.
    this.sessionLogger.info(`LOGON_SEQ_RETRY: attempt=${this.coordinator.logonRetryCount}/${AsciiSession.MaxLogonRetries}, reason='${text}'`)
    this.sendLogon()
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
        const req: string | null = view.getString(MsgTag.TestReqID)
        if (req) {
          this.sendHeartbeat(req)
        }
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
        const newSeqNo: number = view.getTyped(MsgTag.NewSeqNo) as number
        const gapFillSeq: number = view.getTyped(MsgTag.MsgSeqNum) as number
        logger.info(`peer sends '${msgType}' sequence reset. newSeqNo = ${newSeqNo}`)
        // expect  newSeqNo to be the next message's sequence number.
        this.sessionState.lastPeerMsgSeqNum = newSeqNo - 1
        // Notify coordinator to update expected target and clear pending resend requests
        this.coordinator.onGapFillReceived(gapFillSeq, newSeqNo)
        break
      }

      case MsgType.Reject: {
        const refMsgType = view.getString(MsgTag.RefMsgType)
        const text = view.getString(MsgTag.Text)
        const reason = view.getTyped(MsgTag.SessionRejectReason) as number | undefined
        logger.info(`peer rejects RefMsgType='${refMsgType}', reason=${reason}, text='${text}'`)

        // Check if this is a logon rejection due to sequence mismatch while we're waiting for logon response.
        // Only retry for ValueIsIncorrect (sequence too low) — structural rejections (RequiredTagMissing etc.)
        // indicate a config problem that retrying won't fix.
        if (refMsgType === MsgType.Logon &&
            this.sessionState.state === SessionState.InitiationLogonSent &&
            reason === SessionRejectReason.ValueIsIncorrect) {
          this.handleLogonRejected(text)
        }
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

  private startTimer (interval: number = 200): void {
    const logger = this.sessionLogger
    logger.info(`start heartbeat timer. interval = ${interval}`)
    this.timer = setInterval(() => {
      this.tick()
    }, interval)
  }

  private peerLogon (view: MsgView): void {
    const logger = this.sessionLogger
    const [heartBtInt, peerCompId, userName, password] = view.getTypedTags([MsgTag.HeartBtInt, MsgTag.SenderCompID, MsgTag.Username, MsgTag.Password])
    const resetSeqNumFlag = view.getTyped(MsgTag.ResetSeqNumFlag) as boolean | undefined
    logger.info(`peerLogon Username = ${userName}, heartBtInt = ${heartBtInt}, peerCompId = ${peerCompId}, resetSeqNumFlag = ${resetSeqNumFlag}`)

    // Handle ResetSeqNumFlag from peer's logon
    if (resetSeqNumFlag === true) {
      const peerSeqNum = (view.getTyped(MsgTag.MsgSeqNum) as number) ?? 1
      const weAlsoReset = this.config.description.ResetSeqNumFlag
      logger.info(`peer sent ResetSeqNumFlag=Y with seqNum=${peerSeqNum}, weAlsoReset=${weAlsoReset}`)

      const transmitter = this.transport?.transmitter as AsciiMsgTransmitter | undefined
      const savedEncoderSeqNum = weAlsoReset && transmitter ? transmitter.msgSeqNum : null

      // Fire-and-forget the async coordinator call (store updates resolve on next microtask)
      // but compute the expected values synchronously since we know the reset outcome
      this.coordinator.handlePeerReset(peerSeqNum, weAlsoReset)
      if (transmitter) {
        transmitter.msgSeqNum = savedEncoderSeqNum ?? 1
      }
      this.sessionState.lastPeerMsgSeqNum = peerSeqNum

      // Recreate resender with empty store
      if (this.store) {
        this.store.clear()
        this.resender = new FixMsgAsciiStoreResend(this.store, this.config)
      }
      logger.info(`reset complete: encoderSeqNum=${transmitter?.msgSeqNum}, lastPeerMsgSeqNum=${peerSeqNum}`)
    }

    const state = this.sessionState
    state.peerHeartBeatSecs = view.getTyped(MsgTag.HeartBtInt) as number
    state.peerCompId = view.getTyped(MsgTag.SenderCompID) as string
    const res = this.onLogon(view, userName as string, password as string)
    // currently not using this.
    logger.info(`peerLogon onLogon returns ${res}`)
    if (this.acceptor) {
      this.setState(SessionState.InitiationLogonResponse)
      logger.info('acceptor responds to logon request')

      // If WE (acceptor) are sending ResetSeqNumFlag=Y but peer didn't request it,
      // reset our sequences before sending our logon response.
      // This handles the broker-reset pattern where client sends N, we respond with Y.
      const weReset = this.config.description.ResetSeqNumFlag
      if (weReset && resetSeqNumFlag !== true) {
        logger.info('acceptor sending ResetSeqNumFlag=Y (peer sent N), resetting sequences')
        // Fire-and-forget async coordinator call, set values synchronously
        this.coordinator.resetAsAcceptor()
        const transmitter = this.transport?.transmitter as AsciiMsgTransmitter | undefined
        if (transmitter) {
          transmitter.msgSeqNum = 1
        }
        this.sessionState.lastPeerMsgSeqNum = 0
        if (this.store) {
          this.store.clear()
          this.resender = new FixMsgAsciiStoreResend(this.store, this.config)
        }
      }

      this.sendLogon() // if res send response else reject, terminate
    } else { // as an initiator the acceptor has responded
      logger.info('initiator receives logon response')
      this.setState(SessionState.InitiationLogonReceived)
    }
    // Reset logon retry counter on successful logon
    this.coordinator.resetLogonRetryCount()

    if (this.heartbeat) {
      this.startTimer()
    }
    logger.info('system ready, inform app')
    this.onReady(view)
  }

  private sendTestRequest (): void {
    const factory = this.config.factory
    this.setState(SessionState.AwaitingProcessingResponseToTestRequest)
    const tr = factory?.testRequest()
    if (tr) {
      this.send(MsgType.TestRequest, tr)
    }
  }

  private sendHeartbeat (testReqId: string): void {
    const factory = this.config.factory
    const hb = factory?.heartbeat(testReqId)
    if (hb) {
      this.send(MsgType.Heartbeat, hb)
    }
  }

  private tick (): void {
    if (!this.transport) return
    const sessionState = this.sessionState
    const action: TickAction = sessionState.calcAction(new Date())
    const application: IMsgApplication | null = this.transport.config.description.application ?? null
    const logger = this.sessionLogger
    // Clean up timed-out resend requests
    this.coordinator.tick()

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
        if (this.coordinator.incrementTimeoutRecovery(AsciiSession.MaxTimeoutRecoveryAttempts)) {
          // Try to recover — reset timeout state to give session a fresh window.
          // This helps survive sleep/wake scenarios where TCP connection may still be alive.
          logger.info(`timeout recovery attempt ${this.coordinator.timeoutRecoveryAttempts}, resetting timeout state`)
          sessionState.lastTestRequestAt = null
          sessionState.lastReceivedAt = new Date()
          this.setState(SessionState.ActiveNormalSession)
        } else {
          logger.info(sessionState.toString())
          this.terminate(new Error(`${application?.name}: peer not responding`))
        }
        break
      }

      case TickAction.Stop: {
        logger.info(sessionState.toString())
        logger.info('stopping')
        this.stop()
        break
      }

      default:
        throw new Error('unexpected action')
    }
  }
}
