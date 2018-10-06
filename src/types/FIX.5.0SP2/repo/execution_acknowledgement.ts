import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IOrderQtyData } from './set/order_qty_data'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Execution Report Acknowledgement message is an optional  *
* message that provides dual functionality to notify a trading *
* partner that an electronically received execution has either *
* been accepted or rejected (DK'd).                            *
****************************************************************
*/
export interface IExecutionAcknowledgement {
  StandardHeader: IStandardHeader
  OrderID: string// 37
  SecondaryOrderID?: string// 198
  ClOrdID?: string// 11
  ExecAckStatus: string// 1036
  ExecID: string// 17
  DKReason?: string// 127
  Instrument: IInstrument
  UndInstrmtGrp?: IUndInstrmtGrp
  InstrmtLegGrp?: IInstrmtLegGrp
  Side: string// 54
  OrderQtyData: IOrderQtyData
  LastQty?: number// 32
  LastPx?: number// 31
  PriceType?: number// 423
  LastParPx?: number// 669
  CumQty?: number// 14
  AvgPx?: number// 6
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
