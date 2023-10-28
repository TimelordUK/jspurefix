export interface ILegPaymentStreamPaymentDates {
  LegPaymentStreamPaymentDateBusinessDayConvention?: number// [1] 40292 (Int)
  LegPaymentStreamPaymentFrequencyPeriod?: number// [2] 40294 (Int)
  LegPaymentStreamPaymentFrequencyUnit?: string// [3] 40295 (String)
  LegPaymentStreamPaymentRollConvention?: string// [4] 40296 (String)
  LegPaymentStreamFirstPaymentDateUnadjusted?: Date// [5] 40297 (LocalDate)
  LegPaymentStreamLastRegularPaymentDateUnadjusted?: Date// [6] 40298 (LocalDate)
  LegPaymentStreamPaymentDateRelativeTo?: number// [7] 40299 (Int)
  LegPaymentStreamPaymentDateOffsetPeriod?: number// [8] 40300 (Int)
  LegPaymentStreamPaymentDateOffsetUnit?: string// [9] 40301 (String)
  LegPaymentStreamPaymentDateOffsetDayType?: number// [10] 40302 (Int)
  LegPaymentStreamMasterAgreementPaymentDatesIndicator?: boolean// [11] 41592 (Boolean)
}
