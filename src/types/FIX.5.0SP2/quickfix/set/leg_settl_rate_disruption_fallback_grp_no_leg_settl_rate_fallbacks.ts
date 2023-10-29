import { ILegSettlRateFallbackRateSource } from './leg_settl_rate_fallback_rate_source'

export interface ILegSettlRateDisruptionFallbackGrpNoLegSettlRateFallbacks {
  LegSettlRatePostponementMaximumDays?: number// [1] 40903 (Int)
  LegSettlRateFallbackRateSource?: ILegSettlRateFallbackRateSource// [2] LegSettlRateFallbackRateSource.40366, LegSettlRateFallbackReferencePage.40370
  LegSettlRatePostponementSurvey?: boolean// [3] 40905 (Boolean)
  LegSettlRatePostponementCalculationAgent?: number// [4] 40906 (Int)
}
