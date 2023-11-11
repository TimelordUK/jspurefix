import { IUnderlyingDividendPeriodGrp } from './underlying_dividend_period_grp'
import { IUnderlyingDividendFXTriggerDate } from './underlying_dividend_fx_trigger_date'
import { IUnderlyingDividendAccrualFloatingRate } from './underlying_dividend_accrual_floating_rate'
import { IUnderlyingDividendAccrualPaymentDate } from './underlying_dividend_accrual_payment_date'

export interface IUnderlyingDividendConditions {
  UnderlyingDividendReinvestmentIndicator?: boolean// [1] 42826 (Boolean)
  UnderlyingDividendEntitlementEvent?: number// [1] 42827 (Int)
  UnderlyingDividendAmountType?: number// [1] 42828 (Int)
  UnderlyingDividendUnderlierRefID?: string// [1] 42829 (String)
  UnderlyingExtraordinaryDividendPartySide?: number// [1] 42830 (Int)
  UnderlyingExtraordinaryDividendAmountType?: number// [1] 42831 (Int)
  UnderlyingExtraordinaryDividendCurrency?: string// [1] 42832 (String)
  UnderlyingExtraordinaryDividendDeterminationMethod?: string// [1] 42833 (String)
  UnderlyingDividendAccrualFixedRate?: number// [1] 42834 (Float)
  UnderlyingDividendCompoundingMethod?: number// [1] 42835 (Int)
  UnderlyingDividendNumOfIndexUnits?: number// [1] 42836 (Int)
  UnderlyingDividendCashPercentage?: number// [1] 42837 (Float)
  UnderlyingDividendCashEquivalentPercentage?: number// [1] 42838 (Float)
  UnderlyingNonCashDividendTreatment?: number// [1] 42839 (Int)
  UnderlyingDividendComposition?: number// [1] 42840 (Int)
  UnderlyingSpecialDividendsIndicator?: boolean// [1] 42841 (Boolean)
  UnderlyingMaterialDividendsIndicator?: boolean// [1] 42842 (Boolean)
  UnderlyingOptionsExchangeDividendsIndicator?: boolean// [1] 42843 (Boolean)
  UnderlyingAdditionalDividendsIndicator?: boolean// [1] 42844 (Boolean)
  UnderlyingAllDividendsIndicator?: boolean// [1] 42845 (Boolean)
  UnderlyingDividendPeriodGrp?: IUnderlyingDividendPeriodGrp[]// [1] Seq.42863, StartDtUnadj.42864 .. XID.42881
  UnderlyingDividendFXTriggerDate?: IUnderlyingDividendFXTriggerDate// [2] Reltv.42846, OfstPeriod.42847 .. Dt.42852
  UnderlyingDividendAccrualFloatingRate?: IUnderlyingDividendAccrualFloatingRate// [3] Ndx.42801, NdxPeriod.42802 .. NegtvRtTrtmt.42818
  UnderlyingDividendAccrualPaymentDate?: IUnderlyingDividendAccrualPaymentDate// [4] Reltv.42819, OfstPeriod.42820 .. Dt.42825
}
