export interface IDividendAccrualFloatingRate {
  DividendFloatingRateIndex?: string// 42218
  DividendFloatingRateIndexCurvePeriod?: number// 42219
  DividendFloatingRateIndexCurveUnit?: string// 42220
  DividendFloatingRateMultiplier?: number// 42221
  DividendFloatingRateSpread?: number// 42222
  DividendFloatingRateSpreadPositionType?: number// 42223
  DividendFloatingRateTreatment?: number// 42224
  DividendCapRate?: number// 42225
  DividendCapRateBuySide?: number// 42226
  DividendCapRateSellSide?: number// 42227
  DividendFloorRate?: number// 42228
  DividendFloorRateBuySide?: number// 42229
  DividendFloorRateSellSide?: number// 42230
  DividendInitialRate?: number// 42231
  DividendFinalRateRoundingDirection?: string// 42232
  DividendFinalRatePrecision?: number// 42233
  DividendAveragingMethod?: number// 42234
  DividendNegativeRateTreatment?: number// 42235
}
