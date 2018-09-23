import { IStandardHeader } from './set/standard_header'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IPartyRiskLimitsUpdateGrp } from './set/party_risk_limits_update_grp'

/*
****************************************************************
* PartyRiskLimitsDefinitionRequest can be found in Volume 3 of *
* the                                                          *
*                                                              *
* specification                                                *
****************************************************************
*/
export interface IPartyRiskLimitsDefinitionRequest {
  MDStatisticReqID: string// 2452
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  RequestingPartyGrp?: IRequestingPartyGrp[]
  PartyRiskLimitsUpdateGrp?: IPartyRiskLimitsUpdateGrp[]
}
