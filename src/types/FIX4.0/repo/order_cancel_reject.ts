import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The order cancel reject message is issued by the broker upon *
* receipt of a cancel request or cancel/replace request        *
* message which cannot be honored.                             *
****************************************************************
*/
export interface IOrderCancelReject {
  StandardHeader: IStandardHeader
  OrderID: string// 37
  ClOrdID: string// 11
  ClientID?: string// 109
  ExecBroker?: string// 76
  ListID?: string// 66
  CxlRejReason?: number// 102
  Text?: string// 58
  StandardTrailer: IStandardTrailer
}
