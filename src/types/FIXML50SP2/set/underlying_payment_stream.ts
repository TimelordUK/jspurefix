import { IUnderlyingPaymentStreamPaymentDates } from './underlying_payment_stream_payment_dates'
import { IUnderlyingPaymentStreamResetDates } from './underlying_payment_stream_reset_dates'
import { IUnderlyingPaymentStreamFixedRate } from './underlying_payment_stream_fixed_rate'
import { IUnderlyingPaymentStreamFloatingRate } from './underlying_payment_stream_floating_rate'
import { IUnderlyingPaymentStreamCompoundingFloatingRate } from './underlying_payment_stream_compounding_floating_rate'
import { IUnderlyingPaymentStreamCompoundingDates } from './underlying_payment_stream_compounding_dates'
import { IUnderlyingPaymentStreamNonDeliverableSettlTerms } from './underlying_payment_stream_non_deliverable_settl_terms'

export interface IUnderlyingPaymentStream {
  UnderlyingPaymentStreamType?: number// 40568
  UnderlyingPaymentStreamMarketRate?: number// 40569
  UnderlyingPaymentStreamDelayIndicator?: boolean// 40570
  UnderlyingPaymentStreamCashSettlIndicator?: boolean// 42895
  UnderlyingPaymentStreamSettlCurrency?: string// 40571
  AdditionalTermBondDayCount?: number// 40018
  UnderlyingPaymentStreamAccrualDays?: number// 40573
  UnderlyingPaymentStreamDiscountType?: number// 40574
  UnderlyingPaymentStreamDiscountRate?: number// 40575
  LegPaymentStreamDiscountRateDayCount?: number// 40287
  UnderlyingPaymentStreamCompoundingMethod?: number// 40577
  UnderlyingPaymentStreamCompoundingXIDRef?: string// 42896
  UnderlyingPaymentStreamCompoundingSpread?: number// 42897
  UnderlyingPaymentStreamInterpolationMethod?: number// 42898
  UnderlyingPaymentStreamInterpolationPeriod?: number// 42899
  UnderlyingPaymentStreamInitialPrincipalExchangeIndicator?: boolean// 40578
  UnderlyingPaymentStreamInterimPrincipalExchangeIndicator?: boolean// 40579
  UnderlyingPaymentStreamFinalPrincipalExchangeIndicator?: boolean// 40580
  UnderlyingPaymentStreamFlatRateIndicator?: boolean// 41897
  UnderlyingPaymentStreamFlatRateAmount?: number// 41898
  UnderlyingPaymentStreamFlatRateCurrency?: string// 41899
  UnderlyingPaymentStreamMaximumPaymentAmount?: number// 41900
  UnderlyingPaymentStreamMaximumPaymentCurrency?: string// 41901
  UnderlyingPaymentStreamMaximumTransactionAmount?: number// 41902
  UnderlyingPaymentStreamMaximumTransactionCurrency?: string// 41903
  UnderlyingPaymentStreamCompoundingFixedRate?: number// 42900
  UnderlyingPaymentStreamPaymentDates?: IUnderlyingPaymentStreamPaymentDates
  UnderlyingPaymentStreamResetDates?: IUnderlyingPaymentStreamResetDates
  UnderlyingPaymentStreamFixedRate?: IUnderlyingPaymentStreamFixedRate
  UnderlyingPaymentStreamFloatingRate?: IUnderlyingPaymentStreamFloatingRate
  UnderlyingPaymentStreamCompoundingFloatingRate?: IUnderlyingPaymentStreamCompoundingFloatingRate
  UnderlyingPaymentStreamCompoundingDates?: IUnderlyingPaymentStreamCompoundingDates
  UnderlyingPaymentStreamNonDeliverableSettlTerms?: IUnderlyingPaymentStreamNonDeliverableSettlTerms
}
