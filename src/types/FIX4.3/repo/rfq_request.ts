import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************************************************
* In tradeable and restricted tradeable quoting markets    *
* Quote Requests are issued by counterparties interested in *
* ascertaining the market for an instrument.                *
*************************************************************
*/
export interface IRFQRequest {
  StandardHeader: IStandardHeader
  NoRelatedSym: number// 146
  Instrument: IInstrument
  PrevClosePx?: number// 140
  QuoteRequestType?: number// 303
  TradingSessionID?: string// 336
  SubscriptionRequestType?: string// 263
  StandardTrailer: IStandardTrailer
}
