import { IInstrmtLegExecGrpNoLegs } from './instrmt_leg_exec_grp_no_legs'

export interface IInstrmtLegExecGrp {
  NoLegs?: IInstrmtLegExecGrpNoLegs[]// [1] LegSymbol.600, LegSymbolSfx.601 .. FillRefID.2421
}
