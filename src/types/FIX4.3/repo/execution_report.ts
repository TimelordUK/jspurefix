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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  OrderID: string// [2] 37 (String)
  SecondaryOrderID?: string// [3] 198 (String)
  ClOrdID?: string// [4] 11 (String)
  OrigClOrdID?: string// [5] 41 (String)
  Parties?: IParties[]// [6] 
  NoContraBrokers?: number// [7] 382 (Int)
  ContraBroker?: string// [8] 375 (String)
  ContraTrader?: string// [9] 337 (String)
  ContraTradeQty?: number// [10] 437 (Float)
  ContraTradeTime?: Date// [11] 438 (UtcTimestamp)
  ListID?: string// [12] 66 (String)
  ExecID: string// [13] 17 (String)
  ExecRefID?: string// [14] 19 (String)
  ExecType: string// [15] 150 (String)
  OrdStatus: string// [16] 39 (String)
  OrdRejReason?: number// [17] 103 (Int)
  ExecRestatementReason?: number// [18] 378 (Int)
  Account?: string// [19] 1 (String)
  SettlmntTyp?: string// [20] 63 (String)
  FutSettDate?: Date// [21] 64 (LocalDate)
  Instrument: IInstrument// [22] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Side: string// [23] 54 (String)
  Stipulations?: IStipulations[]// [24] 
  OrderQtyData: IOrderQtyData// [25] OrderQty.38, CashOrderQty.152
  OrdType?: string// [26] 40 (String)
  PriceType?: number// [27] 423 (Int)
  Price?: number// [28] 44 (Float)
  StopPx?: number// [29] 99 (Float)
  PegDifference?: number// [30] 211 (Float)
  DiscretionInst?: string// [31] 388 (String)
  DiscretionOffset?: number// [32] 389 (Float)
  Currency?: string// [33] 15 (String)
  ComplianceID?: string// [34] 376 (String)
  SolicitedFlag?: boolean// [35] 377 (Boolean)
  TimeInForce?: string// [36] 59 (String)
  EffectiveTime?: Date// [37] 168 (UtcTimestamp)
  ExpireDate?: Date// [38] 432 (LocalDate)
  ExpireTime?: Date// [39] 126 (UtcTimestamp)
  ExecInst?: string// [40] 18 (String)
  Rule80A?: string// [41] 47 (String)
  LastShares?: number// [42] 32 (Float)
  LastPx?: number// [43] 31 (Float)
  LastSpotRate?: number// [44] 194 (Float)
  LastForwardPoints?: number// [45] 195 (Float)
  LastMkt?: string// [46] 30 (String)
  TradingSessionID?: string// [47] 336 (String)
  LastCapacity?: string// [48] 29 (String)
  LeavesQty: number// [49] 151 (Float)
  CumQty: number// [50] 14 (Float)
  AvgPx: number// [51] 6 (Float)
  DayOrderQty?: number// [52] 424 (Float)
  DayCumQty?: number// [53] 425 (Float)
  DayAvgPx?: number// [54] 426 (Float)
  GTBookingInst?: number// [55] 427 (Int)
  TradeDate?: Date// [56] 75 (LocalDate)
  TransactTime?: Date// [57] 60 (UtcTimestamp)
  ReportToExch?: boolean// [58] 113 (Boolean)
  CommissionData?: ICommissionData// [59] Commission.12, CommType.13
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [60] SpreadToBenchmark.218
  YieldData?: IYieldData// [61] 
  GrossTradeAmt?: number// [62] 381 (Float)
  NumDaysInterest?: number// [63] 157 (Int)
  AccruedInterestRate?: number// [64] 158 (Float)
  AccruedInterestAmt?: number// [65] 159 (Float)
  NetMoney?: number// [66] 118 (Float)
  SettlCurrAmt?: number// [67] 119 (Float)
  SettlCurrency?: string// [68] 120 (String)
  SettlCurrFxRate?: number// [69] 155 (Float)
  SettlCurrFxRateCalc?: string// [70] 156 (String)
  HandlInst?: string// [71] 21 (String)
  MinQty?: number// [72] 110 (Float)
  MaxFloor?: number// [73] 111 (Float)
  OpenClose?: string// [74] 77 (String)
  MaxShow?: number// [75] 210 (Float)
  Text?: string// [76] 58 (String)
  EncodedTextLen?: number// [77] 354 (Int)
  EncodedText?: Buffer// [78] 355 (RawData)
  FutSettDate2?: Date// [79] 193 (LocalDate)
  OrderQty2?: number// [80] 192 (Float)
  MultiLegReportingType?: string// [81] 442 (String)
  InstrumentLeg?: IInstrumentLeg// [82] 
  NestedParties?: INestedParties[]// [83] 
  StandardTrailer: IStandardTrailer// [84] SignatureLength.93, Signature.89, CheckSum.10
}
