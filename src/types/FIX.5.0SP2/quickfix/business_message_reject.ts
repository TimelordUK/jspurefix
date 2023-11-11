import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface IBusinessMessageReject {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  RefSeqNum?: number// [2] 45 (Int)
  RefMsgType: string// [3] 372 (String)
  RefApplVerID?: string// [4] 1130 (String)
  RefApplExtID?: number// [5] 1406 (Int)
  RefCstmApplVerID?: string// [6] 1131 (String)
  BusinessRejectRefID?: string// [7] 379 (String)
  BusinessRejectReason: number// [8] 380 (Int)
  Text?: string// [9] 58 (String)
  EncodedTextLen?: number// [10] 354 (Length)
  EncodedText?: Buffer// [11] 355 (RawData)
  StandardTrailer: IStandardTrailer// [12] SignatureLength.93, Signature.89, CheckSum.10
}
