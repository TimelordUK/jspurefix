import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The execution report message is used to:                    *
* 1. Confirm the receipt of an order                          *
* 2. Confirm changes to an existing order (i.e. accept cancel *
* and replace requests)                                       *
* 3. Relay order status information                           *
* 4. Relay fill information on working orders                 *
* 5. Reject orders                                            *
* 6. Report post-trade fees calculations associated with a    *
* trade                                                       *
***************************************************************
*/
export interface IExecutionReport {
  StandardHeader: IStandardHeader
  OrderID: string// 37
  SecondaryOrderID?: string// 198
  ClOrdID?: string// 11
  OrigClOrdID?: string// 41
  ClientID?: string// 109
  ExecBroker?: string// 76
  ListID?: string// 66
  ExecID: string// 17
  ExecTransType: string// 20
  ExecRefID?: string// 19
  ExecType: string// 150
  OrdStatus: string// 39
  OrdRejReason?: number// 103
  Account?: string// 1
  SettlmntTyp?: string// 63
  FutSettDate?: string// 64
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
  OrderQty: number// 38
  OrdType?: string// 40
  Price?: number// 44
  StopPx?: number// 99
  PegDifference?: number// 211
  Currency?: string// 15
  TimeInForce?: string// 59
  ExpireTime?: string// 126
  ExecInst?: string// 18
  Rule80A?: string// 47
  LastShares: number// 32
  LastPx: number// 31
  LastSpotRate?: number// 194
  LastForwardPoints?: number// 195
  LastMkt?: string// 30
  LastCapacity?: string// 29
  LeavesQty: number// 151
  CumQty: number// 14
  AvgPx: number// 6
  TradeDate?: string// 75
  TransactTime?: string// 60
  ReportToExch?: string// 113
  Commission?: number// 12
  CommType?: string// 13
  SettlCurrAmt?: number// 119
  SettlCurrency?: string// 120
  SettlCurrFxRate?: number// 155
  SettlCurrFxRateCalc?: string// 156
  Text?: string// 58
  StandardTrailer: IStandardTrailer
}
