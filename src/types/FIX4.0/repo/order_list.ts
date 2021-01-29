import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The new order list message type is used by institutions     *
* wishing to electronically submit lists of related orders to *
* a broker for execution.                                     *
***************************************************************
*/
export interface IOrderList {
  StandardHeader: IStandardHeader
  ListID: string// 66
  WaveNo?: string// 105
  ListSeqNo: number// 67
  ListNoOrds: number// 68
  ListExecInst?: string// 69
  ClOrdID: string// 11
  ClientID?: string// 109
  ExecBroker?: string// 76
  Account?: string// 1
  SettlmntTyp?: string// 63
  FutSettDate?: string// 64
  HandlInst: string// 21
  ExecInst?: string// 18
  MinQty?: number// 110
  MaxFloor?: number// 111
  ExDestination?: string// 100
  ProcessCode?: string// 81
  Symbol: string// 55
  SymbolSfx?: string// 65
  SecurityID?: string// 48
  IDSource?: string// 22
  Issuer?: string// 106
  SecurityDesc?: string// 107
  PrevClosePx?: number// 140
  Side: string// 54
  LocateReqd?: string// 114
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
