import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The quote status request message is used by the institution *
* to generate an execution report that contains the quote     *
* status message back from the counterparty.                  *
***************************************************************
*/
export interface IQuoteStatusRequest {
  StandardHeader: IStandardHeader
  QuoteID?: string// 117
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
  Side?: string// 54
  TradingSessionID?: string// 336
  StandardTrailer: IStandardTrailer
}
