import { ISettlRateFallbackRateSource } from './settl_rate_fallback_rate_source'

export interface ISettlRateDisruptionFallbackGrpNoSettlRateFallbacks {
  SettlRatePostponementMaximumDays?: number// [1] 40086 (Int)
  SettlRateFallbackRateSource?: ISettlRateFallbackRateSource// [2] SettlRateFallbackRateSource.40373, SettlRateFallbackReferencePage.40655
  SettlRatePostponementSurvey?: boolean// [3] 40088 (Boolean)
  SettlRatePostponementCalculationAgent?: number// [4] 40089 (Int)
}
