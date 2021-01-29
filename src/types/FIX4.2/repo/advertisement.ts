import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
*********************************************************
* Advertisement messages are used to announce completed *
* transactions.                                         *
*********************************************************
*/
export interface IAdvertisement {
  StandardHeader: IStandardHeader
  AdvId: string// 2
  AdvTransType: string// 5
  AdvRefID?: string// 3
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
  AdvSide: string// 4
  Shares: number// 53
  Price?: number// 44
  Currency?: string// 15
  TradeDate?: Date// 75
  TransactTime?: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  URLLink?: string// 149
  LastMkt?: string// 30
  TradingSessionID?: string// 336
  StandardTrailer: IStandardTrailer
}
