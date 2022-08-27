import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
*********************************************************
* The Trading Session Status Request is used to request *
* information on the status of a market.                *
*********************************************************
*/
export interface ITradingSessionStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  TradSesReqID: string// [2] 335 (String)
  TradingSessionID?: string// [3] 336 (String)
  TradingSessionSubID?: string// [4] 625 (String)
  TradSesMethod?: number// [5] 338 (Int)
  TradSesMode?: number// [6] 339 (Int)
  SubscriptionRequestType: string// [7] 263 (String)
  StandardTrailer: IStandardTrailer// [8] SignatureLength.93, Signature.89, CheckSum.10
}
