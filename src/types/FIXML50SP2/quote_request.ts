import { IStandardHeader } from './set/standard_header'
import { IRootParties } from './set/root_parties'
import { IQuotReqGrp } from './set/quot_req_grp'

/*
************************************************
* QuoteRequest can be found in Volume 3 of the *
*                                              *
* specification                                *
************************************************
*/
export interface IQuoteRequest {
  QuoteReqID: string// 131
  RFQReqID?: string// 644
  ClOrdID?: string// 11
  BookingType?: number// 775
  OrderCapacity?: string// 528
  OrderRestrictions?: string// 529
  PrivateQuote?: boolean// 1171
  RespondentType?: number// 1172
  PreTradeAnonymity?: boolean// 1091
  ComplianceID?: string// 376
  ComplianceText?: string// 2404
  EncodedComplianceTextLen?: number// 2351
  EncodedComplianceText?: Buffer// 2352
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  RootParties?: IRootParties[]
  QuotReqGrp?: IQuotReqGrp[]
}
