import { IStandardHeader } from './set/standard_header'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IPartyDetailsUpdateGrp } from './set/party_details_update_grp'

/*
*************************************************************
* PartyDetailsDefinitionRequest can be found in Volume 3 of *
* the                                                       *
*                                                           *
* specification                                             *
*************************************************************
*/
export interface IPartyDetailsDefinitionRequest {
  PartyDetailsListRequestID: string// [2] 1505 (String)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  RequestingPartyGrp?: IRequestingPartyGrp[]// [2] ID.1658, Src.1659 .. Qual.2338
  PartyDetailsUpdateGrp?: IPartyDetailsUpdateGrp[]// [3] ListUpdActn.1324
}
