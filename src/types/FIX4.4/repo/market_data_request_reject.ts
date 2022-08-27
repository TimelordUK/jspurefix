import { IStandardHeader } from './set/standard_header'
import { IMDRjctGrp } from './set/md_rjct_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
************************************************************
* The Market Data Request Reject is used when the broker   *
* cannot honor the Market Data Request, due to business or *
* technical reasons.                                       *
************************************************************
*/
export interface IMarketDataRequestReject {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  MDReqID: string// [2] 262 (String)
  MDReqRejReason?: string// [3] 281 (String)
  MDRjctGrp?: IMDRjctGrp[]// [4] AltMDSourceID.817
  Text?: string// [5] 58 (String)
  EncodedTextLen?: number// [6] 354 (Int)
  EncodedText?: Buffer// [7] 355 (RawData)
  StandardTrailer: IStandardTrailer// [8] SignatureLength.93, Signature.89, CheckSum.10
}
