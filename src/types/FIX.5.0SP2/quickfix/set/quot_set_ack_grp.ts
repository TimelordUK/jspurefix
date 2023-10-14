import { IUnderlyingInstrument } from './underlying_instrument'
import { IQuotEntryAckGrp } from './quot_entry_ack_grp'

export interface IQuotSetAckGrp {
  QuoteSetID?: string// [1] 302 (String)
  UnderlyingInstrument?: IUnderlyingInstrument// [2] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingDetachmentPoint.1460
  TotNoQuoteEntries?: number// [3] 304 (Int)
  TotNoCxldQuotes?: number// [4] 1168 (Int)
  TotNoAccQuotes?: number// [5] 1169 (Int)
  TotNoRejQuotes?: number// [6] 1170 (Int)
  LastFragment?: boolean// [7] 893 (Boolean)
  QuotEntryAckGrp?: IQuotEntryAckGrp[]// [8] QuoteEntryID.299, Symbol.55 .. OrderRestrictions.529
  QuoteSetValidUntilTime?: Date// [9] 367 (UtcTimestamp)
}
