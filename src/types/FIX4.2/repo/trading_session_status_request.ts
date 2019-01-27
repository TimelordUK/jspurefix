import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
*********************************************************
* The Trading Session Status Request is used to request *
* information on the status of a market.                *
*********************************************************
*/
export interface ITradingSessionStatusRequest {
  StandardHeader: IStandardHeader
  TradSesReqID: string// 335
  TradingSessionID?: string// 336
  TradSesMethod?: number// 338
  TradSesMode?: number// 339
  SubscriptionRequestType: string// 263
  StandardTrailer: IStandardTrailer
}
