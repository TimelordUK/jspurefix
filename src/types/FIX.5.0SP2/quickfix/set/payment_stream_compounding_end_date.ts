export interface IPaymentStreamCompoundingEndDate {
  PaymentStreamCompoundingEndDateUnadjusted?: Date// [1] 42622 (LocalDate)
  PaymentStreamCompoundingEndDateRelativeTo?: number// [2] 42623 (Int)
  PaymentStreamCompoundingEndDateOffsetPeriod?: number// [3] 42624 (Int)
  PaymentStreamCompoundingEndDateOffsetUnit?: string// [4] 42625 (String)
  PaymentStreamCompoundingEndDateOffsetDayType?: number// [5] 42626 (Int)
  PaymentStreamCompoundingEndDateAdjusted?: Date// [6] 42627 (LocalDate)
}
