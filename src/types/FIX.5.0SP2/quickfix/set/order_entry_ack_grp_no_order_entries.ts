import { IOrderQtyData } from './order_qty_data'
import { IInstrument } from './instrument'

export interface IOrderEntryAckGrpNoOrderEntries {
  OrdStatus?: string// [1] 39 (String)
  ExecType?: string// [2] 150 (String)
  ExecTypeReason?: number// [3] 2431 (Int)
  OrderEntryAction?: string// [4] 2429 (String)
  OrderEntryID?: number// [5] 2430 (Int)
  ClOrdID?: string// [6] 11 (String)
  OrigClOrdID?: string// [7] 41 (String)
  OrderID?: string// [8] 37 (String)
  OrdRejReason?: number// [9] 103 (Int)
  CumQty?: number// [10] 14 (Float)
  LeavesQty?: number// [11] 151 (Float)
  CxlQty?: number// [12] 84 (Float)
  OrdType?: string// [13] 40 (String)
  Price?: number// [14] 44 (Float)
  Side?: string// [15] 54 (String)
  TimeInForce?: string// [16] 59 (String)
  OrderQtyData?: IOrderQtyData// [17] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  Instrument?: IInstrument// [18] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
}
