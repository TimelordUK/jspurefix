import { IOrderQtyData } from './order_qty_data'
import { IInstrument } from './instrument'

export interface IOrderEntryGrp {
  OrderEntryAction?: string// 2429
  OrderEntryID?: number// 2430
  ClOrdID?: string// 11
  OrigClOrdID?: string// 41
  OrderID?: string// 37
  OrdType?: string// 40
  Price?: number// 44
  RelativeValueSide?: number// 2532
  TimeInForce?: string// 59
  OrderQtyData?: IOrderQtyData
  Instrument?: IInstrument
}
