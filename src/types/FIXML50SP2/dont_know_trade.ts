import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IOrderQtyData } from './set/order_qty_data'

/*
*************************************************
* DontKnowTrade can be found in Volume 4 of the *
*                                               *
* specification                                 *
*************************************************
*/
export interface IDontKnowTrade {
  OrderID: string// 37
  SecondaryOrderID?: string// 198
  ExecID: string// 17
  DKReason: string// 127
  Side: string// 54
  LastQty?: number// 32
  LastPx?: number// 31
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  Instrument?: IInstrument
  UndInstrmtGrp?: IUndInstrmtGrp[]
  InstrmtLegGrp?: IInstrmtLegGrp[]
  OrderQtyData?: IOrderQtyData
}
