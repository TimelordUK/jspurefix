export interface IUnderlyingPaymentStreamPaymentDates {
  UnderlyingPaymentStreamPaymentDateBusinessDayConvention?: number// [1] 40581 (Int)
  UnderlyingPaymentStreamPaymentFrequencyPeriod?: number// [2] 40583 (Int)
  UnderlyingPaymentStreamPaymentFrequencyUnit?: string// [3] 40584 (String)
  UnderlyingPaymentStreamPaymentRollConvention?: string// [4] 40585 (String)
  UnderlyingPaymentStreamFirstPaymentDateUnadjusted?: Date// [5] 40586 (LocalDate)
  UnderlyingPaymentStreamLastRegularPaymentDateUnadjusted?: Date// [6] 40587 (LocalDate)
  UnderlyingPaymentStreamPaymentDateRelativeTo?: number// [7] 40588 (Int)
  UnderlyingPaymentStreamPaymentDateOffsetPeriod?: number// [8] 40589 (Int)
  UnderlyingPaymentStreamPaymentDateOffsetUnit?: string// [9] 40590 (String)
  UnderlyingPaymentStreamPaymentDateOffsetDayType?: number// [10] 40591 (Int)
  UnderlyingPaymentStreamMasterAgreementPaymentDatesIndicator?: boolean// [11] 41940 (Boolean)
}
