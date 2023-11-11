import { IUnderlyingDividendAccrualPaymentDateBusinessCenterGrp } from './underlying_dividend_accrual_payment_date_business_center_grp'

export interface IUnderlyingDividendAccrualPaymentDate {
  UnderlyingDividendAccrualPaymentDateRelativeTo?: number// [1] 42819 (Int)
  UnderlyingDividendAccrualPaymentDateOffsetPeriod?: number// [1] 42820 (Int)
  UnderlyingDividendAccrualPaymentDateOffsetUnit?: string// [1] 42821 (String)
  UnderlyingDividendAccrualPaymentDateOffsetDayType?: number// [1] 42822 (Int)
  UnderlyingDividendAccrualPaymentDateUnadjusted?: Date// [1] 42823 (LocalDate)
  UnderlyingDividendAccrualPaymentDateBusinessDayConvention?: number// [1] 42824 (Int)
  UnderlyingDividendAccrualPaymentDateAdjusted?: Date// [1] 42825 (LocalDate)
  UnderlyingDividendAccrualPaymentDateBusinessCenterGrp?: IUnderlyingDividendAccrualPaymentDateBusinessCenterGrp[]// [1] Ctr.42800
}
