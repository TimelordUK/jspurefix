import { IUnderlyingPaymentStreamPaymentDates } from './underlying_payment_stream_payment_dates'
import { IUnderlyingPaymentStreamResetDates } from './underlying_payment_stream_reset_dates'
import { IUnderlyingPaymentStreamFixedRate } from './underlying_payment_stream_fixed_rate'
import { IUnderlyingPaymentStreamFloatingRate } from './underlying_payment_stream_floating_rate'
import { IUnderlyingPaymentStreamCompoundingFloatingRate } from './underlying_payment_stream_compounding_floating_rate'
import { IUnderlyingPaymentStreamCompoundingDates } from './underlying_payment_stream_compounding_dates'
import { IUnderlyingPaymentStreamNonDeliverableSettlTerms } from './underlying_payment_stream_non_deliverable_settl_terms'

export interface IUnderlyingPaymentStream {
  UnderlyingReturnRateValuationDateType?: number// 43073
  PaymentStreamMarketRate?: number// 40739
  PaymentStreamDelayIndicator?: string// 40740
  UnderlyingPaymentStreamCashSettlIndicator?: string// 42895
  UnderlyingProvisionCashSettlCurrency?: string// 42167
  UnderlyingAdditionalTermBondDayCount?: number// 42035
  PaymentStreamAccrualDays?: number// 40743
  PaymentStreamDiscountType?: number// 40744
  PaymentStreamDiscountRate?: number// 40745
  PaymentStreamDiscountRateDayCount?: number// 40746
  UnderlyingDividendCompoundingMethod?: number// 42835
  UnderlyingPaymentStreamCompoundingXIDRef?: string// 42896
  UnderlyingPaymentStreamCompoundingSpread?: string// 42897
  UnderlyingPaymentStreamInterpolationMethod?: number// 42898
  UnderlyingPaymentStreamInterpolationPeriod?: number// 42899
  PaymentStreamInitialPrincipalExchangeIndicator?: string// 40748
  PaymentStreamInterimPrincipalExchangeIndicator?: string// 40749
  PaymentStreamFinalPrincipalExchangeIndicator?: string// 40750
  UnderlyingPaymentStreamFlatRateIndicator?: string// 41897
  UnderlyingPaymentStreamFlatRateAmount?: number// 41898
  UnderlyingPaymentStreamFlatRateCurrency?: string// 41899
  UnderlyingPaymentStreamMaximumPaymentAmount?: number// 41900
  UnderlyingPaymentStreamMaximumPaymentCurrency?: string// 41901
  UnderlyingPaymentStreamMaximumTransactionAmount?: number// 41902
  UnderlyingPaymentStreamMaximumTransactionCurrency?: string// 41903
  UnderlyingPaymentStreamCompoundingFixedRate?: string// 42900
  UnderlyingPaymentStreamPaymentDates?: IUnderlyingPaymentStreamPaymentDates
  UnderlyingPaymentStreamResetDates?: IUnderlyingPaymentStreamResetDates
  UnderlyingPaymentStreamFixedRate?: IUnderlyingPaymentStreamFixedRate
  UnderlyingPaymentStreamFloatingRate?: IUnderlyingPaymentStreamFloatingRate
  UnderlyingPaymentStreamCompoundingFloatingRate?: IUnderlyingPaymentStreamCompoundingFloatingRate
  UnderlyingPaymentStreamCompoundingDates?: IUnderlyingPaymentStreamCompoundingDates
  UnderlyingPaymentStreamNonDeliverableSettlTerms?: IUnderlyingPaymentStreamNonDeliverableSettlTerms
}
