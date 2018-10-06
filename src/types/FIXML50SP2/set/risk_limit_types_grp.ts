import { IRiskWarningLevelGrp } from './risk_warning_level_grp'

export interface IRiskLimitTypesGrp {
  UnderlyingReturnRateValuationDateType?: number// 43073
  RiskLimitAmount?: number// 1531
  RiskLimitAction?: number// 1767
  RiskLimitUtilizationAmount?: number// 1766
  RiskLimitUtilizationPercent?: number// 1765
  RiskLimitCurrency?: string// 1532
  RiskLimitPlatform?: string// 1533
  RiskLimitVelocityPeriod?: number// 2336
  RiskLimitVelocityUnit?: string// 2337
  RiskWarningLevelGrp?: IRiskWarningLevelGrp[]
}
