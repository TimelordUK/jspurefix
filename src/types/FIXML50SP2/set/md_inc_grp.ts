import { IInstrument } from './instrument'
import { IInstrumentExtension } from './instrument_extension'
import { IFinancingDetails } from './financing_details'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IInstrmtLegGrp } from './instrmt_leg_grp'
import { IRelatedInstrumentGrp } from './related_instrument_grp'
import { IYieldData } from './yield_data'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'
import { IRateSource } from './rate_source'
import { ISecSizesGrp } from './sec_sizes_grp'
import { ITradePriceConditionGrp } from './trade_price_condition_grp'
import { ITrdRegPublicationGrp } from './trd_reg_publication_grp'
import { IRelatedTradeGrp } from './related_trade_grp'
import { IStatsIndGrp } from './stats_ind_grp'
import { IParties } from './parties'

export interface IMDIncGrp {
  MDUpdateAction: string// 279
  DeleteReason?: string// 285
  MDSubBookType?: number// 1173
  MarketDepth?: number// 264
  UnderlyingReturnRateValuationDateType?: number// 43073
  MDEntryID?: string// 278
  EntitlementRefID?: string// 1885
  MDStreamID?: string// 1500
  FinancialStatus?: string// 291
  CorporateAction?: string// 292
  UnderlyingReturnRatePrice?: number// 43066
  UnderlyingReturnRatePriceType?: number// 43068
  OrdType?: string// 40
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingProvisionCashSettlCurrency?: string// 42167
  MDEntrySize?: number// 271
  LotType?: string// 1093
  UnderlyingSettlMethodElectionDateAdjusted?: Date// 43082
  UnderlyingProvisionCashSettlValueTime?: string// 42104
  TickDirection?: string// 274
  MDMkt?: string// 275
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  MDSecurityTradingStatus?: number// 1682
  MDHaltReason?: number// 1684
  FastMarketIndicator?: string// 2447
  QuoteCondition?: string// 276
  TradeCondition?: string// 277
  AlgorithmicTradeIndicator?: number// 2667
  RegulatoryReportType?: number// 1934
  TrdType?: number// 828
  SideTrdSubTyp?: number// 1008
  ExecMethod?: number// 2405
  MatchType?: string// 574
  OrderCategory?: string// 1115
  TradePublishIndicator?: number// 1390
  PreviouslyReported?: string// 570
  MDEntryOriginator?: string// 282
  LocationID?: string// 283
  DeskID?: string// 284
  OpenCloseSettlFlag?: string// 286
  TimeInForce?: string// 59
  ExpireDate?: Date// 432
  ExpireTime?: Date// 126
  ExposureDuration?: number// 1629
  ExposureDurationUnit?: number// 1916
  MinQty?: number// 110
  ExecInst?: string// 18
  SellerDays?: number// 287
  NotAffectedOrderID?: string// 1371
  NotAffSecondaryOrderID?: string// 1825
  QuoteEntryID?: string// 299
  LegTradeID?: string// 1894
  StrategyLinkID?: string// 1851
  UnderlyingProtectionTermBuyerNotifies?: string// 42072
  UnderlyingProtectionTermSellerNotifies?: string// 42071
  NumberOfBuyOrders?: number// 2449
  NumberOfSellOrders?: number// 2450
  NumberOfOrders?: number// 346
  MDEntryPositionNo?: number// 290
  MDStatisticScope?: number// 2457
  PriceDelta?: string// 811
  NetChgPrevDay?: string// 451
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  MDPriceLevel?: number// 1023
  OrderCapacity?: string// 528
  MDOriginType?: number// 1024
  HighPx?: number// 332
  LowPx?: number// 333
  FirstPx?: number// 1025
  LegLastPx?: number// 637
  PaymentDiscountFactor?: string// 40224
  TradeVolume?: number// 1020
  SettlPriceType?: number// 731
  SettlPriceDeterminationMethod?: number// 2451
  InstrumentScopeSettlType?: string// 1557
  LegSettlDate?: Date// 588
  TransBkdTime?: Date// 483
  RelSymTransactTime?: Date// 1504
  AggressorTime?: Date// 2445
  AggressorSide?: string// 2446
  MDQuoteType?: number// 1070
  RptSeq?: number// 83
  DealingCapacity?: string// 1048
  MDEntrySpotRate?: string// 1026
  MDEntryForwardPoints?: string// 1027
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
  InstrmtLegGrp?: IInstrmtLegGrp[]
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]
  YieldData?: IYieldData
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  RateSource?: IRateSource[]
  SecSizesGrp?: ISecSizesGrp[]
  TradePriceConditionGrp?: ITradePriceConditionGrp[]
  TrdRegPublicationGrp?: ITrdRegPublicationGrp[]
  RelatedTradeGrp?: IRelatedTradeGrp[]
  StatsIndGrp?: IStatsIndGrp[]
  Parties?: IParties[]
}
