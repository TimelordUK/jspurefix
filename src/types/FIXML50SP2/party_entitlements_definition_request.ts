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
  EntitlementRequestID: string// [2] 1770 (String)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  RequestingPartyGrp?: IRequestingPartyGrp[]// [2] ID.1658, Src.1659 .. Qual.2338
  PartyEntitlementUpdateGrp?: IPartyEntitlementUpdateGrp[]// [3] ListUpdActn.1324, Stat.1883, RefID.1885
}
