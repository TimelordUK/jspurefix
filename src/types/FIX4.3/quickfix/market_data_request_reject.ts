import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMarketDataRequestReject {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  MDReqID: string// [2] 262 (String)
  MDReqRejReason?: string// [3] 281 (String)
  Text?: string// [4] 58 (String)
  EncodedTextLen?: number// [5] 354 (Length)
  EncodedText?: Buffer// [6] 355 (RawData)
  StandardTrailer: IStandardTrailer// [7] SignatureLength.93, Signature.89, CheckSum.10
}
