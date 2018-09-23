import { IStandardHeader } from './set/standard_header'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IPartyEntitlementUpdateGrp } from './set/party_entitlement_update_grp'

/*
***************************************************************
* PartyEntitlementsDefinitionRequest can be found in Volume 3 *
* of the                                                      *
*                                                             *
* specification                                               *
***************************************************************
*/
export interface IPartyEntitlementsDefinitionRequest {
  MDStatisticReqID: string// 2452
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  RequestingPartyGrp?: IRequestingPartyGrp[]
  PartyEntitlementUpdateGrp?: IPartyEntitlementUpdateGrp[]
}
