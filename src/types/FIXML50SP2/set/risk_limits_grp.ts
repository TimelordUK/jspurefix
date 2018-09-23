import { IRiskLimitTypesGrp } from './risk_limit_types_grp'
import { IRiskInstrumentScopeGrp } from './risk_instrument_scope_grp'

export interface IRiskLimitsGrp {
  RiskLimitTypesGrp?: IRiskLimitTypesGrp[]
  RiskInstrumentScopeGrp?: IRiskInstrumentScopeGrp[]
}
