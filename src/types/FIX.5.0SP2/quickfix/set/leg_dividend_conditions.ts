import { ILegDividendPeriodGrp } from './leg_dividend_period_grp'
import { ILegDividendFXTriggerDate } from './leg_dividend_fx_trigger_date'
import { ILegDividendAccrualFloatingRate } from './leg_dividend_accrual_floating_rate'
import { ILegDividendAccrualPaymentDate } from './leg_dividend_accrual_payment_date'

export interface ILegDividendConditions {
  LegDividendReinvestmentIndicator?: boolean// [1] 42337 (Boolean)
  LegDividendEntitlementEvent?: number// [2] 42338 (Int)
  LegDividendAmountType?: number// [3] 42339 (Int)
  LegDividendUnderlierRefID?: string// [4] 42340 (String)
  LegDividendPeriodGrp?: ILegDividendPeriodGrp// [5] NoLegDividendPeriods.42366, LegDividendPeriodSequence.42367 .. LegDividendPeriodXID.42385
  LegExtraordinaryDividendPartySide?: number// [6] 42341 (Int)
  LegExtraordinaryDividendAmountType?: number// [7] 42342 (Int)
  LegExtraordinaryDividendCurrency?: string// [8] 42343 (String)
  LegExtraordinaryDividendDeterminationMethod?: string// [9] 42344 (String)
  LegDividendFXTriggerDate?: ILegDividendFXTriggerDate// [10] LegDividendFXTriggerDateRelativeTo.42357, LegDividendFXTriggerDateOffsetPeriod.42358 .. LegDividendFXTriggerDateAdjusted.42363
  LegDividendAccrualFloatingRate?: ILegDividendAccrualFloatingRate// [11] LegDividendFloatingRateIndex.42312, LegDividendFloatingRateIndexCurvePeriod.42313 .. LegDividendNegativeRateTreatment.42329
  LegDividendAccrualFixedRate?: number// [12] 42345 (Float)
  LegDividendAccrualPaymentDate?: ILegDividendAccrualPaymentDate// [13] LegDividendAccrualPaymentDateRelativeTo.42330, LegDividendAccrualPaymentDateOffsetPeriod.42331 .. LegDividendAccrualPaymentDateAdjusted.42336
  LegDividendCompoundingMethod?: number// [14] 42346 (Int)
  LegDividendNumOfIndexUnits?: number// [15] 42347 (Int)
  LegDividendCashPercentage?: number// [16] 42348 (Float)
  LegDividendCashEquivalentPercentage?: number// [17] 42349 (Float)
  LegNonCashDividendTreatment?: number// [18] 42350 (Int)
  LegDividendComposition?: number// [19] 42351 (Int)
  LegSpecialDividendsIndicator?: boolean// [20] 42352 (Boolean)
  LegMaterialDividendsIndicator?: boolean// [21] 42353 (Boolean)
  LegOptionsExchangeDividendsIndicator?: boolean// [22] 42354 (Boolean)
  LegAdditionalDividendsIndicator?: boolean// [23] 42355 (Boolean)
  LegAllDividendsIndicator?: boolean// [24] 42356 (Boolean)
}
