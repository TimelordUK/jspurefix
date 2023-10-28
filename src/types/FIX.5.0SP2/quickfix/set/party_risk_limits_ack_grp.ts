import { IPartyRiskLimitsAckGrpNoPartyRiskLimits } from './party_risk_limits_ack_grp_no_party_risk_limits'

export interface IPartyRiskLimitsAckGrp {
  NoPartyRiskLimits?: IPartyRiskLimitsAckGrpNoPartyRiskLimits[]// [1] ListUpdateAction.1324, RiskLimitStatus.1763 .. PartyRiskLimitStatus.2355
}
