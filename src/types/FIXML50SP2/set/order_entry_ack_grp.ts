import { IOrderQtyData } from './order_qty_data'
import { IInstrument } from './instrument'

export interface IOrderEntryAckGrp {
  OrdStatus?: string// [1] 39 (String)
  ExecType?: string// [1] 150 (String)
  ExecTypeReason?: number// [1] 2431 (Int)
  OrderEntryAction?: string// [1] 2429 (String)
  OrderEntryID?: number// [1] 2430 (Int)
  ClOrdID?: string// [1] 11 (String)
  OrigClOrdID?: string// [1] 41 (String)
  OrderID?: string// [1] 37 (String)
  OrdRejReason?: number// [1] 103 (Int)
  CumQty?: number// [1] 14 (Float)
  LeavesQty?: number// [1] 151 (Float)
  CxlQty?: number// [1] 84 (Float)
  OrdType?: string// [1] 40 (String)
  Price?: number// [1] 44 (Float)
  Side?: string// [1] 54 (String)
  TimeInForce?: string// [1] 59 (String)
  OrderQtyData?: IOrderQtyData// [1] Qty.38, Cash.152 .. RndMod.469
  Instrument?: IInstrument// [2] Sym.55, Sfx.65 .. ExchLookAlike.2603
}
