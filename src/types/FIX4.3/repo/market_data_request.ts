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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  MDReqID: string// [2] 262 (String)
  SubscriptionRequestType: string// [3] 263 (String)
  MarketDepth: number// [4] 264 (Int)
  MDUpdateType?: number// [5] 265 (Int)
  AggregatedBook?: boolean// [6] 266 (Boolean)
  OpenCloseSettleFlag?: string// [7] 286 (String)
  NoMDEntryTypes: number// [8] 267 (Int)
  MDEntryType: string// [9] 269 (String)
  NoRelatedSym: number// [10] 146 (Int)
  Instrument: IInstrument// [11] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  NoTradingSessions?: number// [12] 386 (Int)
  TradingSessionID?: string// [13] 336 (String)
  StandardTrailer: IStandardTrailer// [14] SignatureLength.93, Signature.89, CheckSum.10
}
