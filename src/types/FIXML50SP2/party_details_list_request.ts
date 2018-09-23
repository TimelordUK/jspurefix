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
  MDStatisticReqID: string// 2452
  SubscriptionRequestType?: string// 263
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  RequestingPartyGrp?: IRequestingPartyGrp[]
  Parties?: IParties[]
  RequestedPartyRoleGrp?: IRequestedPartyRoleGrp[]
  PartyRelationshipGrp?: IPartyRelationshipGrp[]
}
