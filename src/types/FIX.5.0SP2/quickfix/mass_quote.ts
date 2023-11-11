import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IQuotSetGrp } from './set/quot_set_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMassQuote {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteReqID?: string// [2] 131 (String)
  QuoteID: string// [3] 117 (String)
  QuoteType?: number// [4] 537 (Int)
  QuoteModelType?: number// [5] 2403 (Int)
  QuoteResponseLevel?: number// [6] 301 (Int)
  Parties?: IParties// [7] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Account?: string// [8] 1 (String)
  AcctIDSource?: number// [9] 660 (Int)
  AccountType?: number// [10] 581 (Int)
  DefBidSize?: number// [11] 293 (Float)
  DefOfferSize?: number// [12] 294 (Float)
  QuotSetGrp?: IQuotSetGrp// [13] NoQuoteSets.296, QuoteSetID.302 .. OrderRestrictions.529
  SelfMatchPreventionID?: string// [14] 2362 (String)
  SelfMatchPreventionInstruction?: number// [15] 2964 (Int)
  ThrottleInst?: number// [16] 1685 (Int)
  ComplianceID?: string// [17] 376 (String)
  ComplianceText?: string// [18] 2404 (String)
  EncodedComplianceTextLen?: number// [19] 2351 (Length)
  EncodedComplianceText?: Buffer// [20] 2352 (RawData)
  StandardTrailer: IStandardTrailer// [21] SignatureLength.93, Signature.89, CheckSum.10
}
