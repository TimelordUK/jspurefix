import { IRiskLimitTypesGrp } from './risk_limit_types_grp'
import { IRiskInstrumentScopeGrp } from './risk_instrument_scope_grp'

export interface IRiskLimitsGrpNoRiskLimits {
  RiskLimitTypesGrp?: IRiskLimitTypesGrp// [1] NoRiskLimitTypes.1529, RiskLimitType.1530 .. RiskWarningLevelName.1561
  RiskInstrumentScopeGrp?: IRiskInstrumentScopeGrp// [2] NoRiskInstrumentScopes.1534, InstrumentScopeOperator.1535 .. RiskInstrumentMultiplier.1558
}
