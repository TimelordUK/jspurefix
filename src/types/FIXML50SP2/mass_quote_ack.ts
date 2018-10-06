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
  QuoteReqID?: string// 131
  QuoteID?: string// 117
  QuoteStatus: number// 297
  OrdRejReason?: number// 103
  QuoteResponseLevel?: number// 301
  QuoteType?: number// 537
  QuoteCancelType?: number// 298
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  ComplianceID?: string// 376
  ComplianceText?: string// 2404
  EncodedComplianceTextLen?: number// 2351
  EncodedComplianceText?: Buffer// 2352
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  TargetParties?: ITargetParties[]
  QuotSetAckGrp?: IQuotSetAckGrp[]
  ThrottleResponse?: IThrottleResponse
}
