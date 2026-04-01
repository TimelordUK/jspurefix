import { ISessionSequenceStore } from './session-sequence-store'
import { IFixClock } from './fix-clock'
import { ResendAction, ResendManagerConfig, ResendRequestManager, PendingResendRange } from './resend-request-manager'

/**
 * Coordinates all sequence-related state for a FIX session.
 *
 * This is the SINGLE SOURCE OF TRUTH for:
 * - Outgoing sequence numbers (what we send)
 * - Expected incoming sequence numbers (what we expect from peer)
 * - Resend request tracking
 * - Reset coordination
 *
 * Philosophy:
 * 1. All sequence state lives here — no scattered state across components
 * 2. All reset operations are coordinated through here
 * 3. Components query this for sequence numbers, don't maintain their own
 * 4. Fully testable without running actual sessions
 */
export class SessionSequenceCoordinator {
  private readonly store: ISessionSequenceStore
  private readonly resendManager: ResendRequestManager
  private readonly clock: IFixClock

  // THE source of truth for sequence numbers
  private nextSenderSeqNumValue: number = 1
  private expectedTargetSeqNumValue: number = 1

  // Track the last peer sequence we actually processed
  private lastProcessedPeerSeqNumValue: number = 0

  // Transient session state (reset on reconnect)
  private logonRetryCountValue: number = 0
  private timeoutRecoveryAttemptsValue: number = 0

  // Event callback for full session reset
  public onSessionReset: (() => Promise<void>) | null = null

  constructor (
    store: ISessionSequenceStore,
    clock: IFixClock,
    resendManagerConfig?: ResendManagerConfig
  ) {
    this.store = store
    this.clock = clock
    this.resendManager = new ResendRequestManager(resendManagerConfig)
  }

  // ── Initialization ──

  initializeFromStore (): void {
    this.nextSenderSeqNumValue = this.store.senderSeqNum
    this.expectedTargetSeqNumValue = this.store.targetSeqNum
    this.lastProcessedPeerSeqNumValue = this.expectedTargetSeqNumValue - 1
  }

  initializeFromConfig (senderSeqNum?: number, targetSeqNum?: number): void {
    if (senderSeqNum !== undefined) {
      this.nextSenderSeqNumValue = senderSeqNum
    }
    if (targetSeqNum !== undefined) {
      this.expectedTargetSeqNumValue = targetSeqNum
      this.lastProcessedPeerSeqNumValue = targetSeqNum - 1
    }
  }

  // ── Sequence Access (Read) ──

  get nextSenderSeqNum (): number {
    return this.nextSenderSeqNumValue
  }

  get expectedTargetSeqNum (): number {
    return this.expectedTargetSeqNumValue
  }

  get lastProcessedPeerSeqNum (): number {
    return this.lastProcessedPeerSeqNumValue
  }

  // ── Sequence Mutations (Controlled) ──

  /**
   * Consumes and returns the next sender sequence number.
   * Call when encoding a message (not for PossDup resends).
   */
  getNextSenderSeqNum (isPossDup: boolean = false): number {
    const seq = this.nextSenderSeqNumValue
    if (!isPossDup) {
      this.nextSenderSeqNumValue++
    }
    return seq
  }

  /**
   * Records that a message was successfully encoded and will be sent.
   * Updates the store's sender sequence number.
   */
  async onMessageEncoded (seqNum: number, isPossDup: boolean): Promise<void> {
    if (isPossDup) return
    await this.store.setSenderSeqNum(seqNum + 1)
  }

  /**
   * Called when a message is received from the peer.
   * Updates expected sequence and resend tracking.
   * Returns true if message should be processed, false if duplicate/old.
   */
  async onMessageReceived (seqNum: number, possDupFlag: boolean): Promise<boolean> {
    const now = this.clock.now()

    this.resendManager.onMessageReceived(seqNum, possDupFlag, now)

    if (possDupFlag) {
      return true
    }

    if (seqNum < this.expectedTargetSeqNumValue) {
      return false
    }

    if (seqNum === this.expectedTargetSeqNumValue) {
      this.lastProcessedPeerSeqNumValue = seqNum
      this.expectedTargetSeqNumValue = seqNum + 1
    } else if (seqNum > this.expectedTargetSeqNumValue) {
      // Gap detected — session accepts this message and moves on
      this.lastProcessedPeerSeqNumValue = seqNum
      this.expectedTargetSeqNumValue = seqNum + 1
    }

    await this.store.setTargetSeqNum(this.expectedTargetSeqNumValue)
    return true
  }

  /**
   * Called when a SequenceReset-GapFill is received.
   */
  async onGapFillReceived (gapFillSeq: number, newSeqNo: number): Promise<void> {
    const now = this.clock.now()
    this.resendManager.onGapFillReceived(gapFillSeq, newSeqNo, now)

    // GapFill says "skip from gapFillSeq to newSeqNo" — never rewind
    if (newSeqNo > this.expectedTargetSeqNumValue) {
      this.expectedTargetSeqNumValue = newSeqNo
      this.lastProcessedPeerSeqNumValue = Math.max(this.lastProcessedPeerSeqNumValue, newSeqNo - 1)
    }

    await this.store.setTargetSeqNum(this.expectedTargetSeqNumValue)
  }

  // ── Gap Detection and Resend Requests ──

  onGapDetected (expectedSeq: number, receivedSeq: number): ResendAction {
    const now = this.clock.now()
    return this.resendManager.computeAction(expectedSeq, receivedSeq, now)
  }

  recordResendRequestSent (begin: number, end: number): void {
    const now = this.clock.now()
    this.resendManager.recordRequestSent(begin, end, now)
  }

  get pendingResendRequests (): ReadonlyArray<PendingResendRange> {
    return this.resendManager.pending
  }

  // ── Logon Retry Logic ──

  onLogonRejectedForSequence (maxRetries: number = 10): boolean {
    this.logonRetryCountValue++
    if (this.logonRetryCountValue <= maxRetries) {
      this.nextSenderSeqNumValue++
      return true
    }
    return false
  }

  resetLogonRetryCount (): void {
    this.logonRetryCountValue = 0
  }

  get logonRetryCount (): number {
    return this.logonRetryCountValue
  }

  // ── Timeout Recovery ──

  incrementTimeoutRecovery (maxAttempts: number = 3): boolean {
    this.timeoutRecoveryAttemptsValue++
    return this.timeoutRecoveryAttemptsValue <= maxAttempts
  }

  resetTimeoutRecovery (): void {
    this.timeoutRecoveryAttemptsValue = 0
  }

  get timeoutRecoveryAttempts (): number {
    return this.timeoutRecoveryAttemptsValue
  }

  // ── Reset Operations ──

  /**
   * Prepares for reconnection on the same session.
   * Resets transient state but preserves sequence numbers.
   */
  prepareForReconnect (): void {
    this.logonRetryCountValue = 0
    this.timeoutRecoveryAttemptsValue = 0
    this.resendManager.reset()
  }

  /**
   * Full session reset — clears store, resets sequences to 1.
   * Call when ResetSeqNumFlag=Y is being used.
   */
  async resetSession (reason: string): Promise<void> {
    this.nextSenderSeqNumValue = 1
    this.expectedTargetSeqNumValue = 1
    this.lastProcessedPeerSeqNumValue = 0
    this.logonRetryCountValue = 0
    this.timeoutRecoveryAttemptsValue = 0
    this.resendManager.reset()

    await this.store.reset()

    if (this.onSessionReset) {
      await this.onSessionReset()
    }
  }

  /**
   * Handles peer's ResetSeqNumFlag=Y in their Logon.
   */
  async handlePeerReset (peerSeqNum: number, weAlsoReset: boolean): Promise<void> {
    const savedSenderSeq = weAlsoReset ? this.nextSenderSeqNumValue : null

    await this.store.reset()

    this.nextSenderSeqNumValue = savedSenderSeq ?? this.store.senderSeqNum
    this.expectedTargetSeqNumValue = peerSeqNum + 1
    this.lastProcessedPeerSeqNumValue = peerSeqNum
    this.resendManager.reset()

    await this.store.setTargetSeqNum(this.expectedTargetSeqNumValue)

    if (this.onSessionReset) {
      await this.onSessionReset()
    }
  }

  /**
   * Handles acceptor responding with ResetSeqNumFlag=Y when peer didn't request it.
   */
  async resetAsAcceptor (): Promise<void> {
    this.nextSenderSeqNumValue = 1
    this.expectedTargetSeqNumValue = 1
    this.lastProcessedPeerSeqNumValue = 0
    this.resendManager.reset()

    await this.store.reset()
    await this.store.setTargetSeqNum(1)
  }

  /**
   * Periodic tick — cleans up stale resend requests.
   */
  tick (): void {
    const now = this.clock.now()
    this.resendManager.tick(now)
  }
}
