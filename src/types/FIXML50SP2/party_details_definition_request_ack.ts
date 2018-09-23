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
  MDStatisticReqID: string// 2452
  MassOrderRequestStatus: number// 2425
  MDStatisticRequestResult?: number// 2473
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  RequestingPartyGrp?: IRequestingPartyGrp[]
  PartyDetailAckGrp?: IPartyDetailAckGrp[]
}
