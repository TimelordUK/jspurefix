import { IStandardHeader } from './set/standard_header'
import { IQuoteAcknowledgementNoQuoteSets } from './set/quote_acknowledgement_no_quote_sets'
import { IStandardTrailer } from './set/standard_trailer'

export interface IQuoteAcknowledgement {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  QuoteReqID?: string// [2] 131 (String)
  QuoteID?: string// [3] 117 (String)
  QuoteAckStatus: number// [4] 297 (Int)
  QuoteRejectReason?: number// [5] 300 (Int)
  QuoteResponseLevel?: number// [6] 301 (Int)
  TradingSessionID?: string// [7] 336 (String)
  Text?: string// [8] 58 (String)
  NoQuoteSets?: IQuoteAcknowledgementNoQuoteSets[]// [9] QuoteSetID.302, UnderlyingSymbol.311 .. QuoteEntryRejectReason.368
  StandardTrailer: IStandardTrailer// [10] SignatureLength.93, Signature.89, CheckSum.10
}
