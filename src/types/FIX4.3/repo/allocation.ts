import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IParties } from './set/parties'
import { INestedParties } from './set/nested_parties'
import { ICommissionData } from './set/commission_data'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The Allocation message provides the ability to specify how *
* an order or set of orders should be subdivided amongst one *
* or more accounts.                                          *
**************************************************************
*/
export interface IAllocation {
  StandardHeader: IStandardHeader
  AllocID: string// 70
  AllocTransType: string// 71
  RefAllocID?: string// 72
  AllocLinkID?: string// 196
  AllocLinkType?: number// 197
  NoOrders?: number// 73
  ClOrdID?: string// 11
  OrderID?: string// 37
  SecondaryOrderID?: string// 198
  ListID?: string// 66
  NoExecs?: number// 124
  LastShares?: number// 32
  ExecID?: string// 17
  LastPx?: number// 31
  LastCapacity?: string// 29
  Side: string// 54
  Instrument: IInstrument
  Shares: number// 53
  LastMkt?: string// 30
  TradingSessionID?: string// 336
  PriceType?: number// 423
  AvgPx: number// 6
  Currency?: number// 15
  AvgPrxPrecision?: number// 74
  Parties?: IParties[]
  TradeDate: Date// 75
  TransactTime?: Date// 60
  SettlmntTyp?: string// 63
  FutSettDate?: Date// 64
  GrossTradeAmt?: number// 381
  NetMoney?: number// 118
  OpenClose?: string// 77
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  NumDaysInterest?: number// 157
  AccruedInterestRate?: number// 158
  NoAllocs?: number// 78
  AllocAccount?: string// 79
  AllocPrice?: number// 366
  AllocShares?: number// 80
  ProcessCode?: string// 81
  NestedParties?: INestedParties[]
  NotifyBrokerOfCredit?: boolean// 208
  AllocHandlInst?: number// 209
  AllocText?: string// 161
  EncodedAllocTextLen?: number// 360
  EncodedAllocText?: Buffer// 361
  CommissionData?: ICommissionData
  AllocAvgPx?: number// 153
  AllocNetMoney?: number// 154
  SettlCurrAmt?: number// 119
  SettlCurrency?: number// 120
  SettlCurrFxRate?: number// 155
  SettlCurrFxRateCalc?: string// 156
  AccruedInterestAmt?: number// 159
  SettlInstMode?: string// 160
  NoMiscFees?: number// 136
  MiscFeeAmt?: number// 137
  MiscFeeCurr?: number// 138
  MiscFeeType?: string// 139
  StandardTrailer: IStandardTrailer
}
