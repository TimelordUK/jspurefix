import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Dont Know Trade (DK) message notifies a trading partner *
* that an electronically received execution has been rejected. *
****************************************************************
*/
export interface IDontKnowTrade {
  StandardHeader: IStandardHeader
  OrderID?: string// 37
  ExecID?: string// 17
  DKReason: string// 127
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
  OrderQty?: number// 38
  CashOrderQty?: number// 152
  LastShares?: number// 32
  LastPx?: number// 31
  Text?: string// 58
  StandardTrailer: IStandardTrailer
}
