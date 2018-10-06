import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IQuotSetGrp } from './set/quot_set_grp'

/*
*********************************************
* MassQuote can be found in Volume 3 of the *
*                                           *
* specification                             *
*********************************************
*/
export interface IMassQuote {
  QuoteReqID?: string// 131
  QuoteID: string// 117
  QuoteType?: number// 537
  QuoteModelType?: number// 2403
  QuoteResponseLevel?: number// 301
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  DefBidSize?: number// 293
  DefOfferSize?: number// 294
  SelfMatchPreventionID?: string// 2362
  ThrottleInst?: number// 1685
  ComplianceID?: string// 376
  ComplianceText?: string// 2404
  EncodedComplianceTextLen?: number// 2351
  EncodedComplianceText?: Buffer// 2352
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  QuotSetGrp?: IQuotSetGrp[]
}
