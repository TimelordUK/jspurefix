import { IUnderlyingMarketDisruptionEventGrp } from './underlying_market_disruption_event_grp'
import { IUnderlyingMarketDisruptionFallbackGrp } from './underlying_market_disruption_fallback_grp'
import { IUnderlyingMarketDisruptionFallbackReferencePriceGrp } from './underlying_market_disruption_fallback_reference_price_grp'

export interface IUnderlyingMarketDisruption {
  UnderlyingMarketDisruptionProvision?: number// [1] 41859 (Int)
  UnderlyingMarketDisruptionEventGrp?: IUnderlyingMarketDisruptionEventGrp// [2] NoUnderlyingMarketDisruptionEvents.41864, UnderlyingMarketDisruptionEvent.41865, UnderlyingMarketDisruptionValue.41338
  UnderlyingMarketDisruptionFallbackProvision?: number// [3] 41860 (Int)
  UnderlyingMarketDisruptionFallbackGrp?: IUnderlyingMarketDisruptionFallbackGrp// [4] NoUnderlyingMarketDisruptionFallbacks.41866, UnderlyingMarketDisruptionFallbackType.41867, UnderlyingMarketDisruptionFallbackValue.41339
  UnderlyingMarketDisruptionFallbackReferencePriceGrp?: IUnderlyingMarketDisruptionFallbackReferencePriceGrp// [5] NoUnderlyingMarketDisruptionFallbackReferencePrices.41868, UnderlyingMarketDisruptionFallbackUnderlierType.41869 .. UnderlyingMarketDisruptionFallbackBasketDivisor.41877
  UnderlyingMarketDisruptionMaximumDays?: number// [6] 41861 (Int)
  UnderlyingMarketDisruptionMaterialityPercentage?: number// [7] 41862 (Float)
  UnderlyingMarketDisruptionMinimumFuturesContracts?: number// [8] 41863 (Int)
}
