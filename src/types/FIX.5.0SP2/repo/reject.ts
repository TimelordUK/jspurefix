import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The reject message should be issued when a message is       *
* received but cannot be properly processed due to a          *
* session-level rule violation. An example of when a reject   *
* may be appropriate would be the receipt of a message with   *
* invalid basic data which successfully passes de-encryption, *
* CheckSum and BodyLength checks.                             *
***************************************************************
*/
export interface IReject {
  StandardHeader: IStandardHeader
  RefSeqNum: number// 45
  RefTagID?: number// 371
  RefMsgType?: string// 372
  RefApplVerID?: string// 1130
  RefApplExtID?: number// 1406
  RefCstmApplVerID?: string// 1131
  SessionRejectReason?: number// 373
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
