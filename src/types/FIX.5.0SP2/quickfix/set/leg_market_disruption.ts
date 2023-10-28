import { ILegMarketDisruptionEventGrp } from './leg_market_disruption_event_grp'
import { ILegMarketDisruptionFallbackGrp } from './leg_market_disruption_fallback_grp'
import { ILegMarketDisruptionFallbackReferencePriceGrp } from './leg_market_disruption_fallback_reference_price_grp'

export interface ILegMarketDisruption {
  LegMarketDisruptionProvision?: number// [1] 41462 (Int)
  LegMarketDisruptionEventGrp?: ILegMarketDisruptionEventGrp// [2] NoLegMarketDisruptionEvents.41467, LegMarketDisruptionEvent.41468, LegMarketDisruptionValue.40223
  LegMarketDisruptionFallbackProvision?: number// [3] 41463 (Int)
  LegMarketDisruptionFallbackGrp?: ILegMarketDisruptionFallbackGrp// [4] NoLegMarketDisruptionFallbacks.41469, LegMarketDisruptionFallbackType.41470, LegMarketDisruptionFallbackValue.40990
  LegMarketDisruptionFallbackReferencePriceGrp?: ILegMarketDisruptionFallbackReferencePriceGrp// [5] NoLegMarketDisruptionFallbackReferencePrices.41471, LegMarketDisruptionFallbackUnderlierType.41472 .. LegMarketDisruptionFallbackBasketDivisor.41480
  LegMarketDisruptionMaximumDays?: number// [6] 41464 (Int)
  LegMarketDisruptionMaterialityPercentage?: number// [7] 41465 (Float)
  LegMarketDisruptionMinimumFuturesContracts?: number// [8] 41466 (Int)
}
