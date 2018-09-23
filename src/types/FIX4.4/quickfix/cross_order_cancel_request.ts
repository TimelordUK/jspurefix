import { ISideCrossOrdCxlGrp } from './set/side_cross_ord_cxl_grp'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'

export interface ICrossOrderCancelRequest {
  OrderID?: string// 37
  CrossID: string// 548
  OrigCrossID: string// 551
  CrossType: number// 549
  CrossPrioritization: number// 550
  SideCrossOrdCxlGrp?: ISideCrossOrdCxlGrp
  Instrument?: IInstrument
  UndInstrmtGrp?: IUndInstrmtGrp
  InstrmtLegGrp?: IInstrmtLegGrp
  TransactTime: Date// 60
}
