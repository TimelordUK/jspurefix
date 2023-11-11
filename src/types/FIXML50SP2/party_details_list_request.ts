import { IStandardHeader } from './set/standard_header'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IParties } from './set/parties'
import { IRequestedPartyRoleGrp } from './set/requested_party_role_grp'
import { IPartyRelationshipGrp } from './set/party_relationship_grp'

/*
***********************************************************
* PartyDetailsListRequest can be found in Volume 3 of the *
*                                                         *
* specification                                           *
***********************************************************
*/
export interface IPartyDetailsListRequest {
  PartyDetailsListRequestID: string// [2] 1505 (String)
  SubscriptionRequestType?: string// [2] 263 (String)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  RequestingPartyGrp?: IRequestingPartyGrp[]// [2] ID.1658, Src.1659 .. Qual.2338
  Parties?: IParties[]// [3] ID.448, Src.447 .. Qual.2376
  RequestedPartyRoleGrp?: IRequestedPartyRoleGrp[]// [4] R.1509, Qual.2386
  PartyRelationshipGrp?: IPartyRelationshipGrp[]// [5] Rltnshp.1515
}
