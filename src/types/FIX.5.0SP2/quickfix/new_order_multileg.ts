import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IPreAllocMlegGrp } from './set/pre_alloc_mleg_grp'
import { IValueChecksGrp } from './set/value_checks_grp'
import { IMatchingInstructions } from './set/matching_instructions'
import { IDisplayInstruction } from './set/display_instruction'
import { IDisclosureInstructionGrp } from './set/disclosure_instruction_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ILegOrdGrp } from './set/leg_ord_grp'
import { IOrderQtyData } from './set/order_qty_data'
import { ITriggeringInstruction } from './set/triggering_instruction'
import { ICommissionData } from './set/commission_data'
import { ICommissionDataGrp } from './set/commission_data_grp'
import { IOrderAttributeGrp } from './set/order_attribute_grp'
import { IPegInstructions } from './set/peg_instructions'
import { IDiscretionInstructions } from './set/discretion_instructions'
import { IStrategyParametersGrp } from './set/strategy_parameters_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface INewOrderMultileg {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ClOrdID: string// [2] 11 (String)
  OrderRequestID?: number// [3] 2422 (Int)
  SecondaryClOrdID?: string// [4] 526 (String)
  ClOrdLinkID?: string// [5] 583 (String)
  Parties?: IParties// [6] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TargetParties?: ITargetParties// [7] NoTargetPartyIDs.1461, TargetPartyID.1462 .. TargetPartySubIDType.2435
  TradeOriginationDate?: Date// [8] 229 (LocalDate)
  TradeDate?: Date// [9] 75 (LocalDate)
  Account?: string// [10] 1 (String)
  AcctIDSource?: number// [11] 660 (Int)
  AccountType?: number// [12] 581 (Int)
  DayBookingInst?: string// [13] 589 (String)
  BookingUnit?: string// [14] 590 (String)
  PreallocMethod?: string// [15] 591 (String)
  AllocID?: string// [16] 70 (String)
  PreAllocMlegGrp?: IPreAllocMlegGrp// [17] NoAllocs.78, AllocAccount.79 .. CurrentCostBasis.1755
  SettlType?: string// [18] 63 (String)
  SettlDate?: Date// [19] 64 (LocalDate)
  CashMargin?: string// [20] 544 (String)
  ClearingFeeIndicator?: string// [21] 635 (String)
  HandlInst?: string// [22] 21 (String)
  ExecInst?: string// [23] 18 (String)
  AuctionInstruction?: number// [24] 1805 (Int)
  MinQty?: number// [25] 110 (Float)
  MinQtyMethod?: number// [26] 1822 (Int)
  MatchIncrement?: number// [27] 1089 (Float)
  MaxPriceLevels?: number// [28] 1090 (Int)
  MaximumPriceDeviation?: number// [29] 2676 (Float)
  ValueChecksGrp?: IValueChecksGrp// [30] NoValueChecks.1868, ValueCheckType.1869, ValueCheckAction.1870
  MatchingInstructions?: IMatchingInstructions// [31] NoMatchInst.1624, MatchInst.1625 .. MatchAttribValue.1627
  SelfMatchPreventionID?: string// [32] 2362 (String)
  SelfMatchPreventionInstruction?: number// [33] 2964 (Int)
  DisplayInstruction?: IDisplayInstruction// [34] DisplayQty.1138, SecondaryDisplayQty.1082 .. RefreshQty.1088
  DisclosureInstructionGrp?: IDisclosureInstructionGrp// [35] NoDisclosureInstructions.1812, DisclosureType.1813, DisclosureInstruction.1814
  MaxFloor?: number// [36] 111 (Float)
  MarketSegmentID?: string// [37] 1300 (String)
  ExDestination?: string// [38] 100 (String)
  ExDestinationIDSource?: string// [39] 1133 (String)
  ExDestinationType?: number// [40] 2704 (Int)
  TrdgSesGrp?: ITrdgSesGrp// [41] NoTradingSessions.386, TradingSessionID.336, TradingSessionSubID.625
  ProcessCode?: string// [42] 81 (String)
  Side: string// [43] 54 (String)
  ShortMarkingExemptIndicator?: boolean// [44] 2102 (Boolean)
  Instrument?: IInstrument// [45] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  UndInstrmtGrp?: IUndInstrmtGrp// [46] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  PrevClosePx?: number// [47] 140 (Float)
  SwapPoints?: number// [48] 1069 (Float)
  LegOrdGrp?: ILegOrdGrp// [49] NoLegs.555, LegSymbol.600 .. LegShortSaleExemptionReason.1689
  LocateReqd?: boolean// [50] 114 (Boolean)
  TransactTime: Date// [51] 60 (UtcTimestamp)
  QtyType?: number// [52] 854 (Int)
  OrderQtyData?: IOrderQtyData// [53] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  OrdType: string// [54] 40 (String)
  MultilegModel?: number// [55] 1377 (Int)
  MultilegPriceMethod?: number// [56] 1378 (Int)
  PriceType?: number// [57] 423 (Int)
  Price?: number// [58] 44 (Float)
  PriceProtectionScope?: string// [59] 1092 (String)
  StopPx?: number// [60] 99 (Float)
  TriggeringInstruction?: ITriggeringInstruction// [61] TriggerType.1100, TriggerAction.1101 .. TriggerTradingSessionSubID.1114
  Currency?: string// [62] 15 (String)
  CurrencyCodeSource?: string// [63] 2897 (String)
  TradePriceNegotiationMethod?: number// [64] 1740 (Int)
  UpfrontPriceType?: number// [65] 1741 (Int)
  UpfrontPrice?: number// [66] 1742 (Float)
  ComplianceID?: string// [67] 376 (String)
  ComplianceText?: string// [68] 2404 (String)
  EncodedComplianceTextLen?: number// [69] 2351 (Length)
  EncodedComplianceText?: Buffer// [70] 2352 (RawData)
  SolicitedFlag?: boolean// [71] 377 (Boolean)
  IOIID?: string// [72] 23 (String)
  QuoteID?: string// [73] 117 (String)
  RefOrderID?: string// [74] 1080 (String)
  RefOrderIDSource?: string// [75] 1081 (String)
  RefClOrdID?: string// [76] 1806 (String)
  TimeInForce?: string// [77] 59 (String)
  EffectiveTime?: Date// [78] 168 (UtcTimestamp)
  ExpireDate?: Date// [79] 432 (LocalDate)
  ExpireTime?: Date// [80] 126 (UtcTimestamp)
  GTBookingInst?: number// [81] 427 (Int)
  ExposureDuration?: number// [82] 1629 (Int)
  ExposureDurationUnit?: number// [83] 1916 (Int)
  CommissionData?: ICommissionData// [84] Commission.12, CommType.13 .. FundRenewWaiv.497
  CommissionDataGrp?: ICommissionDataGrp// [85] NoCommissions.2639, CommissionAmount.2640 .. EncodedCommissionDesc.2652
  OrderCapacity?: string// [86] 528 (String)
  OrderRestrictions?: string// [87] 529 (String)
  TradingCapacity?: number// [88] 1815 (Int)
  PreTradeAnonymity?: boolean// [89] 1091 (Boolean)
  TradePublishIndicator?: number// [90] 1390 (Int)
  CustOrderCapacity?: number// [91] 582 (Int)
  OrderOrigination?: number// [92] 1724 (Int)
  OrderAttributeGrp?: IOrderAttributeGrp// [93] NoOrderAttributes.2593, OrderAttributeType.2594, OrderAttributeValue.2595
  ForexReq?: boolean// [94] 121 (Boolean)
  SettlCurrency?: string// [95] 120 (String)
  SettlCurrencyCodeSource?: string// [96] 2899 (String)
  BookingType?: number// [97] 775 (Int)
  Text?: string// [98] 58 (String)
  EncodedTextLen?: number// [99] 354 (Length)
  EncodedText?: Buffer// [100] 355 (RawData)
  ClearingAccountType?: number// [101] 1816 (Int)
  PositionEffect?: string// [102] 77 (String)
  CoveredOrUncovered?: number// [103] 203 (Int)
  MaxShow?: number// [104] 210 (Float)
  PegInstructions?: IPegInstructions// [105] PegOffsetValue.211, PegPriceType.1094 .. PegSecurityDesc.1099
  DiscretionInstructions?: IDiscretionInstructions// [106] DiscretionInst.388, DiscretionOffsetValue.389 .. DiscretionScope.846
  TargetStrategy?: number// [107] 847 (Int)
  StrategyParametersGrp?: IStrategyParametersGrp// [108] NoStrategyParameters.957, StrategyParameterName.958 .. StrategyParameterValue.960
  TargetStrategyParameters?: string// [109] 848 (String)
  RiskFreeRate?: number// [110] 1190 (Float)
  ParticipationRate?: number// [111] 849 (Float)
  CancellationRights?: string// [112] 480 (String)
  MoneyLaunderingStatus?: string// [113] 481 (String)
  RegistID?: string// [114] 513 (String)
  Designation?: string// [115] 494 (String)
  MultiLegRptTypeReq?: number// [116] 563 (Int)
  ThrottleInst?: number// [117] 1685 (Int)
  AuctionType?: number// [118] 1803 (Int)
  AuctionAllocationPct?: number// [119] 1804 (Float)
  RelatedHighPrice?: number// [120] 1819 (Float)
  RelatedLowPrice?: number// [121] 1820 (Float)
  RelatedPriceSource?: number// [122] 1821 (Int)
  StandardTrailer: IStandardTrailer// [123] SignatureLength.93, Signature.89, CheckSum.10
}
