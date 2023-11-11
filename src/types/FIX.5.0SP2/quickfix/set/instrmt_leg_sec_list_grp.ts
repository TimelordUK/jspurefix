import { IInstrmtLegSecListGrpNoLegs } from './instrmt_leg_sec_list_grp_no_legs'

export interface IInstrmtLegSecListGrp {
  NoLegs?: IInstrmtLegSecListGrpNoLegs[]// [1] LegSymbol.600, LegSymbolSfx.601 .. LegBenchmarkPriceType.680
}
