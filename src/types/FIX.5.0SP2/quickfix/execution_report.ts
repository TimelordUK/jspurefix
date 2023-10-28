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
import { IPriceQualifierGrp } from './set/price_qualifier_grp'
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
import { IRelatedOrderGrp } from './set/related_order_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IExecutionReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  OrderID: string// [3] 37 (String)
  OrderRequestID?: number// [4] 2422 (Int)
  MassOrderRequestID?: string// [5] 2423 (String)
  SecondaryOrderID?: string// [6] 198 (String)
  SecondaryClOrdID?: string// [7] 526 (String)
  SecondaryExecID?: string// [8] 527 (String)
  ClOrdID?: string// [9] 11 (String)
  QuoteMsgID?: string// [10] 1166 (String)
  OrigClOrdID?: string// [11] 41 (String)
  ClOrdLinkID?: string// [12] 583 (String)
  MDEntryID?: string// [13] 278 (String)
  QuoteRespID?: string// [14] 693 (String)
  OrdStatusReqID?: string// [15] 790 (String)
  MassStatusReqID?: string// [16] 584 (String)
  HostCrossID?: string// [17] 961 (String)
  TotNumReports?: number// [18] 911 (Int)
  LastRptRequested?: boolean// [19] 912 (Boolean)
  Parties?: IParties// [20] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TargetParties?: ITargetParties// [21] NoTargetPartyIDs.1461, TargetPartyID.1462 .. TargetPartySubIDType.2435
  TradeOriginationDate?: Date// [22] 229 (LocalDate)
  ContraGrp?: IContraGrp// [23] NoContraBrokers.382, ContraBroker.375 .. ContraLegRefID.655
  ListID?: string// [24] 66 (String)
  CrossID?: string// [25] 548 (String)
  OrigCrossID?: string// [26] 551 (String)
  CrossType?: number// [27] 549 (Int)
  RefRiskLimitCheckID?: string// [28] 2334 (String)
  RefRiskLimitCheckIDType?: number// [29] 2335 (Int)
  TrdMatchID?: string// [30] 880 (String)
  TrdMatchSubID?: string// [31] 1891 (String)
  ExecID: string// [32] 17 (String)
  ExecRefID?: string// [33] 19 (String)
  ExecType: string// [34] 150 (String)
  ExecTypeReason?: number// [35] 2431 (Int)
  OrdStatus: string// [36] 39 (String)
  WorkingIndicator?: boolean// [37] 636 (Boolean)
  CurrentWorkingPrice?: number// [38] 2838 (Float)
  OrdRejReason?: number// [39] 103 (Int)
  RejectText?: string// [40] 1328 (String)
  EncodedRejectTextLen?: number// [41] 1664 (Length)
  EncodedRejectText?: Buffer// [42] 1665 (RawData)
  ExecRestatementReason?: number// [43] 378 (Int)
  AnonymousTradeIndicator?: boolean// [44] 2961 (Boolean)
  AlgorithmicTradeIndicator?: number// [45] 2667 (Int)
  TrdType?: number// [46] 828 (Int)
  TrdSubType?: number// [47] 829 (Int)
  SecondaryTrdType?: number// [48] 855 (Int)
  RegulatoryTransactionType?: number// [49] 2347 (Int)
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp// [50] NoRegulatoryTradeIDs.1907, RegulatoryTradeID.1903 .. RegulatoryTradeIDScope.2397
  PreviouslyReported?: boolean// [51] 570 (Boolean)
  TradeReportingIndicator?: number// [52] 2524 (Int)
  Account?: string// [53] 1 (String)
  AcctIDSource?: number// [54] 660 (Int)
  AccountType?: number// [55] 581 (Int)
  DayBookingInst?: string// [56] 589 (String)
  BookingUnit?: string// [57] 590 (String)
  PreallocMethod?: string// [58] 591 (String)
  AllocID?: string// [59] 70 (String)
  PreAllocGrp?: IPreAllocGrp// [60] NoAllocs.78, AllocAccount.79 .. CurrentCostBasis.1755
  SettlType?: string// [61] 63 (String)
  SettlDate?: Date// [62] 64 (LocalDate)
  MatchType?: string// [63] 574 (String)
  OrderCategory?: string// [64] 1115 (String)
  CashMargin?: string// [65] 544 (String)
  ClearingFeeIndicator?: string// [66] 635 (String)
  Instrument?: IInstrument// [67] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  FinancingDetails?: IFinancingDetails// [68] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [69] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  PaymentGrp?: IPaymentGrp// [70] NoPayments.40212, PaymentType.40213 .. EncodedPaymentText.40985
  Side: string// [71] 54 (String)
  ShortMarkingExemptIndicator?: boolean// [72] 2102 (Boolean)
  ShortSaleExemptionReason?: number// [73] 1688 (Int)
  Stipulations?: IStipulations// [74] NoStipulations.232, StipulationType.233, StipulationValue.234
  QtyType?: number// [75] 854 (Int)
  OrderQtyData?: IOrderQtyData// [76] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  LotType?: string// [77] 1093 (String)
  OrdType?: string// [78] 40 (String)
  PriceType?: number// [79] 423 (Int)
  PriceQualifierGrp?: IPriceQualifierGrp// [80] NoPriceQualifiers.2709, PriceQualifier.2710
  Price?: number// [81] 44 (Float)
  PriceProtectionScope?: string// [82] 1092 (String)
  StopPx?: number// [83] 99 (Float)
  TriggeringInstruction?: ITriggeringInstruction// [84] TriggerType.1100, TriggerAction.1101 .. TriggerTradingSessionSubID.1114
  Triggered?: number// [85] 1823 (Int)
  PegInstructions?: IPegInstructions// [86] PegOffsetValue.211, PegPriceType.1094 .. PegSecurityDesc.1099
  DiscretionInstructions?: IDiscretionInstructions// [87] DiscretionInst.388, DiscretionOffsetValue.389 .. DiscretionScope.846
  PeggedPrice?: number// [88] 839 (Float)
  PeggedRefPrice?: number// [89] 1095 (Float)
  DiscretionPrice?: number// [90] 845 (Float)
  TradePriceNegotiationMethod?: number// [91] 1740 (Int)
  UpfrontPrice?: number// [92] 1742 (Float)
  UpfrontPriceType?: number// [93] 1741 (Int)
  TargetStrategy?: number// [94] 847 (Int)
  StrategyParametersGrp?: IStrategyParametersGrp// [95] NoStrategyParameters.957, StrategyParameterName.958 .. StrategyParameterValue.960
  TargetStrategyParameters?: string// [96] 848 (String)
  ParticipationRate?: number// [97] 849 (Float)
  TargetStrategyPerformance?: number// [98] 850 (Float)
  Currency?: string// [99] 15 (String)
  CurrencyCodeSource?: string// [100] 2897 (String)
  ComplianceID?: string// [101] 376 (String)
  ComplianceText?: string// [102] 2404 (String)
  EncodedComplianceTextLen?: number// [103] 2351 (Length)
  EncodedComplianceText?: Buffer// [104] 2352 (RawData)
  SolicitedFlag?: boolean// [105] 377 (Boolean)
  TimeInForce?: string// [106] 59 (String)
  EffectiveTime?: Date// [107] 168 (UtcTimestamp)
  ExpireDate?: Date// [108] 432 (LocalDate)
  ExpireTime?: Date// [109] 126 (UtcTimestamp)
  ExposureDuration?: number// [110] 1629 (Int)
  ExposureDurationUnit?: number// [111] 1916 (Int)
  ExecInst?: string// [112] 18 (String)
  AuctionInstruction?: number// [113] 1805 (Int)
  AggressorIndicator?: boolean// [114] 1057 (Boolean)
  OrderCapacity?: string// [115] 528 (String)
  OrderRestrictions?: string// [116] 529 (String)
  TradingCapacity?: number// [117] 1815 (Int)
  RegulatoryReportType?: number// [118] 1934 (Int)
  PreTradeAnonymity?: boolean// [119] 1091 (Boolean)
  TradePublishIndicator?: number// [120] 1390 (Int)
  CustOrderCapacity?: number// [121] 582 (Int)
  OrderAttributeGrp?: IOrderAttributeGrp// [122] NoOrderAttributes.2593, OrderAttributeType.2594, OrderAttributeValue.2595
  LastQty?: number// [123] 32 (Float)
  CalculatedCcyLastQty?: number// [124] 1056 (Float)
  LastSwapPoints?: number// [125] 1071 (Float)
  UnderlyingLastQty?: number// [126] 652 (Float)
  LastQtyVariance?: number// [127] 1828 (Float)
  LastPx?: number// [128] 31 (Float)
  UnderlyingLastPx?: number// [129] 651 (Float)
  LastParPx?: number// [130] 669 (Float)
  MidPx?: number// [131] 631 (Float)
  LastSpotRate?: number// [132] 194 (Float)
  LastForwardPoints?: number// [133] 195 (Float)
  LastUpfrontPrice?: number// [134] 1743 (Float)
  ReportingPx?: number// [135] 2750 (Float)
  ReportingQty?: number// [136] 2751 (Float)
  LastMkt?: string// [137] 30 (String)
  VenueType?: string// [138] 1430 (String)
  MarketSegmentID?: string// [139] 1300 (String)
  ExDestination?: string// [140] 100 (String)
  ExDestinationIDSource?: string// [141] 1133 (String)
  ExDestinationType?: number// [142] 2704 (Int)
  TradingSessionID?: string// [143] 336 (String)
  TradingSessionSubID?: string// [144] 625 (String)
  TimeBracket?: string// [145] 943 (String)
  LastCapacity?: string// [146] 29 (String)
  LimitAmts?: ILimitAmts// [147] NoLimitAmts.1630, LimitAmtType.1631 .. LimitRole.2396
  LeavesQty: number// [148] 151 (Float)
  CumQty: number// [149] 14 (Float)
  CxlQty?: number// [150] 84 (Float)
  AvgPx?: number// [151] 6 (Float)
  DayOrderQty?: number// [152] 424 (Float)
  DayCumQty?: number// [153] 425 (Float)
  DayAvgPx?: number// [154] 426 (Float)
  TotNoFills?: number// [155] 1361 (Int)
  LastFragment?: boolean// [156] 893 (Boolean)
  FillsGrp?: IFillsGrp// [157] NoFills.1362, FillExecID.1363 .. Nested4PartySubIDType.1411
  OrderEventGrp?: IOrderEventGrp// [158] NoOrderEvents.1795, OrderEventType.1796 .. OrderEventText.1802
  EventInitiatorType?: string// [159] 2830 (String)
  GTBookingInst?: number// [160] 427 (Int)
  TradeDate?: Date// [161] 75 (LocalDate)
  TransactTime?: Date// [162] 60 (UtcTimestamp)
  ReportToExch?: boolean// [163] 113 (Boolean)
  CommissionData?: ICommissionData// [164] Commission.12, CommType.13 .. FundRenewWaiv.497
  CommissionDataGrp?: ICommissionDataGrp// [165] NoCommissions.2639, CommissionAmount.2640 .. EncodedCommissionDesc.2652
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [166] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  RelativeValueGrp?: IRelativeValueGrp// [167] NoRelativeValues.2529, RelativeValueType.2530 .. RelativeValueSide.2532
  YieldData?: IYieldData// [168] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  GrossTradeAmt?: number// [169] 381 (Float)
  NumDaysInterest?: number// [170] 157 (Int)
  ExDate?: Date// [171] 230 (LocalDate)
  AccruedInterestRate?: number// [172] 158 (Float)
  AccruedInterestAmt?: number// [173] 159 (Float)
  InterestAtMaturity?: number// [174] 738 (Float)
  EndAccruedInterestAmt?: number// [175] 920 (Float)
  StartCash?: number// [176] 921 (Float)
  EndCash?: number// [177] 922 (Float)
  TradedFlatSwitch?: boolean// [178] 258 (Boolean)
  BasisFeatureDate?: Date// [179] 259 (LocalDate)
  BasisFeaturePrice?: number// [180] 260 (Float)
  Concession?: number// [181] 238 (Float)
  TotalTakedown?: number// [182] 237 (Float)
  NetMoney?: number// [183] 118 (Float)
  SettlCurrAmt?: number// [184] 119 (Float)
  SettlCurrency?: string// [185] 120 (String)
  SettlCurrencyCodeSource?: string// [186] 2899 (String)
  RateSource?: IRateSource// [187] NoRateSources.1445, RateSource.1446 .. FXBenchmarkRateFix.2796
  OffshoreIndicator?: number// [188] 2795 (Int)
  SettlCurrFxRate?: number// [189] 155 (Float)
  SettlCurrFxRateCalc?: string// [190] 156 (String)
  HandlInst?: string// [191] 21 (String)
  MinQty?: number// [192] 110 (Float)
  MinQtyMethod?: number// [193] 1822 (Int)
  MatchIncrement?: number// [194] 1089 (Float)
  MaxPriceLevels?: number// [195] 1090 (Int)
  MaximumPriceDeviation?: number// [196] 2676 (Float)
  ValueChecksGrp?: IValueChecksGrp// [197] NoValueChecks.1868, ValueCheckType.1869, ValueCheckAction.1870
  MatchingInstructions?: IMatchingInstructions// [198] NoMatchInst.1624, MatchInst.1625 .. MatchAttribValue.1627
  SelfMatchPreventionID?: string// [199] 2362 (String)
  SelfMatchPreventionInstruction?: number// [200] 2964 (Int)
  CrossedIndicator?: number// [201] 2523 (Int)
  DisplayInstruction?: IDisplayInstruction// [202] DisplayQty.1138, SecondaryDisplayQty.1082 .. RefreshQty.1088
  DisclosureInstructionGrp?: IDisclosureInstructionGrp// [203] NoDisclosureInstructions.1812, DisclosureType.1813, DisclosureInstruction.1814
  MaxFloor?: number// [204] 111 (Float)
  ClearingAccountType?: number// [205] 1816 (Int)
  PositionEffect?: string// [206] 77 (String)
  MaxShow?: number// [207] 210 (Float)
  BookingType?: number// [208] 775 (Int)
  Text?: string// [209] 58 (String)
  EncodedTextLen?: number// [210] 354 (Length)
  EncodedText?: Buffer// [211] 355 (RawData)
  SettlDate2?: Date// [212] 193 (LocalDate)
  OrderQty2?: number// [213] 192 (Float)
  LastForwardPoints2?: number// [214] 641 (Float)
  MultiLegReportingType?: string// [215] 442 (String)
  ContingencyType?: number// [216] 1385 (Int)
  CancellationRights?: string// [217] 480 (String)
  MoneyLaunderingStatus?: string// [218] 481 (String)
  RegistID?: string// [219] 513 (String)
  Designation?: string// [220] 494 (String)
  TransBkdTime?: Date// [221] 483 (UtcTimestamp)
  ExecValuationPoint?: Date// [222] 515 (UtcTimestamp)
  ExecPriceType?: string// [223] 484 (String)
  ExecPriceAdjustment?: number// [224] 485 (Float)
  PriorityIndicator?: number// [225] 638 (Int)
  PriceImprovement?: number// [226] 639 (Float)
  LastLiquidityInd?: number// [227] 851 (Int)
  ContAmtGrp?: IContAmtGrp// [228] NoContAmts.518, ContAmtType.519 .. ContAmtCurr.521
  InstrmtLegExecGrp?: IInstrmtLegExecGrp// [229] NoLegs.555, LegSymbol.600 .. FillRefID.2421
  CopyMsgIndicator?: boolean// [230] 797 (Boolean)
  MiscFeesGrp?: IMiscFeesGrp// [231] NoMiscFees.136, MiscFeeAmt.137 .. MiscFeeDesc.2713
  DividendYield?: number// [232] 1380 (Float)
  ManualOrderIndicator?: boolean// [233] 1028 (Boolean)
  CustDirectedOrder?: boolean// [234] 1029 (Boolean)
  ReceivedDeptID?: string// [235] 1030 (String)
  CustOrderHandlingInst?: string// [236] 1031 (String)
  OrderHandlingInstSource?: number// [237] 1032 (Int)
  OrderOrigination?: number// [238] 1724 (Int)
  ContraOrderOrigination?: number// [239] 2882 (Int)
  OriginatingDeptID?: string// [240] 1725 (String)
  ReceivingDeptID?: string// [241] 1726 (String)
  RoutingArrangmentIndicator?: number// [242] 2883 (Int)
  ContraRoutingArrangmentIndicator?: number// [243] 2884 (Int)
  AffiliatedFirmsTradeIndicator?: boolean// [244] 2525 (Boolean)
  OwnerType?: number// [245] 522 (Int)
  OrderOwnershipIndicator?: number// [246] 2679 (Int)
  TrdRegTimestamps?: ITrdRegTimestamps// [247] NoTrdRegTimestamps.768, TrdRegTimestamp.769 .. NBBOSource.2834
  TrdRegPublicationGrp?: ITrdRegPublicationGrp// [248] NoTrdRegPublications.2668, TrdRegPublicationType.2669, TrdRegPublicationReason.2670
  TradePriceConditionGrp?: ITradePriceConditionGrp// [249] NoTradePriceConditions.1838, TradePriceCondition.1839
  TradeContinuation?: number// [250] 1937 (Int)
  TradeContinuationText?: string// [251] 2374 (String)
  EncodedTradeContinuationTextLen?: number// [252] 2372 (Length)
  EncodedTradeContinuationText?: Buffer// [253] 2371 (RawData)
  Volatility?: number// [254] 1188 (Float)
  TimeToExpiration?: number// [255] 1189 (Float)
  RiskFreeRate?: number// [256] 1190 (Float)
  PriceDelta?: number// [257] 811 (Float)
  CoverPrice?: number// [258] 1917 (Float)
  ThrottleResponse?: IThrottleResponse// [259] ThrottleInst.1685, ThrottleStatus.1609, ThrottleCountIndicator.1686
  RefOrderID?: string// [260] 1080 (String)
  RefOrderIDSource?: string// [261] 1081 (String)
  RefClOrdID?: string// [262] 1806 (String)
  RelatedOrderGrp?: IRelatedOrderGrp// [263] NoOrders.73, RelatedOrderID.2887 .. OrderOriginationFirmID.2835
  AuctionType?: number// [264] 1803 (Int)
  AuctionAllocationPct?: number// [265] 1804 (Float)
  LockedQty?: number// [266] 1808 (Float)
  SecondaryLockedQty?: number// [267] 1809 (Float)
  LockType?: number// [268] 1807 (Int)
  ReleaseInstruction?: number// [269] 1810 (Int)
  ReleaseQty?: number// [270] 1811 (Float)
  RelatedHighPrice?: number// [271] 1819 (Float)
  RelatedLowPrice?: number// [272] 1820 (Float)
  RelatedPriceSource?: number// [273] 1821 (Int)
  StandardTrailer: IStandardTrailer// [274] SignatureLength.93, Signature.89, CheckSum.10
}
