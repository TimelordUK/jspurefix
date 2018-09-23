import { IOrderQtyData } from './order_qty_data'
import { IInstrument } from './instrument'

export interface IOrderEntryGrp {
  OrderEntryAction?: string// 2429
  OrderEntryID?: number// 2430
  ClOrdID?: string// 11
  AffectedOrigClOrdID?: string// 1824
  NotAffectedOrderID?: string// 1371
  OrdType?: string// 40
  UnderlyingReturnRatePrice?: number// 43066
  RelativeValueSide?: number// 2532
  TimeInForce?: string// 59
  OrderQtyData?: IOrderQtyData
  Instrument?: IInstrument
}
