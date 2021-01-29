import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The quote message is used as the response to a Quote Request *
* message and can be used to publish unsolicited quotes.       *
****************************************************************
*/
export interface IQuote {
  StandardHeader: IStandardHeader
  QuoteReqID?: string// 131
  QuoteID: string// 117
  QuoteResponseLevel?: number// 301
  TradingSessionID?: string// 336
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
  BidPx?: number// 132
  OfferPx?: number// 133
  BidSize?: number// 134
  OfferSize?: number// 135
  ValidUntilTime?: Date// 62
  BidSpotRate?: number// 188
  OfferSpotRate?: number// 190
  BidForwardPoints?: number// 189
  OfferForwardPoints?: number// 191
  TransactTime?: Date// 60
  FutSettDate?: Date// 64
  OrdType?: string// 40
  FutSettDate2?: Date// 193
  OrderQty2?: number// 192
  Currency?: string// 15
  StandardTrailer: IStandardTrailer
}
