import { IPaymentStreamPaymentDates } from './payment_stream_payment_dates'
import { IPaymentStreamResetDates } from './payment_stream_reset_dates'
import { IPaymentStreamFixedRate } from './payment_stream_fixed_rate'
import { IPaymentStreamFloatingRate } from './payment_stream_floating_rate'
import { IPaymentStreamCompoundingFloatingRate } from './payment_stream_compounding_floating_rate'
import { IPaymentStreamCompoundingDates } from './payment_stream_compounding_dates'
import { IPaymentStreamNonDeliverableSettlTerms } from './payment_stream_non_deliverable_settl_terms'

export interface IPaymentStream {
  PaymentStreamType?: number// 40738
  PaymentStreamMarketRate?: number// 40739
  PaymentStreamDelayIndicator?: boolean// 40740
  PaymentStreamCashSettlIndicator?: boolean// 42600
  PaymentStreamSettlCurrency?: string// 40741
  UnderlyingAdditionalTermBondDayCount?: number// 42035
  PaymentStreamAccrualDays?: number// 40743
  PaymentStreamDiscountType?: number// 40744
  PaymentStreamDiscountRate?: number// 40745
  PaymentStreamDiscountRateDayCount?: number// 40746
  PaymentStreamCompoundingMethod?: number// 40747
  PaymentStreamCompoundingXIDRef?: string// 42601
  PaymentStreamCompoundingSpread?: number// 42602
  PaymentStreamInterpolationMethod?: number// 42603
  PaymentStreamInterpolationPeriod?: number// 42604
  PaymentStreamInitialPrincipalExchangeIndicator?: boolean// 40748
  PaymentStreamInterimPrincipalExchangeIndicator?: boolean// 40749
  PaymentStreamFinalPrincipalExchangeIndicator?: boolean// 40750
  PaymentStreamFlatRateIndicator?: boolean// 41180
  PaymentStreamFlatRateAmount?: number// 41181
  PaymentStreamFlatRateCurrency?: string// 41182
  PaymentStreamMaximumPaymentAmount?: number// 41183
  PaymentStreamMaximumPaymentCurrency?: string// 41184
  PaymentStreamMaximumTransactionAmount?: number// 41185
  PaymentStreamMaximumTransactionCurrency?: string// 41186
  PaymentStreamCompoundingFixedRate?: number// 42605
  PaymentStreamPaymentDates?: IPaymentStreamPaymentDates
  PaymentStreamResetDates?: IPaymentStreamResetDates
  PaymentStreamFixedRate?: IPaymentStreamFixedRate
  PaymentStreamFloatingRate?: IPaymentStreamFloatingRate
  PaymentStreamCompoundingFloatingRate?: IPaymentStreamCompoundingFloatingRate
  PaymentStreamCompoundingDates?: IPaymentStreamCompoundingDates
  PaymentStreamNonDeliverableSettlTerms?: IPaymentStreamNonDeliverableSettlTerms
}
