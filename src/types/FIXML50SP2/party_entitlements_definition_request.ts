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
  EntitlementRequestID: string// 1770
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  RequestingPartyGrp?: IRequestingPartyGrp[]
  PartyEntitlementUpdateGrp?: IPartyEntitlementUpdateGrp[]
}
