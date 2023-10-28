import { IRiskLimitTypesGrpNoRiskLimitTypes } from './risk_limit_types_grp_no_risk_limit_types'

export interface IRiskLimitTypesGrp {
  NoRiskLimitTypes?: IRiskLimitTypesGrpNoRiskLimitTypes[]// [1] RiskLimitType.1530, RiskLimitAmount.1531 .. RiskWarningLevelName.1561
}
