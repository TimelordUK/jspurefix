import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The order status request message is used by the institution *
* to generate an order status message back from the broker.   *
***************************************************************
*/
export interface IOrderStatusRequest {
  StandardHeader: IStandardHeader
  OrderID?: string// 37
  ClOrdID: string// 11
  Parties?: IParties[]
  Account?: string// 1
  Instrument: IInstrument
  Side: string// 54
  StandardTrailer: IStandardTrailer
}
