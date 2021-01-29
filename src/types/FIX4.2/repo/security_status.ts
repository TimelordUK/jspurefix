import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityStatus {
  StandardHeader: IStandardHeader
  SecurityStatusReqID?: string// 324
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
  Currency?: string// 15
  TradingSessionID?: string// 336
  UnsolicitedIndicator?: boolean// 325
  SecurityTradingStatus?: number// 326
  FinancialStatus?: string// 291
  CorporateAction?: string// 292
  HaltReason?: string// 327
  InViewOfCommon?: boolean// 328
  DueToRelated?: boolean// 329
  BuyVolume?: number// 330
  SellVolume?: number// 331
  HighPx?: number// 332
  LowPx?: number// 333
  LastPx?: number// 31
  TransactTime?: Date// 60
  Adjustment?: number// 334
  StandardTrailer: IStandardTrailer
}
