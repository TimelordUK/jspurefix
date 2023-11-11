import { IUnderlyingDividendAccrualPaymentDateBusinessCenterGrp } from './underlying_dividend_accrual_payment_date_business_center_grp'

export interface IUnderlyingDividendAccrualPaymentDate {
  UnderlyingDividendAccrualPaymentDateRelativeTo?: number// [1] 42819 (Int)
  UnderlyingDividendAccrualPaymentDateOffsetPeriod?: number// [2] 42820 (Int)
  UnderlyingDividendAccrualPaymentDateOffsetUnit?: string// [3] 42821 (String)
  UnderlyingDividendAccrualPaymentDateOffsetDayType?: number// [4] 42822 (Int)
  UnderlyingDividendAccrualPaymentDateUnadjusted?: Date// [5] 42823 (LocalDate)
  UnderlyingDividendAccrualPaymentDateBusinessDayConvention?: number// [6] 42824 (Int)
  UnderlyingDividendAccrualPaymentDateBusinessCenterGrp?: IUnderlyingDividendAccrualPaymentDateBusinessCenterGrp// [7] NoUnderlyingDividendAccrualPaymentDateBusinessCenters.42799, UnderlyingDividendAccrualPaymentDateBusinessCenter.42800
  UnderlyingDividendAccrualPaymentDateAdjusted?: Date// [8] 42825 (LocalDate)
}
