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

export interface IMultilegOrderCancelReplace {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrderID?: string// [2] 37 (String)
  OrderRequestID?: number// [3] 2422 (Int)
  OrigClOrdID?: string// [4] 41 (String)
  ClOrdID?: string// [5] 11 (String)
  SecondaryClOrdID?: string// [6] 526 (String)
  ClOrdLinkID?: string// [7] 583 (String)
  OrigOrdModTime?: Date// [8] 586 (UtcTimestamp)
  Parties?: IParties// [9] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TargetParties?: ITargetParties// [10] NoTargetPartyIDs.1461, TargetPartyID.1462 .. TargetPartySubIDType.2435
  TradeOriginationDate?: Date// [11] 229 (LocalDate)
  TradeDate?: Date// [12] 75 (LocalDate)
  Account?: string// [13] 1 (String)
  AcctIDSource?: number// [14] 660 (Int)
  AccountType?: number// [15] 581 (Int)
  DayBookingInst?: string// [16] 589 (String)
  BookingUnit?: string// [17] 590 (String)
  PreallocMethod?: string// [18] 591 (String)
  AllocID?: string// [19] 70 (String)
  PreAllocMlegGrp?: IPreAllocMlegGrp// [20] NoAllocs.78, AllocAccount.79 .. CurrentCostBasis.1755
  SettlType?: string// [21] 63 (String)
  SettlDate?: Date// [22] 64 (LocalDate)
  CashMargin?: string// [23] 544 (String)
  ClearingFeeIndicator?: string// [24] 635 (String)
  HandlInst?: string// [25] 21 (String)
  ExecInst?: string// [26] 18 (String)
  AuctionInstruction?: number// [27] 1805 (Int)
  MinQty?: number// [28] 110 (Float)
  MinQtyMethod?: number// [29] 1822 (Int)
  MatchIncrement?: number// [30] 1089 (Float)
  MaxPriceLevels?: number// [31] 1090 (Int)
  MaximumPriceDeviation?: number// [32] 2676 (Float)
  ValueChecksGrp?: IValueChecksGrp// [33] NoValueChecks.1868, ValueCheckType.1869, ValueCheckAction.1870
  MatchingInstructions?: IMatchingInstructions// [34] NoMatchInst.1624, MatchInst.1625 .. MatchAttribValue.1627
  SelfMatchPreventionID?: string// [35] 2362 (String)
  SelfMatchPreventionInstruction?: number// [36] 2964 (Int)
  DisplayInstruction?: IDisplayInstruction// [37] DisplayQty.1138, SecondaryDisplayQty.1082 .. RefreshQty.1088
  DisclosureInstructionGrp?: IDisclosureInstructionGrp// [38] NoDisclosureInstructions.1812, DisclosureType.1813, DisclosureInstruction.1814
  MaxFloor?: number// [39] 111 (Float)
  MarketSegmentID?: string// [40] 1300 (String)
  ExDestination?: string// [41] 100 (String)
  ExDestinationIDSource?: string// [42] 1133 (String)
  ExDestinationType?: number// [43] 2704 (Int)
  TrdgSesGrp?: ITrdgSesGrp// [44] NoTradingSessions.386, TradingSessionID.336, TradingSessionSubID.625
  ProcessCode?: string// [45] 81 (String)
  Side: string// [46] 54 (String)
  ShortMarkingExemptIndicator?: boolean// [47] 2102 (Boolean)
  Instrument?: IInstrument// [48] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  UndInstrmtGrp?: IUndInstrmtGrp// [49] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  PrevClosePx?: number// [50] 140 (Float)
  SwapPoints?: number// [51] 1069 (Float)
  LegOrdGrp?: ILegOrdGrp// [52] NoLegs.555, LegSymbol.600 .. LegShortSaleExemptionReason.1689
  LocateReqd?: boolean// [53] 114 (Boolean)
  TransactTime: Date// [54] 60 (UtcTimestamp)
  QtyType?: number// [55] 854 (Int)
  OrderQtyData?: IOrderQtyData// [56] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  OrdType: string// [57] 40 (String)
  MultilegModel?: number// [58] 1377 (Int)
  MultilegPriceMethod?: number// [59] 1378 (Int)
  PriceType?: number// [60] 423 (Int)
  Price?: number// [61] 44 (Float)
  PriceProtectionScope?: string// [62] 1092 (String)
  StopPx?: number// [63] 99 (Float)
  TriggeringInstruction?: ITriggeringInstruction// [64] TriggerType.1100, TriggerAction.1101 .. TriggerTradingSessionSubID.1114
  Currency?: string// [65] 15 (String)
  CurrencyCodeSource?: string// [66] 2897 (String)
  ComplianceID?: string// [67] 376 (String)
  ComplianceText?: string// [68] 2404 (String)
  EncodedComplianceTextLen?: number// [69] 2351 (Length)
  EncodedComplianceText?: Buffer// [70] 2352 (RawData)
  SolicitedFlag?: boolean// [71] 377 (Boolean)
  IOIID?: string// [72] 23 (String)
  QuoteID?: string// [73] 117 (String)
  TimeInForce?: string// [74] 59 (String)
  EffectiveTime?: Date// [75] 168 (UtcTimestamp)
  ExpireDate?: Date// [76] 432 (LocalDate)
  ExpireTime?: Date// [77] 126 (UtcTimestamp)
  GTBookingInst?: number// [78] 427 (Int)
  ExposureDuration?: number// [79] 1629 (Int)
  ExposureDurationUnit?: number// [80] 1916 (Int)
  CommissionData?: ICommissionData// [81] Commission.12, CommType.13 .. FundRenewWaiv.497
  CommissionDataGrp?: ICommissionDataGrp// [82] NoCommissions.2639, CommissionAmount.2640 .. EncodedCommissionDesc.2652
  OrderCapacity?: string// [83] 528 (String)
  OrderRestrictions?: string// [84] 529 (String)
  TradingCapacity?: number// [85] 1815 (Int)
  PreTradeAnonymity?: boolean// [86] 1091 (Boolean)
  TradePublishIndicator?: number// [87] 1390 (Int)
  CustOrderCapacity?: number// [88] 582 (Int)
  OrderOrigination?: number// [89] 1724 (Int)
  OrderAttributeGrp?: IOrderAttributeGrp// [90] NoOrderAttributes.2593, OrderAttributeType.2594, OrderAttributeValue.2595
  ForexReq?: boolean// [91] 121 (Boolean)
  SettlCurrency?: string// [92] 120 (String)
  SettlCurrencyCodeSource?: string// [93] 2899 (String)
  BookingType?: number// [94] 775 (Int)
  Text?: string// [95] 58 (String)
  EncodedTextLen?: number// [96] 354 (Length)
  EncodedText?: Buffer// [97] 355 (RawData)
  ClearingAccountType?: number// [98] 1816 (Int)
  PositionEffect?: string// [99] 77 (String)
  CoveredOrUncovered?: number// [100] 203 (Int)
  MaxShow?: number// [101] 210 (Float)
  PegInstructions?: IPegInstructions// [102] PegOffsetValue.211, PegPriceType.1094 .. PegSecurityDesc.1099
  DiscretionInstructions?: IDiscretionInstructions// [103] DiscretionInst.388, DiscretionOffsetValue.389 .. DiscretionScope.846
  TargetStrategy?: number// [104] 847 (Int)
  StrategyParametersGrp?: IStrategyParametersGrp// [105] NoStrategyParameters.957, StrategyParameterName.958 .. StrategyParameterValue.960
  TargetStrategyParameters?: string// [106] 848 (String)
  RiskFreeRate?: number// [107] 1190 (Float)
  ParticipationRate?: number// [108] 849 (Float)
  CancellationRights?: string// [109] 480 (String)
  MoneyLaunderingStatus?: string// [110] 481 (String)
  RegistID?: string// [111] 513 (String)
  Designation?: string// [112] 494 (String)
  OwnerType?: number// [113] 522 (Int)
  OrderOwnershipIndicator?: number// [114] 2679 (Int)
  MultiLegRptTypeReq?: number// [115] 563 (Int)
  ThrottleInst?: number// [116] 1685 (Int)
  AuctionType?: number// [117] 1803 (Int)
  AuctionAllocationPct?: number// [118] 1804 (Float)
  RelatedHighPrice?: number// [119] 1819 (Float)
  RelatedLowPrice?: number// [120] 1820 (Float)
  RelatedPriceSource?: number// [121] 1821 (Int)
  StandardTrailer: IStandardTrailer// [122] SignatureLength.93, Signature.89, CheckSum.10
}
