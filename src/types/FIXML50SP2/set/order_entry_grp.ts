import { IOrderQtyData } from './order_qty_data'
import { IInstrument } from './instrument'

export interface IOrderEntryGrp {
  OrderEntryAction?: string// [1] 2429 (String)
  OrderEntryID?: number// [1] 2430 (Int)
  ClOrdID?: string// [1] 11 (String)
  OrigClOrdID?: string// [1] 41 (String)
  OrderID?: string// [1] 37 (String)
  OrdType?: string// [1] 40 (String)
  Price?: number// [1] 44 (Float)
  Side?: string// [1] 54 (String)
  TimeInForce?: string// [1] 59 (String)
  OrderQtyData?: IOrderQtyData// [1] Qty.38, Cash.152 .. RndMod.469
  Instrument?: IInstrument// [2] Sym.55, Sfx.65 .. ExchLookAlike.2603
}
