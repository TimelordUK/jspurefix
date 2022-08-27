import { ILegOrdGrpNoLegs } from './leg_ord_grp_no_legs'

export interface ILegOrdGrp {
  NoLegs: ILegOrdGrpNoLegs[]// [1] LegSymbol.600, LegSymbolSfx.601 .. LegSettlDate.588
}
