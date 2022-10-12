import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IMassQuoteAcknowledgementNoQuoteSets } from './set/mass_quote_acknowledgement_no_quote_sets'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMassQuoteAcknowledgement {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteReqID?: string// [2] 131 (String)
  QuoteID?: string// [3] 117 (String)
  QuoteStatus: number// [4] 297 (Int)
  QuoteRejectReason?: number// [5] 300 (Int)
  QuoteResponseLevel?: number// [6] 301 (Int)
  QuoteType?: number// [7] 537 (Int)
  Parties?: IParties// [8] NoPartyIDs.453, PartyID.448 .. PartySubID.523
  Account?: string// [9] 1 (String)
  AccountType?: number// [10] 581 (Int)
  Text?: string// [11] 58 (String)
  NoQuoteSets?: IMassQuoteAcknowledgementNoQuoteSets[]// [12] QuoteSetID.302, UnderlyingSymbol.311 .. QuoteEntryRejectReason.368
  StandardTrailer: IStandardTrailer// [13] SignatureLength.93, Signature.89, CheckSum.10
}
