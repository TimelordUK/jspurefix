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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  RefSeqNum: number// [2] 45 (Int)
  RefTagID?: number// [3] 371 (Int)
  RefMsgType?: string// [4] 372 (String)
  SessionRejectReason?: number// [5] 373 (Int)
  Text?: string// [6] 58 (String)
  EncodedTextLen?: number// [7] 354 (Int)
  EncodedText?: Buffer// [8] 355 (RawData)
  StandardTrailer: IStandardTrailer// [9] SignatureLength.93, Signature.89, CheckSum.10
}
