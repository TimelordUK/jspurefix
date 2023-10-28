import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityTypeRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  SecurityReqID: string// [2] 320 (String)
  Text?: string// [3] 58 (String)
  EncodedTextLen?: number// [4] 354 (Length)
  EncodedText?: Buffer// [5] 355 (RawData)
  MarketID?: string// [6] 1301 (String)
  MarketSegmentID?: string// [7] 1300 (String)
  TradingSessionID?: string// [8] 336 (String)
  TradingSessionSubID?: string// [9] 625 (String)
  Product?: number// [10] 460 (Int)
  SecurityType?: string// [11] 167 (String)
  SecuritySubType?: string// [12] 762 (String)
  StandardTrailer: IStandardTrailer// [13] SignatureLength.93, Signature.89, CheckSum.10
}
