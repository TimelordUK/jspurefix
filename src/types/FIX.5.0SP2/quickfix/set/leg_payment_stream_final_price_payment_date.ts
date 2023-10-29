export interface ILegPaymentStreamFinalPricePaymentDate {
  LegPaymentStreamFinalPricePaymentDateUnadjusted?: Date// [1] 42453 (LocalDate)
  LegPaymentStreamFinalPricePaymentDateRelativeTo?: number// [2] 42454 (Int)
  LegPaymentStreamFinalPricePaymentDateOffsetPeriod?: number// [3] 42455 (Int)
  LegPaymentStreamFinalPricePaymentDateOffsetUnit?: string// [4] 42456 (String)
  LegPaymentStreamFinalPricePaymentDateOffsetDayType?: number// [5] 42457 (Int)
  LegPaymentStreamFinalPricePaymentDateAdjusted?: Date// [6] 42458 (LocalDate)
}
