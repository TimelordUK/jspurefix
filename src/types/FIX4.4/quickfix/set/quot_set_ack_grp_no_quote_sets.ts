import { IUnderlyingInstrument } from './underlying_instrument'
import { IQuotEntryAckGrp } from './quot_entry_ack_grp'

export interface IQuotSetAckGrpNoQuoteSets {
  QuoteSetID?: string// 302
  UnderlyingInstrument?: IUnderlyingInstrument
  TotNoQuoteEntries?: number// 304
  LastFragment?: boolean// 893
  QuotEntryAckGrp?: IQuotEntryAckGrp
}
