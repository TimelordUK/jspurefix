import { IUnderlyingInstrument } from './underlying_instrument'
import { IQuotEntryAckGrp } from './quot_entry_ack_grp'

export interface IQuotSetAckGrp {
  QuoteSetID?: string// [1] 302 (String)
  QuoteSetValidUntilTime?: Date// [1] 367 (UtcTimestamp)
  TotNoQuoteEntries?: number// [1] 304 (Int)
  TotNoCxldQuotes?: number// [1] 1168 (Int)
  TotNoAccQuotes?: number// [1] 1169 (Int)
  TotNoRejQuotes?: number// [1] 1170 (Int)
  LastFragment?: boolean// [1] 893 (Boolean)
  UnderlyingInstrument?: IUnderlyingInstrument// [1] Sym.311, Sfx.312 .. XID.2631
  QuotEntryAckGrp?: IQuotEntryAckGrp[]// [2] EntryID.299, BidPx.132 .. EntryRejRsn.368
}
