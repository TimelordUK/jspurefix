import { IStandardHeader } from './set/standard_header'
import { IRootParties } from './set/root_parties'
import { ISideCrossOrdCxlGrp } from './set/side_cross_ord_cxl_grp'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* Used to fully cancel the remaining open quantity of a cross *
* order.                                                      *
***************************************************************
*/
export interface ICrossOrderCancelRequest {
  StandardHeader: IStandardHeader
  OrderID?: string// 37
  CrossID: string// 548
  OrigCrossID: string// 551
  HostCrossID?: string// 961
  CrossType: number// 549
  CrossPrioritization: number// 550
  RootParties?: IRootParties[]
  SideCrossOrdCxlGrp: ISideCrossOrdCxlGrp[]
  Instrument: IInstrument
  UndInstrmtGrp?: IUndInstrmtGrp
  InstrmtLegGrp?: IInstrmtLegGrp
  TransactTime: Date// 60
  StandardTrailer: IStandardTrailer
}
