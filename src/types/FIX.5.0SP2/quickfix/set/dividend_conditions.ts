import { IDividendAccrualFloatingRate } from './dividend_accrual_floating_rate'
import { IDividendAccrualPaymentDate } from './dividend_accrual_payment_date'

export interface IDividendConditions {
  DividendReinvestmentIndicator?: boolean// [1] 42245 (Boolean)
  DividendEntitlementEvent?: number// [2] 42246 (Int)
  DividendAmountType?: number// [3] 42247 (Int)
  DividendUnderlierRefID?: string// [4] 42248 (String)
  ExtraordinaryDividendPartySide?: number// [5] 42249 (Int)
  ExtraordinaryDividendAmountType?: number// [6] 42250 (Int)
  ExtraordinaryDividendCurrency?: string// [7] 42251 (String)
  ExtraordinaryDividendDeterminationMethod?: string// [8] 42252 (String)
  DividendAccrualFloatingRate?: IDividendAccrualFloatingRate// [9] DividendFloatingRateIndex.42218, DividendFloatingRateIndexCurvePeriod.42219 .. DividendNegativeRateTreatment.42235
  DividendAccrualFixedRate?: number// [10] 42253 (Float)
  DividendAccrualPaymentDate?: IDividendAccrualPaymentDate// [11] DividendAccrualPaymentDateRelativeTo.42238, DividendAccrualPaymentDateOffsetPeriod.42239 .. DividendAccrualPaymentDateAdjusted.42244
  DividendCompoundingMethod?: number// [12] 42254 (Int)
  DividendNumOfIndexUnits?: number// [13] 42255 (Int)
  DividendCashPercentage?: number// [14] 42256 (Float)
  DividendCashEquivalentPercentage?: number// [15] 42257 (Float)
  NonCashDividendTreatment?: number// [16] 42258 (Int)
  DividendComposition?: number// [17] 42259 (Int)
  SpecialDividendsIndicator?: boolean// [18] 42260 (Boolean)
  MaterialDividendsIndicator?: boolean// [19] 42261 (Boolean)
  OptionsExchangeDividendsIndicator?: boolean// [20] 42262 (Boolean)
  AdditionalDividendsIndicator?: boolean// [21] 42263 (Boolean)
  AllDividendsIndicator?: boolean// [22] 42264 (Boolean)
}
