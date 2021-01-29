import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Security Status Request message provides for the ability *
* to request the status of a security.                         *
****************************************************************
*/
export interface ISecurityStatusRequest {
  StandardHeader: IStandardHeader
  SecurityStatusReqID: string// 324
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
  SubscriptionRequestType: string// 263
  TradingSessionID?: string// 336
  StandardTrailer: IStandardTrailer
}
