import { ILegSettlRateFallbackRateSource } from './leg_settl_rate_fallback_rate_source'

export interface ILegSettlRateDisruptionFallbackGrp {
  UnderlyingMarketDisruptionMaximumDays?: number// 41861
  LegSettlRatePostponementSurvey?: string// 40905
  UnderlyingProvisionCalculationAgent?: number// 42156
  LegSettlRateFallbackRateSource?: ILegSettlRateFallbackRateSource
}
