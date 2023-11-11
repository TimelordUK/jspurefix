import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IPreAllocGrp } from './set/pre_alloc_grp'
import { IValueChecksGrp } from './set/value_checks_grp'
import { IMatchingInstructions } from './set/matching_instructions'
import { IDisplayInstruction } from './set/display_instruction'
import { IDisclosureInstructionGrp } from './set/disclosure_instruction_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IStipulations } from './set/stipulations'
import { IOrderQtyData } from './set/order_qty_data'
import { ITriggeringInstruction } from './set/triggering_instruction'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { ICommissionData } from './set/commission_data'
import { ICommissionDataGrp } from './set/commission_data_grp'
import { IOrderAttributeGrp } from './set/order_attribute_grp'
import { IRateSource } from './set/rate_source'
import { IPegInstructions } from './set/peg_instructions'
import { IDiscretionInstructions } from './set/discretion_instructions'
import { IStrategyParametersGrp } from './set/strategy_parameters_grp'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { ITrdRegPublicationGrp } from './set/trd_reg_publication_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface INewOrderSingle {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ClOrdID: string// [2] 11 (String)
  OrderRequestID?: number// [3] 2422 (Int)
  SecondaryClOrdID?: string// [4] 526 (String)
  ClOrdLinkID?: string// [5] 583 (String)
  DuplicateClOrdIDIndicator?: boolean// [6] 2829 (Boolean)
  Parties?: IParties// [7] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TargetParties?: ITargetParties// [8] NoTargetPartyIDs.1461, TargetPartyID.1462 .. TargetPartySubIDType.2435
  TradeOriginationDate?: Date// [9] 229 (LocalDate)
  TradeDate?: Date// [10] 75 (LocalDate)
  Account?: string// [11] 1 (String)
  AcctIDSource?: number// [12] 660 (Int)
  AccountType?: number// [13] 581 (Int)
  DayBookingInst?: string// [14] 589 (String)
  BookingUnit?: string// [15] 590 (String)
  PreallocMethod?: string// [16] 591 (String)
  AllocID?: string// [17] 70 (String)
  PreAllocGrp?: IPreAllocGrp// [18] NoAllocs.78, AllocAccount.79 .. CurrentCostBasis.1755
  SettlType?: string// [19] 63 (String)
  SettlDate?: Date// [20] 64 (LocalDate)
  CashMargin?: string// [21] 544 (String)
  ClearingFeeIndicator?: string// [22] 635 (String)
  HandlInst?: string// [23] 21 (String)
  ExecInst?: string// [24] 18 (String)
  AuctionInstruction?: number// [25] 1805 (Int)
  MinQty?: number// [26] 110 (Float)
  MinQtyMethod?: number// [27] 1822 (Int)
  MatchIncrement?: number// [28] 1089 (Float)
  MaxPriceLevels?: number// [29] 1090 (Int)
  MaximumPriceDeviation?: number// [30] 2676 (Float)
  ValueChecksGrp?: IValueChecksGrp// [31] NoValueChecks.1868, ValueCheckType.1869, ValueCheckAction.1870
  MatchingInstructions?: IMatchingInstructions// [32] NoMatchInst.1624, MatchInst.1625 .. MatchAttribValue.1627
  SelfMatchPreventionID?: string// [33] 2362 (String)
  SelfMatchPreventionInstruction?: number// [34] 2964 (Int)
  DisplayInstruction?: IDisplayInstruction// [35] DisplayQty.1138, SecondaryDisplayQty.1082 .. RefreshQty.1088
  DisclosureInstructionGrp?: IDisclosureInstructionGrp// [36] NoDisclosureInstructions.1812, DisclosureType.1813, DisclosureInstruction.1814
  MaxFloor?: number// [37] 111 (Float)
  MarketSegmentID?: string// [38] 1300 (String)
  ExDestination?: string// [39] 100 (String)
  ExDestinationIDSource?: string// [40] 1133 (String)
  ExDestinationType?: number// [41] 2704 (Int)
  TrdgSesGrp?: ITrdgSesGrp// [42] NoTradingSessions.386, TradingSessionID.336, TradingSessionSubID.625
  ProcessCode?: string// [43] 81 (String)
  Instrument?: IInstrument// [44] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  FinancingDetails?: IFinancingDetails// [45] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [46] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  PrevClosePx?: number// [47] 140 (Float)
  Side: string// [48] 54 (String)
  ShortMarkingExemptIndicator?: boolean// [49] 2102 (Boolean)
  ShortSaleExemptionReason?: number// [50] 1688 (Int)
  LocateReqd?: boolean// [51] 114 (Boolean)
  TransactTime: Date// [52] 60 (UtcTimestamp)
  Stipulations?: IStipulations// [53] NoStipulations.232, StipulationType.233, StipulationValue.234
  QtyType?: number// [54] 854 (Int)
  OrderQtyData?: IOrderQtyData// [55] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  OrdType: string// [56] 40 (String)
  PriceType?: number// [57] 423 (Int)
  Price?: number// [58] 44 (Float)
  CurrentWorkingPrice?: number// [59] 2838 (Float)
  PriceProtectionScope?: string// [60] 1092 (String)
  StopPx?: number// [61] 99 (Float)
  TriggeringInstruction?: ITriggeringInstruction// [62] TriggerType.1100, TriggerAction.1101 .. TriggerTradingSessionSubID.1114
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [63] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [64] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  Currency?: string// [65] 15 (String)
  CurrencyCodeSource?: string// [66] 2897 (String)
  TradePriceNegotiationMethod?: number// [67] 1740 (Int)
  UpfrontPriceType?: number// [68] 1741 (Int)
  UpfrontPrice?: number// [69] 1742 (Float)
  ComplianceID?: string// [70] 376 (String)
  ComplianceText?: string// [71] 2404 (String)
  EncodedComplianceTextLen?: number// [72] 2351 (Length)
  EncodedComplianceText?: Buffer// [73] 2352 (RawData)
  SolicitedFlag?: boolean// [74] 377 (Boolean)
  CopyMsgIndicator?: boolean// [75] 797 (Boolean)
  IOIID?: string// [76] 23 (String)
  QuoteID?: string// [77] 117 (String)
  TimeInForce?: string// [78] 59 (String)
  EffectiveTime?: Date// [79] 168 (UtcTimestamp)
  ExpireDate?: Date// [80] 432 (LocalDate)
  ExpireTime?: Date// [81] 126 (UtcTimestamp)
  GTBookingInst?: number// [82] 427 (Int)
  ExposureDuration?: number// [83] 1629 (Int)
  ExposureDurationUnit?: number// [84] 1916 (Int)
  CommissionData?: ICommissionData// [85] Commission.12, CommType.13 .. FundRenewWaiv.497
  CommissionDataGrp?: ICommissionDataGrp// [86] NoCommissions.2639, CommissionAmount.2640 .. EncodedCommissionDesc.2652
  OrderCapacity?: string// [87] 528 (String)
  OrderRestrictions?: string// [88] 529 (String)
  TradingCapacity?: number// [89] 1815 (Int)
  RegulatoryReportType?: number// [90] 1934 (Int)
  PreTradeAnonymity?: boolean// [91] 1091 (Boolean)
  TradePublishIndicator?: number// [92] 1390 (Int)
  CustOrderCapacity?: number// [93] 582 (Int)
  OrderAttributeGrp?: IOrderAttributeGrp// [94] NoOrderAttributes.2593, OrderAttributeType.2594, OrderAttributeValue.2595
  ForexReq?: boolean// [95] 121 (Boolean)
  SettlCurrency?: string// [96] 120 (String)
  SettlCurrencyCodeSource?: string// [97] 2899 (String)
  RateSource?: IRateSource// [98] NoRateSources.1445, RateSource.1446 .. FXBenchmarkRateFix.2796
  OffshoreIndicator?: number// [99] 2795 (Int)
  BookingType?: number// [100] 775 (Int)
  Text?: string// [101] 58 (String)
  EncodedTextLen?: number// [102] 354 (Length)
  EncodedText?: Buffer// [103] 355 (RawData)
  SettlDate2?: Date// [104] 193 (LocalDate)
  OrderQty2?: number// [105] 192 (Float)
  Price2?: number// [106] 640 (Float)
  ClearingAccountType?: number// [107] 1816 (Int)
  PositionEffect?: string// [108] 77 (String)
  CoveredOrUncovered?: number// [109] 203 (Int)
  MaxShow?: number// [110] 210 (Float)
  PegInstructions?: IPegInstructions// [111] PegOffsetValue.211, PegPriceType.1094 .. PegSecurityDesc.1099
  DiscretionInstructions?: IDiscretionInstructions// [112] DiscretionInst.388, DiscretionOffsetValue.389 .. DiscretionScope.846
  TargetStrategy?: number// [113] 847 (Int)
  StrategyParametersGrp?: IStrategyParametersGrp// [114] NoStrategyParameters.957, StrategyParameterName.958 .. StrategyParameterValue.960
  TargetStrategyParameters?: string// [115] 848 (String)
  ParticipationRate?: number// [116] 849 (Float)
  CancellationRights?: string// [117] 480 (String)
  MoneyLaunderingStatus?: string// [118] 481 (String)
  RegistID?: string// [119] 513 (String)
  Designation?: string// [120] 494 (String)
  ManualOrderIndicator?: boolean// [121] 1028 (Boolean)
  CustDirectedOrder?: boolean// [122] 1029 (Boolean)
  ReceivedDeptID?: string// [123] 1030 (String)
  CustOrderHandlingInst?: string// [124] 1031 (String)
  OrderHandlingInstSource?: number// [125] 1032 (Int)
  OrderOrigination?: number// [126] 1724 (Int)
  ContraOrderOrigination?: number// [127] 2882 (Int)
  OriginatingDeptID?: string// [128] 1725 (String)
  ReceivingDeptID?: string// [129] 1726 (String)
  RoutingArrangmentIndicator?: number// [130] 2883 (Int)
  ContraRoutingArrangmentIndicator?: number// [131] 2884 (Int)
  AffiliatedFirmsTradeIndicator?: boolean// [132] 2525 (Boolean)
  OwnerType?: number// [133] 522 (Int)
  TrdRegTimestamps?: ITrdRegTimestamps// [134] NoTrdRegTimestamps.768, TrdRegTimestamp.769 .. NBBOSource.2834
  TrdRegPublicationGrp?: ITrdRegPublicationGrp// [135] NoTrdRegPublications.2668, TrdRegPublicationType.2669, TrdRegPublicationReason.2670
  TradeReportingIndicator?: number// [136] 2524 (Int)
  RefOrderID?: string// [137] 1080 (String)
  RefOrderIDSource?: string// [138] 1081 (String)
  ThrottleInst?: number// [139] 1685 (Int)
  RefClOrdID?: string// [140] 1806 (String)
  AuctionType?: number// [141] 1803 (Int)
  AuctionAllocationPct?: number// [142] 1804 (Float)
  StandardTrailer: IStandardTrailer// [143] SignatureLength.93, Signature.89, CheckSum.10
}
