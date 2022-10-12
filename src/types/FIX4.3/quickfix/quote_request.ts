import { IStandardHeader } from './set/standard_header'
import { IQuoteRequestNoRelatedSym } from './set/quote_request_no_related_sym'
import { IStandardTrailer } from './set/standard_trailer'

export interface IQuoteRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteReqID: string// [2] 131 (String)
  RFQReqID?: string// [3] 644 (String)
  NoRelatedSym: IQuoteRequestNoRelatedSym[]// [4] Symbol.55, SymbolSfx.65 .. Yield.236
  Text?: string// [5] 58 (String)
  EncodedTextLen?: number// [6] 354 (Length)
  EncodedText?: Buffer// [7] 355 (RawData)
  StandardTrailer: IStandardTrailer// [8] SignatureLength.93, Signature.89, CheckSum.10
}
