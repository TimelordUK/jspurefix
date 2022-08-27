import { IInstrument } from './instrument'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IInstrmtLegGrp } from './instrmt_leg_grp'

export interface IInstrmtMDReqGrpNoRelatedSym {
  Instrument: IInstrument// [1] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  UndInstrmtGrp: IUndInstrmtGrp// [2] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingStipValue.889
  InstrmtLegGrp: IInstrmtLegGrp// [3] NoLegs.555, LegSymbol.600 .. LegInterestAccrualDate.956
}
