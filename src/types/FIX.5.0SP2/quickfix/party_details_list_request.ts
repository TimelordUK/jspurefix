import { IStandardHeader } from './set/standard_header'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IParties } from './set/parties'
import { IRequestedPartyRoleGrp } from './set/requested_party_role_grp'
import { IPartyRelationshipGrp } from './set/party_relationship_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPartyDetailsListRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  PartyDetailsListRequestID: string// [2] 1505 (String)
  RequestingPartyGrp?: IRequestingPartyGrp// [3] NoRequestingPartyIDs.1657, RequestingPartyID.1658 .. RequestingPartySubIDType.1663
  Parties?: IParties// [4] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  RequestedPartyRoleGrp?: IRequestedPartyRoleGrp// [5] NoRequestedPartyRoles.1508, RequestedPartyRole.1509, RequestedPartyRoleQualifier.2386
  PartyRelationshipGrp?: IPartyRelationshipGrp// [6] NoPartyRelationships.1514, PartyRelationship.1515
  SubscriptionRequestType?: string// [7] 263 (String)
  Text?: string// [8] 58 (String)
  EncodedTextLen?: number// [9] 354 (Length)
  EncodedText?: Buffer// [10] 355 (RawData)
  StandardTrailer: IStandardTrailer// [11] SignatureLength.93, Signature.89, CheckSum.10
}
