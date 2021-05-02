import { IFixMsgStore } from './fix-msg-store'
import { FixMsgStoreRecord, IFixMsgStoreRecord } from './fix-msg-store-record'
import { IJsFixConfig } from '../config'
import { MsgType } from '../types'
import { AsciiParser, MsgView } from '../buffer'

export class FixMsgAsciiStoreResend {
  parser: AsciiParser
  constructor (public readonly store: IFixMsgStore, public readonly config: IJsFixConfig) {
    this.parser = new AsciiParser(this.config.definitions, null, this.config.delimiter)
  }

  public getResendRequest (startSeq: number, endSeq: number): IFixMsgStoreRecord[] {

    // need to cover request from start to end where any missing numbers are
    // included as gaps to allow vector of messages to be sent by the session
    // on a request

    const toResend: IFixMsgStoreRecord[] = []
    let seqNum = startSeq
    let beginGap = 0
    while (seqNum <= endSeq) {
      const record = this.store.getSeqNum(seqNum)
      if (record !== null) {
        this.gap(beginGap, seqNum, toResend)
        // we sent an application msg for this seqNum and hence need to recover it from its record
        if (record.encoded) {
          this.inflate(record)
        }
        toResend.push(record)
        beginGap = 0
      } else {
        // this was a non saved message such as heartbeat - will be filled with a gap
        if (beginGap === 0) {
          beginGap = seqNum
        }
      }
      ++seqNum
    }
    this.gap(beginGap, seqNum, toResend)
    return toResend
  }

  public gap (beginGap: number, seqNum: number, arr: IFixMsgStoreRecord[]) {
    if (beginGap > 0) {
      arr.push(this.sequenceResetGap(beginGap, seqNum))
    }
  }

  // if records were sent as encoded text then inflate back to object
  // so can be resent or examined

  public inflate (record: IFixMsgStoreRecord): void {
    if (record.obj) return
    if (!record.encoded) return
    const parser = this.parser
    parser.on('error', (e: Error) => {
      record.obj = null
    })
    parser.on('msg', (view: MsgView) => {
      record.obj = view.toObject()
    })
    // inline parse
    parser.parseText(record.encoded)
  }

  public sequenceResetGap (startGap: number, newSeq: number): IFixMsgStoreRecord {
    const gapFill = this.config.factory.sequenceReset(newSeq, true)
    gapFill.StandardHeader = this.config.factory.header(MsgType.SequenceReset, startGap)
    gapFill.StandardHeader.PossDupFlag = true
    return new FixMsgStoreRecord(
      MsgType.SequenceReset,
      null,
      newSeq, gapFill)
  }
}
