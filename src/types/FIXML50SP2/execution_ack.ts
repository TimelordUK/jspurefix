import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IOrderQtyData } from './set/order_qty_data'
import { IRegulatoryTradeIDGrp } from './set/regulatory_trade_id_grp'

/*
************************************************
* ExecutionAck can be found in Volume 4 of the *
*                                              *
* specification                                *
************************************************
*/
export interface IExecutionAck {
  OrderID: string// 37
  SecondaryOrderID?: string// 198
  ClOrdID?: string// 11
  ExecAckStatus: string// 1036
  ExecID: string// 17
  DKReason?: string// 127
  Side: string// 54
  LastQty?: number// 32
  LastPx?: number// 31
  PriceType?: number// 423
  LastParPx?: number// 669
  CumQty?: number// 14
  AvgPx?: number// 6
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  Instrument?: IInstrument
  UndInstrmtGrp?: IUndInstrmtGrp[]
  InstrmtLegGrp?: IInstrmtLegGrp[]
  OrderQtyData?: IOrderQtyData
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp[]
}
