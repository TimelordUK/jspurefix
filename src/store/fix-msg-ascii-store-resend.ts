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
    // If no records for this given sequence number range, returns a single gap fill
    if (input.length === 0) {
      this.gap(startSeq, endSeq + 1, toResend)
      return toResend
    }

    let expected = startSeq
    for (let i = 0; i < input.length; ++i) {
      const record = this.prepareRecordForRetransmission(input[i])
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

  private gap (beginGap: number, newSeq: number, arr: IFixMsgStoreRecord[]): void {
    if (beginGap > 0) {
      arr.push(this.sequenceResetGap(beginGap, newSeq))
    }
  }

  // if records were sent as encoded text then inflate back to object
  // so can be resent or examined

  private inflate (record: IFixMsgStoreRecord): void {
    if (record.obj) return
    if (!record.encoded) return
    const parser = this.parser
    parser.on('error', (_: Error) => {
      record.obj = null
    })
    parser.on('msg', (view: MsgView) => {
      record.obj = view.toObject()
    })
    // inline parse
    parser.parseText(record.encoded)
  }

  /**
   * A continuous sequence of messages not being retransmitted should be skipped over using a
   * single SequenceReset(35=4) message with GapFillFlag(123) set to “Y” and MsgSeqNum(34) set
   * to the sequence number of the first skipped message and NewSeqNo(36) must always be set
   * to the value of the next sequence number to be expected by the peer immediately following
   * the messages being skipped.
   */
  private sequenceResetGap (startGap: number, newSeq: number): IFixMsgStoreRecord {
    const factory = this.config.factory
    const gapFill: ISequenceReset = factory?.sequenceReset(newSeq, true) as ISequenceReset
    gapFill.StandardHeader = factory?.header(MsgType.SequenceReset, startGap) as IStandardHeader
    gapFill.StandardHeader.PossDupFlag = true

    return new FixMsgStoreRecord(
      MsgType.SequenceReset,
      new Date(),
      startGap,
      gapFill,
      null,
    )
  }

  /**
   * Prepares the FIX message as response to ResendRequest (2).
   *
   * The FIX session processor retransmitting a message with the PossDupFlag(43) set to "Y" must modify the following fields:
   *
   * SendingTime(52) set to the current sending time
   * OrigSendingTime(122) set to the SendingTime(52) from the original message
   * Recalculate the BodyLength(9)
   * Recalculate the CheckSum(10)
   *
   * If the message is encrypted, SecureDataLen(90) and SecureData(91) may also require re-encryption and re-encoding
   *
   * @see https://www.fixtrading.org/standards/fix-session-layer-online/#message-recovery
   *
   * @param originalRecord the FIX message to be retransmitted as possible duplicate
   * @returns the FIX message ready to be retransmitted
   */
  private prepareRecordForRetransmission (originalRecord: IFixMsgStoreRecord): IFixMsgStoreRecord {
    const retransmitted = originalRecord.clone() // We don't want to accidently change any fields of the original record

    const factory = this.config.factory
    if (!retransmitted.obj) {
      retransmitted.obj = {}
    }

    // Rebuilds header with the updated fields
    const header = factory?.header(
      retransmitted.msgType,
      retransmitted.seqNum,
      new Date(), // SendingTime(52)
      {
        PossDupFlag: true,
        OrigSendingTime: retransmitted.timestamp
      }
    )
    retransmitted.obj = {
      ...retransmitted.obj,
      StandardHeader: header
    }
    return retransmitted
  }
}
