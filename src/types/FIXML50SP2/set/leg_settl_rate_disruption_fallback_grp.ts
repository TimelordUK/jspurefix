import { ILegSettlRateFallbackRateSource } from './leg_settl_rate_fallback_rate_source'

export interface ILegSettlRateDisruptionFallbackGrp {
  LegSettlRatePostponementMaximumDays?: number// 40903
  LegSettlRatePostponementSurvey?: boolean// 40905
  LegSettlRatePostponementCalculationAgent?: number// 40906
  LegSettlRateFallbackRateSource?: ILegSettlRateFallbackRateSource
}
