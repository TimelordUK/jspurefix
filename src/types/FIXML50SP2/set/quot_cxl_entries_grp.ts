import { IInstrument } from './instrument'
import { IFinancingDetails } from './financing_details'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IInstrmtLegGrp } from './instrmt_leg_grp'

export interface IQuotCxlEntriesGrp {
  Instrument?: IInstrument// [1] Sym.55, Sfx.65 .. ExchLookAlike.2603
  FinancingDetails?: IFinancingDetails// [2] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp[]// [3] Sym.311, Sfx.312 .. XID.2631
  InstrmtLegGrp?: IInstrmtLegGrp[]// [4] Sym.600, Sfx.601 .. ExchLookAlike.2607
}
