import { ILegPaymentStreamPaymentDates } from './leg_payment_stream_payment_dates'
import { ILegPaymentStreamResetDates } from './leg_payment_stream_reset_dates'
import { ILegPaymentStreamFixedRate } from './leg_payment_stream_fixed_rate'
import { ILegPaymentStreamFloatingRate } from './leg_payment_stream_floating_rate'
import { ILegPaymentStreamCompoundingFloatingRate } from './leg_payment_stream_compounding_floating_rate'
import { ILegPaymentStreamCompoundingDates } from './leg_payment_stream_compounding_dates'
import { ILegPaymentStreamNonDeliverableSettlTerms } from './leg_payment_stream_non_deliverable_settl_terms'

export interface ILegPaymentStream {
  LegPaymentStreamType?: number// [1] 40279 (Int)
  LegPaymentStreamMarketRate?: number// [2] 40280 (Int)
  LegPaymentStreamDelayIndicator?: boolean// [3] 40281 (Boolean)
  LegPaymentStreamCashSettlIndicator?: boolean// [4] 42399 (Boolean)
  LegPaymentStreamSettlCurrency?: string// [5] 40282 (String)
  LegPaymentStreamDayCount?: number// [6] 40283 (Int)
  LegPaymentStreamOtherDayCount?: string// [7] 43108 (String)
  LegPaymentStreamAccrualDays?: number// [8] 40284 (Int)
  LegPaymentStreamDiscountType?: number// [9] 40285 (Int)
  LegPaymentStreamDiscountRate?: number// [10] 40286 (Float)
  LegPaymentStreamDiscountRateDayCount?: number// [11] 40287 (Int)
  LegPaymentStreamCompoundingMethod?: number// [12] 40288 (Int)
  LegPaymentStreamCompoundingXIDRef?: string// [13] 42400 (String)
  LegPaymentStreamCompoundingSpread?: number// [14] 42401 (Float)
  LegPaymentStreamInterpolationMethod?: number// [15] 42402 (Int)
  LegPaymentStreamInterpolationPeriod?: number// [16] 42403 (Int)
  LegPaymentStreamInitialPrincipalExchangeIndicator?: boolean// [17] 40289 (Boolean)
  LegPaymentStreamInterimPrincipalExchangeIndicator?: boolean// [18] 40290 (Boolean)
  LegPaymentStreamFinalPrincipalExchangeIndicator?: boolean// [19] 40291 (Boolean)
  LegPaymentStreamFlatRateIndicator?: boolean// [20] 41549 (Boolean)
  LegPaymentStreamFlatRateAmount?: number// [21] 41550 (Float)
  LegPaymentStreamFlatRateCurrency?: string// [22] 41551 (String)
  LegStreamMaximumPaymentAmount?: number// [23] 41552 (Float)
  LegStreamMaximumPaymentCurrency?: string// [24] 41553 (String)
  LegStreamMaximumTransactionAmount?: number// [25] 41554 (Float)
  LegStreamMaximumTransactionCurrency?: string// [26] 41555 (String)
  LegPaymentStreamPaymentDates?: ILegPaymentStreamPaymentDates// [27] LegPaymentStreamPaymentDateBusinessDayConvention.40292, LegPaymentStreamPaymentDateBusinessCenterGrp.40930 .. LegPaymentStreamFinalPricePaymentDateAdjusted.42458
  LegPaymentStreamResetDates?: ILegPaymentStreamResetDates// [28] LegPaymentStreamResetDateRelativeTo.40303, LegPaymentStreamResetDateBusinessDayConvention.40304 .. LegPaymentStreamFixingDateType.42461
  LegPaymentStreamFixedRate?: ILegPaymentStreamFixedRate// [29] LegPaymentStreamRate.40326, LegPaymentStreamFixedAmount.40327 .. LegPaymentStreamContractPriceCurrency.41560
  LegPaymentStreamFloatingRate?: ILegPaymentStreamFloatingRate// [30] LegPaymentStreamRateIndex.40331, LegPaymentStreamRateIndexSource.40332 .. LegPaymentStreamVegaNotionalAmount.42481
  LegPaymentStreamCompoundingFixedRate?: number// [31] 42404 (Float)
  LegPaymentStreamCompoundingFloatingRate?: ILegPaymentStreamCompoundingFloatingRate// [32] LegPaymentStreamCompoundingRateIndex.42427, LegPaymentStreamCompoundingRateIndexCurvePeriod.42428 .. LegPaymentStreamCompoundingNegativeRateTreatment.42444
  LegPaymentStreamCompoundingDates?: ILegPaymentStreamCompoundingDates// [33] LegPaymentStreamCompoundingDatesBusinessDayConvention.42408, LegPaymentStreamCompoundingDatesBusinessCenterGrp.42419 .. LegPaymentStreamBoundsLastDateUnadjusted.42418
  LegPaymentStreamNonDeliverableSettlTerms?: ILegPaymentStreamNonDeliverableSettlTerms// [34] LegPaymentStreamNonDeliverableRefCurrency.40359, LegPaymentStreamNonDeliverableFixingDatesBusinessDayConvention.40360 .. LegSettlRatePostponementCalculationAgent.40906
}
