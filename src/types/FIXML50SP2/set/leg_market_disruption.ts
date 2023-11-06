import { ILegMarketDisruptionEventGrp } from './leg_market_disruption_event_grp'
import { ILegMarketDisruptionFallbackGrp } from './leg_market_disruption_fallback_grp'
import { ILegMarketDisruptionFallbackReferencePriceGrp } from './leg_market_disruption_fallback_reference_price_grp'

export interface ILegMarketDisruption {
  LegMarketDisruptionProvision?: number// [1] 41462 (Int)
  LegMarketDisruptionFallbackProvision?: number// [1] 41463 (Int)
  LegMarketDisruptionMaximumDays?: number// [1] 41464 (Int)
  LegMarketDisruptionMaterialityPercentage?: number// [1] 41465 (Float)
  LegMarketDisruptionMinimumFuturesContracts?: number// [1] 41466 (Int)
  LegMarketDisruptionEventGrp?: ILegMarketDisruptionEventGrp[]// [1] Evnt.41468, Val.40223
  LegMarketDisruptionFallbackGrp?: ILegMarketDisruptionFallbackGrp[]// [2] Typ.41470, Val.40990
  LegMarketDisruptionFallbackReferencePriceGrp?: ILegMarketDisruptionFallbackReferencePriceGrp[]// [3] Typ.41472, ID.41473 .. Dvsr.41480
}
