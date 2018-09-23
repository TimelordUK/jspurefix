import { IUnderlyingSettlRateFallbackRateSource } from './underlying_settl_rate_fallback_rate_source'

export interface IUnderlyingSettlRateDisruptionFallbackGrp {
  UnderlyingMarketDisruptionMaximumDays?: number// 41861
  LegSettlRatePostponementSurvey?: string// 40905
  UnderlyingProvisionCalculationAgent?: number// 42156
  UnderlyingSettlRateFallbackRateSource?: IUnderlyingSettlRateFallbackRateSource
}
