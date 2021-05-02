import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IOrderQtyData } from './set/order_qty_data'
import { IStandardTrailer } from './set/standard_trailer'

export interface IDontKnowTrade {
  StandardHeader: IStandardHeader
  OrderID: string// 37
  SecondaryOrderID?: string// 198
  ExecID: string// 17
  DKReason: string// 127
  Instrument?: IInstrument
  UndInstrmtGrp?: IUndInstrmtGrp
  InstrmtLegGrp?: IInstrmtLegGrp
  Side: string// 54
  OrderQtyData?: IOrderQtyData
  LastQty?: number// 32
  LastPx?: number// 31
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
