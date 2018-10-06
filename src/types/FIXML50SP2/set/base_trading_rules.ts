import { ITickRules } from './tick_rules'
import { ILotTypeRules } from './lot_type_rules'
import { IPriceLimits } from './price_limits'
import { IPriceRangeRuleGrp } from './price_range_rule_grp'
import { IQuoteSizeRuleGrp } from './quote_size_rule_grp'

export interface IBaseTradingRules {
  ExpirationCycle?: number// 827
  TradeVolType?: number// 1786
  MinTradeVol?: number// 562
  MaxTradeVol?: number// 1140
  MaxPriceVariation?: number// 1143
  ImpliedMarketIndicator?: number// 1144
  TradingCurrency?: string// 1245
  RoundLot?: number// 561
  MultilegModel?: number// 1377
  MultilegPriceMethod?: number// 1378
  PriceType?: number// 423
  FastMarketPercentage?: number// 2557
  QuoteSideIndicator?: boolean// 2559
  TickRules?: ITickRules[]
  LotTypeRules?: ILotTypeRules[]
  PriceLimits?: IPriceLimits
  PriceRangeRuleGrp?: IPriceRangeRuleGrp[]
  QuoteSizeRuleGrp?: IQuoteSizeRuleGrp[]
}
