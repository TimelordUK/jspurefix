import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IExecutionReportNoContraBrokers } from './set/execution_report_no_contra_brokers'
import { IInstrument } from './set/instrument'
import { IStipulations } from './set/stipulations'
import { IOrderQtyData } from './set/order_qty_data'
import { ICommissionData } from './set/commission_data'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { IExecutionReportNoContAmts } from './set/execution_report_no_cont_amts'
import { IExecutionReportNoLegs } from './set/execution_report_no_legs'
import { IStandardTrailer } from './set/standard_trailer'

export interface IExecutionReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrderID: string// [2] 37 (String)
  SecondaryOrderID?: string// [3] 198 (String)
  SecondaryClOrdID?: string// [4] 526 (String)
  SecondaryExecID?: string// [5] 527 (String)
  ClOrdID?: string// [6] 11 (String)
  OrigClOrdID?: string// [7] 41 (String)
  ClOrdLinkID?: string// [8] 583 (String)
  Parties?: IParties// [9] NoPartyIDs.453, PartyID.448 .. PartySubID.523
  TradeOriginationDate?: string// [10] 229 (String)
  NoContraBrokers?: IExecutionReportNoContraBrokers[]// [11] ContraBroker.375, ContraTrader.337 .. ContraLegRefID.655
  ListID?: string// [12] 66 (String)
  CrossID?: string// [13] 548 (String)
  OrigCrossID?: string// [14] 551 (String)
  CrossType?: number// [15] 549 (Int)
  ExecID: string// [16] 17 (String)
  ExecRefID?: string// [17] 19 (String)
  ExecType: string// [18] 150 (String)
  OrdStatus: string// [19] 39 (String)
  WorkingIndicator?: boolean// [20] 636 (Boolean)
  OrdRejReason?: number// [21] 103 (Int)
  ExecRestatementReason?: number// [22] 378 (Int)
  Account?: string// [23] 1 (String)
  AccountType?: number// [24] 581 (Int)
  DayBookingInst?: string// [25] 589 (String)
  BookingUnit?: string// [26] 590 (String)
  PreallocMethod?: string// [27] 591 (String)
  SettlmntTyp?: string// [28] 63 (String)
  FutSettDate?: Date// [29] 64 (LocalDate)
  CashMargin?: string// [30] 544 (String)
  ClearingFeeIndicator?: string// [31] 635 (String)
  Instrument?: IInstrument// [32] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Side: string// [33] 54 (String)
  Stipulations?: IStipulations// [34] NoStipulations.232, StipulationType.233, StipulationValue.234
  QuantityType?: number// [35] 465 (Int)
  OrderQtyData?: IOrderQtyData// [36] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  OrdType?: string// [37] 40 (String)
  PriceType?: number// [38] 423 (Int)
  Price?: number// [39] 44 (Float)
  StopPx?: number// [40] 99 (Float)
  PegDifference?: number// [41] 211 (Float)
  DiscretionInst?: string// [42] 388 (String)
  DiscretionOffset?: number// [43] 389 (Float)
  Currency?: string// [44] 15 (String)
  ComplianceID?: string// [45] 376 (String)
  SolicitedFlag?: boolean// [46] 377 (Boolean)
  TimeInForce?: string// [47] 59 (String)
  EffectiveTime?: Date// [48] 168 (UtcTimestamp)
  ExpireDate?: Date// [49] 432 (LocalDate)
  ExpireTime?: Date// [50] 126 (UtcTimestamp)
  ExecInst?: string// [51] 18 (String)
  OrderCapacity?: string// [52] 528 (String)
  OrderRestrictions?: string// [53] 529 (String)
  CustOrderCapacity?: number// [54] 582 (Int)
  Rule80A?: string// [55] 47 (String)
  LastQty?: number// [56] 32 (Float)
  UnderlyingLastQty?: number// [57] 652 (Float)
  LastPx?: number// [58] 31 (Float)
  UnderlyingLastPx?: number// [59] 651 (Float)
  LastSpotRate?: number// [60] 194 (Float)
  LastForwardPoints?: number// [61] 195 (Float)
  LastMkt?: string// [62] 30 (String)
  TradingSessionID?: string// [63] 336 (String)
  TradingSessionSubID?: string// [64] 625 (String)
  LastCapacity?: string// [65] 29 (String)
  LeavesQty: number// [66] 151 (Float)
  CumQty: number// [67] 14 (Float)
  AvgPx: number// [68] 6 (Float)
  DayOrderQty?: number// [69] 424 (Float)
  DayCumQty?: number// [70] 425 (Float)
  DayAvgPx?: number// [71] 426 (Float)
  GTBookingInst?: number// [72] 427 (Int)
  TradeDate?: Date// [73] 75 (LocalDate)
  TransactTime?: Date// [74] 60 (UtcTimestamp)
  ReportToExch?: boolean// [75] 113 (Boolean)
  CommissionData?: ICommissionData// [76] Commission.12, CommType.13 .. FundRenewWaiv.497
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [77] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkCurvePoint.222
  YieldData?: IYieldData// [78] YieldType.235, Yield.236
  GrossTradeAmt?: number// [79] 381 (Float)
  NumDaysInterest?: number// [80] 157 (Int)
  ExDate?: string// [81] 230 (String)
  AccruedInterestRate?: number// [82] 158 (Float)
  AccruedInterestAmt?: number// [83] 159 (Float)
  TradedFlatSwitch?: boolean// [84] 258 (Boolean)
  BasisFeatureDate?: string// [85] 259 (String)
  BasisFeaturePrice?: number// [86] 260 (Float)
  Concession?: number// [87] 238 (Float)
  TotalTakedown?: number// [88] 237 (Float)
  NetMoney?: number// [89] 118 (Float)
  SettlCurrAmt?: number// [90] 119 (Float)
  SettlCurrency?: string// [91] 120 (String)
  SettlCurrFxRate?: number// [92] 155 (Float)
  SettlCurrFxRateCalc?: string// [93] 156 (String)
  HandlInst?: string// [94] 21 (String)
  MinQty?: number// [95] 110 (Float)
  MaxFloor?: number// [96] 111 (Float)
  PositionEffect?: string// [97] 77 (String)
  MaxShow?: number// [98] 210 (Float)
  Text?: string// [99] 58 (String)
  EncodedTextLen?: number// [100] 354 (Length)
  EncodedText?: Buffer// [101] 355 (RawData)
  FutSettDate2?: Date// [102] 193 (LocalDate)
  OrderQty2?: number// [103] 192 (Float)
  LastForwardPoints2?: number// [104] 641 (Float)
  MultiLegReportingType?: string// [105] 442 (String)
  CancellationRights?: string// [106] 480 (String)
  MoneyLaunderingStatus?: string// [107] 481 (String)
  RegistID?: string// [108] 513 (String)
  Designation?: string// [109] 494 (String)
  TransBkdTime?: Date// [110] 483 (UtcTimestamp)
  ExecValuationPoint?: Date// [111] 515 (UtcTimestamp)
  ExecPriceType?: string// [112] 484 (String)
  ExecPriceAdjustment?: number// [113] 485 (Float)
  PriorityIndicator?: number// [114] 638 (Int)
  PriceImprovement?: number// [115] 639 (Float)
  NoContAmts?: IExecutionReportNoContAmts[]// [116] ContAmtType.519, ContAmtValue.520, ContAmtCurr.521
  NoLegs?: IExecutionReportNoLegs[]// [117] LegSymbol.600, LegSymbolSfx.601 .. LegLastPx.637
  StandardTrailer: IStandardTrailer// [118] SignatureLength.93, Signature.89, CheckSum.10
}
