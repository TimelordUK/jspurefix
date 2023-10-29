import { IUnderlyingSettlRateFallbackRateSource } from './underlying_settl_rate_fallback_rate_source'

export interface IUnderlyingSettlRateDisruptionFallbackGrpNoUnderlyingSettlRateFallbacks {
  UnderlyingSettlRatePostponementMaximumDays?: number// [1] 40660 (Int)
  UnderlyingSettlRateFallbackRateSource?: IUnderlyingSettlRateFallbackRateSource// [2] UnderlyingSettlRateFallbackRateSource.40904, UnderlyingSettlRateFallbackReferencePage.40915
  UnderlyingSettlRatePostponementSurvey?: boolean// [3] 40662 (Boolean)
  UnderlyingSettlRatePostponementCalculationAgent?: number// [4] 40663 (Int)
}
