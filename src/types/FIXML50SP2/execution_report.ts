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
  OrderID: string// [2] 37 (String)
  OrderRequestID?: number// [2] 2422 (Int)
  MassOrderRequestID?: string// [2] 2423 (String)
  SecondaryOrderID?: string// [2] 198 (String)
  SecondaryClOrdID?: string// [2] 526 (String)
  SecondaryExecID?: string// [2] 527 (String)
  ClOrdID?: string// [2] 11 (String)
  QuoteMsgID?: string// [2] 1166 (String)
  OrigClOrdID?: string// [2] 41 (String)
  ClOrdLinkID?: string// [2] 583 (String)
  MDEntryID?: string// [2] 278 (String)
  QuoteRespID?: string// [2] 693 (String)
  OrdStatusReqID?: string// [2] 790 (String)
  MassStatusReqID?: string// [2] 584 (String)
  HostCrossID?: string// [2] 961 (String)
  TotNumReports?: number// [2] 911 (Int)
  LastRptRequested?: boolean// [2] 912 (Boolean)
  TradeOriginationDate?: Date// [2] 229 (LocalDate)
  ListID?: string// [2] 66 (String)
  CrossID?: string// [2] 548 (String)
  OrigCrossID?: string// [2] 551 (String)
  CrossType?: number// [2] 549 (Int)
  RefRiskLimitCheckID?: string// [2] 2334 (String)
  RefRiskLimitCheckIDType?: number// [2] 2335 (Int)
  TrdMatchID?: string// [2] 880 (String)
  TrdMatchSubID?: string// [2] 1891 (String)
  ExecID: string// [2] 17 (String)
  ExecRefID?: string// [2] 19 (String)
  ExecType: string// [2] 150 (String)
  ExecTypeReason?: number// [2] 2431 (Int)
  OrdStatus: string// [2] 39 (String)
  WorkingIndicator?: boolean// [2] 636 (Boolean)
  OrdRejReason?: number// [2] 103 (Int)
  RejectText?: string// [2] 1328 (String)
  EncodedRejectTextLen?: number// [2] 1664 (Length)
  EncodedRejectText?: Buffer// [2] 1665 (RawData)
  ExecRestatementReason?: number// [2] 378 (Int)
  AlgorithmicTradeIndicator?: number// [2] 2667 (Int)
  TrdType?: number// [2] 828 (Int)
  TrdSubType?: number// [2] 829 (Int)
  SecondaryTrdType?: number// [2] 855 (Int)
  RegulatoryTransactionType?: number// [2] 2347 (Int)
  PreviouslyReported?: boolean// [2] 570 (Boolean)
  TradeReportingIndicator?: number// [2] 2524 (Int)
  Account?: string// [2] 1 (String)
  AcctIDSource?: number// [2] 660 (Int)
  AccountType?: number// [2] 581 (Int)
  DayBookingInst?: string// [2] 589 (String)
  BookingUnit?: string// [2] 590 (String)
  PreallocMethod?: string// [2] 591 (String)
  AllocID?: string// [2] 70 (String)
  SettlType?: string// [2] 63 (String)
  SettlDate?: Date// [2] 64 (LocalDate)
  MatchType?: string// [2] 574 (String)
  OrderCategory?: string// [2] 1115 (String)
  CashMargin?: string// [2] 544 (String)
  ClearingFeeIndicator?: string// [2] 635 (String)
  Side: string// [2] 54 (String)
  ShortMarkingExemptIndicator?: boolean// [2] 2102 (Boolean)
  ShortSaleExemptionReason?: number// [2] 1688 (Int)
  QtyType?: number// [2] 854 (Int)
  LotType?: string// [2] 1093 (String)
  OrdType?: string// [2] 40 (String)
  PriceType?: number// [2] 423 (Int)
  Price?: number// [2] 44 (Float)
  PriceProtectionScope?: string// [2] 1092 (String)
  StopPx?: number// [2] 99 (Float)
  Triggered?: number// [2] 1823 (Int)
  PeggedPrice?: number// [2] 839 (Float)
  PeggedRefPrice?: number// [2] 1095 (Float)
  DiscretionPrice?: number// [2] 845 (Float)
  TradePriceNegotiationMethod?: number// [2] 1740 (Int)
  UpfrontPrice?: number// [2] 1742 (Float)
  UpfrontPriceType?: number// [2] 1741 (Int)
  TargetStrategy?: number// [2] 847 (Int)
  TargetStrategyParameters?: string// [2] 848 (String)
  ParticipationRate?: number// [2] 849 (Float)
  TargetStrategyPerformance?: number// [2] 850 (Float)
  Currency?: string// [2] 15 (String)
  ComplianceID?: string// [2] 376 (String)
  ComplianceText?: string// [2] 2404 (String)
  EncodedComplianceTextLen?: number// [2] 2351 (Length)
  EncodedComplianceText?: Buffer// [2] 2352 (RawData)
  SolicitedFlag?: boolean// [2] 377 (Boolean)
  TimeInForce?: string// [2] 59 (String)
  EffectiveTime?: Date// [2] 168 (UtcTimestamp)
  ExpireDate?: Date// [2] 432 (LocalDate)
  ExpireTime?: Date// [2] 126 (UtcTimestamp)
  ExposureDuration?: number// [2] 1629 (Int)
  ExposureDurationUnit?: number// [2] 1916 (Int)
  ExecInst?: string// [2] 18 (String)
  AuctionInstruction?: number// [2] 1805 (Int)
  AggressorIndicator?: boolean// [2] 1057 (Boolean)
  OrderCapacity?: string// [2] 528 (String)
  OrderRestrictions?: string// [2] 529 (String)
  TradingCapacity?: number// [2] 1815 (Int)
  PreTradeAnonymity?: boolean// [2] 1091 (Boolean)
  TradePublishIndicator?: number// [2] 1390 (Int)
  CustOrderCapacity?: number// [2] 582 (Int)
  LastQty?: number// [2] 32 (Float)
  CalculatedCcyLastQty?: number// [2] 1056 (Float)
  LastSwapPoints?: number// [2] 1071 (Float)
  UnderlyingLastQty?: number// [2] 652 (Float)
  LastQtyVariance?: number// [2] 1828 (Float)
  LastPx?: number// [2] 31 (Float)
  UnderlyingLastPx?: number// [2] 651 (Float)
  LastParPx?: number// [2] 669 (Float)
  MidPx?: number// [2] 631 (Float)
  LastSpotRate?: number// [2] 194 (Float)
  LastForwardPoints?: number// [2] 195 (Float)
  LastUpfrontPrice?: number// [2] 1743 (Float)
  LastMkt?: string// [2] 30 (String)
  VenueType?: string// [2] 1430 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  ExDestination?: string// [2] 100 (String)
  ExDestinationIDSource?: string// [2] 1133 (String)
  ExDestinationType?: number// [2] 2704 (Int)
  TradingSessionID?: string// [2] 336 (String)
  TradingSessionSubID?: string// [2] 625 (String)
  TimeBracket?: string// [2] 943 (String)
  LastCapacity?: string// [2] 29 (String)
  LeavesQty: number// [2] 151 (Float)
  CumQty: number// [2] 14 (Float)
  CxlQty?: number// [2] 84 (Float)
  AvgPx?: number// [2] 6 (Float)
  DayOrderQty?: number// [2] 424 (Float)
  DayCumQty?: number// [2] 425 (Float)
  DayAvgPx?: number// [2] 426 (Float)
  TotNoFills?: number// [2] 1361 (Int)
  LastFragment?: boolean// [2] 893 (Boolean)
  GTBookingInst?: number// [2] 427 (Int)
  TradeDate?: Date// [2] 75 (LocalDate)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  ReportToExch?: boolean// [2] 113 (Boolean)
  GrossTradeAmt?: number// [2] 381 (Float)
  NumDaysInterest?: number// [2] 157 (Int)
  ExDate?: Date// [2] 230 (LocalDate)
  AccruedInterestRate?: number// [2] 158 (Float)
  AccruedInterestAmt?: number// [2] 159 (Float)
  InterestAtMaturity?: number// [2] 738 (Float)
  EndAccruedInterestAmt?: number// [2] 920 (Float)
  StartCash?: number// [2] 921 (Float)
  EndCash?: number// [2] 922 (Float)
  TradedFlatSwitch?: boolean// [2] 258 (Boolean)
  BasisFeatureDate?: Date// [2] 259 (LocalDate)
  BasisFeaturePrice?: number// [2] 260 (Float)
  Concession?: number// [2] 238 (Float)
  TotalTakedown?: number// [2] 237 (Float)
  NetMoney?: number// [2] 118 (Float)
  SettlCurrAmt?: number// [2] 119 (Float)
  SettlCurrency?: string// [2] 120 (String)
  SettlCurrFxRate?: number// [2] 155 (Float)
  SettlCurrFxRateCalc?: string// [2] 156 (String)
  HandlInst?: string// [2] 21 (String)
  MinQty?: number// [2] 110 (Float)
  MinQtyMethod?: number// [2] 1822 (Int)
  MatchIncrement?: number// [2] 1089 (Float)
  MaxPriceLevels?: number// [2] 1090 (Int)
  MaximumPricePercentage?: number// [2] 2676 (Float)
  SelfMatchPreventionID?: string// [2] 2362 (String)
  CrossedIndicator?: number// [2] 2523 (Int)
  MaxFloor?: number// [2] 111 (Float)
  ClearingAccountType?: number// [2] 1816 (Int)
  PositionEffect?: string// [2] 77 (String)
  MaxShow?: number// [2] 210 (Float)
  BookingType?: number// [2] 775 (Int)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  SettlDate2?: Date// [2] 193 (LocalDate)
  OrderQty2?: number// [2] 192 (Float)
  LastForwardPoints2?: number// [2] 641 (Float)
  MultiLegReportingType?: string// [2] 442 (String)
  ContingencyType?: number// [2] 1385 (Int)
  CancellationRights?: string// [2] 480 (String)
  MoneyLaunderingStatus?: string// [2] 481 (String)
  RegistID?: string// [2] 513 (String)
  Designation?: string// [2] 494 (String)
  TransBkdTime?: Date// [2] 483 (UtcTimestamp)
  ExecValuationPoint?: Date// [2] 515 (UtcTimestamp)
  ExecPriceType?: string// [2] 484 (String)
  ExecPriceAdjustment?: number// [2] 485 (Float)
  PriorityIndicator?: number// [2] 638 (Int)
  PriceImprovement?: number// [2] 639 (Float)
  LastLiquidityInd?: number// [2] 851 (Int)
  CopyMsgIndicator?: boolean// [2] 797 (Boolean)
  DividendYield?: number// [2] 1380 (Float)
  ManualOrderIndicator?: boolean// [2] 1028 (Boolean)
  CustDirectedOrder?: boolean// [2] 1029 (Boolean)
  ReceivedDeptID?: string// [2] 1030 (String)
  CustOrderHandlingInst?: string// [2] 1031 (String)
  OrderHandlingInstSource?: number// [2] 1032 (Int)
  OrderOrigination?: number// [2] 1724 (Int)
  OriginatingDeptID?: string// [2] 1725 (String)
  ReceivingDeptID?: string// [2] 1726 (String)
  OwnerType?: number// [2] 522 (Int)
  OrderOwnershipIndicator?: number// [2] 2679 (Int)
  Volatility?: number// [2] 1188 (Float)
  TimeToExpiration?: number// [2] 1189 (Float)
  RiskFreeRate?: number// [2] 1190 (Float)
  PriceDelta?: number// [2] 811 (Float)
  CoverPrice?: number// [2] 1917 (Float)
  RefOrderID?: string// [2] 1080 (String)
  RefOrderIDSource?: string// [2] 1081 (String)
  RefClOrdID?: string// [2] 1806 (String)
  AuctionType?: number// [2] 1803 (Int)
  AuctionAllocationPct?: number// [2] 1804 (Float)
  LockedQty?: number// [2] 1808 (Float)
  SecondaryLockedQty?: number// [2] 1809 (Float)
  LockType?: number// [2] 1807 (Int)
  ReleaseInstruction?: number// [2] 1810 (Int)
  ReleaseQty?: number// [2] 1811 (Float)
  RelatedHighPrice?: number// [2] 1819 (Float)
  RelatedLowPrice?: number// [2] 1820 (Float)
  RelatedPriceSource?: number// [2] 1821 (Int)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  Parties?: IParties[]// [3] ID.448, Src.447 .. Qual.2376
  TargetParties?: ITargetParties[]// [4] ID.1462, Src.1463 .. Qual.1818
  ContraGrp?: IContraGrp[]// [5] CntraBrkr.375, CntraTrdr.337 .. CntraLegRefID.655
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp[]// [6] ID.1903, Src.1905 .. Scope.2397
  PreAllocGrp?: IPreAllocGrp[]// [7] Acct.79, ActIDSrc.661 .. CurCostBasis.1755
  Instrument?: IInstrument// [8] Sym.55, Sfx.65 .. ExchLookAlike.2603
  FinancingDetails?: IFinancingDetails// [9] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp[]// [10] Sym.311, Sfx.312 .. XID.2631
  PaymentGrp?: IPaymentGrp[]// [11] Typ.139, SubTyp.40993 .. EncTxt.40985
  Stipulations?: IStipulations[]// [12] Typ.233, Val.234
  OrderQtyData?: IOrderQtyData// [13] Qty.38, Cash.152 .. RndMod.469
  TriggeringInstruction?: ITriggeringInstruction// [14] TrgrTyp.1100, TrgrActn.1101 .. TrgrTrdSessSubID.1114
  PegInstructions?: IPegInstructions// [15] OfstVal.211, PegPxTyp.1094 .. PegSecDesc.1099
  DiscretionInstructions?: IDiscretionInstructions// [16] DsctnInst.388, OfstValu.389 .. Scope.846
  StrategyParametersGrp?: IStrategyParametersGrp[]// [17] StrtPrmNme.958, StrtPrmTyp.959, StrtPrmVal.960
  OrderAttributeGrp?: IOrderAttributeGrp[]// [18] Typ.139, Val.2595
  LimitAmts?: ILimitAmts[]// [19] LmtAmtTyp.1631, LastLmtAmt.1632 .. LmtR.2396
  FillsGrp?: IFillsGrp[]// [20] FillExecID.1363, FillPx.1364 .. Yld.1623
  OrderEventGrp?: IOrderEventGrp[]// [21] Typ.40, ID.1797 .. Txt.1802
  CommissionData?: ICommissionData// [22] Comm.12, CommTyp.13 .. FundRenewWaiv.497
  CommissionDataGrp?: ICommissionDataGrp[]// [23] Amt.2640, Typ.2641 .. EncDesc.2652
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [24] Spread.218, Ccy.220 .. SecIDSrc.761
  RelativeValueGrp?: IRelativeValueGrp[]// [25] Typ.139, Val.2531, Side.2532
  YieldData?: IYieldData// [26] Typ.235, Yld.236 .. RedPxTyp.698
  RateSource?: IRateSource[]// [27] RtSrc.1446, RtSrcTyp.1447 .. RefHdng.2412
  ValueChecksGrp?: IValueChecksGrp[]// [28] Typ.1869, Actn.1870
  MatchingInstructions?: IMatchingInstructions[]// [29] Inst.1625, MktID.1673 .. Valu.1627
  DisplayInstruction?: IDisplayInstruction// [30] DisplayQty.1138, SecDspQty.1082 .. RfrshQty.1088
  DisclosureInstructionGrp?: IDisclosureInstructionGrp[]// [31] Typ.139, Inst.1814
  ContAmtGrp?: IContAmtGrp[]// [32] ContAmtTyp.519, ContAmtValu.520, ContAmtCurr.521
  InstrmtLegExecGrp?: IInstrmtLegExecGrp[]// [33] OrdQty.685, Qty.687 .. FillRefID.2421
  MiscFeesGrp?: IMiscFeesGrp[]// [34] Amt.137, Curr.138 .. AmtDue.2217
  TrdRegTimestamps?: ITrdRegTimestamps[]// [35] TS.769, Typ.770 .. InfoBrrID.1727
  TrdRegPublicationGrp?: ITrdRegPublicationGrp[]// [36] Typ.2669, Rsn.2670
  TradePriceConditionGrp?: ITradePriceConditionGrp[]// [37] TrdPxCond.1839
  ThrottleResponse?: IThrottleResponse// [38] ThrttlInst.1685, ThrttlStat.1609, ThrttlCntInd.1686
}
