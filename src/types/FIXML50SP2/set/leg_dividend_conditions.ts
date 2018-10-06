import { ILegDividendPeriodGrp } from './leg_dividend_period_grp'
import { ILegDividendFXTriggerDate } from './leg_dividend_fx_trigger_date'
import { ILegDividendAccrualFloatingRate } from './leg_dividend_accrual_floating_rate'
import { ILegDividendAccrualPaymentDate } from './leg_dividend_accrual_payment_date'

export interface ILegDividendConditions {
  LegDividendReinvestmentIndicator?: boolean// 42337
  LegDividendEntitlementEvent?: number// 42338
  LegDividendAmountType?: number// 42339
  LegDividendUnderlierRefID?: string// 42340
  LegExtraordinaryDividendPartySide?: number// 42341
  LegExtraordinaryDividendAmountType?: number// 42342
  LegExtraordinaryDividendCurrency?: string// 42343
  LegExtraordinaryDividendDeterminationMethod?: string// 42344
  LegDividendAccrualFixedRate?: number// 42345
  LegDividendCompoundingMethod?: number// 42346
  LegDividendNumOfIndexUnits?: number// 42347
  LegDividendCashPercentage?: number// 42348
  LegDividendCashEquivalentPercentage?: number// 42349
  LegNonCashDividendTreatment?: number// 42350
  LegDividendComposition?: number// 42351
  LegSpecialDividendsIndicator?: boolean// 42352
  LegMaterialDividendsIndicator?: boolean// 42353
  LegOptionsExchangeDividendsIndicator?: boolean// 42354
  LegAdditionalDividendsIndicator?: boolean// 42355
  LegAllDividendsIndicator?: boolean// 42356
  LegDividendPeriodGrp?: ILegDividendPeriodGrp[]
  LegDividendFXTriggerDate?: ILegDividendFXTriggerDate
  LegDividendAccrualFloatingRate?: ILegDividendAccrualFloatingRate
  LegDividendAccrualPaymentDate?: ILegDividendAccrualPaymentDate
}
