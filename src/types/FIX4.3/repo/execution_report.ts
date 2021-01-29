import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IStipulations } from './set/stipulations'
import { IOrderQtyData } from './set/order_qty_data'
import { ICommissionData } from './set/commission_data'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { IInstrumentLeg } from './set/instrument_leg'
import { INestedParties } from './set/nested_parties'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The execution report message is used to:                    *
* 1. Confirm the receipt of an order                          *
* 2. Confirm changes to an existing order (i.e. accept cancel *
* and replace requests)                                       *
* 3. Relay order status information                           *
* 4. Relay fill information on working orders                 *
* 5. Relay fill information on tradeable or restricted        *
* tradeable quotes                                            *
* 6. Reject orders                                            *
* 7. Report post-trade fees calculations associated with a    *
* trade                                                       *
***************************************************************
*/
export interface IExecutionReport {
  StandardHeader: IStandardHeader
  OrderID: string// 37
  SecondaryOrderID?: string// 198
  ClOrdID?: string// 11
  OrigClOrdID?: string// 41
  Parties?: IParties[]
  NoContraBrokers?: number// 382
  ContraBroker?: string// 375
  ContraTrader?: string// 337
  ContraTradeQty?: number// 437
  ContraTradeTime?: Date// 438
  ListID?: string// 66
  ExecID: string// 17
  ExecRefID?: string// 19
  ExecType: string// 150
  OrdStatus: string// 39
  OrdRejReason?: number// 103
  ExecRestatementReason?: number// 378
  Account?: string// 1
  SettlmntTyp?: string// 63
  FutSettDate?: Date// 64
  Instrument: IInstrument
  Side: string// 54
  Stipulations?: IStipulations[]
  OrderQtyData: IOrderQtyData
  OrdType?: string// 40
  PriceType?: number// 423
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
  CommissionData?: ICommissionData
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  YieldData?: IYieldData
  GrossTradeAmt?: number// 381
  NumDaysInterest?: number// 157
  AccruedInterestRate?: number// 158
  AccruedInterestAmt?: number// 159
  NetMoney?: number// 118
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
  MultiLegReportingType?: string// 442
  InstrumentLeg?: IInstrumentLeg
  NestedParties?: INestedParties[]
  StandardTrailer: IStandardTrailer
}
