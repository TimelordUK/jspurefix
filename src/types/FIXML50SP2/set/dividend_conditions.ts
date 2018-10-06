import { IDividendPeriodGrp } from './dividend_period_grp'
import { IDividendFXTriggerDate } from './dividend_fx_trigger_date'
import { IDividendAccrualFloatingRate } from './dividend_accrual_floating_rate'
import { IDividendAccrualPaymentDate } from './dividend_accrual_payment_date'

export interface IDividendConditions {
  DividendReinvestmentIndicator?: boolean// 42245
  DividendEntitlementEvent?: number// 42246
  DividendAmountType?: number// 42247
  DividendUnderlierRefID?: string// 42248
  ExtraordinaryDividendPartySide?: number// 42249
  ExtraordinaryDividendAmountType?: number// 42250
  ExtraordinaryDividendCurrency?: string// 42251
  ExtraordinaryDividendDeterminationMethod?: string// 42252
  DividendAccrualFixedRate?: number// 42253
  DividendCompoundingMethod?: number// 42254
  DividendNumOfIndexUnits?: number// 42255
  DividendCashPercentage?: number// 42256
  DividendCashEquivalentPercentage?: number// 42257
  NonCashDividendTreatment?: number// 42258
  DividendComposition?: number// 42259
  SpecialDividendsIndicator?: boolean// 42260
  MaterialDividendsIndicator?: boolean// 42261
  OptionsExchangeDividendsIndicator?: boolean// 42262
  AdditionalDividendsIndicator?: boolean// 42263
  AllDividendsIndicator?: boolean// 42264
  DividendPeriodGrp?: IDividendPeriodGrp[]
  DividendFXTriggerDate?: IDividendFXTriggerDate
  DividendAccrualFloatingRate?: IDividendAccrualFloatingRate
  DividendAccrualPaymentDate?: IDividendAccrualPaymentDate
}
