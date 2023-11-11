import { IPaymentStreamPaymentDates } from './payment_stream_payment_dates'
import { IPaymentStreamResetDates } from './payment_stream_reset_dates'
import { IPaymentStreamFixedRate } from './payment_stream_fixed_rate'
import { IPaymentStreamFloatingRate } from './payment_stream_floating_rate'
import { IPaymentStreamCompoundingFloatingRate } from './payment_stream_compounding_floating_rate'
import { IPaymentStreamCompoundingDates } from './payment_stream_compounding_dates'
import { IPaymentStreamNonDeliverableSettlTerms } from './payment_stream_non_deliverable_settl_terms'

export interface IPaymentStream {
  PaymentStreamType?: number// [1] 40738 (Int)
  PaymentStreamMarketRate?: number// [2] 40739 (Int)
  PaymentStreamDelayIndicator?: boolean// [3] 40740 (Boolean)
  PaymentStreamCashSettlIndicator?: boolean// [4] 42600 (Boolean)
  PaymentStreamSettlCurrency?: string// [5] 40741 (String)
  PaymentStreamDayCount?: number// [6] 40742 (Int)
  PaymentStreamOtherDayCount?: string// [7] 43106 (String)
  PaymentStreamAccrualDays?: number// [8] 40743 (Int)
  PaymentStreamDiscountType?: number// [9] 40744 (Int)
  PaymentStreamDiscountRate?: number// [10] 40745 (Float)
  PaymentStreamDiscountRateDayCount?: number// [11] 40746 (Int)
  PaymentStreamCompoundingMethod?: number// [12] 40747 (Int)
  PaymentStreamCompoundingXIDRef?: string// [13] 42601 (String)
  PaymentStreamCompoundingSpread?: number// [14] 42602 (Float)
  PaymentStreamInterpolationMethod?: number// [15] 42603 (Int)
  PaymentStreamInterpolationPeriod?: number// [16] 42604 (Int)
  PaymentStreamInitialPrincipalExchangeIndicator?: boolean// [17] 40748 (Boolean)
  PaymentStreamInterimPrincipalExchangeIndicator?: boolean// [18] 40749 (Boolean)
  PaymentStreamFinalPrincipalExchangeIndicator?: boolean// [19] 40750 (Boolean)
  PaymentStreamFlatRateIndicator?: boolean// [20] 41180 (Boolean)
  PaymentStreamFlatRateAmount?: number// [21] 41181 (Float)
  PaymentStreamFlatRateCurrency?: string// [22] 41182 (String)
  PaymentStreamMaximumPaymentAmount?: number// [23] 41183 (Float)
  PaymentStreamMaximumPaymentCurrency?: string// [24] 41184 (String)
  PaymentStreamMaximumTransactionAmount?: number// [25] 41185 (Float)
  PaymentStreamMaximumTransactionCurrency?: string// [26] 41186 (String)
  PaymentStreamPaymentDates?: IPaymentStreamPaymentDates// [27] PaymentStreamPaymentDateBusinessDayConvention.40751, PaymentStreamPaymentDateBusinessCenterGrp.40947 .. PaymentStreamFinalPricePaymentDateAdjusted.42659
  PaymentStreamResetDates?: IPaymentStreamResetDates// [28] PaymentStreamResetDateRelativeTo.40761, PaymentStreamResetDateBusinessDayConvention.40762 .. PaymentStreamFixingDateType.42662
  PaymentStreamFixedRate?: IPaymentStreamFixedRate// [29] PaymentStreamRate.40784, PaymentStreamFixedAmount.40785 .. PaymentStreamContractPriceCurrency.41191
  PaymentStreamFloatingRate?: IPaymentStreamFloatingRate// [30] PaymentStreamRateIndex.40789, PaymentStreamRateIndexSource.40790 .. PaymentStreamVegaNotionalAmount.42682
  PaymentStreamCompoundingFixedRate?: number// [31] 42605 (Float)
  PaymentStreamCompoundingFloatingRate?: IPaymentStreamCompoundingFloatingRate// [32] PaymentStreamCompoundingRateIndex.42628, PaymentStreamCompoundingRateIndexCurvePeriod.42629 .. PaymentStreamCompoundingNegativeRateTreatment.42645
  PaymentStreamCompoundingDates?: IPaymentStreamCompoundingDates// [33] PaymentStreamCompoundingDatesBusinessDayConvention.42609, PaymentStreamCompoundingDatesBusinessCenterGrp.42620 .. PaymentStreamBoundsLastDateUnadjusted.42619
  PaymentStreamNonDeliverableSettlTerms?: IPaymentStreamNonDeliverableSettlTerms// [34] PaymentStreamNonDeliverableRefCurrency.40817, PaymentStreamNonDeliverableFixingDatesBusinessDayConvention.40818 .. SettlRatePostponementCalculationAgent.40089
}
