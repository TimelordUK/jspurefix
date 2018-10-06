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
  StandardHeader: IStandardHeader
  TradSesReqID: string// 335
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  TradSesMethod?: number// 338
  TradSesMode?: number// 339
  SubscriptionRequestType: string// 263
  SecurityExchange?: string// 207
  StandardTrailer: IStandardTrailer
}
