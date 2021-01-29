import { IYieldData } from './yield_data'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'
import { ISecSizesGrp } from './sec_sizes_grp'
import { IParties } from './parties'
import { IRateSource } from './rate_source'

export interface IMDFullGrp {
  MDEntryType: string// 269
  MDEntryID?: string// 278
  MDEntryPx?: number// 270
  PriceType?: number// 423
  YieldData?: IYieldData
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  OrdType?: string// 40
  Currency?: string// 15
  MDEntrySize?: number// 271
  SecSizesGrp?: ISecSizesGrp[]
  LotType?: string// 1093
  MDEntryDate?: Date// 272
  MDEntryTime?: string// 273
  TickDirection?: string// 274
  MDMkt?: string// 275
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  SecurityTradingStatus?: number// 326
  HaltReason?: number// 327
  QuoteCondition?: string// 276
  TradeCondition?: string// 277
  MDEntryOriginator?: string// 282
  LocationID?: string// 283
  DeskID?: string// 284
  OpenCloseSettlFlag?: string// 286
  TimeInForce?: string// 59
  ExpireDate?: Date// 432
  ExpireTime?: Date// 126
  MinQty?: number// 110
  ExecInst?: string// 18
  SellerDays?: number// 287
  OrderID?: string// 37
  SecondaryOrderID?: string// 198
  QuoteEntryID?: string// 299
  MDEntryBuyer?: string// 288
  MDEntrySeller?: string// 289
  NumberOfOrders?: number// 346
  MDEntryPositionNo?: number// 290
  Scope?: string// 546
  PriceDelta?: number// 811
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  MDPriceLevel?: number// 1023
  OrderCapacity?: string// 528
  MDOriginType?: number// 1024
  HighPx?: number// 332
  LowPx?: number// 333
  TradeVolume?: number// 1020
  SettlType?: string// 63
  SettlDate?: Date// 64
  MDQuoteType?: number// 1070
  RptSeq?: number// 83
  DealingCapacity?: string// 1048
  MDEntrySpotRate?: number// 1026
  MDEntryForwardPoints?: number// 1027
  Parties?: IParties[]
  SettlCurrency?: string// 120
  RateSource?: IRateSource[]
  TrdType?: number// 828
  FirstPx?: number// 1025
  LastPx?: number// 31
}
