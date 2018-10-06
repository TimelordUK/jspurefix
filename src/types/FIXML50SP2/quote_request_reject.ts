import { IStandardHeader } from './set/standard_header'
import { IRootParties } from './set/root_parties'
import { IQuotReqRjctGrp } from './set/quot_req_rjct_grp'

/*
******************************************************
* QuoteRequestReject can be found in Volume 3 of the *
*                                                    *
* specification                                      *
******************************************************
*/
export interface IQuoteRequestReject {
  QuoteReqID: string// 131
  RFQReqID?: string// 644
  QuoteRequestRejectReason: number// 658
  PrivateQuote?: boolean// 1171
  RespondentType?: number// 1172
  PreTradeAnonymity?: boolean// 1091
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  RootParties?: IRootParties[]
  QuotReqRjctGrp?: IQuotReqRjctGrp[]
}
