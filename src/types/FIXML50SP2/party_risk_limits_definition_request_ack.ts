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
  RiskLimitRequestID: string// 1666
  SecurityRequestResult?: number// 560
  RiskLimitRequestStatus: number// 1762
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  RequestingPartyGrp?: IRequestingPartyGrp[]
  PartyRiskLimitsAckGrp?: IPartyRiskLimitsAckGrp[]
}
