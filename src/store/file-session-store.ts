import { IFixSessionStore } from './fix-session-store'
import { SessionId } from './session-id'
import { IFixMsgStoreRecord, FixMsgStoreRecord } from './fix-msg-store-record'
import { ISessionStreamProvider } from './session-stream-provider'
import { FileSessionStreamProvider } from './file-session-stream-provider'

/**
 * QuickFix-compatible file-based session store.
 *
 * File format:
 * - .seqnums: "SSSSSSSSSSSSSSSSSSSS : TTTTTTTTTTTTTTTTTTTT" (20-char right-justified sender : target)
 * - .session: "YYYYMMDD-HH:MM:SS.ffffff" (session creation time)
 * - .header: "seqnum,offset,length" per line (index into body)
 * - .body: concatenated raw FIX messages (no delimiters)
 */
export class FileSessionStore implements IFixSessionStore {
  private readonly streamProvider: ISessionStreamProvider
  private readonly ownsProvider: boolean

  private senderSeqNumValue: number = 1
  private targetSeqNumValue: number = 1
  private creationTimeValue: Date = new Date()

  // In-memory index: seqnum -> { offset, length }
  private readonly headerIndex: Map<number, { offset: number, length: number }> = new Map()

  /**
   * Creates a FileSessionStore with the default file-based stream provider.
   */
  static createWithFiles (sessionId: SessionId, directory: string): FileSessionStore {
    return new FileSessionStore(sessionId, new FileSessionStreamProvider(sessionId, directory), true)
  }

  /**
   * Creates a FileSessionStore with a custom stream provider.
   * Useful for testing with in-memory streams.
   */
  constructor (
    public readonly sessionId: SessionId,
    streamProvider: ISessionStreamProvider,
    ownsProvider: boolean = false
  ) {
    this.streamProvider = streamProvider
    this.ownsProvider = ownsProvider
  }

  /**
   * Gets the stream provider for direct access (useful for testing).
   */
  getStreamProvider (): ISessionStreamProvider {
    return this.streamProvider
  }

  // Sequence Numbers

  get senderSeqNum (): number {
    return this.senderSeqNumValue
  }

  set senderSeqNum (value: number) {
    this.senderSeqNumValue = value
  }

  get targetSeqNum (): number {
    return this.targetSeqNumValue
  }

  set targetSeqNum (value: number) {
    this.targetSeqNumValue = value
  }

  async setSenderSeqNum (value: number): Promise<void> {
    this.senderSeqNumValue = value
    await this.persistSeqNums()
  }

  async setTargetSeqNum (value: number): Promise<void> {
    this.targetSeqNumValue = value
    await this.persistSeqNums()
  }

  async nextSenderSeqNum (): Promise<number> {
    const next = ++this.senderSeqNumValue
    await this.persistSeqNums()
    return next
  }

  async nextTargetSeqNum (): Promise<number> {
    const next = ++this.targetSeqNumValue
    await this.persistSeqNums()
    return next
  }

  // Session

  get creationTime (): Date {
    return this.creationTimeValue
  }

  async reset (): Promise<void> {
    this.senderSeqNumValue = 1
    this.targetSeqNumValue = 1
    this.creationTimeValue = new Date()
    this.headerIndex.clear()

    await this.streamProvider.reset()
    await this.persistSeqNums()
    await this.persistSessionTime()
    this.streamProvider.openBody()
  }

  // Message Operations

  async put (record: IFixMsgStoreRecord): Promise<void> {
    if (record.encoded == null) {
      throw new Error('Record must have encoded content')
    }

    const bytes = Buffer.from(record.encoded, 'utf8')
    const length = bytes.length
    const offset = await this.streamProvider.appendBody(bytes)
    this.headerIndex.set(record.seqNum, { offset, length })
    await this.streamProvider.appendHeaderLine(`${record.seqNum},${offset},${length}`)
  }

  async get (seqNum: number): Promise<IFixMsgStoreRecord | null> {
    const entry = this.headerIndex.get(seqNum)
    if (!entry) return null
    return await this.readMessage(seqNum, entry.offset, entry.length)
  }

  async getRange (fromSeqNum: number, toSeqNum: number): Promise<IFixMsgStoreRecord[]> {
    const results: IFixMsgStoreRecord[] = []
    for (let seq = fromSeqNum; seq <= toSeqNum; seq++) {
      const record = await this.get(seq)
      if (record) {
        results.push(record)
      }
    }
    return results
  }

  // Lifecycle

  async initialize (): Promise<void> {
    await this.loadSeqNums()
    await this.loadSessionTime()
    await this.loadHeaderIndex()
    this.streamProvider.openBody()
  }

  async flush (): Promise<void> {
    await this.streamProvider.flush()
  }

  async dispose (): Promise<void> {
    await this.streamProvider.flush()
    if (this.ownsProvider) {
      await this.streamProvider.dispose()
    }
  }

  // Private - persistence

  private async persistSeqNums (): Promise<void> {
    const sender = this.senderSeqNumValue.toString().padStart(20, ' ')
    const target = this.targetSeqNumValue.toString().padStart(20, ' ')
    await this.streamProvider.writeSeqNums(`${sender} : ${target}`)
  }

  private async loadSeqNums (): Promise<void> {
    const content = await this.streamProvider.readSeqNums()
    if (content == null) {
      this.senderSeqNumValue = 1
      this.targetSeqNumValue = 1
      return
    }
    const parts = content.split(':')
    if (parts.length === 2) {
      this.senderSeqNumValue = parseInt(parts[0].trim(), 10) || 1
      this.targetSeqNumValue = parseInt(parts[1].trim(), 10) || 1
    }
  }

  private async persistSessionTime (): Promise<void> {
    await this.streamProvider.writeSessionTime(FileSessionStore.formatSessionTime(this.creationTimeValue))
  }

  private async loadSessionTime (): Promise<void> {
    const content = await this.streamProvider.readSessionTime()
    if (content == null) {
      this.creationTimeValue = new Date()
      await this.persistSessionTime()
      return
    }
    const parsed = FileSessionStore.parseSessionTime(content.trim())
    this.creationTimeValue = parsed ?? new Date()
  }

  private async loadHeaderIndex (): Promise<void> {
    const lines = await this.streamProvider.readHeaderLines()
    for (const line of lines) {
      if (!line.trim()) continue
      const parts = line.split(',')
      if (parts.length === 3) {
        const seqNum = parseInt(parts[0], 10)
        const offset = parseInt(parts[1], 10)
        const length = parseInt(parts[2], 10)
        if (!isNaN(seqNum) && !isNaN(offset) && !isNaN(length)) {
          this.headerIndex.set(seqNum, { offset, length })
        }
      }
    }
  }

  // Private - message reading

  private async readMessage (seqNum: number, offset: number, length: number): Promise<IFixMsgStoreRecord | null> {
    const buffer = await this.streamProvider.readBody(offset, length)
    if (buffer.length !== length) return null

    const encoded = buffer.toString('utf8')
    const msgType = FileSessionStore.extractTag(encoded, '35')
    const sendingTimeStr = FileSessionStore.extractTag(encoded, '52')
    let timestamp = new Date(0)
    if (sendingTimeStr) {
      const parsed = FileSessionStore.parseSessionTime(sendingTimeStr)
      if (parsed) timestamp = parsed
    }

    return new FixMsgStoreRecord(msgType ?? '', timestamp, seqNum, undefined, encoded)
  }

  /**
   * Extract a FIX tag value from a raw message string.
   * Tags are delimited by SOH (0x01) or pipe (|).
   */
  static extractTag (message: string, tag: string): string | null {
    const tagPrefix = `${tag}=`

    // Check if tag is at the start
    if (message.startsWith(tagPrefix)) {
      const endIndex = FileSessionStore.findDelimiter(message, tagPrefix.length)
      return message.substring(tagPrefix.length, endIndex)
    }

    // Search for SOH + tag= or | + tag=
    for (const delim of ['\x01', '|']) {
      const search = `${delim}${tagPrefix}`
      const idx = message.indexOf(search)
      if (idx >= 0) {
        const startIndex = idx + search.length
        const endIndex = FileSessionStore.findDelimiter(message, startIndex)
        return message.substring(startIndex, endIndex)
      }
    }

    return null
  }

  private static findDelimiter (message: string, fromIndex: number): number {
    for (let i = fromIndex; i < message.length; i++) {
      const ch = message.charAt(i)
      if (ch === '\x01' || ch === '|') return i
    }
    return message.length
  }

  /**
   * Format a date as QuickFix session time: YYYYMMDD-HH:MM:SS.ffffff
   */
  static formatSessionTime (date: Date): string {
    const y = date.getUTCFullYear()
    const M = (date.getUTCMonth() + 1).toString().padStart(2, '0')
    const d = date.getUTCDate().toString().padStart(2, '0')
    const h = date.getUTCHours().toString().padStart(2, '0')
    const m = date.getUTCMinutes().toString().padStart(2, '0')
    const s = date.getUTCSeconds().toString().padStart(2, '0')
    const ms = date.getUTCMilliseconds().toString().padStart(3, '0')
    return `${y}${M}${d}-${h}:${m}:${s}.${ms}000`
  }

  /**
   * Parse a QuickFix session time string: YYYYMMDD-HH:MM:SS.fff[fff]
   */
  static parseSessionTime (str: string): Date | null {
    // Format: YYYYMMDD-HH:MM:SS.ffffff
    const match = str.match(/^(\d{4})(\d{2})(\d{2})-(\d{2}):(\d{2}):(\d{2})\.(\d{3,6})$/)
    if (!match) return null
    const [, y, M, d, h, m, s, frac] = match
    const ms = parseInt(frac.substring(0, 3), 10)
    return new Date(Date.UTC(parseInt(y), parseInt(M) - 1, parseInt(d), parseInt(h), parseInt(m), parseInt(s), ms))
  }
}
