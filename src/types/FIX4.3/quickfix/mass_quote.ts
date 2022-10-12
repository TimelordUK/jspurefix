import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IMassQuoteNoQuoteSets } from './set/mass_quote_no_quote_sets'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMassQuote {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteReqID?: string// [2] 131 (String)
  QuoteID: string// [3] 117 (String)
  QuoteType?: number// [4] 537 (Int)
  QuoteResponseLevel?: number// [5] 301 (Int)
  Parties?: IParties// [6] NoPartyIDs.453, PartyID.448 .. PartySubID.523
  Account?: string// [7] 1 (String)
  AccountType?: number// [8] 581 (Int)
  DefBidSize?: number// [9] 293 (Float)
  DefOfferSize?: number// [10] 294 (Float)
  NoQuoteSets: IMassQuoteNoQuoteSets[]// [11] QuoteSetID.302, UnderlyingSymbol.311 .. Currency.15
  StandardTrailer: IStandardTrailer// [12] SignatureLength.93, Signature.89, CheckSum.10
}
