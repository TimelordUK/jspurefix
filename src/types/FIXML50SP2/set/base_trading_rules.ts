import { ITickRules } from './tick_rules'
import { ILotTypeRules } from './lot_type_rules'
import { IPriceLimits } from './price_limits'
import { IPriceRangeRuleGrp } from './price_range_rule_grp'
import { IQuoteSizeRuleGrp } from './quote_size_rule_grp'

export interface IBaseTradingRules {
  ExpirationCycle?: number// [1] 827 (Int)
  TradeVolType?: number// [1] 1786 (Int)
  MinTradeVol?: number// [1] 562 (Float)
  MaxTradeVol?: number// [1] 1140 (Float)
  MaxPriceVariation?: number// [1] 1143 (Float)
  ImpliedMarketIndicator?: number// [1] 1144 (Int)
  TradingCurrency?: string// [1] 1245 (String)
  RoundLot?: number// [1] 561 (Float)
  MultilegModel?: number// [1] 1377 (Int)
  MultilegPriceMethod?: number// [1] 1378 (Int)
  PriceType?: number// [1] 423 (Int)
  FastMarketPercentage?: number// [1] 2557 (Float)
  QuoteSideIndicator?: boolean// [1] 2559 (Boolean)
  TickRules?: ITickRules[]// [1] StartTickPxRng.1206, EndTickPxRng.1207 .. SettlPxIncr2.1831
  LotTypeRules?: ILotTypeRules[]// [2] LotTyp.1093, MinLotSz.1231
  PriceLimits?: IPriceLimits// [3] PxLmtTyp.1306, LowLmtPx.1148 .. TrdgRefPx.1150
  PriceRangeRuleGrp?: IPriceRangeRuleGrp[]// [4] StartPxRng.2551, EndPxRng.2552 .. PxRngProdCmplx.2555
  QuoteSizeRuleGrp?: IQuoteSizeRuleGrp[]// [5] MinBidSz.647, MinOfrSz.648, FastMktInd.2447
}
