export interface IPaymentStreamCompoundingDates {
  PaymentStreamCompoundingDatesBusinessDayConvention?: number// [1] 42609 (Int)
  PaymentStreamCompoundingDatesRelativeTo?: number// [2] 42610 (Int)
  PaymentStreamCompoundingDatesOffsetPeriod?: number// [3] 42611 (Int)
  PaymentStreamCompoundingDatesOffsetUnit?: string// [4] 42612 (String)
  PaymentStreamCompoundingDatesOffsetDayType?: number// [5] 42613 (Int)
  PaymentStreamCompoundingPeriodSkip?: number// [6] 42614 (Int)
  PaymentStreamCompoundingFrequencyPeriod?: number// [7] 42615 (Int)
  PaymentStreamCompoundingFrequencyUnit?: string// [8] 42616 (String)
  PaymentStreamCompoundingRollConvention?: string// [9] 42617 (String)
  PaymentStreamBoundsFirstDateUnadjusted?: Date// [10] 42618 (LocalDate)
  PaymentStreamBoundsLastDateUnadjusted?: Date// [11] 42619 (LocalDate)
}
