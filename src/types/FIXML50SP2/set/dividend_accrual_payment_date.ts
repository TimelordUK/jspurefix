import { IDividendAccrualPaymentDateBusinessCenterGrp } from './dividend_accrual_payment_date_business_center_grp'

export interface IDividendAccrualPaymentDate {
  DividendAccrualPaymentDateRelativeTo?: number// 42238
  DividendAccrualPaymentDateOffsetPeriod?: number// 42239
  DividendAccrualPaymentDateOffsetUnit?: string// 42240
  DividendAccrualPaymentDateOffsetDayType?: number// 42241
  DividendAccrualPaymentDateUnadjusted?: Date// 42242
  DividendAccrualPaymeentDateBusinessDayConvention?: number// 42243
  DividendAccrualPaymentDateAdjusted?: Date// 42244
  DividendAccrualPaymentDateBusinessCenterGrp?: IDividendAccrualPaymentDateBusinessCenterGrp[]
}
