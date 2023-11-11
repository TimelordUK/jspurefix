export interface IDividendAccrualFloatingRate {
  DividendFloatingRateIndex?: string// [1] 42218 (String)
  DividendFloatingRateIndexCurvePeriod?: number// [1] 42219 (Int)
  DividendFloatingRateIndexCurveUnit?: string// [1] 42220 (String)
  DividendFloatingRateMultiplier?: number// [1] 42221 (Float)
  DividendFloatingRateSpread?: number// [1] 42222 (Float)
  DividendFloatingRateSpreadPositionType?: number// [1] 42223 (Int)
  DividendFloatingRateTreatment?: number// [1] 42224 (Int)
  DividendCapRate?: number// [1] 42225 (Float)
  DividendCapRateBuySide?: number// [1] 42226 (Int)
  DividendCapRateSellSide?: number// [1] 42227 (Int)
  DividendFloorRate?: number// [1] 42228 (Float)
  DividendFloorRateBuySide?: number// [1] 42229 (Int)
  DividendFloorRateSellSide?: number// [1] 42230 (Int)
  DividendInitialRate?: number// [1] 42231 (Float)
  DividendFinalRateRoundingDirection?: string// [1] 42232 (String)
  DividendFinalRatePrecision?: number// [1] 42233 (Int)
  DividendAveragingMethod?: number// [1] 42234 (Int)
  DividendNegativeRateTreatment?: number// [1] 42235 (Int)
}
