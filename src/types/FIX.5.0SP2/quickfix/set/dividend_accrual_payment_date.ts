import { IDividendAccrualPaymentDateBusinessCenterGrp } from './dividend_accrual_payment_date_business_center_grp'

export interface IDividendAccrualPaymentDate {
  DividendAccrualPaymentDateRelativeTo?: number// [1] 42238 (Int)
  DividendAccrualPaymentDateOffsetPeriod?: number// [2] 42239 (Int)
  DividendAccrualPaymentDateOffsetUnit?: string// [3] 42240 (String)
  DividendAccrualPaymentDateOffsetDayType?: number// [4] 42241 (Int)
  DividendAccrualPaymentDateUnadjusted?: Date// [5] 42242 (LocalDate)
  DividendAccrualPaymeentDateBusinessDayConvention?: number// [6] 42243 (Int)
  DividendAccrualPaymentDateBusinessCenterGrp?: IDividendAccrualPaymentDateBusinessCenterGrp// [7] NoDividendAccrualPaymentDateBusinessCenters.42236, DividendAccrualPaymentDateBusinessCenter.42237
  DividendAccrualPaymentDateAdjusted?: Date// [8] 42244 (LocalDate)
}
