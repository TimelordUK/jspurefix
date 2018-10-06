import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The Trading Session List Request is used to request a list *
* of trading sessions available in a market place and the    *
* state of those trading sessions. A successful request will *
* result in a response from the counterparty of a Trading    *
* Session List (MsgType=BJ) message that contains a list of  *
* zero or more trading sessions.                             *
**************************************************************
*/
export interface ITradingSessionListRequest {
  StandardHeader: IStandardHeader
  TradSesReqID: string// 335
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  SecurityExchange?: string// 207
  TradSesMethod?: number// 338
  TradSesMode?: number// 339
  SubscriptionRequestType: string// 263
  StandardTrailer: IStandardTrailer
}
