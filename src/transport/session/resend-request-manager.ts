export enum ResendActionType {
  Nothing = 'Nothing',
  SendResendRequest = 'SendResendRequest',
  SendGapFill = 'SendGapFill',
  Wait = 'Wait'
}

export class ResendAction {
  private constructor (
    public readonly type: ResendActionType,
    public readonly begin: number | null,
    public readonly end: number | null,
    public readonly reason: string | null
  ) {}

  static sendResendRequest (begin: number, end: number): ResendAction {
    return new ResendAction(ResendActionType.SendResendRequest, begin, end, null)
  }

  static gapFill (begin: number, end: number, reason: string): ResendAction {
    return new ResendAction(ResendActionType.SendGapFill, begin, end, reason)
  }

  static wait (reason: string): ResendAction {
    return new ResendAction(ResendActionType.Wait, null, null, reason)
  }

  static nothing (): ResendAction {
    return new ResendAction(ResendActionType.Nothing, null, null, null)
  }

  toString (): string {
    switch (this.type) {
      case ResendActionType.SendResendRequest:
        return `SendResendRequest(${this.begin}-${this.end})`
      case ResendActionType.SendGapFill:
        return `GapFill(${this.begin}-${this.end}): ${this.reason}`
      case ResendActionType.Wait:
        return `Wait: ${this.reason}`
      case ResendActionType.Nothing:
        return 'Nothing'
      default:
        return `Unknown(${this.type})`
    }
  }
}

export class PendingResendRange {
  private readonly receivedSeqs: Set<number> = new Set()

  constructor (
    public readonly begin: number,
    public readonly end: number,
    public readonly sentAt: Date
  ) {}

  markReceived (seqNum: number): void {
    if (seqNum >= this.begin && seqNum <= this.end) {
      this.receivedSeqs.add(seqNum)
    }
  }

  markRangeReceived (fromSeq: number, toSeq: number): void {
    const start = Math.max(fromSeq, this.begin)
    const stop = Math.min(toSeq, this.end)
    for (let seq = start; seq <= stop; seq++) {
      this.receivedSeqs.add(seq)
    }
  }

  get isFullySatisfied (): boolean {
    return this.receivedSeqs.size >= (this.end - this.begin + 1)
  }

  fullyCovers (begin: number, end: number): boolean {
    return begin >= this.begin && end <= this.end
  }

  overlaps (begin: number, end: number): boolean {
    return begin <= this.end && end >= this.begin
  }

  get pendingCount (): number {
    return (this.end - this.begin + 1) - this.receivedSeqs.size
  }

  toString (): string {
    return `Pending(${this.begin}-${this.end}, received=${this.receivedSeqs.size}/${this.end - this.begin + 1})`
  }
}

export interface ResendRequestRecord {
  begin: number
  end: number
  sentAt: Date
  reason: string | null
}

export interface ResendManagerConfig {
  maxPendingRequests?: number
  maxRequestsPerWindow?: number
  rateLimitWindowSeconds?: number
  requestTimeoutSeconds?: number
}

/**
 * Manages ResendRequest strategy with intelligent overlap handling and storm protection.
 *
 * Philosophy:
 * 1. Stay alive — don't let resend handling crash or overwhelm the session
 * 2. Keep receiving new messages — don't block normal message flow
 * 3. Don't make things worse — avoid storms, handle overlaps intelligently
 */
export class ResendRequestManager {
  private readonly pendingRequests: PendingResendRange[] = []
  private readonly requestHistory: ResendRequestRecord[] = []
  private readonly maxPendingRequests: number
  private readonly maxRequestsPerWindow: number
  private readonly rateLimitWindowMs: number
  private readonly requestTimeoutMs: number
  private readonly recentRequestTimes: Date[] = []

  constructor (config?: ResendManagerConfig) {
    this.maxPendingRequests = config?.maxPendingRequests ?? 1
    this.maxRequestsPerWindow = config?.maxRequestsPerWindow ?? 5
    this.rateLimitWindowMs = (config?.rateLimitWindowSeconds ?? 10) * 1000
    this.requestTimeoutMs = (config?.requestTimeoutSeconds ?? 30) * 1000
  }

  computeAction (expectedSeq: number, receivedSeq: number, now: Date): ResendAction {
    if (receivedSeq <= expectedSeq) {
      return ResendAction.nothing()
    }

    const gapBegin = expectedSeq
    const gapEnd = receivedSeq - 1

    this.cleanupTimedOutRequests(now)

    if (this.isStorming(now)) {
      return ResendAction.gapFill(gapBegin, gapEnd, 'storm protection - too many requests')
    }

    for (const pending of this.pendingRequests) {
      if (pending.fullyCovers(gapBegin, gapEnd)) {
        return ResendAction.wait(`fully covered by pending request ${pending}`)
      }
    }

    const uncovered = this.computeUncoveredRange(gapBegin, gapEnd)
    if (!uncovered) {
      return ResendAction.wait('gap partially covered, waiting for pending requests')
    }

    if (this.pendingRequests.length >= this.maxPendingRequests) {
      return ResendAction.wait(`max pending requests (${this.maxPendingRequests}) reached`)
    }

    return ResendAction.sendResendRequest(uncovered.begin, uncovered.end)
  }

  recordRequestSent (begin: number, end: number, now: Date, reason: string | null = null): void {
    this.pendingRequests.push(new PendingResendRange(begin, end, now))
    this.requestHistory.push({ begin, end, sentAt: now, reason })
    this.recentRequestTimes.push(now)
  }

  onMessageReceived (seqNum: number, possDupFlag: boolean, now: Date): void {
    for (const pending of this.pendingRequests) {
      pending.markReceived(seqNum)
    }
    this.removeFullySatisfied()
  }

  onGapFillReceived (gapFillSeq: number, newSeqNo: number, now: Date): void {
    for (const pending of this.pendingRequests) {
      pending.markRangeReceived(gapFillSeq, newSeqNo - 1)
    }
    this.removeFullySatisfied()
  }

  tick (now: Date): void {
    this.cleanupTimedOutRequests(now)
    this.cleanupRateLimitWindow(now)
  }

  reset (): void {
    this.pendingRequests.length = 0
    this.recentRequestTimes.length = 0
    // keep requestHistory for debugging
  }

  get pending (): ReadonlyArray<PendingResendRange> {
    return this.pendingRequests.slice()
  }

  get history (): ReadonlyArray<ResendRequestRecord> {
    return this.requestHistory.slice()
  }

  get pendingCount (): number {
    return this.pendingRequests.length
  }

  get hasPendingRequests (): boolean {
    return this.pendingRequests.length > 0
  }

  private isStorming (now: Date): boolean {
    this.cleanupRateLimitWindow(now)
    return this.recentRequestTimes.length >= this.maxRequestsPerWindow
  }

  private cleanupRateLimitWindow (now: Date): void {
    const cutoff = now.getTime() - this.rateLimitWindowMs
    while (this.recentRequestTimes.length > 0 && this.recentRequestTimes[0].getTime() < cutoff) {
      this.recentRequestTimes.shift()
    }
  }

  private cleanupTimedOutRequests (now: Date): void {
    const cutoff = now.getTime() - this.requestTimeoutMs
    for (let i = this.pendingRequests.length - 1; i >= 0; i--) {
      if (this.pendingRequests[i].sentAt.getTime() < cutoff) {
        this.pendingRequests.splice(i, 1)
      }
    }
  }

  private removeFullySatisfied (): void {
    for (let i = this.pendingRequests.length - 1; i >= 0; i--) {
      if (this.pendingRequests[i].isFullySatisfied) {
        this.pendingRequests.splice(i, 1)
      }
    }
  }

  private computeUncoveredRange (gapBegin: number, gapEnd: number): { begin: number, end: number } | null {
    if (this.pendingRequests.length === 0) {
      return { begin: gapBegin, end: gapEnd }
    }

    const covered: Set<number> = new Set()
    for (const pending of this.pendingRequests) {
      for (let seq = pending.begin; seq <= pending.end; seq++) {
        covered.add(seq)
      }
    }

    let uncoveredBegin: number | null = null
    let uncoveredEnd: number | null = null

    for (let seq = gapBegin; seq <= gapEnd; seq++) {
      if (!covered.has(seq)) {
        if (uncoveredBegin === null) uncoveredBegin = seq
        uncoveredEnd = seq
      } else if (uncoveredBegin !== null) {
        break
      }
    }

    if (uncoveredBegin !== null && uncoveredEnd !== null) {
      return { begin: uncoveredBegin, end: uncoveredEnd }
    }

    return null
  }
}
