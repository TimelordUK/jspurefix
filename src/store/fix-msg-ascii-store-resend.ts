import { IFixMsgStore } from './fix-msg-store'
import { FixMsgStoreRecord, IFixMsgStoreRecord } from './fix-msg-store-record'
import { IJsFixConfig } from '../config'
import { MsgType } from '../types'

export class FixMsgAsciiStoreResend {
  constructor (public readonly store: IFixMsgStore, public readonly config: IJsFixConfig) {
  }

  public getResendRequest (startSeq: number, endSeq: number): IFixMsgStoreRecord[] {

    // need to cover request from start to end where any missing numbers are
    // included as gaps to allow vector of messages to be sent by the session
    // on a request

    const arr: IFixMsgStoreRecord[] = []
    let seqNum = startSeq
    let beginGap = 0
    while (seqNum <= endSeq) {
      const record = this.store.getSeqNum(seqNum)
      if (record !== null) {
        this.gap(beginGap, seqNum, arr)
        // we sent an application msg for this seqNum and hence need to recover it from its record
        arr.push(record)
        beginGap = 0
      } else {
        // this was a non saved message such as heartbeat - will be filled with a gap
        if (beginGap === 0) {
          beginGap = seqNum
        }
      }
      ++seqNum
    }
    this.gap(beginGap, seqNum, arr)
    return arr
  }

  public gap (beginGap: number, seqNum: number, arr: IFixMsgStoreRecord[]) {
    if (beginGap > 0) {
      arr.push(this.sequenceReset(beginGap))
      if (seqNum > beginGap) {
        arr.push(this.sequenceReset(seqNum))
      }
    }
  }

  public sequenceReset (newSeq: number): IFixMsgStoreRecord {
    return new FixMsgStoreRecord(
      MsgType.SequenceReset,
      null,
      newSeq, this.config.factory.sequenceReset(newSeq))
  }
}
