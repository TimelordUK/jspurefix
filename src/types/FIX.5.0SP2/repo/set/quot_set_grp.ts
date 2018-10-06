import { IUnderlyingInstrument } from './underlying_instrument'
import { IQuotEntryGrp } from './quot_entry_grp'

export interface IQuotSetGrp {
  QuoteSetID: string// 302
  UnderlyingInstrument?: IUnderlyingInstrument
  QuoteSetValidUntilTime?: Date// 367
  TotNoQuoteEntries: number// 304
  LastFragment?: boolean// 893
  QuotEntryGrp: IQuotEntryGrp[]
}
