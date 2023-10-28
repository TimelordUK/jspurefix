import { IStandardHeader } from './set/standard_header'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IPartyEntitlementAckGrp } from './set/party_entitlement_ack_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPartyEntitlementsDefinitionRequestAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  EntitlementRequestID: string// [2] 1770 (String)
  EntitlementRequestStatus: number// [3] 1882 (Int)
  EntitlementRequestResult?: number// [4] 1881 (Int)
  RequestingPartyGrp?: IRequestingPartyGrp// [5] NoRequestingPartyIDs.1657, RequestingPartyID.1658 .. RequestingPartySubIDType.1663
  PartyEntitlementAckGrp?: IPartyEntitlementAckGrp// [6] NoPartyEntitlements.1772, ListUpdateAction.1324 .. EntitlementRefID.1885
  Text?: string// [7] 58 (String)
  EncodedTextLen?: number// [8] 354 (Length)
  EncodedText?: Buffer// [9] 355 (RawData)
  StandardTrailer: IStandardTrailer// [10] SignatureLength.93, Signature.89, CheckSum.10
}
