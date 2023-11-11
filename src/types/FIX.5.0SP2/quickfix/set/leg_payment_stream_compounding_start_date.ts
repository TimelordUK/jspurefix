export interface ILegPaymentStreamCompoundingStartDate {
  LegPaymentStreamCompoundingStartDateUnadjusted?: Date// [1] 42445 (LocalDate)
  LegPaymentStreamCompoundingStartDateRelativeTo?: number// [2] 42446 (Int)
  LegPaymentStreamCompoundingStartDateOffsetPeriod?: number// [3] 42447 (Int)
  LegPaymentStreamCompoundingStartDateOffsetUnit?: string// [4] 42448 (String)
  LegPaymentStreamCompoundingStartDateOffsetDayType?: number// [5] 42449 (Int)
  LegPaymentStreamCompoundingStartDateAdjusted?: Date// [6] 42450 (LocalDate)
}
