import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IContraGrp } from './set/contra_grp'
import { IRegulatoryTradeIDGrp } from './set/regulatory_trade_id_grp'
import { IPreAllocGrp } from './set/pre_alloc_grp'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IPaymentGrp } from './set/payment_grp'
import { IStipulations } from './set/stipulations'
import { IOrderQtyData } from './set/order_qty_data'
import { ITriggeringInstruction } from './set/triggering_instruction'
import { IPegInstructions } from './set/peg_instructions'
import { IDiscretionInstructions } from './set/discretion_instructions'
import { IStrategyParametersGrp } from './set/strategy_parameters_grp'
import { IOrderAttributeGrp } from './set/order_attribute_grp'
import { ILimitAmts } from './set/limit_amts'
import { IFillsGrp } from './set/fills_grp'
import { IOrderEventGrp } from './set/order_event_grp'
import { ICommissionData } from './set/commission_data'
import { ICommissionDataGrp } from './set/commission_data_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IRelativeValueGrp } from './set/relative_value_grp'
import { IYieldData } from './set/yield_data'
import { IRateSource } from './set/rate_source'
import { IValueChecksGrp } from './set/value_checks_grp'
import { IMatchingInstructions } from './set/matching_instructions'
import { IDisplayInstruction } from './set/display_instruction'
import { IDisclosureInstructionGrp } from './set/disclosure_instruction_grp'
import { IContAmtGrp } from './set/cont_amt_grp'
import { IInstrmtLegExecGrp } from './set/instrmt_leg_exec_grp'
import { IMiscFeesGrp } from './set/misc_fees_grp'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { ITrdRegPublicationGrp } from './set/trd_reg_publication_grp'
import { ITradePriceConditionGrp } from './set/trade_price_condition_grp'
import { IThrottleResponse } from './set/throttle_response'

/*
***************************************************
* ExecutionReport can be found in Volume 4 of the *
*                                                 *
* specification                                   *
***************************************************
*/
export interface IExecutionReport {
  NotAffectedOrderID: string// 1371
  OrderRequestID?: number// 2422
  MassOrderRequestID?: string// 2423
  NotAffSecondaryOrderID?: string// 1825
  SecondaryClOrdID?: string// 526
  SecondaryExecID?: string// 527
  ClOrdID?: string// 11
  QuoteMsgID?: string// 1166
  OrigClOrdID?: string// 41
  ClOrdLinkID?: string// 583
  MDEntryID?: string// 278
  QuoteRespID?: string// 693
  OrdStatusReqID?: string// 790
  MassStatusReqID?: string// 584
  HostCrossID?: string// 961
  TotNumReports?: number// 911
  LastRptRequested?: string// 912
  TradeOriginationDate?: Date// 229
  SecurityListID?: string// 1465
  CrossID?: string// 548
  OrigCrossID?: string// 551
  CrossType?: number// 549
  AllocRefRiskLimitCheckID?: string// 2392
  AllocRefRiskLimitCheckIDType?: number// 2393
  TradeMatchID?: string// 1
  FillMatchSubID?: string// 2674
  LegExecID: string// 1893
  LegExecRefID?: string// 1901
  ExecType: string// 150
  ExecTypeReason?: number// 2431
  OrdStatus: string// 39
  WorkingIndicator?: string// 636
  CollRptRejectReason?: number// 2487
  RejectText?: string// 1328
  EncodedRejectTextLen?: string// 1664
  EncodedRejectText?: Buffer// 1665
  ExecRestatementReason?: number// 378
  AlgorithmicTradeIndicator?: number// 2667
  TrdType?: number// 828
  SideTrdSubTyp?: number// 1008
  SecondaryTrdType?: number// 855
  RegulatoryTransactionType?: number// 2347
  PreviouslyReported?: string// 570
  SideTradeReportingIndicator?: number// 2671
  LegAccount?: string// 2680
  AcctIDSource?: number// 660
  AllocAccountType?: number// 798
  DayBookingInst?: string// 589
  BookingUnit?: string// 590
  PreallocMethod?: string// 591
  AllocID?: string// 70
  InstrumentScopeSettlType?: string// 1557
  LegSettlDate?: Date// 588
  MatchType?: string// 574
  OrderCategory?: string// 1115
  CashMargin?: string// 544
  AllocClearingFeeIndicator?: string// 1136
  RelativeValueSide: number// 2532
  ShortMarkingExemptIndicator?: string// 2102
  SideShortSaleExemptionReason?: number// 1690
  LegQtyType?: number// 1591
  LotType?: string// 1093
  OrdType?: string// 40
  UnderlyingReturnRatePriceType?: number// 43068
  UnderlyingReturnRatePrice?: number// 43066
  PriceProtectionScope?: string// 1092
  StopPx?: number// 99
  Triggered?: number// 1823
  PeggedPrice?: number// 839
  PeggedRefPrice?: number// 1095
  DiscretionPrice?: number// 845
  TradePriceNegotiationMethod?: number// 1740
  UpfrontPrice?: number// 1742
  UpfrontPriceType?: number// 1741
  TargetStrategy?: number// 847
  TargetStrategyParameters?: string// 848
  ParticipationRate?: number// 849
  TargetStrategyPerformance?: string// 850
  UnderlyingReturnRatePriceCurrency?: string// 43067
  ComplianceID?: string// 376
  ComplianceText?: string// 2404
  EncodedComplianceTextLen?: string// 2351
  EncodedComplianceText?: Buffer// 2352
  SolicitedFlag?: string// 377
  TimeInForce?: string// 59
  EffectiveTime?: Date// 168
  ExpireDate?: Date// 432
  ExpireTime?: Date// 126
  ExposureDuration?: number// 1629
  ExposureDurationUnit?: number// 1916
  ExecInst?: string// 18
  AuctionInstruction?: number// 1805
  AggressorIndicator?: string// 1057
  OrderCapacity?: string// 528
  OrderRestrictions?: string// 529
  TradingCapacity?: number// 1815
  PreTradeAnonymity?: string// 1091
  TradePublishIndicator?: number// 1390
  AllocCustomerCapacity?: string// 993
  LegLastQty?: number// 1418
  CalculatedCcyLastQty?: number// 1056
  LastSwapPoints?: string// 1071
  UnderlyingLastQty?: number// 652
  LastQtyVariance?: number// 1828
  LegLastPx?: number// 637
  UnderlyingLastPx?: number// 651
  LastParPx?: number// 669
  LegMidPx?: number// 2346
  LastSpotRate?: number// 194
  LastForwardPoints?: string// 195
  LastUpfrontPrice?: number// 1743
  LastMkt?: string// 30
  SideVenueType?: string// 1899
  SideCollateralAmountMarketSegmentID?: string// 2693
  ExDestination?: string// 100
  ExDestinationIDSource?: string// 1133
  ExDestinationType?: number// 2704
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  TimeBracket?: string// 943
  LastCapacity?: string// 29
  LeavesQty: number// 151
  CumQty: number// 14
  CxlQty?: number// 84
  SideAvgPx?: number// 1852
  DayOrderQty?: number// 424
  DayCumQty?: number// 425
  DayAvgPx?: number// 426
  TotNoFills?: number// 1361
  LastFragment?: string// 893
  GTBookingInst?: number// 427
  TradeDate?: Date// 75
  RelSymTransactTime?: Date// 1504
  ReportToExch?: string// 113
  AllocGrossTradeAmt?: number// 2300
  NumDaysInterest?: number// 157
  ExDate?: Date// 230
  AccruedInterestRate?: number// 158
  AllocAccruedInterestAmt?: number// 742
  AllocInterestAtMaturity?: number// 741
  EndAccruedInterestAmt?: number// 920
  StartCash?: number// 921
  EndCash?: number// 922
  TradedFlatSwitch?: string// 258
  BasisFeatureDate?: Date// 259
  BasisFeaturePrice?: number// 260
  Concession?: number// 238
  TotalTakedown?: number// 237
  AllocNetMoney?: number// 154
  SettlCurrAmt?: number// 119
  UnderlyingProvisionCashSettlCurrency?: string// 42167
  SettlCurrFxRate?: string// 155
  SettlCurrFxRateCalc?: string// 156
  AllocHandlInst?: number// 209
  MinQty?: number// 110
  MinQtyMethod?: number// 1822
  MatchIncrement?: number// 1089
  MaxPriceLevels?: number// 1090
  MaximumPricePercentage?: number// 2676
  SelfMatchPreventionID?: string// 2362
  CrossedIndicator?: number// 2523
  MaxFloor?: number// 111
  LegClearingAccountType?: number// 1817
  LegPositionEffect?: string// 564
  MaxShow?: number// 210
  BookingType?: number// 775
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  SettlDate2?: Date// 193
  OrderQty2?: number// 192
  LastForwardPoints2?: string// 641
  SideMultiLegReportingType?: number// 752
  ContingencyType?: number// 1385
  CancellationRights?: string// 480
  MoneyLaunderingStatus?: string// 481
  RegistID?: string// 513
  Designation?: string// 494
  TransBkdTime?: Date// 483
  ExecValuationPoint?: Date// 515
  ExecPriceType?: string// 484
  ExecPriceAdjustment?: string// 485
  PriorityIndicator?: number// 638
  PriceImprovement?: string// 639
  LastLiquidityInd?: number// 851
  CopyMsgIndicator?: string// 797
  DividendYield?: number// 1380
  ManualOrderIndicator?: string// 1028
  CustDirectedOrder?: string// 1029
  ReceivedDeptID?: string// 1030
  CustOrderHandlingInst?: string// 1031
  OrderHandlingInstSource?: number// 1032
  OrderOrigination?: number// 1724
  OriginatingDeptID?: string// 1725
  ReceivingDeptID?: string// 1726
  OwnerType?: number// 522
  OrderOwnershipIndicator?: number// 2679
  Volatility?: string// 1188
  TimeToExpiration?: string// 1189
  RiskFreeRate?: string// 1190
  PriceDelta?: string// 811
  CoverPrice?: number// 1917
  RefOrderID?: string// 1080
  RefOrderIDSource?: string// 1081
  RefClOrdID?: string// 1806
  AuctionType?: number// 1803
  AuctionAllocationPct?: number// 1804
  LockedQty?: number// 1808
  SecondaryLockedQty?: number// 1809
  LockType?: number// 1807
  ReleaseInstruction?: number// 1810
  ReleaseQty?: number// 1811
  RelatedHighPrice?: number// 1819
  RelatedLowPrice?: number// 1820
  RelatedPriceSource?: number// 1821
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  Parties?: IParties[]
  TargetParties?: ITargetParties[]
  ContraGrp?: IContraGrp[]
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp[]
  PreAllocGrp?: IPreAllocGrp[]
  Instrument?: IInstrument
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
  PaymentGrp?: IPaymentGrp[]
  Stipulations?: IStipulations[]
  OrderQtyData?: IOrderQtyData
  TriggeringInstruction?: ITriggeringInstruction
  PegInstructions?: IPegInstructions
  DiscretionInstructions?: IDiscretionInstructions
  StrategyParametersGrp?: IStrategyParametersGrp[]
  OrderAttributeGrp?: IOrderAttributeGrp[]
  LimitAmts?: ILimitAmts[]
  FillsGrp?: IFillsGrp[]
  OrderEventGrp?: IOrderEventGrp[]
  CommissionData?: ICommissionData
  CommissionDataGrp?: ICommissionDataGrp[]
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  RelativeValueGrp?: IRelativeValueGrp[]
  YieldData?: IYieldData
  RateSource?: IRateSource[]
  ValueChecksGrp?: IValueChecksGrp[]
  MatchingInstructions?: IMatchingInstructions[]
  DisplayInstruction?: IDisplayInstruction
  DisclosureInstructionGrp?: IDisclosureInstructionGrp[]
  ContAmtGrp?: IContAmtGrp[]
  InstrmtLegExecGrp?: IInstrmtLegExecGrp[]
  MiscFeesGrp?: IMiscFeesGrp[]
  TrdRegTimestamps?: ITrdRegTimestamps[]
  TrdRegPublicationGrp?: ITrdRegPublicationGrp[]
  TradePriceConditionGrp?: ITradePriceConditionGrp[]
  ThrottleResponse?: IThrottleResponse
}
