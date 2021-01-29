import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
***********************************************************
* Some systems allow the transmission of real-time quote, *
* order, trade and/or other price information on a        *
* subscription basis.                                     *
***********************************************************
*/
export interface IMarketDataRequest {
  StandardHeader: IStandardHeader
  MDReqID: string// 262
  SubscriptionRequestType: string// 263
  MarketDepth: number// 264
  MDUpdateType?: number// 265
  AggregatedBook?: boolean// 266
  NoMDEntryTypes: number// 267
  MDEntryType: string// 269
  NoRelatedSym: number// 146
  Symbol: string// 55
  SymbolSfx?: string// 65
  SecurityID?: string// 48
  IDSource?: string// 22
  SecurityType?: string// 167
  MaturityMonthYear?: string// 200
  MaturityDay?: number// 205
  PutOrCall?: number// 201
  StrikePrice?: number// 202
  OptAttribute?: string// 206
  ContractMultiplier?: number// 231
  CouponRate?: number// 223
  SecurityExchange?: string// 207
  Issuer?: string// 106
  EncodedIssuerLen?: number// 348
  EncodedIssuer?: Buffer// 349
  SecurityDesc?: string// 107
  EncodedSecurityDescLen?: number// 350
  EncodedSecurityDesc?: Buffer// 351
  TradingSessionID?: string// 336
  StandardTrailer: IStandardTrailer
}
