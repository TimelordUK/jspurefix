import { IMarketDisruptionEventGrp } from './market_disruption_event_grp'
import { IMarketDisruptionFallbackGrp } from './market_disruption_fallback_grp'
import { IMarketDisruptionFallbackReferencePriceGrp } from './market_disruption_fallback_reference_price_grp'

export interface IMarketDisruption {
  MarketDisruptionProvision?: number// 41087
  MarketDisruptionFallbackProvision?: number// 41088
  MarketDisruptionMaximumDays?: number// 41089
  MarketDisruptionMaterialityPercentage?: number// 41090
  MarketDisruptionMinimumFuturesContracts?: number// 41091
  MarketDisruptionEventGrp?: IMarketDisruptionEventGrp[]
  MarketDisruptionFallbackGrp?: IMarketDisruptionFallbackGrp[]
  MarketDisruptionFallbackReferencePriceGrp?: IMarketDisruptionFallbackReferencePriceGrp[]
}
