import { IDividendPeriodGrp } from './dividend_period_grp'
import { IDividendFXTriggerDate } from './dividend_fx_trigger_date'
import { IDividendAccrualFloatingRate } from './dividend_accrual_floating_rate'
import { IDividendAccrualPaymentDate } from './dividend_accrual_payment_date'

export interface IDividendConditions {
  DividendReinvestmentIndicator?: boolean// [1] 42245 (Boolean)
  DividendEntitlementEvent?: number// [1] 42246 (Int)
  DividendAmountType?: number// [1] 42247 (Int)
  DividendUnderlierRefID?: string// [1] 42248 (String)
  ExtraordinaryDividendPartySide?: number// [1] 42249 (Int)
  ExtraordinaryDividendAmountType?: number// [1] 42250 (Int)
  ExtraordinaryDividendCurrency?: string// [1] 42251 (String)
  ExtraordinaryDividendDeterminationMethod?: string// [1] 42252 (String)
  DividendAccrualFixedRate?: number// [1] 42253 (Float)
  DividendCompoundingMethod?: number// [1] 42254 (Int)
  DividendNumOfIndexUnits?: number// [1] 42255 (Int)
  DividendCashPercentage?: number// [1] 42256 (Float)
  DividendCashEquivalentPercentage?: number// [1] 42257 (Float)
  NonCashDividendTreatment?: number// [1] 42258 (Int)
  DividendComposition?: number// [1] 42259 (Int)
  SpecialDividendsIndicator?: boolean// [1] 42260 (Boolean)
  MaterialDividendsIndicator?: boolean// [1] 42261 (Boolean)
  OptionsExchangeDividendsIndicator?: boolean// [1] 42262 (Boolean)
  AdditionalDividendsIndicator?: boolean// [1] 42263 (Boolean)
  AllDividendsIndicator?: boolean// [1] 42264 (Boolean)
  DividendPeriodGrp?: IDividendPeriodGrp[]// [1] Seq.42275, StartDtUnadj.42276 .. XID.42293
  DividendFXTriggerDate?: IDividendFXTriggerDate// [2] Reltv.42265, OfstPeriod.42266 .. Dt.42271
  DividendAccrualFloatingRate?: IDividendAccrualFloatingRate// [3] Ndx.42218, NdxPeriod.42219 .. NegtvRtTrtmt.42235
  DividendAccrualPaymentDate?: IDividendAccrualPaymentDate// [4] Reltv.42238, OfstPeriod.42239 .. Dt.42244
}
