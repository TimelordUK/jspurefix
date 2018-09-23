import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IQuotSetAckGrp } from './set/quot_set_ack_grp'
import { IThrottleResponse } from './set/throttle_response'

/*
************************************************
* MassQuoteAck can be found in Volume 3 of the *
*                                              *
* specification                                *
************************************************
*/
export interface IMassQuoteAck {
  MDStatisticReqID?: string// 2452
  QuoteID?: string// 117
  MDStatisticStatus: number// 2477
  CollRptRejectReason?: number// 2487
  QuoteResponseLevel?: number// 301
  UnderlyingReturnRateValuationDateType?: number// 43073
  QuoteCancelType?: number// 298
  LegAccount?: string// 2680
  AcctIDSource?: number// 660
  AllocAccountType?: number// 798
  ComplianceID?: string// 376
  ComplianceText?: string// 2404
  EncodedComplianceTextLen?: string// 2351
  EncodedComplianceText?: Buffer// 2352
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  TargetParties?: ITargetParties[]
  QuotSetAckGrp?: IQuotSetAckGrp[]
  ThrottleResponse?: IThrottleResponse
}
