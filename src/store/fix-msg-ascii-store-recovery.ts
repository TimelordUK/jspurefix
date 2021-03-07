import { IFixMsgStore } from './fix-msg-store'
import { ILooseObject } from '../collections/collection'
import { IFixMsgStoreRecord } from './fix-msg-store-record'
import { StringDuplex } from '../transport'
import { AsciiParser, MsgView } from '../buffer'
import { IJsFixConfig } from '../config'

export class FixMsgAsciiStoreRecovery {
  constructor (public readonly store: IFixMsgStore, public readonly config: IJsFixConfig) {
  }

  public getReplayRequest (startSeq: number, endSeq: number): ILooseObject[] {

    // need to cover request from start to end where any missing numbers are
    // included as gaps to allow vector of messages to be sent by the session
    // on a request

    const arr: ILooseObject[] = []
    let seqNum = startSeq
    let beginGap = 0
    while (seqNum <= endSeq) {
      const record = this.store.getSeqNum(seqNum)
      if (record !== null) {
        if (beginGap > 0) {
          arr.push(this.gap(beginGap))
          if (seqNum > beginGap) {
            arr.push(this.gap(seqNum))
          }
        }
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
    if (beginGap > 0) {
      arr.push(this.gap(beginGap))
      if (seqNum > beginGap) {
        arr.push(this.gap(seqNum))
      }
    }
    return arr
  }

  public createMsg (record: IFixMsgStoreRecord): ILooseObject {
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
    return res
  }

  public gap (newSeq: number): ILooseObject {
    return this.config.factory.sequenceReset(newSeq)
  }
}
