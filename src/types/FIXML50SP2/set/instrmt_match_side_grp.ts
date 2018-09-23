import { IInstrument } from './instrument'
import { IInstrmtLegGrp } from './instrmt_leg_grp'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { ITrdMatchSideGrp } from './trd_match_side_grp'

export interface IInstrmtMatchSideGrp {
  FillMatchSubID?: string// 2674
  RelatedTradeQuantity?: number// 1860
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingProvisionCashSettlCurrency?: string// 42167
  LegQtyType?: number// 1591
  LegLastQty?: number// 1418
  UnderlyingReturnRatePriceType?: number// 43068
  LegLastPx?: number// 637
  LastMkt?: string// 30
  Instrument?: IInstrument
  InstrmtLegGrp?: IInstrmtLegGrp[]
  UndInstrmtGrp?: IUndInstrmtGrp[]
  TrdMatchSideGrp?: ITrdMatchSideGrp[]
}
