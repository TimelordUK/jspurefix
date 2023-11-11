import { IUnderlyingDividendPeriodGrp } from './underlying_dividend_period_grp'
import { IUnderlyingDividendFXTriggerDate } from './underlying_dividend_fx_trigger_date'
import { IUnderlyingDividendAccrualFloatingRate } from './underlying_dividend_accrual_floating_rate'
import { IUnderlyingDividendAccrualPaymentDate } from './underlying_dividend_accrual_payment_date'

export interface IUnderlyingDividendConditions {
  UnderlyingDividendReinvestmentIndicator?: boolean// [1] 42826 (Boolean)
  UnderlyingDividendEntitlementEvent?: number// [2] 42827 (Int)
  UnderlyingDividendAmountType?: number// [3] 42828 (Int)
  UnderlyingDividendUnderlierRefID?: string// [4] 42829 (String)
  UnderlyingDividendPeriodGrp?: IUnderlyingDividendPeriodGrp// [5] NoUnderlyingDividendPeriods.42862, UnderlyingDividendPeriodSequence.42863 .. UnderlyingDividendPeriodXID.42881
  UnderlyingExtraordinaryDividendPartySide?: number// [6] 42830 (Int)
  UnderlyingExtraordinaryDividendAmountType?: number// [7] 42831 (Int)
  UnderlyingExtraordinaryDividendCurrency?: string// [8] 42832 (String)
  UnderlyingExtraordinaryDividendDeterminationMethod?: string// [9] 42833 (String)
  UnderlyingDividendFXTriggerDate?: IUnderlyingDividendFXTriggerDate// [10] UnderlyingDividendFXTriggerDateRelativeTo.42846, UnderlyingDividendFXTriggerDateOffsetPeriod.42847 .. UnderlyingDividendFXTriggerDateAdjusted.42852
  UnderlyingDividendAccrualFloatingRate?: IUnderlyingDividendAccrualFloatingRate// [11] UnderlyingDividendFloatingRateIndex.42801, UnderlyingDividendFloatingRateIndexCurvePeriod.42802 .. UnderlyingDividendNegativeRateTreatment.42818
  UnderlyingDividendAccrualFixedRate?: number// [12] 42834 (Float)
  UnderlyingDividendAccrualPaymentDate?: IUnderlyingDividendAccrualPaymentDate// [13] UnderlyingDividendAccrualPaymentDateRelativeTo.42819, UnderlyingDividendAccrualPaymentDateOffsetPeriod.42820 .. UnderlyingDividendAccrualPaymentDateAdjusted.42825
  UnderlyingDividendCompoundingMethod?: number// [14] 42835 (Int)
  UnderlyingDividendNumOfIndexUnits?: number// [15] 42836 (Int)
  UnderlyingDividendCashPercentage?: number// [16] 42837 (Float)
  UnderlyingDividendCashEquivalentPercentage?: number// [17] 42838 (Float)
  UnderlyingNonCashDividendTreatment?: number// [18] 42839 (Int)
  UnderlyingDividendComposition?: number// [19] 42840 (Int)
  UnderlyingSpecialDividendsIndicator?: boolean// [20] 42841 (Boolean)
  UnderlyingMaterialDividendsIndicator?: boolean// [21] 42842 (Boolean)
  UnderlyingOptionsExchangeDividendsIndicator?: boolean// [22] 42843 (Boolean)
  UnderlyingAdditionalDividendsIndicator?: boolean// [23] 42844 (Boolean)
  UnderlyingAllDividendsIndicator?: boolean// [24] 42845 (Boolean)
}
