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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrderID: string// [2] 37 (String)
  SecondaryOrderID?: string// [3] 198 (String)
  ClOrdID?: string// [4] 11 (String)
  ExecAckStatus: string// [5] 1036 (String)
  ExecID: string// [6] 17 (String)
  DKReason?: string// [7] 127 (String)
  Instrument: IInstrument// [8] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  UndInstrmtGrp?: IUndInstrmtGrp// [9] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  InstrmtLegGrp?: IInstrmtLegGrp// [10] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  Side: string// [11] 54 (String)
  OrderQtyData: IOrderQtyData// [12] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  LastQty?: number// [13] 32 (Float)
  LastPx?: number// [14] 31 (Float)
  PriceType?: number// [15] 423 (Int)
  LastParPx?: number// [16] 669 (Float)
  CumQty?: number// [17] 14 (Float)
  AvgPx?: number// [18] 6 (Float)
  Text?: string// [19] 58 (String)
  EncodedTextLen?: number// [20] 354 (Int)
  EncodedText?: Buffer// [21] 355 (RawData)
  StandardTrailer: IStandardTrailer// [22] SignatureLength.93, Signature.89, CheckSum.10
}
