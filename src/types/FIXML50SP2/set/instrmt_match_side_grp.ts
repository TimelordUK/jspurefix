import { IInstrument } from './instrument'
import { IInstrmtLegGrp } from './instrmt_leg_grp'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { ITrdMatchSideGrp } from './trd_match_side_grp'

export interface IInstrmtMatchSideGrp {
  TrdMatchSubID?: string// 1891
  Quantity?: number// 53
  Currency?: string// 15
  SettlCurrency?: string// 120
  QtyType?: number// 854
  LastQty?: number// 32
  PriceType?: number// 423
  LastPx?: number// 31
  LastMkt?: string// 30
  Instrument?: IInstrument
  InstrmtLegGrp?: IInstrmtLegGrp[]
  UndInstrmtGrp?: IUndInstrmtGrp[]
  TrdMatchSideGrp?: ITrdMatchSideGrp[]
}
