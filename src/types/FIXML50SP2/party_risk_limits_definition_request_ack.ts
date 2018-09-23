import { IStandardHeader } from './set/standard_header'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IPartyRiskLimitsAckGrp } from './set/party_risk_limits_ack_grp'

/*
****************************************************************
* PartyRiskLimitsDefinitionRequestAck can be found in Volume 3 *
* of the                                                       *
*                                                              *
* specification                                                *
****************************************************************
*/
export interface IPartyRiskLimitsDefinitionRequestAck {
  MDStatisticReqID: string// 2452
  MDStatisticRequestResult?: number// 2473
  MassOrderRequestStatus: number// 2425
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  RequestingPartyGrp?: IRequestingPartyGrp[]
  PartyRiskLimitsAckGrp?: IPartyRiskLimitsAckGrp[]
}
