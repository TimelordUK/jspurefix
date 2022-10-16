import { IStandardHeader } from './set/standard_header'
import { IQuoteRequestNoRelatedSym } from './set/quote_request_no_related_sym'
import { IStandardTrailer } from './set/standard_trailer'

export interface IQuoteRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  QuoteReqID: string// [2] 131 (String)
  NoRelatedSym: IQuoteRequestNoRelatedSym[]// [3] Symbol.55, SymbolSfx.65 .. Currency.15
  StandardTrailer: IStandardTrailer// [4] SignatureLength.93, Signature.89, CheckSum.10
}
