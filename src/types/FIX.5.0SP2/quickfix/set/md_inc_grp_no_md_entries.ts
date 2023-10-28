import { IInstrument } from './instrument'
import { IInstrumentExtension } from './instrument_extension'
import { IFinancingDetails } from './financing_details'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IInstrmtLegGrp } from './instrmt_leg_grp'
import { IRelatedInstrumentGrp } from './related_instrument_grp'
import { IPriceQualifierGrp } from './price_qualifier_grp'
import { IYieldData } from './yield_data'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'
import { IRateSource } from './rate_source'
import { ISecSizesGrp } from './sec_sizes_grp'
import { ITradePriceConditionGrp } from './trade_price_condition_grp'
import { ITrdRegPublicationGrp } from './trd_reg_publication_grp'
import { IRelatedTradeGrp } from './related_trade_grp'
import { IPriceLimits } from './price_limits'
import { IStatsIndGrp } from './stats_ind_grp'
import { IParties } from './parties'

export interface IMDIncGrpNoMDEntries {
  MDUpdateAction: string// [1] 279 (String)
  DeleteReason?: string// [2] 285 (String)
  MDSubBookType?: number// [3] 1173 (Int)
  MarketDepth?: number// [4] 264 (Int)
  MDEntryType?: string// [5] 269 (String)
  MDEntryID?: string// [6] 278 (String)
  MDEntryRefID?: string// [7] 280 (String)
  MDStreamID?: string// [8] 1500 (String)
  Instrument?: IInstrument// [9] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [10] DeliveryForm.668, PctAtRisk.869 .. ReferenceDataDateType.2748
  FinancingDetails?: IFinancingDetails// [11] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [12] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  InstrmtLegGrp?: IInstrmtLegGrp// [13] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  RelatedInstrumentGrp?: IRelatedInstrumentGrp// [14] NoRelatedInstruments.1647, RelatedInstrumentType.1648 .. RelatedToDividendPeriodXIDRef.2417
  FinancialStatus?: string// [15] 291 (String)
  CorporateAction?: string// [16] 292 (String)
  MDEntryPx?: number// [17] 270 (Float)
  PriceType?: number// [18] 423 (Int)
  PriceQualifierGrp?: IPriceQualifierGrp// [19] NoPriceQualifiers.2709, PriceQualifier.2710
  AvgPxIndicator?: number// [20] 819 (Int)
  YieldData?: IYieldData// [21] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [22] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  OrdType?: string// [23] 40 (String)
  Currency?: string// [24] 15 (String)
  CurrencyCodeSource?: string// [25] 2897 (String)
  SettlCurrency?: string// [26] 120 (String)
  SettlCurrencyCodeSource?: string// [27] 2899 (String)
  RateSource?: IRateSource// [28] NoRateSources.1445, RateSource.1446 .. FXBenchmarkRateFix.2796
  MDEntrySize?: number// [29] 271 (Float)
  SecSizesGrp?: ISecSizesGrp// [30] NoOfSecSizes.1177, MDSecSizeType.1178, MDSecSize.1179
  LotType?: string// [31] 1093 (String)
  MDEntryDate?: Date// [32] 272 (UtcDateOnly)
  MDEntryTime?: Date// [33] 273 (UtcTimeOnly)
  TickDirection?: string// [34] 274 (String)
  MDMkt?: string// [35] 275 (String)
  TradingSessionID?: string// [36] 336 (String)
  TradingSessionSubID?: string// [37] 625 (String)
  SecurityTradingStatus?: number// [38] 326 (Int)
  HaltReasonInt?: number// [39] 327 (Int)
  FastMarketIndicator?: boolean// [40] 2447 (Boolean)
  MarketCondition?: number// [41] 2705 (Int)
  QuoteCondition?: string// [42] 276 (String)
  TradeCondition?: string// [43] 277 (String)
  TradePriceConditionGrp?: ITradePriceConditionGrp// [44] NoTradePriceConditions.1838, TradePriceCondition.1839
  AnonymousTradeIndicator?: boolean// [45] 2961 (Boolean)
  AlgorithmicTradeIndicator?: number// [46] 2667 (Int)
  RegulatoryReportType?: number// [47] 1934 (Int)
  MultiJurisdictionReportingIndicator?: number// [48] 2963 (Int)
  TrdType?: number// [49] 828 (Int)
  TrdSubType?: number// [50] 829 (Int)
  SecondaryTrdType?: number// [51] 855 (Int)
  TertiaryTrdType?: number// [52] 2896 (Int)
  ExecMethod?: number// [53] 2405 (Int)
  MatchType?: string// [54] 574 (String)
  OrderCategory?: string// [55] 1115 (String)
  TradePublishIndicator?: number// [56] 1390 (Int)
  TrdRegPublicationGrp?: ITrdRegPublicationGrp// [57] NoTrdRegPublications.2668, TrdRegPublicationType.2669, TrdRegPublicationReason.2670
  IntraFirmTradeIndicator?: boolean// [58] 2373 (Boolean)
  PreviouslyReported?: boolean// [59] 570 (Boolean)
  RelatedTradeGrp?: IRelatedTradeGrp// [60] NoRelatedTrades.1855, RelatedTradeID.1856 .. RelatedTradeQuantity.1860
  MDEntryOriginator?: string// [61] 282 (String)
  LocationID?: string// [62] 283 (String)
  DeskID?: string// [63] 284 (String)
  OpenCloseSettlFlag?: string// [64] 286 (String)
  TimeInForce?: string// [65] 59 (String)
  ExpireDate?: Date// [66] 432 (LocalDate)
  ExpireTime?: Date// [67] 126 (UtcTimestamp)
  ExposureDuration?: number// [68] 1629 (Int)
  ExposureDurationUnit?: number// [69] 1916 (Int)
  MinQty?: number// [70] 110 (Float)
  ExecInst?: string// [71] 18 (String)
  SellerDays?: number// [72] 287 (Int)
  OrderID?: string// [73] 37 (String)
  SecondaryOrderID?: string// [74] 198 (String)
  QuoteEntryID?: string// [75] 299 (String)
  TradeID?: string// [76] 1003 (String)
  StrategyLinkID?: string// [77] 1851 (String)
  MDEntryBuyer?: string// [78] 288 (String)
  MDEntrySeller?: string// [79] 289 (String)
  NumberOfBuyOrders?: number// [80] 2449 (Int)
  NumberOfSellOrders?: number// [81] 2450 (Int)
  NumberOfOrders?: number// [82] 346 (Int)
  MDEntryPositionNo?: number// [83] 290 (Int)
  Scope?: string// [84] 546 (String)
  PriceDelta?: number// [85] 811 (Float)
  NetChgPrevDay?: number// [86] 451 (Float)
  Text?: string// [87] 58 (String)
  EncodedTextLen?: number// [88] 354 (Length)
  EncodedText?: Buffer// [89] 355 (RawData)
  MDPriceLevel?: number// [90] 1023 (Int)
  OrderCapacity?: string// [91] 528 (String)
  MDOriginType?: number// [92] 1024 (Int)
  HighPx?: number// [93] 332 (Float)
  LowPx?: number// [94] 333 (Float)
  FirstPx?: number// [95] 1025 (Float)
  LastPx?: number// [96] 31 (Float)
  DiscountFactor?: number// [97] 1592 (Float)
  TradeVolume?: number// [98] 1020 (Float)
  PriceLimits?: IPriceLimits// [99] PriceLimitType.1306, LowLimitPrice.1148 .. TradingReferencePrice.1150
  MaxPriceVariation?: number// [100] 1143 (Float)
  SettlPriceType?: number// [101] 731 (Int)
  SettlPriceDeterminationMethod?: number// [102] 2451 (Int)
  SettlType?: string// [103] 63 (String)
  SettlDate?: Date// [104] 64 (LocalDate)
  TransBkdTime?: Date// [105] 483 (UtcTimestamp)
  TransactTime?: Date// [106] 60 (UtcTimestamp)
  AggressorTime?: Date// [107] 2445 (UtcTimestamp)
  AggressorSide?: string// [108] 2446 (String)
  MDQuoteType?: number// [109] 1070 (Int)
  RptSeq?: number// [110] 83 (Int)
  DealingCapacity?: string// [111] 1048 (String)
  MDEntrySpotRate?: number// [112] 1026 (Float)
  MDEntryForwardPoints?: number// [113] 1027 (Float)
  StatsIndGrp?: IStatsIndGrp// [114] NoStatsIndicators.1175, StatsType.1176
  Parties?: IParties// [115] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
}
