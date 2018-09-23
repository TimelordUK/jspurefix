import { IRiskWarningLevelGrp } from './risk_warning_level_grp'

export interface IRiskLimitTypesGrp {
  UnderlyingReturnRateValuationDateType?: number// 43073
  UnderlyingMakeWholeAmount?: number// 42889
  PosReportAction?: number// 2364
  RiskLimitUtilizationAmount?: number// 1766
  RiskLimitUtilizationPercent?: number// 1765
  UnderlyingReturnRatePriceCurrency?: string// 43067
  EntitlementPlatform?: string// 1784
  RiskLimitVelocityPeriod?: number// 2336
  RiskLimitVelocityUnit?: string// 2337
  RiskWarningLevelGrp?: IRiskWarningLevelGrp[]
}
