import { IRiskWarningLevelGrp } from './risk_warning_level_grp'

export interface IRiskLimitTypesGrp {
  MiscFeeType?: string// [1] 139 (String)
  RiskLimitAmount?: number// [1] 1531 (Float)
  RiskLimitAction?: number// [1] 1767 (Int)
  RiskLimitUtilizationAmount?: number// [1] 1766 (Float)
  RiskLimitUtilizationPercent?: number// [1] 1765 (Float)
  RiskLimitCurrency?: string// [1] 1532 (String)
  RiskLimitPlatform?: string// [1] 1533 (String)
  RiskLimitVelocityPeriod?: number// [1] 2336 (Int)
  RiskLimitVelocityUnit?: string// [1] 2337 (String)
  RiskWarningLevelGrp?: IRiskWarningLevelGrp[]// [1] Actn.1769, Pct.1560 .. Nme.1561
}
