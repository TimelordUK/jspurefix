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
  PartyDetailsListRequestID: string// 1505
  SubscriptionRequestType?: string// 263
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  RequestingPartyGrp?: IRequestingPartyGrp[]
  Parties?: IParties[]
  RequestedPartyRoleGrp?: IRequestedPartyRoleGrp[]
  PartyRelationshipGrp?: IPartyRelationshipGrp[]
}
