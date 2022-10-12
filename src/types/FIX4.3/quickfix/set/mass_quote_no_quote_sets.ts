import { IUnderlyingInstrument } from './underlying_instrument'
import { IMassQuoteNoQuoteSetsNoQuoteEntries } from './mass_quote_no_quote_sets_no_quote_entries'

export interface IMassQuoteNoQuoteSets {
  QuoteSetID: string// [1] 302 (String)
  UnderlyingInstrument: IUnderlyingInstrument// [2] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. EncodedUnderlyingSecurityDesc.365
  QuoteSetValidUntilTime?: Date// [3] 367 (UtcTimestamp)
  TotQuoteEntries: number// [4] 304 (Int)
  NoQuoteEntries: IMassQuoteNoQuoteSetsNoQuoteEntries[]// [5] QuoteEntryID.299, Symbol.55 .. Currency.15
}
