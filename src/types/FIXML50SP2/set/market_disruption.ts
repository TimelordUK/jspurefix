import { IMarketDisruptionEventGrp } from './market_disruption_event_grp'
import { IMarketDisruptionFallbackGrp } from './market_disruption_fallback_grp'
import { IMarketDisruptionFallbackReferencePriceGrp } from './market_disruption_fallback_reference_price_grp'

export interface IMarketDisruption {
  UnderlyingMarketDisruptionProvision?: number// 41859
  UnderlyingMarketDisruptionFallbackProvision?: number// 41860
  UnderlyingMarketDisruptionMaximumDays?: number// 41861
  UnderlyingMarketDisruptionMaterialityPercentage?: number// 41862
  UnderlyingMarketDisruptionMinimumFuturesContracts?: number// 41863
  MarketDisruptionEventGrp?: IMarketDisruptionEventGrp[]
  MarketDisruptionFallbackGrp?: IMarketDisruptionFallbackGrp[]
  MarketDisruptionFallbackReferencePriceGrp?: IMarketDisruptionFallbackReferencePriceGrp[]
}
