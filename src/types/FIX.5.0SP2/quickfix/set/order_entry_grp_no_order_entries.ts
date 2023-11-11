import { IOrderQtyData } from './order_qty_data'
import { IInstrument } from './instrument'

export interface IOrderEntryGrpNoOrderEntries {
  OrderEntryAction?: string// [1] 2429 (String)
  OrderEntryID?: number// [2] 2430 (Int)
  ClOrdID?: string// [3] 11 (String)
  OrigClOrdID?: string// [4] 41 (String)
  OrderID?: string// [5] 37 (String)
  OrdType?: string// [6] 40 (String)
  Price?: number// [7] 44 (Float)
  Side?: string// [8] 54 (String)
  TimeInForce?: string// [9] 59 (String)
  OrderQtyData?: IOrderQtyData// [10] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  Instrument?: IInstrument// [11] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
}
