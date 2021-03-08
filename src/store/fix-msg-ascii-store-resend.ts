import { IFixMsgStore } from './fix-msg-store'
import { ILooseObject } from '../collections/collection'
import { IFixMsgStoreRecord } from './fix-msg-store-record'
import { AsciiParser, MsgView } from '../buffer'
import { IJsFixConfig } from '../config'
import { IFixResendRecord, FixResendRecord } from './fix-resend-record'
import { MsgType } from '../types'

export class FixMsgAsciiStoreResend {
  constructor (public readonly store: IFixMsgStore, public readonly config: IJsFixConfig) {
  }

  public getResendRequest (startSeq: number, endSeq: number): IFixResendRecord[] {

    // need to cover request from start to end where any missing numbers are
    // included as gaps to allow vector of messages to be sent by the session
    // on a request

    const arr: IFixResendRecord[] = []
    let seqNum = startSeq
    let beginGap = 0
    while (seqNum <= endSeq) {
      const record = this.store.getSeqNum(seqNum)
      if (record !== null) {
        this.gap(beginGap, seqNum, arr)
        // we sent an application msg for this seqNum and hence need to recover it from its record
        arr.push(this.createMsg(record))
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

  public createMsg (record: IFixMsgStoreRecord): IFixResendRecord {
    let res: ILooseObject = null
    const parser: AsciiParser = new AsciiParser(this.config.definitions, null, this.config.delimiter)
    parser.on('error', (e: Error) => {
      // log we failed to parse
    })
    parser.on('msg', (msgType: string, view: MsgView) => {
      res = view.toObject()
    })
    parser.on('done', () => {
      res = null
    })
    parser.parseText(record.text)
    return new FixResendRecord(res, record.msgType, record.seqNum)
  }

  public gap (beginGap: number, seqNum: number, arr: IFixResendRecord[]) {
    if (beginGap > 0) {
      arr.push(this.sequenceReset(beginGap))
      if (seqNum > beginGap) {
        arr.push(this.sequenceReset(seqNum))
      }
    }
  }

  public sequenceReset (newSeq: number): IFixResendRecord {
    return new FixResendRecord(this.config.factory.sequenceReset(newSeq), MsgType.SequenceReset, newSeq)
  }
}
