import { IUnderlyingMarketDisruptionEventGrp } from './underlying_market_disruption_event_grp'
import { IUnderlyingMarketDisruptionFallbackGrp } from './underlying_market_disruption_fallback_grp'
import { IUnderlyingMarketDisruptionFallbackReferencePriceGrp } from './underlying_market_disruption_fallback_reference_price_grp'

export interface IUnderlyingMarketDisruption {
  UnderlyingMarketDisruptionProvision?: number// 41859
  UnderlyingMarketDisruptionFallbackProvision?: number// 41860
  UnderlyingMarketDisruptionMaximumDays?: number// 41861
  UnderlyingMarketDisruptionMaterialityPercentage?: number// 41862
  UnderlyingMarketDisruptionMinimumFuturesContracts?: number// 41863
  UnderlyingMarketDisruptionEventGrp?: IUnderlyingMarketDisruptionEventGrp[]
  UnderlyingMarketDisruptionFallbackGrp?: IUnderlyingMarketDisruptionFallbackGrp[]
  UnderlyingMarketDisruptionFallbackReferencePriceGrp?: IUnderlyingMarketDisruptionFallbackReferencePriceGrp[]
}
