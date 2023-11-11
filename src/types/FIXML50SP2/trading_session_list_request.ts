import { IStandardHeader } from './set/standard_header'

/*
*************************************************************
* TradingSessionListRequest can be found in Volume 3 of the *
*                                                           *
* specification                                             *
*************************************************************
*/
export interface ITradingSessionListRequest {
  TradSesReqID: string// [2] 335 (String)
  MarketID?: string// [2] 1301 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  TradingSessionID?: string// [2] 336 (String)
  TradingSessionSubID?: string// [2] 625 (String)
  SecurityExchange?: string// [2] 207 (String)
  TradSesMethod?: number// [2] 338 (Int)
  TradSesMode?: number// [2] 339 (Int)
  SubscriptionRequestType: string// [2] 263 (String)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
}
