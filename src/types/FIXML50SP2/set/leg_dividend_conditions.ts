import { ILegDividendPeriodGrp } from './leg_dividend_period_grp'
import { ILegDividendFXTriggerDate } from './leg_dividend_fx_trigger_date'
import { ILegDividendAccrualFloatingRate } from './leg_dividend_accrual_floating_rate'
import { ILegDividendAccrualPaymentDate } from './leg_dividend_accrual_payment_date'

export interface ILegDividendConditions {
  LegDividendReinvestmentIndicator?: boolean// [1] 42337 (Boolean)
  LegDividendEntitlementEvent?: number// [1] 42338 (Int)
  LegDividendAmountType?: number// [1] 42339 (Int)
  LegDividendUnderlierRefID?: string// [1] 42340 (String)
  LegExtraordinaryDividendPartySide?: number// [1] 42341 (Int)
  LegExtraordinaryDividendAmountType?: number// [1] 42342 (Int)
  LegExtraordinaryDividendCurrency?: string// [1] 42343 (String)
  LegExtraordinaryDividendDeterminationMethod?: string// [1] 42344 (String)
  LegDividendAccrualFixedRate?: number// [1] 42345 (Float)
  LegDividendCompoundingMethod?: number// [1] 42346 (Int)
  LegDividendNumOfIndexUnits?: number// [1] 42347 (Int)
  LegDividendCashPercentage?: number// [1] 42348 (Float)
  LegDividendCashEquivalentPercentage?: number// [1] 42349 (Float)
  LegNonCashDividendTreatment?: number// [1] 42350 (Int)
  LegDividendComposition?: number// [1] 42351 (Int)
  LegSpecialDividendsIndicator?: boolean// [1] 42352 (Boolean)
  LegMaterialDividendsIndicator?: boolean// [1] 42353 (Boolean)
  LegOptionsExchangeDividendsIndicator?: boolean// [1] 42354 (Boolean)
  LegAdditionalDividendsIndicator?: boolean// [1] 42355 (Boolean)
  LegAllDividendsIndicator?: boolean// [1] 42356 (Boolean)
  LegDividendPeriodGrp?: ILegDividendPeriodGrp[]// [1] Seq.42367, StartDtUnadj.42368 .. XID.42385
  LegDividendFXTriggerDate?: ILegDividendFXTriggerDate// [2] Reltv.42357, OfstPeriod.42358 .. Dt.42363
  LegDividendAccrualFloatingRate?: ILegDividendAccrualFloatingRate// [3] Ndx.42312, NdxPeriod.42313 .. NegtvRtTrtmt.42329
  LegDividendAccrualPaymentDate?: ILegDividendAccrualPaymentDate// [4] Reltv.42330, OfstPeriod.42331 .. Dt.42336
}
