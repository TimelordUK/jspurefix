import { IMarketDisruptionEventGrp } from './market_disruption_event_grp'
import { IMarketDisruptionFallbackGrp } from './market_disruption_fallback_grp'
import { IMarketDisruptionFallbackReferencePriceGrp } from './market_disruption_fallback_reference_price_grp'

export interface IMarketDisruption {
  MarketDisruptionProvision?: number// [1] 41087 (Int)
  MarketDisruptionFallbackProvision?: number// [1] 41088 (Int)
  MarketDisruptionMaximumDays?: number// [1] 41089 (Int)
  MarketDisruptionMaterialityPercentage?: number// [1] 41090 (Float)
  MarketDisruptionMinimumFuturesContracts?: number// [1] 41091 (Int)
  MarketDisruptionEventGrp?: IMarketDisruptionEventGrp[]// [1] Evnt.41093, Val.40991
  MarketDisruptionFallbackGrp?: IMarketDisruptionFallbackGrp[]// [2] Typ.41095, Val.40992
  MarketDisruptionFallbackReferencePriceGrp?: IMarketDisruptionFallbackReferencePriceGrp[]// [3] Typ.41097, ID.41098 .. Dvsr.41105
}
