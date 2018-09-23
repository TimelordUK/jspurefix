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
  MDStatisticReqID: string// 2452
  RFQReqID?: string// 644
  ClOrdID?: string// 11
  BookingType?: number// 775
  OrderCapacity?: string// 528
  OrderRestrictions?: string// 529
  PrivateQuote?: string// 1171
  RespondentType?: number// 1172
  PreTradeAnonymity?: string// 1091
  ComplianceID?: string// 376
  ComplianceText?: string// 2404
  EncodedComplianceTextLen?: string// 2351
  EncodedComplianceText?: Buffer// 2352
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  RootParties?: IRootParties[]
  QuotReqGrp?: IQuotReqGrp[]
}
