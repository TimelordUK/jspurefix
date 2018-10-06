import { IOrderQtyData } from './order_qty_data'
import { IInstrument } from './instrument'

export interface IOrderEntryAckGrp {
  OrdStatus?: string// 39
  ExecType?: string// 150
  ExecTypeReason?: number// 2431
  OrderEntryAction?: string// 2429
  OrderEntryID?: number// 2430
  ClOrdID?: string// 11
  OrigClOrdID?: string// 41
  OrderID?: string// 37
  CollRptRejectReason?: number// 2487
  CumQty?: number// 14
  LeavesQty?: number// 151
  CxlQty?: number// 84
  OrdType?: string// 40
  Price?: number// 44
  RelativeValueSide?: number// 2532
  TimeInForce?: string// 59
  OrderQtyData?: IOrderQtyData
  Instrument?: IInstrument
}
