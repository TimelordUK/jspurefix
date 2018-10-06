import { IStandardHeader } from './set/standard_header'

/*
*************************************************************
* TradingSessionListRequest can be found in Volume 3 of the *
*                                                           *
* specification                                             *
*************************************************************
*/
export interface ITradingSessionListRequest {
  TradSesReqID: string// 335
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  SecurityExchange?: string// 207
  TradSesMethod?: number// 338
  TradSesMode?: number// 339
  SubscriptionRequestType: string// 263
  StandardHeader?: IStandardHeader
}
