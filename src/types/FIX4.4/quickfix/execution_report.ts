import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IContraGrp } from './set/contra_grp'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IStipulations } from './set/stipulations'
import { IOrderQtyData } from './set/order_qty_data'
import { IPegInstructions } from './set/peg_instructions'
import { IDiscretionInstructions } from './set/discretion_instructions'
import { ICommissionData } from './set/commission_data'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { IContAmtGrp } from './set/cont_amt_grp'
import { IInstrmtLegExecGrp } from './set/instrmt_leg_exec_grp'
import { IMiscFeesGrp } from './set/misc_fees_grp'
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
  QuoteRespID?: string// [9] 693 (String)
  OrdStatusReqID?: string// [10] 790 (String)
  MassStatusReqID?: string// [11] 584 (String)
  TotNumReports?: number// [12] 911 (Int)
  LastRptRequested?: boolean// [13] 912 (Boolean)
  Parties?: IParties// [14] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TradeOriginationDate?: Date// [15] 229 (LocalDate)
  ContraGrp?: IContraGrp// [16] NoContraBrokers.382, ContraBroker.375 .. ContraLegRefID.655
  ListID?: string// [17] 66 (String)
  CrossID?: string// [18] 548 (String)
  OrigCrossID?: string// [19] 551 (String)
  CrossType?: number// [20] 549 (Int)
  ExecID: string// [21] 17 (String)
  ExecRefID?: string// [22] 19 (String)
  ExecType: string// [23] 150 (String)
  OrdStatus: string// [24] 39 (String)
  WorkingIndicator?: boolean// [25] 636 (Boolean)
  OrdRejReason?: number// [26] 103 (Int)
  ExecRestatementReason?: number// [27] 378 (Int)
  Account?: string// [28] 1 (String)
  AcctIDSource?: number// [29] 660 (Int)
  AccountType?: number// [30] 581 (Int)
  DayBookingInst?: string// [31] 589 (String)
  BookingUnit?: string// [32] 590 (String)
  PreallocMethod?: string// [33] 591 (String)
  SettlType?: string// [34] 63 (String)
  SettlDate?: Date// [35] 64 (LocalDate)
  CashMargin?: string// [36] 544 (String)
  ClearingFeeIndicator?: string// [37] 635 (String)
  Instrument?: IInstrument// [38] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  FinancingDetails?: IFinancingDetails// [39] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [40] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingStipValue.889
  Side: string// [41] 54 (String)
  Stipulations?: IStipulations// [42] NoStipulations.232, StipulationType.233, StipulationValue.234
  QtyType?: number// [43] 854 (Int)
  OrderQtyData?: IOrderQtyData// [44] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  OrdType?: string// [45] 40 (String)
  PriceType?: number// [46] 423 (Int)
  Price?: number// [47] 44 (Float)
  StopPx?: number// [48] 99 (Float)
  PegInstructions?: IPegInstructions// [49] PegOffsetValue.211, PegMoveType.835 .. PegScope.840
  DiscretionInstructions?: IDiscretionInstructions// [50] DiscretionInst.388, DiscretionOffsetValue.389 .. DiscretionScope.846
  PeggedPrice?: number// [51] 839 (Float)
  DiscretionPrice?: number// [52] 845 (Float)
  TargetStrategy?: number// [53] 847 (Int)
  TargetStrategyParameters?: string// [54] 848 (String)
  ParticipationRate?: number// [55] 849 (Float)
  TargetStrategyPerformance?: number// [56] 850 (Float)
  Currency?: string// [57] 15 (String)
  ComplianceID?: string// [58] 376 (String)
  SolicitedFlag?: boolean// [59] 377 (Boolean)
  TimeInForce?: string// [60] 59 (String)
  EffectiveTime?: Date// [61] 168 (UtcTimestamp)
  ExpireDate?: Date// [62] 432 (LocalDate)
  ExpireTime?: Date// [63] 126 (UtcTimestamp)
  ExecInst?: string// [64] 18 (String)
  OrderCapacity?: string// [65] 528 (String)
  OrderRestrictions?: string// [66] 529 (String)
  CustOrderCapacity?: number// [67] 582 (Int)
  LastQty?: number// [68] 32 (Float)
  UnderlyingLastQty?: number// [69] 652 (Float)
  LastPx?: number// [70] 31 (Float)
  UnderlyingLastPx?: number// [71] 651 (Float)
  LastParPx?: number// [72] 669 (Float)
  LastSpotRate?: number// [73] 194 (Float)
  LastForwardPoints?: number// [74] 195 (Float)
  LastMkt?: string// [75] 30 (String)
  TradingSessionID?: string// [76] 336 (String)
  TradingSessionSubID?: string// [77] 625 (String)
  TimeBracket?: string// [78] 943 (String)
  LastCapacity?: string// [79] 29 (String)
  LeavesQty: number// [80] 151 (Float)
  CumQty: number// [81] 14 (Float)
  AvgPx: number// [82] 6 (Float)
  DayOrderQty?: number// [83] 424 (Float)
  DayCumQty?: number// [84] 425 (Float)
  DayAvgPx?: number// [85] 426 (Float)
  GTBookingInst?: number// [86] 427 (Int)
  TradeDate?: Date// [87] 75 (LocalDate)
  TransactTime?: Date// [88] 60 (UtcTimestamp)
  ReportToExch?: boolean// [89] 113 (Boolean)
  CommissionData?: ICommissionData// [90] Commission.12, CommType.13 .. FundRenewWaiv.497
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [91] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [92] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  GrossTradeAmt?: number// [93] 381 (Float)
  NumDaysInterest?: number// [94] 157 (Int)
  ExDate?: Date// [95] 230 (LocalDate)
  AccruedInterestRate?: number// [96] 158 (Float)
  AccruedInterestAmt?: number// [97] 159 (Float)
  InterestAtMaturity?: number// [98] 738 (Float)
  EndAccruedInterestAmt?: number// [99] 920 (Float)
  StartCash?: number// [100] 921 (Float)
  EndCash?: number// [101] 922 (Float)
  TradedFlatSwitch?: boolean// [102] 258 (Boolean)
  BasisFeatureDate?: Date// [103] 259 (LocalDate)
  BasisFeaturePrice?: number// [104] 260 (Float)
  Concession?: number// [105] 238 (Float)
  TotalTakedown?: number// [106] 237 (Float)
  NetMoney?: number// [107] 118 (Float)
  SettlCurrAmt?: number// [108] 119 (Float)
  SettlCurrency?: string// [109] 120 (String)
  SettlCurrFxRate?: number// [110] 155 (Float)
  SettlCurrFxRateCalc?: string// [111] 156 (String)
  HandlInst?: string// [112] 21 (String)
  MinQty?: number// [113] 110 (Float)
  MaxFloor?: number// [114] 111 (Float)
  PositionEffect?: string// [115] 77 (String)
  MaxShow?: number// [116] 210 (Float)
  BookingType?: number// [117] 775 (Int)
  Text?: string// [118] 58 (String)
  EncodedTextLen?: number// [119] 354 (Length)
  EncodedText?: Buffer// [120] 355 (RawData)
  SettlDate2?: Date// [121] 193 (LocalDate)
  OrderQty2?: number// [122] 192 (Float)
  LastForwardPoints2?: number// [123] 641 (Float)
  MultiLegReportingType?: string// [124] 442 (String)
  CancellationRights?: string// [125] 480 (String)
  MoneyLaunderingStatus?: string// [126] 481 (String)
  RegistID?: string// [127] 513 (String)
  Designation?: string// [128] 494 (String)
  TransBkdTime?: Date// [129] 483 (UtcTimestamp)
  ExecValuationPoint?: Date// [130] 515 (UtcTimestamp)
  ExecPriceType?: string// [131] 484 (String)
  ExecPriceAdjustment?: number// [132] 485 (Float)
  PriorityIndicator?: number// [133] 638 (Int)
  PriceImprovement?: number// [134] 639 (Float)
  LastLiquidityInd?: number// [135] 851 (Int)
  ContAmtGrp?: IContAmtGrp// [136] NoContAmts.518, ContAmtType.519 .. ContAmtCurr.521
  InstrmtLegExecGrp?: IInstrmtLegExecGrp// [137] NoLegs.555, LegSymbol.600 .. LegLastPx.637
  CopyMsgIndicator?: boolean// [138] 797 (Boolean)
  MiscFeesGrp?: IMiscFeesGrp// [139] NoMiscFees.136, MiscFeeAmt.137 .. MiscFeeBasis.891
  StandardTrailer: IStandardTrailer// [140] SignatureLength.93, Signature.89, CheckSum.10
}
