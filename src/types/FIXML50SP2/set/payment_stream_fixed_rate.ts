export interface IPaymentStreamFixedRate {
  PaymentStreamRate?: number// [1] 40784 (Float)
  PaymentStreamFixedAmount?: number// [1] 40785 (Float)
  PaymentStreamRateOrAmountCurrency?: string// [1] 40786 (String)
  PaymentStreamFixedAmountUnitOfMeasure?: string// [1] 41187 (String)
  PaymentStreamTotalFixedAmount?: number// [1] 41188 (Float)
  PaymentStreamFutureValueNotional?: number// [1] 40787 (Float)
  PaymentStreamFutureValueDateAdjusted?: Date// [1] 40788 (LocalDate)
  PaymentStreamWorldScaleRate?: number// [1] 41189 (Float)
  PaymentStreamContractPrice?: number// [1] 41190 (Float)
  PaymentStreamContractPriceCurrency?: string// [1] 41191 (String)
}
