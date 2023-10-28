import { IRiskWarningLevelGrp } from './risk_warning_level_grp'

export interface IRiskLimitTypesGrpNoRiskLimitTypes {
  RiskLimitType?: number// [1] 1530 (Int)
  RiskLimitAmount?: number// [2] 1531 (Float)
  RiskLimitAction?: number// [3] 1767 (Int)
  RiskLimitUtilizationAmount?: number// [4] 1766 (Float)
  RiskLimitUtilizationPercent?: number// [5] 1765 (Float)
  RiskLimitCurrency?: string// [6] 1532 (String)
  RiskLimitCurrencyCodeSource?: string// [7] 2939 (String)
  RiskLimitPlatform?: string// [8] 1533 (String)
  RiskLimitVelocityPeriod?: number// [9] 2336 (Int)
  RiskLimitVelocityUnit?: string// [10] 2337 (String)
  RiskWarningLevelGrp?: IRiskWarningLevelGrp// [11] NoRiskWarningLevels.1559, RiskWarningLevelAction.1769 .. RiskWarningLevelName.1561
}
