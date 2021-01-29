import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
**********************************************************
* The order cancel/replace request is used to change the *
* parameters of an existing order.                       *
**********************************************************
*/
export interface IOrderCancelReplaceRequest {
  StandardHeader: IStandardHeader
  OrderID?: string// 37
  ClientID?: string// 109
  ExecBroker?: string// 76
  OrigClOrdID: string// 41
  ClOrdID: string// 11
  ListID?: string// 66
  Account?: string// 1
  SettlmntTyp?: string// 63
  FutSettDate?: string// 64
  HandlInst: string// 21
  ExecInst?: string// 18
  MinQty?: number// 110
  MaxFloor?: number// 111
  ExDestination?: string// 100
  Symbol: string// 55
  SymbolSfx?: string// 65
  SecurityID?: string// 48
  IDSource?: string// 22
  Issuer?: string// 106
  SecurityDesc?: string// 107
  Side: string// 54
  OrderQty: number// 38
  OrdType: string// 40
  Price?: number// 44
  StopPx?: number// 99
  Currency?: string// 15
  TimeInForce?: string// 59
  ExpireTime?: string// 126
  Commission?: number// 12
  CommType?: string// 13
  Rule80A?: string// 47
  ForexReq?: string// 121
  SettlCurrency?: string// 120
  Text?: string// 58
  StandardTrailer: IStandardTrailer
}
