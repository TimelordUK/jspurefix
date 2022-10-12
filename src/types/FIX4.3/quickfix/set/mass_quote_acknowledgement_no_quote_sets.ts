import { IUnderlyingInstrument } from './underlying_instrument'
import { IMassQuoteAcknowledgementNoQuoteSetsNoQuoteEntries } from './mass_quote_acknowledgement_no_quote_sets_no_quote_entries'

export interface IMassQuoteAcknowledgementNoQuoteSets {
  QuoteSetID?: string// [1] 302 (String)
  UnderlyingInstrument?: IUnderlyingInstrument// [2] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. EncodedUnderlyingSecurityDesc.365
  TotQuoteEntries?: number// [3] 304 (Int)
  NoQuoteEntries?: IMassQuoteAcknowledgementNoQuoteSetsNoQuoteEntries[]// [4] QuoteEntryID.299, Symbol.55 .. QuoteEntryRejectReason.368
}
