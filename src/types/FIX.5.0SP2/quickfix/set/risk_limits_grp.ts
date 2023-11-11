import { IRiskLimitsGrpNoRiskLimits } from './risk_limits_grp_no_risk_limits'

export interface IRiskLimitsGrp {
  NoRiskLimits?: IRiskLimitsGrpNoRiskLimits[]// [1] RiskLimitTypesGrp.1529, RiskLimitType.1530 .. RiskInstrumentMultiplier.1558
}
