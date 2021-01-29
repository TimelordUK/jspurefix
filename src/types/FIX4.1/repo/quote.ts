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
  SecurityExchange?: string// 207
  Issuer?: string// 106
  SecurityDesc?: string// 107
  BidPx?: number// 132
  OfferPx?: number// 133
  BidSize?: number// 134
  OfferSize?: number// 135
  ValidUntilTime?: string// 62
  BidSpotRate?: number// 188
  OfferSpotRate?: number// 190
  BidForwardPoints?: number// 189
  OfferForwardPoints?: number// 191
  TransactTime?: string// 60
  FutSettDate?: string// 64
  OrdType?: string// 40
  FutSettDate2?: string// 193
  OrderQty2?: number// 192
  StandardTrailer: IStandardTrailer
}
