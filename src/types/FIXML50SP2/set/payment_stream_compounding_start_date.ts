export interface IPaymentStreamCompoundingStartDate {
  PaymentStreamCompoundingStartDateUnadjusted?: Date// [1] 42646 (LocalDate)
  PaymentStreamCompoundingStartDateRelativeTo?: number// [1] 42647 (Int)
  PaymentStreamCompoundingStartDateOffsetPeriod?: number// [1] 42648 (Int)
  PaymentStreamCompoundingStartDateOffsetUnit?: string// [1] 42649 (String)
  PaymentStreamCompoundingStartDateOffsetDayType?: number// [1] 42650 (Int)
  PaymentStreamCompoundingStartDateAdjusted?: Date// [1] 42651 (LocalDate)
}
