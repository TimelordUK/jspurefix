export interface IPaymentStreamPaymentDates {
  PaymentStreamPaymentDateBusinessDayConvention?: number// [1] 40751 (Int)
  PaymentStreamPaymentFrequencyPeriod?: number// [2] 40753 (Int)
  PaymentStreamPaymentFrequencyUnit?: string// [3] 40754 (String)
  PaymentStreamPaymentRollConvention?: string// [4] 40755 (String)
  PaymentStreamFirstPaymentDateUnadjusted?: Date// [5] 40756 (LocalDate)
  PaymentStreamLastRegularPaymentDateUnadjusted?: Date// [6] 40757 (LocalDate)
  PaymentStreamPaymentDateRelativeTo?: number// [7] 40758 (Int)
  PaymentStreamPaymentDateOffsetPeriod?: number// [8] 40759 (Int)
  PaymentStreamPaymentDateOffsetUnit?: string// [9] 40760 (String)
  PaymentStreamPaymentDateOffsetDayType?: number// [10] 40920 (Int)
  PaymentStreamMasterAgreementPaymentDatesIndicator?: boolean// [11] 41223 (Boolean)
}
