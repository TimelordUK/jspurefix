export interface IUnderlyingPaymentStreamFixedRate {
  UnderlyingPaymentStreamRate?: number// [1] 40615 (Float)
  UnderlyingPaymentStreamFixedAmount?: number// [1] 40616 (Float)
  UnderlyingPaymentStreamRateOrAmountCurrency?: string// [1] 40617 (String)
  UnderlyingPaymentStreamFixedAmountUnitOfMeasure?: string// [1] 41904 (String)
  UnderlyingPaymentStreamTotalFixedAmount?: number// [1] 41905 (Float)
  UnderlyingPaymentStreamFutureValueNotional?: number// [1] 40618 (Float)
  UnderlyingPaymentStreamFutureValueDateAdjusted?: Date// [1] 40619 (LocalDate)
  UnderlyingPaymentStreamWorldScaleRate?: number// [1] 41906 (Float)
  UnderlyingPaymentStreamContractPrice?: number// [1] 41907 (Float)
  UnderlyingPaymentStreamContractPriceCurrency?: string// [1] 41908 (String)
}
