import { IUnderlyingDividendAccrualFloatingRate } from './underlying_dividend_accrual_floating_rate'
import { IUnderlyingDividendAccrualPaymentDate } from './underlying_dividend_accrual_payment_date'

export interface IUnderlyingDividendConditions {
  UnderlyingDividendReinvestmentIndicator?: boolean// [1] 42826 (Boolean)
  UnderlyingDividendEntitlementEvent?: number// [2] 42827 (Int)
  UnderlyingDividendAmountType?: number// [3] 42828 (Int)
  UnderlyingDividendUnderlierRefID?: string// [4] 42829 (String)
  UnderlyingExtraordinaryDividendPartySide?: number// [5] 42830 (Int)
  UnderlyingExtraordinaryDividendAmountType?: number// [6] 42831 (Int)
  UnderlyingExtraordinaryDividendCurrency?: string// [7] 42832 (String)
  UnderlyingExtraordinaryDividendDeterminationMethod?: string// [8] 42833 (String)
  UnderlyingDividendAccrualFloatingRate?: IUnderlyingDividendAccrualFloatingRate// [9] UnderlyingDividendFloatingRateIndex.42801, UnderlyingDividendFloatingRateIndexCurvePeriod.42802 .. UnderlyingDividendNegativeRateTreatment.42818
  UnderlyingDividendAccrualFixedRate?: number// [10] 42834 (Float)
  UnderlyingDividendAccrualPaymentDate?: IUnderlyingDividendAccrualPaymentDate// [11] UnderlyingDividendAccrualPaymentDateRelativeTo.42819, UnderlyingDividendAccrualPaymentDateOffsetPeriod.42820 .. UnderlyingDividendAccrualPaymentDateAdjusted.42825
  UnderlyingDividendCompoundingMethod?: number// [12] 42835 (Int)
  UnderlyingDividendNumOfIndexUnits?: number// [13] 42836 (Int)
  UnderlyingDividendCashPercentage?: number// [14] 42837 (Float)
  UnderlyingDividendCashEquivalentPercentage?: number// [15] 42838 (Float)
  UnderlyingNonCashDividendTreatment?: number// [16] 42839 (Int)
  UnderlyingDividendComposition?: number// [17] 42840 (Int)
  UnderlyingSpecialDividendsIndicator?: boolean// [18] 42841 (Boolean)
  UnderlyingMaterialDividendsIndicator?: boolean// [19] 42842 (Boolean)
  UnderlyingOptionsExchangeDividendsIndicator?: boolean// [20] 42843 (Boolean)
  UnderlyingAdditionalDividendsIndicator?: boolean// [21] 42844 (Boolean)
  UnderlyingAllDividendsIndicator?: boolean// [22] 42845 (Boolean)
}
