export interface ILegPaymentStreamCompoundingEndDate {
  LegPaymentStreamCompoundingEndDateUnadjusted?: Date// [1] 42421 (LocalDate)
  LegPaymentStreamCompoundingEndDateRelativeTo?: number// [1] 42422 (Int)
  LegPaymentStreamCompoundingEndDateOffsetPeriod?: number// [1] 42423 (Int)
  LegPaymentStreamCompoundingEndDateOffsetUnit?: string// [1] 42424 (String)
  LegPaymentStreamCompoundingEndDateOffsetDayType?: number// [1] 42425 (Int)
  LegPaymentStreamCompoundingEndDateAdjusted?: Date// [1] 42426 (LocalDate)
}
