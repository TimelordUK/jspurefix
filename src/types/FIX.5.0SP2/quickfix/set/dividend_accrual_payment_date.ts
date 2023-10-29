export interface IDividendAccrualPaymentDate {
  DividendAccrualPaymentDateRelativeTo?: number// [1] 42238 (Int)
  DividendAccrualPaymentDateOffsetPeriod?: number// [2] 42239 (Int)
  DividendAccrualPaymentDateOffsetUnit?: string// [3] 42240 (String)
  DividendAccrualPaymentDateOffsetDayType?: number// [4] 42241 (Int)
  DividendAccrualPaymentDateUnadjusted?: Date// [5] 42242 (LocalDate)
  DividendAccrualPaymeentDateBusinessDayConvention?: number// [6] 42243 (Int)
  DividendAccrualPaymentDateAdjusted?: Date// [7] 42244 (LocalDate)
}
