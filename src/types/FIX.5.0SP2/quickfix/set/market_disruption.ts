import { IMarketDisruptionEventGrp } from './market_disruption_event_grp'
import { IMarketDisruptionFallbackGrp } from './market_disruption_fallback_grp'
import { IMarketDisruptionFallbackReferencePriceGrp } from './market_disruption_fallback_reference_price_grp'

export interface IMarketDisruption {
  MarketDisruptionProvision?: number// [1] 41087 (Int)
  MarketDisruptionEventGrp?: IMarketDisruptionEventGrp// [2] NoMarketDisruptionEvents.41092, MarketDisruptionEvent.41093, MarketDisruptionValue.40991
  MarketDisruptionFallbackProvision?: number// [3] 41088 (Int)
  MarketDisruptionFallbackGrp?: IMarketDisruptionFallbackGrp// [4] NoMarketDisruptionFallbacks.41094, MarketDisruptionFallbackType.41095, MarketDisruptionFallbackValue.40992
  MarketDisruptionFallbackReferencePriceGrp?: IMarketDisruptionFallbackReferencePriceGrp// [5] NoMarketDisruptionFallbackReferencePrices.41096, MarketDisruptionFallbackUnderlierType.41097 .. MarketDisruptionFallbackBasketDivisor.41105
  MarketDisruptionMaximumDays?: number// [6] 41089 (Int)
  MarketDisruptionMaterialityPercentage?: number// [7] 41090 (Float)
  MarketDisruptionMinimumFuturesContracts?: number// [8] 41091 (Int)
}
