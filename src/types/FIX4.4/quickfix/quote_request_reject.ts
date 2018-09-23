import { IQuotReqRjctGrp } from './set/quot_req_rjct_grp'

export interface IQuoteRequestReject {
  QuoteReqID: string// 131
  RFQReqID?: string// 644
  QuoteRequestRejectReason: number// 658
  QuotReqRjctGrp?: IQuotReqRjctGrp
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
}
