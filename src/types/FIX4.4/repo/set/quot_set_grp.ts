import { IUnderlyingInstrument } from './underlying_instrument'
import { IQuotEntryGrp } from './quot_entry_grp'

export interface IQuotSetGrp {
  QuoteSetID: string// [1] 302 (String)
  UnderlyingInstrument?: IUnderlyingInstrument// [2] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  QuoteSetValidUntilTime?: Date// [3] 367 (UtcTimestamp)
  TotNoQuoteEntries: number// [4] 304 (Int)
  LastFragment?: boolean// [5] 893 (Boolean)
  QuotEntryGrp: IQuotEntryGrp[]// [6] QuoteEntryID.299, Symbol.55 .. Currency.15
}
