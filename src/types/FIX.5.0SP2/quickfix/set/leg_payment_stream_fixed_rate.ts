export interface ILegPaymentStreamFixedRate {
  LegPaymentStreamRate?: number// [1] 40326 (Float)
  LegPaymentStreamFixedAmount?: number// [2] 40327 (Float)
  LegPaymentStreamRateOrAmountCurrency?: string// [3] 40328 (String)
  LegPaymentStreamFixedAmountUnitOfMeasure?: string// [4] 41556 (String)
  LegPaymentStreamTotalFixedAmount?: number// [5] 41557 (Float)
  LegPaymentStreamFutureValueNotional?: number// [6] 40329 (Float)
  LegPaymentStreamFutureValueDateAdjusted?: Date// [7] 40330 (LocalDate)
  LegPaymentStreamWorldScaleRate?: number// [8] 41558 (Float)
  LegPaymentStreamContractPrice?: number// [9] 41559 (Float)
  LegPaymentStreamContractPriceCurrency?: string// [10] 41560 (String)
}
