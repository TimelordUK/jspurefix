export interface IPaymentStreamCompoundingEndDate {
  PaymentStreamCompoundingEndDateUnadjusted?: Date// [1] 42622 (LocalDate)
  PaymentStreamCompoundingEndDateRelativeTo?: number// [1] 42623 (Int)
  PaymentStreamCompoundingEndDateOffsetPeriod?: number// [1] 42624 (Int)
  PaymentStreamCompoundingEndDateOffsetUnit?: string// [1] 42625 (String)
  PaymentStreamCompoundingEndDateOffsetDayType?: number// [1] 42626 (Int)
  PaymentStreamCompoundingEndDateAdjusted?: Date// [1] 42627 (LocalDate)
}
