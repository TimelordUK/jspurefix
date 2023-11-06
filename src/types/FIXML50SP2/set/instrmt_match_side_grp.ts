import { IInstrument } from './instrument'
import { IInstrmtLegGrp } from './instrmt_leg_grp'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { ITrdMatchSideGrp } from './trd_match_side_grp'

export interface IInstrmtMatchSideGrp {
  TrdMatchSubID?: string// [1] 1891 (String)
  Quantity?: number// [1] 53 (Float)
  Currency?: string// [1] 15 (String)
  SettlCurrency?: string// [1] 120 (String)
  QtyType?: number// [1] 854 (Int)
  LastQty?: number// [1] 32 (Float)
  PriceType?: number// [1] 423 (Int)
  LastPx?: number// [1] 31 (Float)
  LastMkt?: string// [1] 30 (String)
  Instrument?: IInstrument// [1] Sym.55, Sfx.65 .. ExchLookAlike.2603
  InstrmtLegGrp?: IInstrmtLegGrp[]// [2] Sym.600, Sfx.601 .. ExchLookAlike.2607
  UndInstrmtGrp?: IUndInstrmtGrp[]// [3] Sym.311, Sfx.312 .. XID.2631
  TrdMatchSideGrp?: ITrdMatchSideGrp[]// [4] Side.54, SideExecID.1427 .. EncTxt.355
}
