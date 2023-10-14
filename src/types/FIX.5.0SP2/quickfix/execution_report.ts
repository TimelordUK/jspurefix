import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IParties } from './set/parties'
import { IContraGrp } from './set/contra_grp'
import { IPreAllocGrp } from './set/pre_alloc_grp'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IStipulations } from './set/stipulations'
import { IOrderQtyData } from './set/order_qty_data'
import { ITriggeringInstruction } from './set/triggering_instruction'
import { IPegInstructions } from './set/peg_instructions'
import { IDiscretionInstructions } from './set/discretion_instructions'
import { IStrategyParametersGrp } from './set/strategy_parameters_grp'
import { IFillsGrp } from './set/fills_grp'
import { ICommissionData } from './set/commission_data'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { IDisplayInstruction } from './set/display_instruction'
import { IContAmtGrp } from './set/cont_amt_grp'
import { IInstrmtLegExecGrp } from './set/instrmt_leg_exec_grp'
import { IMiscFeesGrp } from './set/misc_fees_grp'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { IStandardTrailer } from './set/standard_trailer'
import { IRateSource } from './set/rate_source'

/*
***************************************************************
* The execution report message is used to:                    *
* 1. confirm the receipt of an order                          *
* 2. confirm changes to an existing order (i.e. accept cancel *
* and replace requests)                                       *
* 3. relay order status information                           *
* 4. relay fill information on working orders                 *
* 5. relay fill information on tradeable or restricted        *
* tradeable quotes                                            *
* 6. reject orders                                            *
* 7. report post-trade fees calculations associated with a    *
* trade                                                       *
***************************************************************
*/
export interface IExecutionReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  OrderID: string// [3] 37 (String)
  SecondaryOrderID?: string// [4] 198 (String)
  SecondaryClOrdID?: string// [5] 526 (String)
  SecondaryExecID?: string// [6] 527 (String)
  ClOrdID?: string// [7] 11 (String)
  OrigClOrdID?: string// [8] 41 (String)
  ClOrdLinkID?: string// [9] 583 (String)
  QuoteRespID?: string// [10] 693 (String)
  OrdStatusReqID?: string// [11] 790 (String)
  MassStatusReqID?: string// [12] 584 (String)
  HostCrossID?: string// [13] 961 (String)
  TotNumReports?: number// [14] 911 (Int)
  LastRptRequested?: boolean// [15] 912 (Boolean)
  Parties?: IParties[]// [16] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  TradeOriginationDate?: Date// [17] 229 (LocalDate)
  ContraGrp?: IContraGrp[]// [18] ContraBroker.375, ContraTrader.337 .. ContraLegRefID.655
  ListID?: string// [19] 66 (String)
  CrossID?: string// [20] 548 (String)
  OrigCrossID?: string// [21] 551 (String)
  CrossType?: number// [22] 549 (Int)
  TrdMatchID?: string// [23] 880 (String)
  ExecID: string// [24] 17 (String)
  ExecRefID?: string// [25] 19 (String)
  ExecType: string// [26] 150 (String)
  OrdStatus: string// [27] 39 (String)
  WorkingIndicator?: boolean// [28] 636 (Boolean)
  OrdRejReason?: number// [29] 103 (Int)
  ExecRestatementReason?: number// [30] 378 (Int)
  Account?: string// [31] 1 (String)
  AcctIDSource?: number// [32] 660 (Int)
  AccountType?: number// [33] 581 (Int)
  DayBookingInst?: string// [34] 589 (String)
  BookingUnit?: string// [35] 590 (String)
  PreallocMethod?: string// [36] 591 (String)
  AllocID?: string// [37] 70 (String)
  PreAllocGrp?: IPreAllocGrp[]// [38] AllocAccount.79, AllocAcctIDSource.661 .. AllocQty.80
  SettlType?: string// [39] 63 (String)
  SettlDate?: Date// [40] 64 (LocalDate)
  MatchType?: string// [41] 574 (String)
  OrderCategory?: string// [42] 1115 (String)
  CashMargin?: string// [43] 544 (String)
  ClearingFeeIndicator?: string// [44] 635 (String)
  Instrument: IInstrument// [45] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  FinancingDetails?: IFinancingDetails// [46] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [47] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  Side: string// [48] 54 (String)
  Stipulations?: IStipulations[]// [49] StipulationType.233, StipulationValue.234
  QtyType?: number// [50] 854 (Int)
  OrderQtyData?: IOrderQtyData// [51] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  LotType?: string// [52] 1093 (String)
  OrdType?: string// [53] 40 (String)
  PriceType?: number// [54] 423 (Int)
  Price?: number// [55] 44 (Float)
  PriceProtectionScope?: string// [56] 1092 (String)
  StopPx?: number// [57] 99 (Float)
  TriggeringInstruction?: ITriggeringInstruction// [58] TriggerType.1100, TriggerAction.1101 .. TriggerTradingSessionSubID.1114
  PegInstructions?: IPegInstructions// [59] PegOffsetValue.211, PegPriceType.1094 .. PegSecurityDesc.1099
  DiscretionInstructions?: IDiscretionInstructions// [60] DiscretionInst.388, DiscretionOffsetValue.389 .. DiscretionScope.846
  PeggedPrice?: number// [61] 839 (Float)
  PeggedRefPrice?: number// [62] 1095 (Float)
  DiscretionPrice?: number// [63] 845 (Float)
  TargetStrategy?: number// [64] 847 (Int)
  StrategyParametersGrp?: IStrategyParametersGrp[]// [65] StrategyParameterName.958, StrategyParameterType.959, StrategyParameterValue.960
  TargetStrategyParameters?: string// [66] 848 (String)
  ParticipationRate?: number// [67] 849 (Float)
  TargetStrategyPerformance?: number// [68] 850 (Float)
  Currency?: string// [69] 15 (String)
  ComplianceID?: string// [70] 376 (String)
  SolicitedFlag?: boolean// [71] 377 (Boolean)
  TimeInForce?: string// [72] 59 (String)
  EffectiveTime?: Date// [73] 168 (UtcTimestamp)
  ExpireDate?: Date// [74] 432 (LocalDate)
  ExpireTime?: Date// [75] 126 (UtcTimestamp)
  ExecInst?: string// [76] 18 (String)
  AggressorIndicator?: boolean// [77] 1057 (Boolean)
  OrderCapacity?: string// [78] 528 (String)
  OrderRestrictions?: string// [79] 529 (String)
  PreTradeAnonymity?: boolean// [80] 1091 (Boolean)
  CustOrderCapacity?: number// [81] 582 (Int)
  LastQty?: number// [82] 32 (Float)
  CalculatedCcyLastQty?: number// [83] 1056 (Float)
  LastSwapPoints?: number// [84] 1071 (Float)
  UnderlyingLastQty?: number// [85] 652 (Float)
  LastPx?: number// [86] 31 (Float)
  UnderlyingLastPx?: number// [87] 651 (Float)
  LastParPx?: number// [88] 669 (Float)
  LastSpotRate?: number// [89] 194 (Float)
  LastForwardPoints?: number// [90] 195 (Float)
  LastMkt?: string// [91] 30 (String)
  TradingSessionID?: string// [92] 336 (String)
  TradingSessionSubID?: string// [93] 625 (String)
  TimeBracket?: string// [94] 943 (String)
  LastCapacity?: string// [95] 29 (String)
  LeavesQty: number// [96] 151 (Float)
  CumQty: number// [97] 14 (Float)
  AvgPx?: number// [98] 6 (Float)
  DayOrderQty?: number// [99] 424 (Float)
  DayCumQty?: number// [100] 425 (Float)
  DayAvgPx?: number// [101] 426 (Float)
  TotNoFills?: number// [102] 1361 (Int)
  LastFragment?: boolean// [103] 893 (Boolean)
  FillsGrp?: IFillsGrp[]// [104] FillExecID.1363, FillPx.1364 .. FillLiquidityInd.1443
  GTBookingInst?: number// [105] 427 (Int)
  TradeDate?: Date// [106] 75 (LocalDate)
  TransactTime?: Date// [107] 60 (UtcTimestamp)
  ReportToExch?: boolean// [108] 113 (Boolean)
  CommissionData?: ICommissionData// [109] Commission.12, CommType.13 .. FundRenewWaiv.497
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [110] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [111] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  GrossTradeAmt?: number// [112] 381 (Float)
  NumDaysInterest?: number// [113] 157 (Int)
  ExDate?: Date// [114] 230 (LocalDate)
  AccruedInterestRate?: number// [115] 158 (Float)
  AccruedInterestAmt?: number// [116] 159 (Float)
  InterestAtMaturity?: number// [117] 738 (Float)
  EndAccruedInterestAmt?: number// [118] 920 (Float)
  StartCash?: number// [119] 921 (Float)
  EndCash?: number// [120] 922 (Float)
  TradedFlatSwitch?: boolean// [121] 258 (Boolean)
  BasisFeatureDate?: Date// [122] 259 (LocalDate)
  BasisFeaturePrice?: number// [123] 260 (Float)
  Concession?: number// [124] 238 (Float)
  TotalTakedown?: number// [125] 237 (Float)
  NetMoney?: number// [126] 118 (Float)
  SettlCurrAmt?: number// [127] 119 (Float)
  SettlCurrency?: string// [128] 120 (String)
  SettlCurrFxRate?: number// [129] 155 (Float)
  SettlCurrFxRateCalc?: string// [130] 156 (String)
  HandlInst?: string// [131] 21 (String)
  MinQty?: number// [132] 110 (Float)
  MatchIncrement?: number// [133] 1089 (Float)
  MaxPriceLevels?: number// [134] 1090 (Int)
  DisplayInstruction?: IDisplayInstruction// [135] DisplayQty.1138, SecondaryDisplayQty.1082 .. RefreshQty.1088
  MaxFloor?: number// [136] 111 (Float)
  PositionEffect?: string// [137] 77 (String)
  MaxShow?: number// [138] 210 (Float)
  BookingType?: number// [139] 775 (Int)
  Text?: string// [140] 58 (String)
  EncodedTextLen?: number// [141] 354 (Int)
  EncodedText?: Buffer// [142] 355 (RawData)
  SettlDate2?: Date// [143] 193 (LocalDate)
  OrderQty2?: number// [144] 192 (Float)
  LastForwardPoints2?: number// [145] 641 (Float)
  MultiLegReportingType?: string// [146] 442 (String)
  CancellationRights?: string// [147] 480 (String)
  MoneyLaunderingStatus?: string// [148] 481 (String)
  RegistID?: string// [149] 513 (String)
  Designation?: string// [150] 494 (String)
  TransBkdTime?: Date// [151] 483 (UtcTimestamp)
  ExecValuationPoint?: Date// [152] 515 (UtcTimestamp)
  ExecPriceType?: string// [153] 484 (String)
  ExecPriceAdjustment?: number// [154] 485 (Float)
  PriorityIndicator?: number// [155] 638 (Int)
  PriceImprovement?: number// [156] 639 (Float)
  LastLiquidityInd?: number// [157] 851 (Int)
  ContAmtGrp?: IContAmtGrp[]// [158] ContAmtType.519, ContAmtValue.520, ContAmtCurr.521
  InstrmtLegExecGrp?: IInstrmtLegExecGrp[]// [159] LegSymbol.600, LegSymbolSfx.601 .. LegLastQty.1418
  CopyMsgIndicator?: boolean// [160] 797 (Boolean)
  MiscFeesGrp?: IMiscFeesGrp[]// [161] MiscFeeAmt.137, MiscFeeCurr.138 .. MiscFeeBasis.891
  DividendYield?: number// [162] 1380 (Float)
  ManualOrderIndicator?: boolean// [163] 1028 (Boolean)
  CustDirectedOrder?: boolean// [164] 1029 (Boolean)
  ReceivedDeptID?: string// [165] 1030 (String)
  CustOrderHandlingInst?: string// [166] 1031 (String)
  OrderHandlingInstSource?: number// [167] 1032 (Int)
  TrdRegTimestamps?: ITrdRegTimestamps[]// [168] TrdRegTimestamp.769, TrdRegTimestampType.770 .. DeskOrderHandlingInst.1035
  Volatility?: number// [169] 1188 (Float)
  TimeToExpiration?: number// [170] 1189 (Float)
  RiskFreeRate?: number// [171] 1190 (Float)
  PriceDelta?: number// [172] 811 (Float)
  StandardTrailer: IStandardTrailer// [173] SignatureLength.93, Signature.89, CheckSum.10
  RateSource?: IRateSource[]// [174] RateSource.1446, RateSourceType.1447, ReferencePage.1448
}
