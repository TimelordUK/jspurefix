import { IFixMsgStore } from './fix-msg-store'
import { FixMsgStoreRecord, IFixMsgStoreRecord } from './fix-msg-store-record'
import { IJsFixConfig } from '../config'
import { MsgType } from '../types'
import { ElasticBuffer, MsgView } from '../buffer'
import { AsciiParser } from '../buffer/ascii'
import { ISequenceReset, IStandardHeader } from '../types/FIX4.4/repo'

export class FixMsgAsciiStoreResend {
  parser: AsciiParser
  constructor (public readonly store: IFixMsgStore, public readonly config: IJsFixConfig) {
    this.parser = new AsciiParser(this.config, null, new ElasticBuffer(160 * 1024))
  }

  public async getResendRequest (startSeq: number, endSeq: number): Promise<IFixMsgStoreRecord[]> {
    // need to cover request from start to end where any missing numbers are
    // included as gaps to allow vector of messages to be sent by the session
    // on a request

    return await new Promise((resolve, reject) => {
      this.store.getSeqNumRange(startSeq, endSeq).then(res => {
        resolve(this.inflateRange(startSeq, endSeq, res))
      }).catch(e => {
        reject(e)
      })
    })
  }

  private inflateRange (startSeq: number, endSeq: number, input: IFixMsgStoreRecord[]): IFixMsgStoreRecord[] {
    const toResend: IFixMsgStoreRecord[] = []
    let expected = startSeq
    for (let i = 0; i < input.length; ++i) {
      const record = input[i].clone()
      const seqNum = record.seqNum
      const toGap = seqNum - expected
      if (toGap > 0) {
        this.gap(expected, seqNum, toResend)
      }
      expected = seqNum + 1
      if (record.encoded) {
        this.inflate(record)
      }
      toResend.push(record)
    }
    if (endSeq - expected > 0) {
      this.gap(expected, endSeq + 1, toResend)
    }
    return toResend
  }

  public gap (beginGap: number, seqNum: number, arr: IFixMsgStoreRecord[]): void {
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
    const factory = this.config.factory
    const gapFill: ISequenceReset = factory?.sequenceReset(newSeq, true) as ISequenceReset
    gapFill.StandardHeader = factory?.header(MsgType.SequenceReset, startGap) as IStandardHeader
    gapFill.StandardHeader.PossDupFlag = true
    gapFill.NewSeqNo = newSeq
    return new FixMsgStoreRecord(
      MsgType.SequenceReset,
      new Date(),
      newSeq,
      gapFill,
      null)
  }
}
