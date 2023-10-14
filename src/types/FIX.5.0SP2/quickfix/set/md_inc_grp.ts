import { IInstrument } from './instrument'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IInstrmtLegGrp } from './instrmt_leg_grp'
import { IYieldData } from './yield_data'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'
import { ISecSizesGrp } from './sec_sizes_grp'
import { IStatsIndGrp } from './stats_ind_grp'
import { IParties } from './parties'
import { IRateSource } from './rate_source'

export interface IMDIncGrp {
  MDUpdateAction: string// [1] 279 (String)
  DeleteReason?: string// [2] 285 (String)
  MDSubBookType?: number// [3] 1173 (Int)
  MarketDepth?: number// [4] 264 (Int)
  MDEntryType?: string// [5] 269 (String)
  MDEntryID?: string// [6] 278 (String)
  MDEntryRefID?: string// [7] 280 (String)
  Instrument?: IInstrument// [8] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  UndInstrmtGrp?: IUndInstrmtGrp// [9] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  InstrmtLegGrp?: IInstrmtLegGrp// [10] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  FinancialStatus?: string// [11] 291 (String)
  CorporateAction?: string// [12] 292 (String)
  MDEntryPx?: number// [13] 270 (Float)
  PriceType?: number// [14] 423 (Int)
  YieldData?: IYieldData// [15] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [16] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  OrdType?: string// [17] 40 (String)
  Currency?: string// [18] 15 (String)
  MDEntrySize?: number// [19] 271 (Float)
  SecSizesGrp?: ISecSizesGrp[]// [20] MDSecSizeType.1178, MDSecSize.1179
  LotType?: string// [21] 1093 (String)
  MDEntryDate?: Date// [22] 272 (UtcDateOnly)
  MDEntryTime?: string// [23] 273 (String)
  TickDirection?: string// [24] 274 (String)
  MDMkt?: string// [25] 275 (String)
  TradingSessionID?: string// [26] 336 (String)
  TradingSessionSubID?: string// [27] 625 (String)
  SecurityTradingStatus?: number// [28] 326 (Int)
  HaltReason?: number// [29] 327 (Int)
  QuoteCondition?: string// [30] 276 (String)
  TradeCondition?: string// [31] 277 (String)
  TrdType?: number// [32] 828 (Int)
  MatchType?: string// [33] 574 (String)
  MDEntryOriginator?: string// [34] 282 (String)
  LocationID?: string// [35] 283 (String)
  DeskID?: string// [36] 284 (String)
  OpenCloseSettlFlag?: string// [37] 286 (String)
  TimeInForce?: string// [38] 59 (String)
  ExpireDate?: Date// [39] 432 (LocalDate)
  ExpireTime?: Date// [40] 126 (UtcTimestamp)
  MinQty?: number// [41] 110 (Float)
  ExecInst?: string// [42] 18 (String)
  SellerDays?: number// [43] 287 (Int)
  OrderID?: string// [44] 37 (String)
  SecondaryOrderID?: string// [45] 198 (String)
  QuoteEntryID?: string// [46] 299 (String)
  TradeID?: string// [47] 1003 (String)
  MDEntryBuyer?: string// [48] 288 (String)
  MDEntrySeller?: string// [49] 289 (String)
  NumberOfOrders?: number// [50] 346 (Int)
  MDEntryPositionNo?: number// [51] 290 (Int)
  Scope?: string// [52] 546 (String)
  PriceDelta?: number// [53] 811 (Float)
  NetChgPrevDay?: number// [54] 451 (Float)
  Text?: string// [55] 58 (String)
  EncodedTextLen?: number// [56] 354 (Int)
  EncodedText?: Buffer// [57] 355 (RawData)
  MDPriceLevel?: number// [58] 1023 (Int)
  OrderCapacity?: string// [59] 528 (String)
  MDOriginType?: number// [60] 1024 (Int)
  HighPx?: number// [61] 332 (Float)
  LowPx?: number// [62] 333 (Float)
  TradeVolume?: number// [63] 1020 (Float)
  SettlType?: string// [64] 63 (String)
  SettlDate?: Date// [65] 64 (LocalDate)
  TransBkdTime?: Date// [66] 483 (UtcTimestamp)
  TransactTime?: Date// [67] 60 (UtcTimestamp)
  MDQuoteType?: number// [68] 1070 (Int)
  RptSeq?: number// [69] 83 (Int)
  DealingCapacity?: string// [70] 1048 (String)
  MDEntrySpotRate?: number// [71] 1026 (Float)
  MDEntryForwardPoints?: number// [72] 1027 (Float)
  StatsIndGrp?: IStatsIndGrp[]// [73] StatsType.1176
  Parties?: IParties[]// [74] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  SettlCurrency?: string// [75] 120 (String)
  RateSource?: IRateSource[]// [76] RateSource.1446, RateSourceType.1447, ReferencePage.1448
  FirstPx?: number// [77] 1025 (Float)
  LastPx?: number// [78] 31 (Float)
  MDStreamID?: string// [79] 1500 (String)
}
