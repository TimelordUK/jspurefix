import { IDividendAccrualPaymentDateBusinessCenterGrp } from './dividend_accrual_payment_date_business_center_grp'

export interface IDividendAccrualPaymentDate {
  DividendAccrualPaymentDateRelativeTo?: number// [1] 42238 (Int)
  DividendAccrualPaymentDateOffsetPeriod?: number// [1] 42239 (Int)
  DividendAccrualPaymentDateOffsetUnit?: string// [1] 42240 (String)
  DividendAccrualPaymentDateOffsetDayType?: number// [1] 42241 (Int)
  DividendAccrualPaymentDateUnadjusted?: Date// [1] 42242 (LocalDate)
  DividendAccrualPaymeentDateBusinessDayConvention?: number// [1] 42243 (Int)
  DividendAccrualPaymentDateAdjusted?: Date// [1] 42244 (LocalDate)
  DividendAccrualPaymentDateBusinessCenterGrp?: IDividendAccrualPaymentDateBusinessCenterGrp[]// [1] Ctr.42237
}
