import { SessionId } from './session-id'
import { IFixMsgStoreRecord } from './fix-msg-store-record'

/**
 * Unified session store interface for FIX message persistence and sequence number management.
 * Coordinates all persistence for a single FIX session:
 * - Message storage (.body + .header files)
 * - Sequence numbers (.seqnums file)
 * - Session metadata (.session file)
 *
 * QuickFix-compatible file format for interoperability.
 */
export interface IFixSessionStore {
  readonly sessionId: SessionId

  // Message Operations
  put (record: IFixMsgStoreRecord): Promise<void>
  get (seqNum: number): Promise<IFixMsgStoreRecord | null>
  getRange (fromSeqNum: number, toSeqNum: number): Promise<IFixMsgStoreRecord[]>

  // Sequence Number Operations
  senderSeqNum: number
  targetSeqNum: number
  setSenderSeqNum (value: number): Promise<void>
  setTargetSeqNum (value: number): Promise<void>
  nextSenderSeqNum (): Promise<number>
  nextTargetSeqNum (): Promise<number>

  // Session Operations
  readonly creationTime: Date
  reset (): Promise<void>

  // Lifecycle
  initialize (): Promise<void>
  flush (): Promise<void>
  dispose (): Promise<void>
}
