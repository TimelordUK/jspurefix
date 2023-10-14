import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Trading Session Status Request is used to request        *
* information on the status of a market. With the move to      *
* multiple sessions occurring for a given trading party        *
* (morning and evening sessions for instance) there is a need  *
* to be able to provide information on what product is trading *
* on what market.                                              *
****************************************************************
*/
export interface ITradingSessionStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  TradSesReqID: string// [2] 335 (String)
  MarketID?: string// [3] 1301 (String)
  MarketSegmentID?: string// [4] 1300 (String)
  TradingSessionID?: string// [5] 336 (String)
  TradingSessionSubID?: string// [6] 625 (String)
  TradSesMethod?: number// [7] 338 (Int)
  TradSesMode?: number// [8] 339 (Int)
  SubscriptionRequestType: string// [9] 263 (String)
  SecurityExchange?: string// [10] 207 (String)
  StandardTrailer: IStandardTrailer// [11] SignatureLength.93, Signature.89, CheckSum.10
}
