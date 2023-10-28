import { IUnderlyingInstrument } from './underlying_instrument'
import { IQuotEntryAckGrp } from './quot_entry_ack_grp'

export interface IQuotSetAckGrpNoQuoteSets {
  QuoteSetID?: string// [1] 302 (String)
  UnderlyingInstrument?: IUnderlyingInstrument// [2] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingInstrumentXID.2631
  QuoteSetValidUntilTime?: Date// [3] 367 (UtcTimestamp)
  TotNoQuoteEntries?: number// [4] 304 (Int)
  TotNoCxldQuotes?: number// [5] 1168 (Int)
  TotNoAccQuotes?: number// [6] 1169 (Int)
  TotNoRejQuotes?: number// [7] 1170 (Int)
  LastFragment?: boolean// [8] 893 (Boolean)
  QuotEntryAckGrp?: IQuotEntryAckGrp// [9] NoQuoteEntries.295, QuoteEntryID.299 .. QuoteEntryRejectReason.368
}
