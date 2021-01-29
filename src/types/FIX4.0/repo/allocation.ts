import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The allocation record is used to instruct a broker on how to *
* allocate executed shares to sub-accounts. The allocation     *
* record can also be used as a confirmation message through    *
* which third parties can communicate execution and settlement *
* instructions between trading partners.                       *
****************************************************************
*/
export interface IAllocation {
  StandardHeader: IStandardHeader
  AllocID: number// 70
  AllocTransType: string// 71
  RefAllocID?: number// 72
  NoOrders: number// 73
  ClOrdID: string// 11
  OrderID?: string// 37
  ListID?: string// 66
  WaveNo?: string// 105
  NoExecs?: number// 124
  ExecID?: number// 17
  LastShares?: number// 32
  LastPx?: number// 31
  LastMkt?: string// 30
  Side: string// 54
  Symbol: string// 55
  SymbolSfx?: string// 65
  SecurityID?: string// 48
  IDSource?: string// 22
  Issuer?: string// 106
  SecurityDesc?: string// 107
  Shares: number// 53
  AvgPx: number// 6
  Currency?: string// 15
  AvgPrxPrecision?: number// 74
  TradeDate: string// 75
  TransactTime?: string// 60
  SettlmntTyp?: string// 63
  FutSettDate?: string// 64
  NetMoney?: number// 118
  NoMiscFees?: number// 136
  MiscFeeAmt?: number// 137
  MiscFeeCurr?: string// 138
  MiscFeeType?: string// 139
  SettlCurrAmt?: number// 119
  SettlCurrency?: string// 120
  OpenClose?: string// 77
  Text?: string// 58
  NoAllocs: number// 78
  AllocAccount: string// 79
  AllocShares: number// 80
  ProcessCode?: string// 81
  ExecBroker?: string// 76
  ClientID?: string// 109
  Commission?: number// 12
  CommType?: string// 13
  NoDlvyInst?: number// 85
  BrokerOfCredit?: string// 92
  DlvyInst?: string// 86
  StandardTrailer: IStandardTrailer
}
