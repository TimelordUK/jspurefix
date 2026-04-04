import { IFixSessionStore } from './fix-session-store'
import { SessionId } from './session-id'
import { IFixMsgStoreRecord } from './fix-msg-store-record'

/**
 * In-memory session store for testing and development.
 * Not persistent - all data lost on dispose.
 */
export class MemorySessionStore implements IFixSessionStore {
  private readonly messages: Map<number, IFixMsgStoreRecord> = new Map()
  private senderSeqNumValue: number = 1
  private targetSeqNumValue: number = 1
  private creationTimeValue: Date = new Date()

  constructor (public readonly sessionId: SessionId) {}

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
  }

  async setTargetSeqNum (value: number): Promise<void> {
    this.targetSeqNumValue = value
  }

  async nextSenderSeqNum (): Promise<number> {
    return ++this.senderSeqNumValue
  }

  async nextTargetSeqNum (): Promise<number> {
    return ++this.targetSeqNumValue
  }

  // Session

  get creationTime (): Date {
    return this.creationTimeValue
  }

  async reset (): Promise<void> {
    this.senderSeqNumValue = 1
    this.targetSeqNumValue = 1
    this.creationTimeValue = new Date()
    this.messages.clear()
  }

  // Message Operations

  async put (record: IFixMsgStoreRecord): Promise<void> {
    this.messages.set(record.seqNum, record.clone())
  }

  async get (seqNum: number): Promise<IFixMsgStoreRecord | null> {
    const record = this.messages.get(seqNum)
    return record ? record.clone() : null
  }

  async getRange (fromSeqNum: number, toSeqNum: number): Promise<IFixMsgStoreRecord[]> {
    const results: IFixMsgStoreRecord[] = []
    const keys = Array.from(this.messages.keys())
      .filter(k => k >= fromSeqNum && k <= toSeqNum)
      .sort((a, b) => a - b)
    for (const seq of keys) {
      const record = this.messages.get(seq)
      if (record) {
        results.push(record.clone())
      }
    }
    return results
  }

  // Lifecycle

  async initialize (): Promise<void> {
    // No-op for memory store
  }

  async flush (): Promise<void> {
    // No-op for memory store
  }

  async dispose (): Promise<void> {
    // No-op for memory store
  }
}
