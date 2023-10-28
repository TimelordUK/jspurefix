import { IPriceQualifierGrp } from './price_qualifier_grp'
import { IYieldData } from './yield_data'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'
import { IRateSource } from './rate_source'
import { ISecSizesGrp } from './sec_sizes_grp'
import { ITradePriceConditionGrp } from './trade_price_condition_grp'
import { ITrdRegPublicationGrp } from './trd_reg_publication_grp'
import { IRelatedTradeGrp } from './related_trade_grp'
import { IPriceLimits } from './price_limits'
import { IParties } from './parties'

export interface IMDFullGrpNoMDEntries {
  MDEntryType: string// [1] 269 (String)
  MDEntryID?: string// [2] 278 (String)
  MDEntryPx?: number// [3] 270 (Float)
  PriceType?: number// [4] 423 (Int)
  PriceQualifierGrp?: IPriceQualifierGrp// [5] NoPriceQualifiers.2709, PriceQualifier.2710
  AvgPxIndicator?: number// [6] 819 (Int)
  YieldData?: IYieldData// [7] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [8] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  OrdType?: string// [9] 40 (String)
  Currency?: string// [10] 15 (String)
  CurrencyCodeSource?: string// [11] 2897 (String)
  SettlCurrency?: string// [12] 120 (String)
  SettlCurrencyCodeSource?: string// [13] 2899 (String)
  RateSource?: IRateSource// [14] NoRateSources.1445, RateSource.1446 .. FXBenchmarkRateFix.2796
  MDEntrySize?: number// [15] 271 (Float)
  SecSizesGrp?: ISecSizesGrp// [16] NoOfSecSizes.1177, MDSecSizeType.1178, MDSecSize.1179
  LotType?: string// [17] 1093 (String)
  MDEntryDate?: Date// [18] 272 (UtcDateOnly)
  MDEntryTime?: Date// [19] 273 (UtcTimeOnly)
  TickDirection?: string// [20] 274 (String)
  MDMkt?: string// [21] 275 (String)
  TradingSessionID?: string// [22] 336 (String)
  TradingSessionSubID?: string// [23] 625 (String)
  SecurityTradingStatus?: number// [24] 326 (Int)
  HaltReasonInt?: number// [25] 327 (Int)
  FastMarketIndicator?: boolean// [26] 2447 (Boolean)
  MarketCondition?: number// [27] 2705 (Int)
  QuoteCondition?: string// [28] 276 (String)
  TradeCondition?: string// [29] 277 (String)
  TradePriceConditionGrp?: ITradePriceConditionGrp// [30] NoTradePriceConditions.1838, TradePriceCondition.1839
  AnonymousTradeIndicator?: boolean// [31] 2961 (Boolean)
  AlgorithmicTradeIndicator?: number// [32] 2667 (Int)
  MDEntryOriginator?: string// [33] 282 (String)
  LocationID?: string// [34] 283 (String)
  DeskID?: string// [35] 284 (String)
  OpenCloseSettlFlag?: string// [36] 286 (String)
  TimeInForce?: string// [37] 59 (String)
  ExpireDate?: Date// [38] 432 (LocalDate)
  ExpireTime?: Date// [39] 126 (UtcTimestamp)
  ExposureDuration?: number// [40] 1629 (Int)
  ExposureDurationUnit?: number// [41] 1916 (Int)
  MinQty?: number// [42] 110 (Float)
  ExecInst?: string// [43] 18 (String)
  SellerDays?: number// [44] 287 (Int)
  OrderID?: string// [45] 37 (String)
  SecondaryOrderID?: string// [46] 198 (String)
  QuoteEntryID?: string// [47] 299 (String)
  TradeID?: string// [48] 1003 (String)
  StrategyLinkID?: string// [49] 1851 (String)
  MDEntryBuyer?: string// [50] 288 (String)
  MDEntrySeller?: string// [51] 289 (String)
  NumberOfBuyOrders?: number// [52] 2449 (Int)
  NumberOfSellOrders?: number// [53] 2450 (Int)
  NumberOfOrders?: number// [54] 346 (Int)
  MDEntryPositionNo?: number// [55] 290 (Int)
  Scope?: string// [56] 546 (String)
  PriceDelta?: number// [57] 811 (Float)
  TrdType?: number// [58] 828 (Int)
  TrdSubType?: number// [59] 829 (Int)
  SecondaryTrdType?: number// [60] 855 (Int)
  TertiaryTrdType?: number// [61] 2896 (Int)
  RegulatoryReportType?: number// [62] 1934 (Int)
  MultiJurisdictionReportingIndicator?: number// [63] 2963 (Int)
  ExecMethod?: number// [64] 2405 (Int)
  MatchType?: string// [65] 574 (String)
  OrderCategory?: string// [66] 1115 (String)
  TradePublishIndicator?: number// [67] 1390 (Int)
  TrdRegPublicationGrp?: ITrdRegPublicationGrp// [68] NoTrdRegPublications.2668, TrdRegPublicationType.2669, TrdRegPublicationReason.2670
  IntraFirmTradeIndicator?: boolean// [69] 2373 (Boolean)
  PreviouslyReported?: boolean// [70] 570 (Boolean)
  RelatedTradeGrp?: IRelatedTradeGrp// [71] NoRelatedTrades.1855, RelatedTradeID.1856 .. RelatedTradeQuantity.1860
  Text?: string// [72] 58 (String)
  EncodedTextLen?: number// [73] 354 (Length)
  EncodedText?: Buffer// [74] 355 (RawData)
  MDPriceLevel?: number// [75] 1023 (Int)
  OrderCapacity?: string// [76] 528 (String)
  MDOriginType?: number// [77] 1024 (Int)
  HighPx?: number// [78] 332 (Float)
  LowPx?: number// [79] 333 (Float)
  FirstPx?: number// [80] 1025 (Float)
  LastPx?: number// [81] 31 (Float)
  DiscountFactor?: number// [82] 1592 (Float)
  TradeVolume?: number// [83] 1020 (Float)
  PriceLimits?: IPriceLimits// [84] PriceLimitType.1306, LowLimitPrice.1148 .. TradingReferencePrice.1150
  MaxPriceVariation?: number// [85] 1143 (Float)
  SettlPriceType?: number// [86] 731 (Int)
  SettlPriceDeterminationMethod?: number// [87] 2451 (Int)
  SettlType?: string// [88] 63 (String)
  SettlDate?: Date// [89] 64 (LocalDate)
  MDQuoteType?: number// [90] 1070 (Int)
  RptSeq?: number// [91] 83 (Int)
  DealingCapacity?: string// [92] 1048 (String)
  MDEntrySpotRate?: number// [93] 1026 (Float)
  MDEntryForwardPoints?: number// [94] 1027 (Float)
  Parties?: IParties// [95] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  AggressorTime?: Date// [96] 2445 (UtcTimestamp)
  AggressorSide?: string// [97] 2446 (String)
  LegRefID?: string// [98] 654 (String)
}
