import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface IListCancelRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ListID: string// [2] 66 (String)
  TransactTime: Date// [3] 60 (UtcTimestamp)
  TradeOriginationDate?: string// [4] 229 (String)
  Text?: string// [5] 58 (String)
  EncodedTextLen?: number// [6] 354 (Length)
  EncodedText?: Buffer// [7] 355 (RawData)
  StandardTrailer: IStandardTrailer// [8] SignatureLength.93, Signature.89, CheckSum.10
}
