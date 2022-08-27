import { ILegQuotStatGrpNoLegs } from './leg_quot_stat_grp_no_legs'

export interface ILegQuotStatGrp {
  NoLegs?: ILegQuotStatGrpNoLegs[]// [1] LegSymbol.600, LegSymbolSfx.601 .. NestedPartySubIDType.805
}
