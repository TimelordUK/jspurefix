import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IOrderQtyData } from './set/order_qty_data'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* Used to fully cancel the remaining open quantity of a cross *
* order.                                                      *
***************************************************************
*/
export interface ICrossOrderCancelRequest {
  StandardHeader: IStandardHeader
  OrderID?: string// 37
  Side: string// 54
  OrigClOrdID: string// 41
  ClOrdID: string// 11
  Parties?: IParties[]
  OrderQtyData: IOrderQtyData
  ComplianceID?: string// 376
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  Instrument: IInstrument
  TransactTime: Date// 60
  StandardTrailer: IStandardTrailer
}
