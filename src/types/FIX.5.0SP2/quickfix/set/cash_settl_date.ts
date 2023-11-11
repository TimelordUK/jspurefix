import { ICashSettlDateBusinessCenterGrp } from './cash_settl_date_business_center_grp'

export interface ICashSettlDate {
  CashSettlDateUnadjusted?: Date// [1] 42207 (LocalDate)
  CashSettlDateBusinessDayConvention?: number// [2] 42208 (Int)
  CashSettlDateBusinessCenterGrp?: ICashSettlDateBusinessCenterGrp// [3] NoCashSettlDateBusinessCenters.42214, CashSettlDateBusinessCenter.42215
  CashSettlDateRelativeTo?: number// [4] 42209 (Int)
  CashSettlDateOffsetPeriod?: number// [5] 42210 (Int)
  CashSettlDateOffsetUnit?: string// [6] 42211 (String)
  CashSettlDateOffsetDayType?: number// [7] 42212 (Int)
  CashSettlDateAdjusted?: Date// [8] 42213 (LocalDate)
}
