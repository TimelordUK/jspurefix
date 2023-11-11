import { IUnderlyingInstrument } from './underlying_instrument'
import { IQuotEntryGrp } from './quot_entry_grp'

export interface IQuotSetGrp {
  QuoteSetID: string// [1] 302 (String)
  QuoteSetValidUntilTime?: Date// [1] 367 (UtcTimestamp)
  TotNoQuoteEntries: number// [1] 304 (Int)
  LastFragment?: boolean// [1] 893 (Boolean)
  UnderlyingInstrument?: IUnderlyingInstrument// [1] Sym.311, Sfx.312 .. XID.2631
  QuotEntryGrp: IQuotEntryGrp[]// [2] EntryID.299, BidPx.132 .. Rstctions.529
}
