import { ISettlRateFallbackRateSource } from './settl_rate_fallback_rate_source'

export interface ISettlRateDisruptionFallbackGrp {
  UnderlyingMarketDisruptionMaximumDays?: number// 41861
  LegSettlRatePostponementSurvey?: string// 40905
  UnderlyingProvisionCalculationAgent?: number// 42156
  SettlRateFallbackRateSource?: ISettlRateFallbackRateSource
}
