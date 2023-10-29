import { ILegDividendAccrualFloatingRate } from './leg_dividend_accrual_floating_rate'
import { ILegDividendAccrualPaymentDate } from './leg_dividend_accrual_payment_date'

export interface ILegDividendConditions {
  LegDividendReinvestmentIndicator?: boolean// [1] 42337 (Boolean)
  LegDividendEntitlementEvent?: number// [2] 42338 (Int)
  LegDividendAmountType?: number// [3] 42339 (Int)
  LegDividendUnderlierRefID?: string// [4] 42340 (String)
  LegExtraordinaryDividendPartySide?: number// [5] 42341 (Int)
  LegExtraordinaryDividendAmountType?: number// [6] 42342 (Int)
  LegExtraordinaryDividendCurrency?: string// [7] 42343 (String)
  LegExtraordinaryDividendDeterminationMethod?: string// [8] 42344 (String)
  LegDividendAccrualFloatingRate?: ILegDividendAccrualFloatingRate// [9] LegDividendFloatingRateIndex.42312, LegDividendFloatingRateIndexCurvePeriod.42313 .. LegDividendNegativeRateTreatment.42329
  LegDividendAccrualFixedRate?: number// [10] 42345 (Float)
  LegDividendAccrualPaymentDate?: ILegDividendAccrualPaymentDate// [11] LegDividendAccrualPaymentDateRelativeTo.42330, LegDividendAccrualPaymentDateOffsetPeriod.42331 .. LegDividendAccrualPaymentDateAdjusted.42336
  LegDividendCompoundingMethod?: number// [12] 42346 (Int)
  LegDividendNumOfIndexUnits?: number// [13] 42347 (Int)
  LegDividendCashPercentage?: number// [14] 42348 (Float)
  LegDividendCashEquivalentPercentage?: number// [15] 42349 (Float)
  LegNonCashDividendTreatment?: number// [16] 42350 (Int)
  LegDividendComposition?: number// [17] 42351 (Int)
  LegSpecialDividendsIndicator?: boolean// [18] 42352 (Boolean)
  LegMaterialDividendsIndicator?: boolean// [19] 42353 (Boolean)
  LegOptionsExchangeDividendsIndicator?: boolean// [20] 42354 (Boolean)
  LegAdditionalDividendsIndicator?: boolean// [21] 42355 (Boolean)
  LegAllDividendsIndicator?: boolean// [22] 42356 (Boolean)
}
