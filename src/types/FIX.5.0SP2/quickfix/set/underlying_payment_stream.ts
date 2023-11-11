import { IUnderlyingPaymentStreamPaymentDates } from './underlying_payment_stream_payment_dates'
import { IUnderlyingPaymentStreamResetDates } from './underlying_payment_stream_reset_dates'
import { IUnderlyingPaymentStreamFixedRate } from './underlying_payment_stream_fixed_rate'
import { IUnderlyingPaymentStreamFloatingRate } from './underlying_payment_stream_floating_rate'
import { IUnderlyingPaymentStreamCompoundingFloatingRate } from './underlying_payment_stream_compounding_floating_rate'
import { IUnderlyingPaymentStreamCompoundingDates } from './underlying_payment_stream_compounding_dates'
import { IUnderlyingPaymentStreamNonDeliverableSettlTerms } from './underlying_payment_stream_non_deliverable_settl_terms'

export interface IUnderlyingPaymentStream {
  UnderlyingPaymentStreamType?: number// [1] 40568 (Int)
  UnderlyingPaymentStreamMarketRate?: number// [2] 40569 (Int)
  UnderlyingPaymentStreamDelayIndicator?: boolean// [3] 40570 (Boolean)
  UnderlyingPaymentStreamCashSettlIndicator?: boolean// [4] 42895 (Boolean)
  UnderlyingPaymentStreamSettlCurrency?: string// [5] 40571 (String)
  UnderlyingPaymentStreamDayCount?: number// [6] 40572 (Int)
  UnderlyingPaymentStreamOtherDayCount?: string// [7] 43107 (String)
  UnderlyingPaymentStreamAccrualDays?: number// [8] 40573 (Int)
  UnderlyingPaymentStreamDiscountType?: number// [9] 40574 (Int)
  UnderlyingPaymentStreamDiscountRate?: number// [10] 40575 (Float)
  UnderlyingPaymentStreamDiscountRateDayCount?: number// [11] 40576 (Int)
  UnderlyingPaymentStreamCompoundingMethod?: number// [12] 40577 (Int)
  UnderlyingPaymentStreamCompoundingXIDRef?: string// [13] 42896 (String)
  UnderlyingPaymentStreamCompoundingSpread?: number// [14] 42897 (Float)
  UnderlyingPaymentStreamInterpolationMethod?: number// [15] 42898 (Int)
  UnderlyingPaymentStreamInterpolationPeriod?: number// [16] 42899 (Int)
  UnderlyingPaymentStreamInitialPrincipalExchangeIndicator?: boolean// [17] 40578 (Boolean)
  UnderlyingPaymentStreamInterimPrincipalExchangeIndicator?: boolean// [18] 40579 (Boolean)
  UnderlyingPaymentStreamFinalPrincipalExchangeIndicator?: boolean// [19] 40580 (Boolean)
  UnderlyingPaymentStreamFlatRateIndicator?: boolean// [20] 41897 (Boolean)
  UnderlyingPaymentStreamFlatRateAmount?: number// [21] 41898 (Float)
  UnderlyingPaymentStreamFlatRateCurrency?: string// [22] 41899 (String)
  UnderlyingPaymentStreamMaximumPaymentAmount?: number// [23] 41900 (Float)
  UnderlyingPaymentStreamMaximumPaymentCurrency?: string// [24] 41901 (String)
  UnderlyingPaymentStreamMaximumTransactionAmount?: number// [25] 41902 (Float)
  UnderlyingPaymentStreamMaximumTransactionCurrency?: string// [26] 41903 (String)
  UnderlyingPaymentStreamPaymentDates?: IUnderlyingPaymentStreamPaymentDates// [27] UnderlyingPaymentStreamPaymentDateBusinessDayConvention.40581, UnderlyingPaymentStreamPaymentDateBusinessCenterGrp.40969 .. UnderlyingPaymentStreamFinalPricePaymentDateAdjusted.42954
  UnderlyingPaymentStreamResetDates?: IUnderlyingPaymentStreamResetDates// [28] UnderlyingPaymentStreamResetDateRelativeTo.40592, UnderlyingPaymentStreamResetDateBusinessDayConvention.40593 .. UnderlyingPaymentStreamFixingDateType.42957
  UnderlyingPaymentStreamFixedRate?: IUnderlyingPaymentStreamFixedRate// [29] UnderlyingPaymentStreamRate.40615, UnderlyingPaymentStreamFixedAmount.40616 .. UnderlyingPaymentStreamContractPriceCurrency.41908
  UnderlyingPaymentStreamFloatingRate?: IUnderlyingPaymentStreamFloatingRate// [30] UnderlyingPaymentStreamRateIndex.40620, UnderlyingPaymentStreamRateIndexSource.40621 .. UnderlyingPaymentStreamVegaNotionalAmount.42977
  UnderlyingPaymentStreamCompoundingFixedRate?: number// [31] 42900 (Float)
  UnderlyingPaymentStreamCompoundingFloatingRate?: IUnderlyingPaymentStreamCompoundingFloatingRate// [32] UnderlyingPaymentStreamCompoundingRateIndex.42923, UnderlyingPaymentStreamCompoundingRateIndexCurvePeriod.42924 .. UnderlyingPaymentStreamCompoundingNegativeRateTreatment.42940
  UnderlyingPaymentStreamCompoundingDates?: IUnderlyingPaymentStreamCompoundingDates// [33] UnderlyingPaymentStreamCompoundingDatesBusinessDayConvention.42904, UnderlyingPaymentStreamCompoundingDatesBusinessCenterGrp.42915 .. UnderlyingPaymentStreamBoundsLastDateUnadjusted.42914
  UnderlyingPaymentStreamNonDeliverableSettlTerms?: IUnderlyingPaymentStreamNonDeliverableSettlTerms// [34] UnderlyingPaymentStreamNonDeliverableRefCurrency.40648, UnderlyingPaymentStreamNonDeliverableFixingDatesBizDayConvention.40649 .. UnderlyingSettlRatePostponementCalculationAgent.40663
}
