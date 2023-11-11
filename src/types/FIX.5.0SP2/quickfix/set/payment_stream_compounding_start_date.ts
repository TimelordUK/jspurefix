export interface IPaymentStreamCompoundingStartDate {
  PaymentStreamCompoundingStartDateUnadjusted?: Date// [1] 42646 (LocalDate)
  PaymentStreamCompoundingStartDateRelativeTo?: number// [2] 42647 (Int)
  PaymentStreamCompoundingStartDateOffsetPeriod?: number// [3] 42648 (Int)
  PaymentStreamCompoundingStartDateOffsetUnit?: string// [4] 42649 (String)
  PaymentStreamCompoundingStartDateOffsetDayType?: number// [5] 42650 (Int)
  PaymentStreamCompoundingStartDateAdjusted?: Date// [6] 42651 (LocalDate)
}
