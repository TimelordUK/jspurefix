export interface ILegPaymentStreamCompoundingDates {
  LegPaymentStreamCompoundingDatesBusinessDayConvention?: number// [1] 42408 (Int)
  LegPaymentStreamCompoundingDatesRelativeTo?: number// [2] 42409 (Int)
  LegPaymentStreamCompoundingDatesOffsetPeriod?: number// [3] 42410 (Int)
  LegPaymentStreamCompoundingDatesOffsetUnit?: string// [4] 42411 (String)
  LegPaymentStreamCompoundingDatesOffsetDayType?: number// [5] 42412 (Int)
  LegPaymentStreamCompoundingPeriodSkip?: number// [6] 42413 (Int)
  LegPaymentStreamCompoundingFrequencyPeriod?: number// [7] 42414 (Int)
  LegPaymentStreamCompoundingFrequencyUnit?: string// [8] 42415 (String)
  LegPaymentStreamCompoundingRollConvention?: string// [9] 42416 (String)
  LegPaymentStreamBoundsFirstDateUnadjusted?: Date// [10] 42417 (LocalDate)
  LegPaymentStreamBoundsLastDateUnadjusted?: Date// [11] 42418 (LocalDate)
}
