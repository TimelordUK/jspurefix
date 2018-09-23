import { ILegMarketDisruptionEventGrp } from './leg_market_disruption_event_grp'
import { ILegMarketDisruptionFallbackGrp } from './leg_market_disruption_fallback_grp'
import { ILegMarketDisruptionFallbackReferencePriceGrp } from './leg_market_disruption_fallback_reference_price_grp'

export interface ILegMarketDisruption {
  UnderlyingMarketDisruptionProvision?: number// 41859
  UnderlyingMarketDisruptionFallbackProvision?: number// 41860
  UnderlyingMarketDisruptionMaximumDays?: number// 41861
  UnderlyingMarketDisruptionMaterialityPercentage?: number// 41862
  UnderlyingMarketDisruptionMinimumFuturesContracts?: number// 41863
  LegMarketDisruptionEventGrp?: ILegMarketDisruptionEventGrp[]
  LegMarketDisruptionFallbackGrp?: ILegMarketDisruptionFallbackGrp[]
  LegMarketDisruptionFallbackReferencePriceGrp?: ILegMarketDisruptionFallbackReferencePriceGrp[]
}
