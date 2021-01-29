import { IStandardHeader } from './set/standard_header'
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
  ClientID?: string// 109
  ExecBroker?: string// 76
  Symbol: string// 55
  SymbolSfx?: string// 65
  SecurityID?: string// 48
  IDSource?: string// 22
  SecurityType?: string// 167
  MaturityMonthYear?: string// 200
  MaturityDay?: number// 205
  PutOrCall?: number// 201
  StrikePrice?: number// 202
  OptAttribute?: string// 206
  SecurityExchange?: string// 207
  Issuer?: string// 106
  SecurityDesc?: string// 107
  Side: string// 54
  StandardTrailer: IStandardTrailer
}
