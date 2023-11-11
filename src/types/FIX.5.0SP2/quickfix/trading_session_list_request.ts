import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface ITradingSessionListRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  TradSesReqID: string// [2] 335 (String)
  MarketID?: string// [3] 1301 (String)
  MarketSegmentID?: string// [4] 1300 (String)
  TradingSessionID?: string// [5] 336 (String)
  TradingSessionSubID?: string// [6] 625 (String)
  SecurityExchange?: string// [7] 207 (String)
  TradSesMethod?: number// [8] 338 (Int)
  TradSesMode?: number// [9] 339 (Int)
  SubscriptionRequestType: string// [10] 263 (String)
  StandardTrailer: IStandardTrailer// [11] SignatureLength.93, Signature.89, CheckSum.10
}
