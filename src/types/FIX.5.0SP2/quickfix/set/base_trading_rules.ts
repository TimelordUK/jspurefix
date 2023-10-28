import { ITickRules } from './tick_rules'
import { ILotTypeRules } from './lot_type_rules'
import { IPriceLimits } from './price_limits'
import { IPriceRangeRuleGrp } from './price_range_rule_grp'
import { IQuoteSizeRuleGrp } from './quote_size_rule_grp'

export interface IBaseTradingRules {
  TickRules?: ITickRules// [1] NoTickRules.1205, StartTickPriceRange.1206 .. SettlPriceSecondaryIncrement.1831
  LotTypeRules?: ILotTypeRules// [2] NoLotTypeRules.1234, LotType.1093, MinLotSize.1231
  PriceLimits?: IPriceLimits// [3] PriceLimitType.1306, LowLimitPrice.1148 .. TradingReferencePrice.1150
  PriceRangeRuleGrp?: IPriceRangeRuleGrp// [4] NoPriceRangeRules.2550, StartPriceRange.2551 .. PriceRangeProductComplex.2555
  QuoteSizeRuleGrp?: IQuoteSizeRuleGrp// [5] NoQuoteSizeRules.2558, MinBidSize.647 .. FastMarketIndicator.2447
  ExpirationCycle?: number// [6] 827 (Int)
  TradeVolType?: number// [7] 1786 (Int)
  MinTradeVol?: number// [8] 562 (Float)
  MaxTradeVol?: number// [9] 1140 (Float)
  MaxPriceVariation?: number// [10] 1143 (Float)
  ImpliedMarketIndicator?: number// [11] 1144 (Int)
  TradingCurrency?: string// [12] 1245 (String)
  TradingCurrencyCodeSource?: string// [13] 2934 (String)
  RoundLot?: number// [14] 561 (Float)
  MultilegModel?: number// [15] 1377 (Int)
  MultilegPriceMethod?: number// [16] 1378 (Int)
  PriceType?: number// [17] 423 (Int)
  FastMarketPercentage?: number// [18] 2557 (Float)
  QuoteSideIndicator?: boolean// [19] 2559 (Boolean)
}
