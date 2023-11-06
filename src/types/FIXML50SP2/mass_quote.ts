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
  QuoteReqID?: string// [2] 131 (String)
  QuoteID: string// [2] 117 (String)
  QuoteType?: number// [2] 537 (Int)
  QuoteModelType?: number// [2] 2403 (Int)
  QuoteResponseLevel?: number// [2] 301 (Int)
  Account?: string// [2] 1 (String)
  AcctIDSource?: number// [2] 660 (Int)
  AccountType?: number// [2] 581 (Int)
  DefBidSize?: number// [2] 293 (Float)
  DefOfferSize?: number// [2] 294 (Float)
  SelfMatchPreventionID?: string// [2] 2362 (String)
  ThrottleInst?: number// [2] 1685 (Int)
  ComplianceID?: string// [2] 376 (String)
  ComplianceText?: string// [2] 2404 (String)
  EncodedComplianceTextLen?: number// [2] 2351 (Length)
  EncodedComplianceText?: Buffer// [2] 2352 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
  QuotSetGrp?: IQuotSetGrp[]// [3] SetID.302, ValidTil.367 .. LastFragment.893
}
