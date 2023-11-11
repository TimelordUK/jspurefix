import { ILegSettlRateFallbackRateSource } from './leg_settl_rate_fallback_rate_source'

export interface ILegSettlRateDisruptionFallbackGrp {
  LegSettlRatePostponementMaximumDays?: number// [1] 40903 (Int)
  LegSettlRatePostponementSurvey?: boolean// [1] 40905 (Boolean)
  LegSettlRatePostponementCalculationAgent?: number// [1] 40906 (Int)
  LegSettlRateFallbackRateSource?: ILegSettlRateFallbackRateSource// [1] RtSrc.40366, RefPg.40370
}
