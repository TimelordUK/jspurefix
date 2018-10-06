import { ICashSettlDateBusinessCenterGrp } from './cash_settl_date_business_center_grp'

export interface ICashSettlDate {
  CashSettlDateUnadjusted?: Date// 42207
  CashSettlDateBusinessDayConvention?: number// 42208
  CashSettlDateRelativeTo?: number// 42209
  CashSettlDateOffsetPeriod?: number// 42210
  CashSettlDateOffsetUnit?: string// 42211
  CashSettlDateOffsetDayType?: number// 42212
  CashSettlDateAdjusted?: Date// 42213
  CashSettlDateBusinessCenterGrp?: ICashSettlDateBusinessCenterGrp[]
}
