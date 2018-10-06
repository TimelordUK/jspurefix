import { ILegMarketDisruptionEventGrp } from './leg_market_disruption_event_grp'
import { ILegMarketDisruptionFallbackGrp } from './leg_market_disruption_fallback_grp'
import { ILegMarketDisruptionFallbackReferencePriceGrp } from './leg_market_disruption_fallback_reference_price_grp'

export interface ILegMarketDisruption {
  LegMarketDisruptionProvision?: number// 41462
  LegMarketDisruptionFallbackProvision?: number// 41463
  LegMarketDisruptionMaximumDays?: number// 41464
  LegMarketDisruptionMaterialityPercentage?: number// 41465
  LegMarketDisruptionMinimumFuturesContracts?: number// 41466
  LegMarketDisruptionEventGrp?: ILegMarketDisruptionEventGrp[]
  LegMarketDisruptionFallbackGrp?: ILegMarketDisruptionFallbackGrp[]
  LegMarketDisruptionFallbackReferencePriceGrp?: ILegMarketDisruptionFallbackReferencePriceGrp[]
}
