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
  MDStatisticReqID: string// 2452
  RFQReqID?: string// 644
  QuoteRequestRejectReason: number// 658
  PrivateQuote?: string// 1171
  RespondentType?: number// 1172
  PreTradeAnonymity?: string// 1091
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  RootParties?: IRootParties[]
  QuotReqRjctGrp?: IQuotReqRjctGrp[]
}
