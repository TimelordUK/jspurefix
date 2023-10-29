export interface ILegPaymentStreamCompoundingEndDate {
  LegPaymentStreamCompoundingEndDateUnadjusted?: Date// [1] 42421 (LocalDate)
  LegPaymentStreamCompoundingEndDateRelativeTo?: number// [2] 42422 (Int)
  LegPaymentStreamCompoundingEndDateOffsetPeriod?: number// [3] 42423 (Int)
  LegPaymentStreamCompoundingEndDateOffsetUnit?: string// [4] 42424 (String)
  LegPaymentStreamCompoundingEndDateOffsetDayType?: number// [5] 42425 (Int)
  LegPaymentStreamCompoundingEndDateAdjusted?: Date// [6] 42426 (LocalDate)
}
