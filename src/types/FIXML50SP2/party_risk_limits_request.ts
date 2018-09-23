import { IStandardHeader } from './set/standard_header'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IParties } from './set/parties'
import { IRequestedPartyRoleGrp } from './set/requested_party_role_grp'
import { IRequestedRiskLimitTypesGrp } from './set/requested_risk_limit_types_grp'
import { IRiskInstrumentScopeGrp } from './set/risk_instrument_scope_grp'

/*
**********************************************************
* PartyRiskLimitsRequest can be found in Volume 3 of the *
*                                                        *
* specification                                          *
**********************************************************
*/
export interface IPartyRiskLimitsRequest {
  MDStatisticReqID: string// 2452
  RiskLimitRequestType?: number// 1760
  SubscriptionRequestType?: string// 263
  EntitlementPlatform?: string// 1784
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  RequestingPartyGrp?: IRequestingPartyGrp[]
  Parties?: IParties[]
  RequestedPartyRoleGrp?: IRequestedPartyRoleGrp[]
  RequestedRiskLimitTypesGrp?: IRequestedRiskLimitTypesGrp[]
  RiskInstrumentScopeGrp?: IRiskInstrumentScopeGrp[]
}
