import { IYieldData } from './yield_data'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'
import { IRateSource } from './rate_source'
import { ISecSizesGrp } from './sec_sizes_grp'
import { ITradePriceConditionGrp } from './trade_price_condition_grp'
import { ITrdRegPublicationGrp } from './trd_reg_publication_grp'
import { IRelatedTradeGrp } from './related_trade_grp'
import { IParties } from './parties'

export interface IMDFullGrp {
  MDEntryType: string// 269
  MDEntryID?: string// 278
  MDEntryPx?: number// 270
  PriceType?: number// 423
  OrdType?: string// 40
  Currency?: string// 15
  SettlCurrency?: string// 120
  MDEntrySize?: number// 271
  LotType?: string// 1093
  MDEntryDate?: Date// 272
  MDEntryTime?: Date// 273
  TickDirection?: string// 274
  MDMkt?: string// 275
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  MDSecurityTradingStatus?: number// 1682
  MDHaltReason?: number// 1684
  FastMarketIndicator?: boolean// 2447
  QuoteCondition?: string// 276
  TradeCondition?: string// 277
  AlgorithmicTradeIndicator?: number// 2667
  MDEntryOriginator?: string// 282
  LocationID?: string// 283
  DeskID?: string// 284
  DerivativeSettleOnOpenFlag?: string// 1254
  TimeInForce?: string// 59
  ExpireDate?: Date// 432
  ExpireTime?: Date// 126
  ExposureDuration?: number// 1629
  ExposureDurationUnit?: number// 1916
  MinQty?: number// 110
  ExecInst?: string// 18
  SellerDays?: number// 287
  OrderID?: string// 37
  SecondaryOrderID?: string// 198
  QuoteEntryID?: string// 299
  TradeID?: string// 1003
  StrategyLinkID?: string// 1851
  MDEntryBuyer?: string// 288
  MDEntrySeller?: string// 289
  NumberOfBuyOrders?: number// 2449
  NumberOfSellOrders?: number// 2450
  NumberOfOrders?: number// 346
  MDEntryPositionNo?: number// 290
  MDStatisticScope?: number// 2457
  PriceDelta?: number// 811
  TrdType?: number// 828
  SideTrdSubTyp?: number// 1008
  RegulatoryReportType?: number// 1934
  ExecMethod?: number// 2405
  MatchType?: string// 574
  OrderCategory?: string// 1115
  TradePublishIndicator?: number// 1390
  PreviouslyReported?: boolean// 570
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  MDPriceLevel?: number// 1023
  OrderCapacity?: string// 528
  MDOriginType?: number// 1024
  HighPx?: number// 332
  LowPx?: number// 333
  FirstPx?: number// 1025
  LastPx?: number// 31
  DiscountFactor?: number// 1592
  TradeVolume?: number// 1020
  SettlPriceType?: number// 731
  SettlPriceDeterminationMethod?: number// 2451
  InstrumentScopeSettlType?: string// 1557
  SettlDate?: Date// 64
  MDQuoteType?: number// 1070
  RptSeq?: number// 83
  DealingCapacity?: string// 1048
  MDEntrySpotRate?: number// 1026
  MDEntryForwardPoints?: number// 1027
  AggressorTime?: Date// 2445
  AggressorSide?: string// 2446
  LegRefID?: string// 654
  YieldData?: IYieldData
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  RateSource?: IRateSource[]
  SecSizesGrp?: ISecSizesGrp[]
  TradePriceConditionGrp?: ITradePriceConditionGrp[]
  TrdRegPublicationGrp?: ITrdRegPublicationGrp[]
  RelatedTradeGrp?: IRelatedTradeGrp[]
  Parties?: IParties[]
}
