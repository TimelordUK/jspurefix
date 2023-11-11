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
  MDUpdateAction: string// [1] 279 (String)
  DeleteReason?: string// [1] 285 (String)
  MDSubBookType?: number// [1] 1173 (Int)
  MarketDepth?: number// [1] 264 (Int)
  MDEntryType?: string// [1] 269 (String)
  MDEntryID?: string// [1] 278 (String)
  MDEntryRefID?: string// [1] 280 (String)
  MDStreamID?: string// [1] 1500 (String)
  FinancialStatus?: string// [1] 291 (String)
  CorporateAction?: string// [1] 292 (String)
  MDEntryPx?: number// [1] 270 (Float)
  PriceType?: number// [1] 423 (Int)
  OrdType?: string// [1] 40 (String)
  Currency?: string// [1] 15 (String)
  SettlCurrency?: string// [1] 120 (String)
  MDEntrySize?: number// [1] 271 (Float)
  LotType?: string// [1] 1093 (String)
  MDEntryDate?: Date// [1] 272 (UtcDateOnly)
  MDEntryTime?: Date// [1] 273 (UtcTimeOnly)
  TickDirection?: string// [1] 274 (String)
  MDMkt?: string// [1] 275 (String)
  TradingSessionID?: string// [1] 336 (String)
  TradingSessionSubID?: string// [1] 625 (String)
  SecurityTradingStatus?: number// [1] 326 (Int)
  HaltReason?: number// [1] 327 (Int)
  FastMarketIndicator?: boolean// [1] 2447 (Boolean)
  QuoteCondition?: string// [1] 276 (String)
  TradeCondition?: string// [1] 277 (String)
  AlgorithmicTradeIndicator?: number// [1] 2667 (Int)
  RegulatoryReportType?: number// [1] 1934 (Int)
  TrdType?: number// [1] 828 (Int)
  TrdSubType?: number// [1] 829 (Int)
  ExecMethod?: number// [1] 2405 (Int)
  MatchType?: string// [1] 574 (String)
  OrderCategory?: string// [1] 1115 (String)
  TradePublishIndicator?: number// [1] 1390 (Int)
  PreviouslyReported?: boolean// [1] 570 (Boolean)
  MDEntryOriginator?: string// [1] 282 (String)
  LocationID?: string// [1] 283 (String)
  DeskID?: string// [1] 284 (String)
  OpenCloseSettlFlag?: string// [1] 286 (String)
  TimeInForce?: string// [1] 59 (String)
  ExpireDate?: Date// [1] 432 (LocalDate)
  ExpireTime?: Date// [1] 126 (UtcTimestamp)
  ExposureDuration?: number// [1] 1629 (Int)
  ExposureDurationUnit?: number// [1] 1916 (Int)
  MinQty?: number// [1] 110 (Float)
  ExecInst?: string// [1] 18 (String)
  SellerDays?: number// [1] 287 (Int)
  OrderID?: string// [1] 37 (String)
  SecondaryOrderID?: string// [1] 198 (String)
  QuoteEntryID?: string// [1] 299 (String)
  TradeID?: string// [1] 1003 (String)
  StrategyLinkID?: string// [1] 1851 (String)
  MDEntryBuyer?: string// [1] 288 (String)
  MDEntrySeller?: string// [1] 289 (String)
  NumberOfBuyOrders?: number// [1] 2449 (Int)
  NumberOfSellOrders?: number// [1] 2450 (Int)
  NumberOfOrders?: number// [1] 346 (Int)
  MDEntryPositionNo?: number// [1] 290 (Int)
  Scope?: string// [1] 546 (String)
  PriceDelta?: number// [1] 811 (Float)
  NetChgPrevDay?: number// [1] 451 (Float)
  Text?: string// [1] 58 (String)
  EncodedTextLen?: number// [1] 354 (Length)
  EncodedText?: Buffer// [1] 355 (RawData)
  MDPriceLevel?: number// [1] 1023 (Int)
  OrderCapacity?: string// [1] 528 (String)
  MDOriginType?: number// [1] 1024 (Int)
  HighPx?: number// [1] 332 (Float)
  LowPx?: number// [1] 333 (Float)
  FirstPx?: number// [1] 1025 (Float)
  LastPx?: number// [1] 31 (Float)
  DiscountFactor?: number// [1] 1592 (Float)
  TradeVolume?: number// [1] 1020 (Float)
  SettlPriceType?: number// [1] 731 (Int)
  SettlPriceDeterminationMethod?: number// [1] 2451 (Int)
  SettlType?: string// [1] 63 (String)
  SettlDate?: Date// [1] 64 (LocalDate)
  TransBkdTime?: Date// [1] 483 (UtcTimestamp)
  TransactTime?: Date// [1] 60 (UtcTimestamp)
  AggressorTime?: Date// [1] 2445 (UtcTimestamp)
  AggressorSide?: string// [1] 2446 (String)
  MDQuoteType?: number// [1] 1070 (Int)
  RptSeq?: number// [1] 83 (Int)
  DealingCapacity?: string// [1] 1048 (String)
  MDEntrySpotRate?: number// [1] 1026 (Float)
  MDEntryForwardPoints?: number// [1] 1027 (Float)
  Instrument?: IInstrument// [1] Sym.55, Sfx.65 .. ExchLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [2] DlvryForm.668, PctAtRisk.869
  FinancingDetails?: IFinancingDetails// [3] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp[]// [4] Sym.311, Sfx.312 .. XID.2631
  InstrmtLegGrp?: IInstrmtLegGrp[]// [5] Sym.600, Sfx.601 .. ExchLookAlike.2607
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]// [6] InstrmtTyp.1648, Sym.1649 .. XIDRef.2417
  YieldData?: IYieldData// [7] Typ.235, Yld.236 .. RedPxTyp.698
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [8] Spread.218, Ccy.220 .. SecIDSrc.761
  RateSource?: IRateSource[]// [9] RtSrc.1446, RtSrcTyp.1447 .. RefHdng.2412
  SecSizesGrp?: ISecSizesGrp[]// [10] MDSecSizeType.1178, MDSecSize.1179
  TradePriceConditionGrp?: ITradePriceConditionGrp[]// [11] TrdPxCond.1839
  TrdRegPublicationGrp?: ITrdRegPublicationGrp[]// [12] Typ.2669, Rsn.2670
  RelatedTradeGrp?: IRelatedTradeGrp[]// [13] ID.1856, Src.1857 .. Qty.1860
  StatsIndGrp?: IStatsIndGrp[]// [14] StatsTyp.1176
  Parties?: IParties[]// [15] ID.448, Src.447 .. Qual.2376
}
