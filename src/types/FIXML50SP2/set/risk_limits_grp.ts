import { IRiskLimitTypesGrp } from './risk_limit_types_grp'
import { IRiskInstrumentScopeGrp } from './risk_instrument_scope_grp'

export interface IRiskLimitsGrp {
  RiskLimitTypesGrp?: IRiskLimitTypesGrp[]// [1] Typ.139, Amt.1531 .. VelctyUnit.2337
  RiskInstrumentScopeGrp?: IRiskInstrumentScopeGrp[]// [2] Oper.1535, Sym.1536 .. SettlTyp.63
}
