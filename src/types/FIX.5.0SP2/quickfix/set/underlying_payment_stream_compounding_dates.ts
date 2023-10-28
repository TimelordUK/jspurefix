export interface IUnderlyingPaymentStreamCompoundingDates {
  UnderlyingPaymentStreamCompoundingDatesBusinessDayConvention?: number// [1] 42904 (Int)
  UnderlyingPaymentStreamCompoundingDatesRelativeTo?: number// [2] 42905 (Int)
  UnderlyingPaymentStreamCompoundingDatesOffsetPeriod?: number// [3] 42906 (Int)
  UnderlyingPaymentStreamCompoundingDatesOffsetUnit?: string// [4] 42907 (String)
  UnderlyingPaymentStreamCompoundingDatesOffsetDayType?: number// [5] 42908 (Int)
  UnderlyingPaymentStreamCompoundingPeriodSkip?: number// [6] 42909 (Int)
  UnderlyingPaymentStreamCompoundingFrequencyPeriod?: number// [7] 42910 (Int)
  UnderlyingPaymentStreamCompoundingFrequencyUnit?: string// [8] 42911 (String)
  UnderlyingPaymentStreamCompoundingRollConvention?: string// [9] 42912 (String)
  UnderlyingPaymentStreamBoundsFirstDateUnadjusted?: Date// [10] 42913 (LocalDate)
  UnderlyingPaymentStreamBoundsLastDateUnadjusted?: Date// [11] 42914 (LocalDate)
}
