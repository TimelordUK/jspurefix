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
  NoContraBrokers?: number// 382
  ContraBroker?: string// 375
  ContraTrader?: string// 337
  ContraTradeQty?: number// 437
  ContraTradeTime?: Date// 438
  ListID?: string// 66
  ExecID: string// 17
  ExecTransType: string// 20
  ExecRefID?: string// 19
  ExecType: string// 150
  OrdStatus: string// 39
  OrdRejReason?: number// 103
  ExecRestatementReason?: number// 378
  Account?: string// 1
  SettlmntTyp?: string// 63
  FutSettDate?: Date// 64
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
  ContractMultiplier?: number// 231
  CouponRate?: number// 223
  SecurityExchange?: string// 207
  Issuer?: string// 106
  EncodedIssuerLen?: number// 348
  EncodedIssuer?: Buffer// 349
  SecurityDesc?: string// 107
  EncodedSecurityDescLen?: number// 350
  EncodedSecurityDesc?: Buffer// 351
  Side: string// 54
  OrderQty?: number// 38
  CashOrderQty?: number// 152
  OrdType?: string// 40
  Price?: number// 44
  StopPx?: number// 99
  PegDifference?: number// 211
  DiscretionInst?: string// 388
  DiscretionOffset?: number// 389
  Currency?: string// 15
  ComplianceID?: string// 376
  SolicitedFlag?: boolean// 377
  TimeInForce?: string// 59
  EffectiveTime?: Date// 168
  ExpireDate?: Date// 432
  ExpireTime?: Date// 126
  ExecInst?: string// 18
  Rule80A?: string// 47
  LastShares?: number// 32
  LastPx?: number// 31
  LastSpotRate?: number// 194
  LastForwardPoints?: number// 195
  LastMkt?: string// 30
  TradingSessionID?: string// 336
  LastCapacity?: string// 29
  LeavesQty: number// 151
  CumQty: number// 14
  AvgPx: number// 6
  DayOrderQty?: number// 424
  DayCumQty?: number// 425
  DayAvgPx?: number// 426
  GTBookingInst?: number// 427
  TradeDate?: Date// 75
  TransactTime?: Date// 60
  ReportToExch?: boolean// 113
  Commission?: number// 12
  CommType?: string// 13
  GrossTradeAmt?: number// 381
  SettlCurrAmt?: number// 119
  SettlCurrency?: string// 120
  SettlCurrFxRate?: number// 155
  SettlCurrFxRateCalc?: string// 156
  HandlInst?: string// 21
  MinQty?: number// 110
  MaxFloor?: number// 111
  OpenClose?: string// 77
  MaxShow?: number// 210
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  FutSettDate2?: Date// 193
  OrderQty2?: number// 192
  ClearingFirm?: string// 439
  ClearingAccount?: string// 440
  MultiLegReportingType?: string// 442
  StandardTrailer: IStandardTrailer
}
