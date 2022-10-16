import { IStandardHeader } from './set/standard_header'
import { IQuoteCancelNoQuoteEntries } from './set/quote_cancel_no_quote_entries'
import { IStandardTrailer } from './set/standard_trailer'

export interface IQuoteCancel {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  QuoteReqID?: string// [2] 131 (String)
  QuoteID: string// [3] 117 (String)
  QuoteCancelType: number// [4] 298 (Int)
  QuoteResponseLevel?: number// [5] 301 (Int)
  TradingSessionID?: string// [6] 336 (String)
  NoQuoteEntries: IQuoteCancelNoQuoteEntries[]// [7] Symbol.55, SymbolSfx.65 .. UnderlyingSymbol.311
  StandardTrailer: IStandardTrailer// [8] SignatureLength.93, Signature.89, CheckSum.10
}
