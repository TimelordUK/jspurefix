import { ITrdInstrmtLegGrpNoLegs } from './trd_instrmt_leg_grp_no_legs'

export interface ITrdInstrmtLegGrp {
  NoLegs?: ITrdInstrmtLegGrpNoLegs[]// [1] LegSymbol.600, LegSymbolSfx.601 .. LegDifferentialPrice.2492
}
