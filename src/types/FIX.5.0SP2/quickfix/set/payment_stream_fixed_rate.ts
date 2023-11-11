export interface IPaymentStreamFixedRate {
  PaymentStreamRate?: number// [1] 40784 (Float)
  PaymentStreamFixedAmount?: number// [2] 40785 (Float)
  PaymentStreamRateOrAmountCurrency?: string// [3] 40786 (String)
  PaymentStreamFixedAmountUnitOfMeasure?: string// [4] 41187 (String)
  PaymentStreamTotalFixedAmount?: number// [5] 41188 (Float)
  PaymentStreamFutureValueNotional?: number// [6] 40787 (Float)
  PaymentStreamFutureValueDateAdjusted?: Date// [7] 40788 (LocalDate)
  PaymentStreamWorldScaleRate?: number// [8] 41189 (Float)
  PaymentStreamContractPrice?: number// [9] 41190 (Float)
  PaymentStreamContractPriceCurrency?: string// [10] 41191 (String)
}
