import { IUnderlyingSettlRateFallbackRateSource } from './underlying_settl_rate_fallback_rate_source'

export interface IUnderlyingSettlRateDisruptionFallbackGrp {
  UnderlyingSettlRatePostponementMaximumDays?: number// 40660
  UnderlyingSettlRatePostponementSurvey?: boolean// 40662
  UnderlyingSettlRatePostponementCalculationAgent?: number// 40663
  UnderlyingSettlRateFallbackRateSource?: IUnderlyingSettlRateFallbackRateSource
}
