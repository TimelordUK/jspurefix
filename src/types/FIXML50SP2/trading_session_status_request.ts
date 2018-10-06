import { IStandardHeader } from './set/standard_header'

/*
***************************************************************
* TradingSessionStatusRequest can be found in Volume 3 of the *
*                                                             *
* specification                                               *
***************************************************************
*/
export interface ITradingSessionStatusRequest {
  TradSesReqID: string// 335
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  TradSesMethod?: number// 338
  TradSesMode?: number// 339
  SubscriptionRequestType: string// 263
  SecurityExchange?: string// 207
  StandardHeader?: IStandardHeader
}
