import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The quote message is used as the response to a quote request *
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
  Issuer?: string// 106
  SecurityDesc?: string// 107
  BidPx: number// 132
  OfferPx?: number// 133
  BidSize?: number// 134
  OfferSize?: number// 135
  ValidUntilTime?: string// 62
  StandardTrailer: IStandardTrailer
}
