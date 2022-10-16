import { IStandardHeader } from './set/standard_header'
import { IMassQuoteNoQuoteSets } from './set/mass_quote_no_quote_sets'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMassQuote {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  QuoteReqID?: string// [2] 131 (String)
  QuoteID: string// [3] 117 (String)
  QuoteResponseLevel?: number// [4] 301 (Int)
  DefBidSize?: number// [5] 293 (Float)
  DefOfferSize?: number// [6] 294 (Float)
  NoQuoteSets: IMassQuoteNoQuoteSets[]// [7] QuoteSetID.302, UnderlyingSymbol.311 .. Currency.15
  StandardTrailer: IStandardTrailer// [8] SignatureLength.93, Signature.89, CheckSum.10
}
