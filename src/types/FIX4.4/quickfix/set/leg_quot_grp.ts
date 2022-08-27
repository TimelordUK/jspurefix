import { ILegQuotGrpNoLegs } from './leg_quot_grp_no_legs'

export interface ILegQuotGrp {
  NoLegs?: ILegQuotGrpNoLegs[]// [1] LegSymbol.600, LegSymbolSfx.601 .. LegBenchmarkPriceType.680
}
