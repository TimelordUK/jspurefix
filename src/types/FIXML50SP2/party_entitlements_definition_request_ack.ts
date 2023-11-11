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
  EntitlementRequestID: string// [2] 1770 (String)
  EntitlementRequestStatus: number// [2] 1882 (Int)
  SecurityRequestResult?: number// [2] 560 (Int)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  RequestingPartyGrp?: IRequestingPartyGrp[]// [2] ID.1658, Src.1659 .. Qual.2338
  PartyEntitlementAckGrp?: IPartyEntitlementAckGrp[]// [3] ListUpdActn.1324, Stat.1883 .. RefID.1885
}
