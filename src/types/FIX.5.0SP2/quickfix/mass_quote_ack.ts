import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IQuotSetAckGrp } from './set/quot_set_ack_grp'
import { IThrottleResponse } from './set/throttle_response'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMassQuoteAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteReqID?: string// [2] 131 (String)
  QuoteID?: string// [3] 117 (String)
  QuoteStatus: number// [4] 297 (Int)
  QuoteRejectReason?: number// [5] 300 (Int)
  QuoteResponseLevel?: number// [6] 301 (Int)
  QuoteType?: number// [7] 537 (Int)
  QuoteCancelType?: number// [8] 298 (Int)
  Parties?: IParties// [9] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TargetParties?: ITargetParties// [10] NoTargetPartyIDs.1461, TargetPartyID.1462 .. TargetPartySubIDType.2435
  Account?: string// [11] 1 (String)
  AcctIDSource?: number// [12] 660 (Int)
  AccountType?: number// [13] 581 (Int)
  ComplianceID?: string// [14] 376 (String)
  ComplianceText?: string// [15] 2404 (String)
  EncodedComplianceTextLen?: number// [16] 2351 (Length)
  EncodedComplianceText?: Buffer// [17] 2352 (RawData)
  Text?: string// [18] 58 (String)
  EncodedTextLen?: number// [19] 354 (Length)
  EncodedText?: Buffer// [20] 355 (RawData)
  QuotSetAckGrp?: IQuotSetAckGrp// [21] NoQuoteSets.296, QuoteSetID.302 .. QuoteEntryRejectReason.368
  ThrottleResponse?: IThrottleResponse// [22] ThrottleInst.1685, ThrottleStatus.1609, ThrottleCountIndicator.1686
  StandardTrailer: IStandardTrailer// [23] SignatureLength.93, Signature.89, CheckSum.10
}
