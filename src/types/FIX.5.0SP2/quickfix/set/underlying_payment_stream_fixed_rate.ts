export interface IUnderlyingPaymentStreamFixedRate {
  UnderlyingPaymentStreamRate?: number// [1] 40615 (Float)
  UnderlyingPaymentStreamFixedAmount?: number// [2] 40616 (Float)
  UnderlyingPaymentStreamRateOrAmountCurrency?: string// [3] 40617 (String)
  UnderlyingPaymentStreamFixedAmountUnitOfMeasure?: string// [4] 41904 (String)
  UnderlyingPaymentStreamTotalFixedAmount?: number// [5] 41905 (Float)
  UnderlyingPaymentStreamFutureValueNotional?: number// [6] 40618 (Float)
  UnderlyingPaymentStreamFutureValueDateAdjusted?: Date// [7] 40619 (LocalDate)
  UnderlyingPaymentStreamWorldScaleRate?: number// [8] 41906 (Float)
  UnderlyingPaymentStreamContractPrice?: number// [9] 41907 (Float)
  UnderlyingPaymentStreamContractPriceCurrency?: string// [10] 41908 (String)
}
