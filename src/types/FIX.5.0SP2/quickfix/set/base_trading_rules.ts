import { ITickRules } from './tick_rules'
import { ILotTypeRules } from './lot_type_rules'
import { IPriceLimits } from './price_limits'

export interface IBaseTradingRules {
  TickRules?: ITickRules[]// [1] StartTickPriceRange.1206, EndTickPriceRange.1207 .. TickRuleType.1209
  LotTypeRules?: ILotTypeRules[]// [2] LotType.1093, MinLotSize.1231
  PriceLimits?: IPriceLimits// [3] PriceLimitType.1306, LowLimitPrice.1148 .. TradingReferencePrice.1150
  ExpirationCycle?: number// [4] 827 (Int)
  MinTradeVol?: number// [5] 562 (Float)
  MaxTradeVol?: number// [6] 1140 (Float)
  MaxPriceVariation?: number// [7] 1143 (Float)
  ImpliedMarketIndicator?: number// [8] 1144 (Int)
  TradingCurrency?: string// [9] 1245 (String)
  RoundLot?: number// [10] 561 (Float)
  MultilegModel?: number// [11] 1377 (Int)
  MultilegPriceMethod?: number// [12] 1378 (Int)
  PriceType?: number// [13] 423 (Int)
}
