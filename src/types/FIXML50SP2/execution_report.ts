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
  OrderID: string// 37
  OrderRequestID?: number// 2422
  MassOrderRequestID?: string// 2423
  SecondaryOrderID?: string// 198
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
  LastRptRequested?: boolean// 912
  TradeOriginationDate?: Date// 229
  ListID?: string// 66
  CrossID?: string// 548
  OrigCrossID?: string// 551
  CrossType?: number// 549
  RefRiskLimitCheckID?: string// 2334
  RefRiskLimitCheckIDType?: number// 2335
  TrdMatchID?: string// 880
  TrdMatchSubID?: string// 1891
  ExecID: string// 17
  ExecRefID?: string// 19
  ExecType: string// 150
  ExecTypeReason?: number// 2431
  OrdStatus: string// 39
  WorkingIndicator?: boolean// 636
  CollRptRejectReason?: number// 2487
  RejectText?: string// 1328
  EncodedRejectTextLen?: number// 1664
  EncodedRejectText?: Buffer// 1665
  ExecRestatementReason?: number// 378
  AlgorithmicTradeIndicator?: number// 2667
  TrdType?: number// 828
  SideTrdSubTyp?: number// 1008
  SecondaryTrdType?: number// 855
  RegulatoryTransactionType?: number// 2347
  PreviouslyReported?: boolean// 570
  TradeReportingIndicator?: number// 2524
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  DayBookingInst?: string// 589
  BookingUnit?: string// 590
  PreallocMethod?: string// 591
  AllocID?: string// 70
  InstrumentScopeSettlType?: string// 1557
  SettlDate?: Date// 64
  MatchType?: string// 574
  OrderCategory?: string// 1115
  CashMargin?: string// 544
  ClearingFeeIndicator?: string// 635
  RelativeValueSide: number// 2532
  ShortMarkingExemptIndicator?: boolean// 2102
  ShortSaleExemptionReason?: number// 1688
  QtyType?: number// 854
  LotType?: string// 1093
  OrdType?: string// 40
  PriceType?: number// 423
  Price?: number// 44
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
  TargetStrategyPerformance?: number// 850
  Currency?: string// 15
  ComplianceID?: string// 376
  ComplianceText?: string// 2404
  EncodedComplianceTextLen?: number// 2351
  EncodedComplianceText?: Buffer// 2352
  SolicitedFlag?: boolean// 377
  TimeInForce?: string// 59
  EffectiveTime?: Date// 168
  ExpireDate?: Date// 432
  ExpireTime?: Date// 126
  ExposureDuration?: number// 1629
  ExposureDurationUnit?: number// 1916
  ExecInst?: string// 18
  AuctionInstruction?: number// 1805
  AggressorIndicator?: boolean// 1057
  OrderCapacity?: string// 528
  OrderRestrictions?: string// 529
  TradingCapacity?: number// 1815
  PreTradeAnonymity?: boolean// 1091
  TradePublishIndicator?: number// 1390
  CustOrderCapacity?: number// 582
  LastQty?: number// 32
  CalculatedCcyLastQty?: number// 1056
  LastSwapPoints?: number// 1071
  UnderlyingLastQty?: number// 652
  LastQtyVariance?: number// 1828
  LastPx?: number// 31
  UnderlyingLastPx?: number// 651
  LastParPx?: number// 669
  MidPx?: number// 631
  LastSpotRate?: number// 194
  LastForwardPoints?: number// 195
  LastUpfrontPrice?: number// 1743
  LastMkt?: string// 30
  VenueType?: string// 1430
  MarketSegmentID?: string// 1300
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
  AvgPx?: number// 6
  DayOrderQty?: number// 424
  DayCumQty?: number// 425
  DayAvgPx?: number// 426
  TotNoFills?: number// 1361
  LastFragment?: boolean// 893
  GTBookingInst?: number// 427
  TradeDate?: Date// 75
  TransactTime?: Date// 60
  ReportToExch?: boolean// 113
  GrossTradeAmt?: number// 381
  NumDaysInterest?: number// 157
  ExDate?: Date// 230
  AccruedInterestRate?: number// 158
  AccruedInterestAmt?: number// 159
  InterestAtMaturity?: number// 738
  EndAccruedInterestAmt?: number// 920
  StartCash?: number// 921
  EndCash?: number// 922
  TradedFlatSwitch?: boolean// 258
  BasisFeatureDate?: Date// 259
  BasisFeaturePrice?: number// 260
  Concession?: number// 238
  TotalTakedown?: number// 237
  NetMoney?: number// 118
  SettlCurrAmt?: number// 119
  SettlCurrency?: string// 120
  SettlCurrFxRate?: number// 155
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
  ClearingAccountType?: number// 1816
  PositionEffect?: string// 77
  MaxShow?: number// 210
  BookingType?: number// 775
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  SettlDate2?: Date// 193
  OrderQty2?: number// 192
  LastForwardPoints2?: number// 641
  MultiLegReportingType?: string// 442
  ContingencyType?: number// 1385
  CancellationRights?: string// 480
  MoneyLaunderingStatus?: string// 481
  RegistID?: string// 513
  Designation?: string// 494
  TransBkdTime?: Date// 483
  ExecValuationPoint?: Date// 515
  ExecPriceType?: string// 484
  ExecPriceAdjustment?: number// 485
  PriorityIndicator?: number// 638
  PriceImprovement?: number// 639
  LastLiquidityInd?: number// 851
  CopyMsgIndicator?: boolean// 797
  DividendYield?: number// 1380
  ManualOrderIndicator?: boolean// 1028
  CustDirectedOrder?: boolean// 1029
  ReceivedDeptID?: string// 1030
  CustOrderHandlingInst?: string// 1031
  OrderHandlingInstSource?: number// 1032
  OrderOrigination?: number// 1724
  OriginatingDeptID?: string// 1725
  ReceivingDeptID?: string// 1726
  OwnerType?: number// 522
  OrderOwnershipIndicator?: number// 2679
  Volatility?: number// 1188
  TimeToExpiration?: number// 1189
  RiskFreeRate?: number// 1190
  PriceDelta?: number// 811
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
