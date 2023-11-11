import { IUnderlyingInstrument } from './underlying_instrument'
import { IQuotEntryGrp } from './quot_entry_grp'

export interface IQuotSetGrpNoQuoteSets {
  QuoteSetID: string// [1] 302 (String)
  UnderlyingInstrument?: IUnderlyingInstrument// [2] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingInstrumentXID.2631
  QuoteSetValidUntilTime?: Date// [3] 367 (UtcTimestamp)
  TotNoQuoteEntries: number// [4] 304 (Int)
  LastFragment?: boolean// [5] 893 (Boolean)
  QuotEntryGrp?: IQuotEntryGrp// [6] NoQuoteEntries.295, QuoteEntryID.299 .. OrderRestrictions.529
}
