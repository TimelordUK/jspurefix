import { IStandardHeader } from './set/standard_header'

/*
*************************************************************
* TradingSessionListRequest can be found in Volume 3 of the *
*                                                           *
* specification                                             *
*************************************************************
*/
export interface ITradingSessionListRequest {
  MDStatisticReqID: string// 2452
  SideCollateralAmountMarketID?: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  UnderlyingStreamCommodityExchange?: string// 41973
  TradSesMethod?: number// 338
  UnderlyingReturnRateDateMode?: number// 43009
  SubscriptionRequestType: string// 263
  StandardHeader?: IStandardHeader
}
