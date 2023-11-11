import { ISettlRateFallbackRateSource } from './settl_rate_fallback_rate_source'

export interface ISettlRateDisruptionFallbackGrp {
  SettlRatePostponementMaximumDays?: number// [1] 40086 (Int)
  SettlRatePostponementSurvey?: boolean// [1] 40088 (Boolean)
  SettlRatePostponementCalculationAgent?: number// [1] 40089 (Int)
  SettlRateFallbackRateSource?: ISettlRateFallbackRateSource// [1] RtSrc.40373, RefPg.40655
}
