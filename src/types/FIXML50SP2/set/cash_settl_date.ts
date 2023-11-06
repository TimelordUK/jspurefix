import { ICashSettlDateBusinessCenterGrp } from './cash_settl_date_business_center_grp'

export interface ICashSettlDate {
  CashSettlDateUnadjusted?: Date// [1] 42207 (LocalDate)
  CashSettlDateBusinessDayConvention?: number// [1] 42208 (Int)
  CashSettlDateRelativeTo?: number// [1] 42209 (Int)
  CashSettlDateOffsetPeriod?: number// [1] 42210 (Int)
  CashSettlDateOffsetUnit?: string// [1] 42211 (String)
  CashSettlDateOffsetDayType?: number// [1] 42212 (Int)
  CashSettlDateAdjusted?: Date// [1] 42213 (LocalDate)
  CashSettlDateBusinessCenterGrp?: ICashSettlDateBusinessCenterGrp[]// [1] Ctr.42215
}
