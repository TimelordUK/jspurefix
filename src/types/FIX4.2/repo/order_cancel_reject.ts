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
  SecondaryOrderID?: string// 198
  ClOrdID: string// 11
  OrigClOrdID: string// 41
  OrdStatus: string// 39
  ClientID?: string// 109
  ExecBroker?: string// 76
  ListID?: string// 66
  Account?: string// 1
  TransactTime?: Date// 60
  CxlRejResponseTo: string// 434
  CxlRejReason?: number// 102
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
