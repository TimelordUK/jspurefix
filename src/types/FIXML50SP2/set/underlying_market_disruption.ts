import { IUnderlyingMarketDisruptionEventGrp } from './underlying_market_disruption_event_grp'
import { IUnderlyingMarketDisruptionFallbackGrp } from './underlying_market_disruption_fallback_grp'
import { IUnderlyingMarketDisruptionFallbackReferencePriceGrp } from './underlying_market_disruption_fallback_reference_price_grp'

export interface IUnderlyingMarketDisruption {
  UnderlyingMarketDisruptionProvision?: number// [1] 41859 (Int)
  UnderlyingMarketDisruptionFallbackProvision?: number// [1] 41860 (Int)
  UnderlyingMarketDisruptionMaximumDays?: number// [1] 41861 (Int)
  UnderlyingMarketDisruptionMaterialityPercentage?: number// [1] 41862 (Float)
  UnderlyingMarketDisruptionMinimumFuturesContracts?: number// [1] 41863 (Int)
  UnderlyingMarketDisruptionEventGrp?: IUnderlyingMarketDisruptionEventGrp[]// [1] Evnt.41865, Val.41338
  UnderlyingMarketDisruptionFallbackGrp?: IUnderlyingMarketDisruptionFallbackGrp[]// [2] Typ.41867, Val.41339
  UnderlyingMarketDisruptionFallbackReferencePriceGrp?: IUnderlyingMarketDisruptionFallbackReferencePriceGrp[]// [3] Typ.41869, ID.41870 .. Dvsr.41877
}
