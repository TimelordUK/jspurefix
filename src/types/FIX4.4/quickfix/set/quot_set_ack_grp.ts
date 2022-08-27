import { IQuotSetAckGrpNoQuoteSets } from './quot_set_ack_grp_no_quote_sets'

export interface IQuotSetAckGrp {
  NoQuoteSets?: IQuotSetAckGrpNoQuoteSets[]// [1] QuoteSetID.302, UnderlyingSymbol.311 .. QuoteEntryRejectReason.368
}
