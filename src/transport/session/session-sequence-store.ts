/**
 * Minimal store interface for the SessionSequenceCoordinator.
 * Both the existing FixMsgMemoryStore (adapted) and the future
 * IFixSessionStore will implement this.
 */
export interface ISessionSequenceStore {
  senderSeqNum: number
  targetSeqNum: number
  setSenderSeqNum (value: number): Promise<void>
  setTargetSeqNum (value: number): Promise<void>
  reset (): Promise<void>
}

/**
 * Simple in-memory implementation for testing and as default.
 */
export class MemorySequenceStore implements ISessionSequenceStore {
  public senderSeqNum: number = 1
  public targetSeqNum: number = 1

  async setSenderSeqNum (value: number): Promise<void> {
    this.senderSeqNum = value
  }

  async setTargetSeqNum (value: number): Promise<void> {
    this.targetSeqNum = value
  }

  async reset (): Promise<void> {
    this.senderSeqNum = 1
    this.targetSeqNum = 1
  }
}
