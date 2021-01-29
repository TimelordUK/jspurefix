import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The Mass Quote message can contain quotes for multiple     *
* securities to support applications that allow for the mass *
* quoting of an option series.                               *
**************************************************************
*/
export interface IMassQuote {
  StandardHeader: IStandardHeader
  QuoteReqID?: string// 131
  QuoteID: string// 117
  QuoteResponseLevel?: number// 301
  DefBidSize?: number// 293
  DefOfferSize?: number// 294
  NoQuoteSets: number// 296
  QuoteSetID: string// 302
  UnderlyingSymbol: string// 311
  UnderlyingSymbolSfx?: string// 312
  UnderlyingSecurityID?: string// 309
  UnderlyingIDSource?: string// 305
  UnderlyingSecurityType?: string// 310
  UnderlyingMaturityMonthYear?: string// 313
  UnderlyingMaturityDay?: number// 314
  UnderlyingPutOrCall?: number// 315
  UnderlyingStrikePrice?: number// 316
  UnderlyingOptAttribute?: string// 317
  UnderlyingContractMultiplier?: number// 436
  UnderlyingCouponRate?: number// 435
  UnderlyingSecurityExchange?: string// 308
  UnderlyingIssuer?: string// 306
  EncodedUnderlyingIssuerLen?: number// 362
  EncodedUnderlyingIssuer?: Buffer// 363
  UnderlyingSecurityDesc?: string// 307
  EncodedUnderlyingSecurityDescLen?: number// 364
  EncodedUnderlyingSecurityDesc?: Buffer// 365
  QuoteSetValidUntilTime?: Date// 367
  TotQuoteEntries: number// 304
  NoQuoteEntries: number// 295
  QuoteEntryID: string// 299
  Symbol?: string// 55
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
  TradingSessionID?: string// 336
  FutSettDate?: Date// 64
  OrdType?: string// 40
  FutSettDate2?: Date// 193
  OrderQty2?: number// 192
  Currency?: string// 15
  StandardTrailer: IStandardTrailer
}
