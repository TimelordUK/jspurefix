import { ITickRules } from './tick_rules'
import { ILotTypeRules } from './lot_type_rules'
import { IPriceLimits } from './price_limits'

export interface IBaseTradingRules {
  TickRules?: ITickRules[]
  LotTypeRules?: ILotTypeRules[]
  PriceLimits?: IPriceLimits
  ExpirationCycle?: number// 827
  MinTradeVol?: number// 562
  MaxTradeVol?: number// 1140
  MaxPriceVariation?: number// 1143
  ImpliedMarketIndicator?: number// 1144
  TradingCurrency?: string// 1245
  RoundLot?: number// 561
  MultilegModel?: number// 1377
  MultilegPriceMethod?: number// 1378
  PriceType?: number// 423
}
