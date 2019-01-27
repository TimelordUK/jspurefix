import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
*********************************************************
* The reject message should be issued when a message is *
* received but cannot be properly processed due to a    *
* session-level rule violation.                         *
*********************************************************
*/
export interface IReject {
  StandardHeader: IStandardHeader
  RefSeqNum: number// 45
  RefTagID?: number// 371
  RefMsgType?: string// 372
  SessionRejectReason?: number// 373
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
