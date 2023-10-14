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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  RefSeqNum: number// [2] 45 (Int)
  RefTagID?: number// [3] 371 (Int)
  RefMsgType?: string// [4] 372 (String)
  RefApplVerID?: string// [5] 1130 (String)
  RefApplExtID?: number// [6] 1406 (Int)
  RefCstmApplVerID?: string// [7] 1131 (String)
  SessionRejectReason?: number// [8] 373 (Int)
  Text?: string// [9] 58 (String)
  EncodedTextLen?: number// [10] 354 (Int)
  EncodedText?: Buffer// [11] 355 (RawData)
  StandardTrailer: IStandardTrailer// [12] SignatureLength.93, Signature.89, CheckSum.10
}
