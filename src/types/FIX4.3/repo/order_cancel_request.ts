import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IOrderQtyData } from './set/order_qty_data'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The order cancel request message requests the cancellation *
* of all of the remaining quantity of an existing order.     *
**************************************************************
*/
export interface IOrderCancelRequest {
  StandardHeader: IStandardHeader
  OrigClOrdID: string// 41
  OrderID?: string// 37
  ClOrdID: string// 11
  ListID?: string// 66
  Account?: string// 1
  Parties?: IParties[]
  Instrument: IInstrument
  Side: string// 54
  TransactTime: Date// 60
  OrderQtyData: IOrderQtyData
  ComplianceID?: string// 376
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
