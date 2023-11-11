import { IUnderlyingSettlRateFallbackRateSource } from './underlying_settl_rate_fallback_rate_source'

export interface IUnderlyingSettlRateDisruptionFallbackGrp {
  UnderlyingSettlRatePostponementMaximumDays?: number// [1] 40660 (Int)
  UnderlyingSettlRatePostponementSurvey?: boolean// [1] 40662 (Boolean)
  UnderlyingSettlRatePostponementCalculationAgent?: number// [1] 40663 (Int)
  UnderlyingSettlRateFallbackRateSource?: IUnderlyingSettlRateFallbackRateSource// [1] RtSrc.40904, RefPg.40915
}
