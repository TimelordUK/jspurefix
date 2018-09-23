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
  NotAffectedOrderID: string// 1371
  NotAffSecondaryOrderID?: string// 1825
  ClOrdID?: string// 11
  ExecAckStatus: string// 1036
  LegExecID: string// 1893
  DKReason?: string// 127
  RelativeValueSide: number// 2532
  LegLastQty?: number// 1418
  LegLastPx?: number// 637
  UnderlyingReturnRatePriceType?: number// 43068
  LastParPx?: number// 669
  CumQty?: number// 14
  SideAvgPx?: number// 1852
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  Instrument?: IInstrument
  UndInstrmtGrp?: IUndInstrmtGrp[]
  InstrmtLegGrp?: IInstrmtLegGrp[]
  OrderQtyData?: IOrderQtyData
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp[]
}
