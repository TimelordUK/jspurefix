export interface IUnderlyingDividendAccrualPaymentDate {
  UnderlyingDividendAccrualPaymentDateRelativeTo?: number// [1] 42819 (Int)
  UnderlyingDividendAccrualPaymentDateOffsetPeriod?: number// [2] 42820 (Int)
  UnderlyingDividendAccrualPaymentDateOffsetUnit?: string// [3] 42821 (String)
  UnderlyingDividendAccrualPaymentDateOffsetDayType?: number// [4] 42822 (Int)
  UnderlyingDividendAccrualPaymentDateUnadjusted?: Date// [5] 42823 (LocalDate)
  UnderlyingDividendAccrualPaymentDateBusinessDayConvention?: number// [6] 42824 (Int)
  UnderlyingDividendAccrualPaymentDateAdjusted?: Date// [7] 42825 (LocalDate)
}
