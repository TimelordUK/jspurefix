export interface ILegPaymentStreamFixedRate {
  LegPaymentStreamRate?: number// [1] 40326 (Float)
  LegPaymentStreamFixedAmount?: number// [1] 40327 (Float)
  LegPaymentStreamRateOrAmountCurrency?: string// [1] 40328 (String)
  LegPaymentStreamFixedAmountUnitOfMeasure?: string// [1] 41556 (String)
  LegPaymentStreamTotalFixedAmount?: number// [1] 41557 (Float)
  LegPaymentStreamFutureValueNotional?: number// [1] 40329 (Float)
  LegPaymentStreamFutureValueDateAdjusted?: Date// [1] 40330 (LocalDate)
  LegPaymentStreamWorldScaleRate?: number// [1] 41558 (Float)
  LegPaymentStreamContractPrice?: number// [1] 41559 (Float)
  LegPaymentStreamContractPriceCurrency?: string// [1] 41560 (String)
}
