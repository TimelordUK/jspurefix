import { IStandardHeader } from './set/standard_header'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IPartyEntitlementUpdateGrp } from './set/party_entitlement_update_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPartyEntitlementsDefinitionRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  EntitlementRequestID: string// [2] 1770 (String)
  RequestingPartyGrp?: IRequestingPartyGrp// [3] NoRequestingPartyIDs.1657, RequestingPartyID.1658 .. RequestingPartySubIDType.1663
  PartyEntitlementUpdateGrp?: IPartyEntitlementUpdateGrp// [4] NoPartyEntitlements.1772, ListUpdateAction.1324 .. EntitlementRefID.1885
  Text?: string// [5] 58 (String)
  EncodedTextLen?: number// [6] 354 (Length)
  EncodedText?: Buffer// [7] 355 (RawData)
  StandardTrailer: IStandardTrailer// [8] SignatureLength.93, Signature.89, CheckSum.10
}
