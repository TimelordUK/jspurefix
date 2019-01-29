import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
***********************************************************
* Some systems allow the transmission of real-time quote, *
* order, trade and/or other price information on a        *
* subscription basis. A Market Data Request is a general  *
* request for market data on specific securities or forex *
* quotes.                                                 *
***********************************************************
*/
export interface IMarketDataRequest {
  StandardHeader: IStandardHeader
  MDReqID: string// 262
  SubscriptionRequestType: string// 263
  MarketDepth: number// 264
  MDUpdateType?: number// 265
  AggregatedBook?: boolean// 266
  OpenCloseSettleFlag?: string// 286
  NoMDEntryTypes: number// 267
  MDEntryType: string// 269
  NoRelatedSym: number// 146
  Instrument: IInstrument
  NoTradingSessions?: number// 386
  TradingSessionID?: string// 336
  StandardTrailer: IStandardTrailer
}
