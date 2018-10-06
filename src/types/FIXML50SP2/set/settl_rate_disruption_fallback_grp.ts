import { ISettlRateFallbackRateSource } from './settl_rate_fallback_rate_source'

export interface ISettlRateDisruptionFallbackGrp {
  SettlRatePostponementMaximumDays?: number// 40086
  SettlRatePostponementSurvey?: boolean// 40088
  SettlRatePostponementCalculationAgent?: number// 40089
  SettlRateFallbackRateSource?: ISettlRateFallbackRateSource
}
