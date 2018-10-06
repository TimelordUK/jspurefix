import { IStandardHeader } from './set/standard_header'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IPartyDetailAckGrp } from './set/party_detail_ack_grp'

/*
****************************************************************
* PartyDetailsDefinitionRequestAck can be found in Volume 3 of *
* the                                                          *
*                                                              *
* specification                                                *
****************************************************************
*/
export interface IPartyDetailsDefinitionRequestAck {
  PartyDetailsListRequestID: string// 1505
  PartyDetailRequestStatus: number// 1878
  MDStatisticRequestResult?: number// 2473
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  RequestingPartyGrp?: IRequestingPartyGrp[]
  PartyDetailAckGrp?: IPartyDetailAckGrp[]
}
