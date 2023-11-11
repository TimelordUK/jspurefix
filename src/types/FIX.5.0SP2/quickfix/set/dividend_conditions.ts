import { IDividendPeriodGrp } from './dividend_period_grp'
import { IDividendFXTriggerDate } from './dividend_fx_trigger_date'
import { IDividendAccrualFloatingRate } from './dividend_accrual_floating_rate'
import { IDividendAccrualPaymentDate } from './dividend_accrual_payment_date'

export interface IDividendConditions {
  DividendReinvestmentIndicator?: boolean// [1] 42245 (Boolean)
  DividendEntitlementEvent?: number// [2] 42246 (Int)
  DividendAmountType?: number// [3] 42247 (Int)
  DividendUnderlierRefID?: string// [4] 42248 (String)
  DividendPeriodGrp?: IDividendPeriodGrp// [5] NoDividendPeriods.42274, DividendPeriodSequence.42275 .. DividendPeriodXID.42293
  ExtraordinaryDividendPartySide?: number// [6] 42249 (Int)
  ExtraordinaryDividendAmountType?: number// [7] 42250 (Int)
  ExtraordinaryDividendCurrency?: string// [8] 42251 (String)
  ExtraordinaryDividendDeterminationMethod?: string// [9] 42252 (String)
  DividendFXTriggerDate?: IDividendFXTriggerDate// [10] DividendFXTriggerDateRelativeTo.42265, DividendFXTriggerDateOffsetPeriod.42266 .. DividendFXTriggerDateAdjusted.42271
  DividendAccrualFloatingRate?: IDividendAccrualFloatingRate// [11] DividendFloatingRateIndex.42218, DividendFloatingRateIndexCurvePeriod.42219 .. DividendNegativeRateTreatment.42235
  DividendAccrualFixedRate?: number// [12] 42253 (Float)
  DividendAccrualPaymentDate?: IDividendAccrualPaymentDate// [13] DividendAccrualPaymentDateRelativeTo.42238, DividendAccrualPaymentDateOffsetPeriod.42239 .. DividendAccrualPaymentDateAdjusted.42244
  DividendCompoundingMethod?: number// [14] 42254 (Int)
  DividendNumOfIndexUnits?: number// [15] 42255 (Int)
  DividendCashPercentage?: number// [16] 42256 (Float)
  DividendCashEquivalentPercentage?: number// [17] 42257 (Float)
  NonCashDividendTreatment?: number// [18] 42258 (Int)
  DividendComposition?: number// [19] 42259 (Int)
  SpecialDividendsIndicator?: boolean// [20] 42260 (Boolean)
  MaterialDividendsIndicator?: boolean// [21] 42261 (Boolean)
  OptionsExchangeDividendsIndicator?: boolean// [22] 42262 (Boolean)
  AdditionalDividendsIndicator?: boolean// [23] 42263 (Boolean)
  AllDividendsIndicator?: boolean// [24] 42264 (Boolean)
}
