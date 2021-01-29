import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The order cancel request message is used to request the     *
* cancellation of all or part of the remaining quantity of an *
* existing order.                                             *
***************************************************************
*/
export interface IOrderCancelRequest {
  StandardHeader: IStandardHeader
  OrigClOrdID: string// 41
  OrderID?: string// 37
  ClOrdID: string// 11
  ListID?: string// 66
  CxlType: string// 125
  ClientID?: string// 109
  ExecBroker?: string// 76
  Symbol: string// 55
  SymbolSfx?: string// 65
  SecurityID?: string// 48
  IDSource?: string// 22
  Issuer?: string// 106
  SecurityDesc?: string// 107
  Side: string// 54
  OrderQty: number// 38
  Text?: string// 58
  StandardTrailer: IStandardTrailer
}
