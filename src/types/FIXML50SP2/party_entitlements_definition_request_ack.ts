import { IStandardHeader } from './set/standard_header'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IPartyEntitlementAckGrp } from './set/party_entitlement_ack_grp'

/*
****************************************************************
* PartyEntitlementsDefinitionRequestAck can be found in Volume *
* 3 of the                                                     *
*                                                              *
* specification                                                *
****************************************************************
*/
export interface IPartyEntitlementsDefinitionRequestAck {
  EntitlementRequestID: string// 1770
  EntitlementRequestStatus: number// 1882
  SecurityRequestResult?: number// 560
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  RequestingPartyGrp?: IRequestingPartyGrp[]
  PartyEntitlementAckGrp?: IPartyEntitlementAckGrp[]
}
