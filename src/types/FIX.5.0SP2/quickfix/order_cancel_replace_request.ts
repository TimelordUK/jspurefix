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
import { IPegInstructions } from './set/peg_instructions'
import { IDiscretionInstructions } from './set/discretion_instructions'
import { IStrategyParametersGrp } from './set/strategy_parameters_grp'
import { ICommissionData } from './set/commission_data'
import { ICommissionDataGrp } from './set/commission_data_grp'
import { IOrderAttributeGrp } from './set/order_attribute_grp'
import { IRateSource } from './set/rate_source'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { IStandardTrailer } from './set/standard_trailer'

export interface IOrderCancelReplaceRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrderID?: string// [2] 37 (String)
  OrderRequestID?: number// [3] 2422 (Int)
  Parties?: IParties// [4] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TargetParties?: ITargetParties// [5] NoTargetPartyIDs.1461, TargetPartyID.1462 .. TargetPartySubIDType.2435
  TradeOriginationDate?: Date// [6] 229 (LocalDate)
  TradeDate?: Date// [7] 75 (LocalDate)
  OrigClOrdID?: string// [8] 41 (String)
  ClOrdID: string// [9] 11 (String)
  SecondaryClOrdID?: string// [10] 526 (String)
  ClOrdLinkID?: string// [11] 583 (String)
  DuplicateClOrdIDIndicator?: boolean// [12] 2829 (Boolean)
  ListID?: string// [13] 66 (String)
  OrigOrdModTime?: Date// [14] 586 (UtcTimestamp)
  Account?: string// [15] 1 (String)
  AcctIDSource?: number// [16] 660 (Int)
  AccountType?: number// [17] 581 (Int)
  DayBookingInst?: string// [18] 589 (String)
  BookingUnit?: string// [19] 590 (String)
  PreallocMethod?: string// [20] 591 (String)
  AllocID?: string// [21] 70 (String)
  PreAllocGrp?: IPreAllocGrp// [22] NoAllocs.78, AllocAccount.79 .. CurrentCostBasis.1755
  SettlType?: string// [23] 63 (String)
  SettlDate?: Date// [24] 64 (LocalDate)
  CashMargin?: string// [25] 544 (String)
  ClearingFeeIndicator?: string// [26] 635 (String)
  HandlInst?: string// [27] 21 (String)
  ExecInst?: string// [28] 18 (String)
  AuctionInstruction?: number// [29] 1805 (Int)
  MinQty?: number// [30] 110 (Float)
  MinQtyMethod?: number// [31] 1822 (Int)
  MatchIncrement?: number// [32] 1089 (Float)
  MaxPriceLevels?: number// [33] 1090 (Int)
  MaximumPriceDeviation?: number// [34] 2676 (Float)
  ValueChecksGrp?: IValueChecksGrp// [35] NoValueChecks.1868, ValueCheckType.1869, ValueCheckAction.1870
  MatchingInstructions?: IMatchingInstructions// [36] NoMatchInst.1624, MatchInst.1625 .. MatchAttribValue.1627
  SelfMatchPreventionID?: string// [37] 2362 (String)
  SelfMatchPreventionInstruction?: number// [38] 2964 (Int)
  DisplayInstruction?: IDisplayInstruction// [39] DisplayQty.1138, SecondaryDisplayQty.1082 .. RefreshQty.1088
  DisclosureInstructionGrp?: IDisclosureInstructionGrp// [40] NoDisclosureInstructions.1812, DisclosureType.1813, DisclosureInstruction.1814
  MaxFloor?: number// [41] 111 (Float)
  MarketSegmentID?: string// [42] 1300 (String)
  ExDestination?: string// [43] 100 (String)
  ExDestinationIDSource?: string// [44] 1133 (String)
  ExDestinationType?: number// [45] 2704 (Int)
  TrdgSesGrp?: ITrdgSesGrp// [46] NoTradingSessions.386, TradingSessionID.336, TradingSessionSubID.625
  Instrument?: IInstrument// [47] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  FinancingDetails?: IFinancingDetails// [48] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [49] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  Side: string// [50] 54 (String)
  ShortMarkingExemptIndicator?: boolean// [51] 2102 (Boolean)
  ShortSaleExemptionReason?: number// [52] 1688 (Int)
  TransactTime: Date// [53] 60 (UtcTimestamp)
  Stipulations?: IStipulations// [54] NoStipulations.232, StipulationType.233, StipulationValue.234
  QtyType?: number// [55] 854 (Int)
  OrderQtyData?: IOrderQtyData// [56] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  OrdType: string// [57] 40 (String)
  PriceType?: number// [58] 423 (Int)
  Price?: number// [59] 44 (Float)
  CurrentWorkingPrice?: number// [60] 2838 (Float)
  PriceProtectionScope?: string// [61] 1092 (String)
  StopPx?: number// [62] 99 (Float)
  TriggeringInstruction?: ITriggeringInstruction// [63] TriggerType.1100, TriggerAction.1101 .. TriggerTradingSessionSubID.1114
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [64] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [65] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  PegInstructions?: IPegInstructions// [66] PegOffsetValue.211, PegPriceType.1094 .. PegSecurityDesc.1099
  DiscretionInstructions?: IDiscretionInstructions// [67] DiscretionInst.388, DiscretionOffsetValue.389 .. DiscretionScope.846
  TargetStrategy?: number// [68] 847 (Int)
  StrategyParametersGrp?: IStrategyParametersGrp// [69] NoStrategyParameters.957, StrategyParameterName.958 .. StrategyParameterValue.960
  TargetStrategyParameters?: string// [70] 848 (String)
  ParticipationRate?: number// [71] 849 (Float)
  ComplianceID?: string// [72] 376 (String)
  ComplianceText?: string// [73] 2404 (String)
  EncodedComplianceTextLen?: number// [74] 2351 (Length)
  EncodedComplianceText?: Buffer// [75] 2352 (RawData)
  SolicitedFlag?: boolean// [76] 377 (Boolean)
  Currency?: string// [77] 15 (String)
  CurrencyCodeSource?: string// [78] 2897 (String)
  TimeInForce?: string// [79] 59 (String)
  EffectiveTime?: Date// [80] 168 (UtcTimestamp)
  ExpireDate?: Date// [81] 432 (LocalDate)
  ExpireTime?: Date// [82] 126 (UtcTimestamp)
  GTBookingInst?: number// [83] 427 (Int)
  ExposureDuration?: number// [84] 1629 (Int)
  ExposureDurationUnit?: number// [85] 1916 (Int)
  CommissionData?: ICommissionData// [86] Commission.12, CommType.13 .. FundRenewWaiv.497
  CommissionDataGrp?: ICommissionDataGrp// [87] NoCommissions.2639, CommissionAmount.2640 .. EncodedCommissionDesc.2652
  OrderCapacity?: string// [88] 528 (String)
  OrderRestrictions?: string// [89] 529 (String)
  TradingCapacity?: number// [90] 1815 (Int)
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
  LocateReqd?: boolean// [111] 114 (Boolean)
  CancellationRights?: string// [112] 480 (String)
  MoneyLaunderingStatus?: string// [113] 481 (String)
  RegistID?: string// [114] 513 (String)
  Designation?: string// [115] 494 (String)
  ManualOrderIndicator?: boolean// [116] 1028 (Boolean)
  CustDirectedOrder?: boolean// [117] 1029 (Boolean)
  ReceivedDeptID?: string// [118] 1030 (String)
  CustOrderHandlingInst?: string// [119] 1031 (String)
  OrderHandlingInstSource?: number// [120] 1032 (Int)
  OrderOrigination?: number// [121] 1724 (Int)
  ContraOrderOrigination?: number// [122] 2882 (Int)
  OriginatingDeptID?: string// [123] 1725 (String)
  ReceivingDeptID?: string// [124] 1726 (String)
  RoutingArrangmentIndicator?: number// [125] 2883 (Int)
  ContraRoutingArrangmentIndicator?: number// [126] 2884 (Int)
  OwnerType?: number// [127] 522 (Int)
  OrderOwnershipIndicator?: number// [128] 2679 (Int)
  TrdRegTimestamps?: ITrdRegTimestamps// [129] NoTrdRegTimestamps.768, TrdRegTimestamp.769 .. NBBOSource.2834
  ThrottleInst?: number// [130] 1685 (Int)
  AuctionType?: number// [131] 1803 (Int)
  AuctionAllocationPct?: number// [132] 1804 (Float)
  ReleaseInstruction?: number// [133] 1810 (Int)
  ReleaseQty?: number// [134] 1811 (Float)
  StandardTrailer: IStandardTrailer// [135] SignatureLength.93, Signature.89, CheckSum.10
}
