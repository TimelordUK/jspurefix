import { ILegPaymentStreamPaymentDates } from './leg_payment_stream_payment_dates'
import { ILegPaymentStreamResetDates } from './leg_payment_stream_reset_dates'
import { ILegPaymentStreamFixedRate } from './leg_payment_stream_fixed_rate'
import { ILegPaymentStreamFloatingRate } from './leg_payment_stream_floating_rate'
import { ILegPaymentStreamCompoundingFloatingRate } from './leg_payment_stream_compounding_floating_rate'
import { ILegPaymentStreamCompoundingDates } from './leg_payment_stream_compounding_dates'
import { ILegPaymentStreamNonDeliverableSettlTerms } from './leg_payment_stream_non_deliverable_settl_terms'

export interface ILegPaymentStream {
  LegPaymentStreamType?: number// 40279
  LegPaymentStreamMarketRate?: number// 40280
  LegPaymentStreamDelayIndicator?: boolean// 40281
  LegPaymentStreamCashSettlIndicator?: boolean// 42399
  LegPaymentStreamSettlCurrency?: string// 40282
  AdditionalTermBondDayCount?: number// 40018
  LegPaymentStreamAccrualDays?: number// 40284
  LegPaymentStreamDiscountType?: number// 40285
  LegPaymentStreamDiscountRate?: number// 40286
  LegPaymentStreamDiscountRateDayCount?: number// 40287
  LegPaymentStreamCompoundingMethod?: number// 40288
  LegPaymentStreamCompoundingXIDRef?: string// 42400
  LegPaymentStreamCompoundingSpread?: number// 42401
  LegPaymentStreamInterpolationMethod?: number// 42402
  LegPaymentStreamInterpolationPeriod?: number// 42403
  LegPaymentStreamInitialPrincipalExchangeIndicator?: boolean// 40289
  LegPaymentStreamInterimPrincipalExchangeIndicator?: boolean// 40290
  LegPaymentStreamFinalPrincipalExchangeIndicator?: boolean// 40291
  LegPaymentStreamFlatRateIndicator?: boolean// 41549
  LegPaymentStreamFlatRateAmount?: number// 41550
  LegPaymentStreamFlatRateCurrency?: string// 41551
  LegStreamMaximumPaymentAmount?: number// 41552
  LegStreamMaximumPaymentCurrency?: string// 41553
  LegStreamMaximumTransactionAmount?: number// 41554
  LegStreamMaximumTransactionCurrency?: string// 41555
  LegPaymentStreamCompoundingFixedRate?: number// 42404
  LegPaymentStreamPaymentDates?: ILegPaymentStreamPaymentDates
  LegPaymentStreamResetDates?: ILegPaymentStreamResetDates
  LegPaymentStreamFixedRate?: ILegPaymentStreamFixedRate
  LegPaymentStreamFloatingRate?: ILegPaymentStreamFloatingRate
  LegPaymentStreamCompoundingFloatingRate?: ILegPaymentStreamCompoundingFloatingRate
  LegPaymentStreamCompoundingDates?: ILegPaymentStreamCompoundingDates
  LegPaymentStreamNonDeliverableSettlTerms?: ILegPaymentStreamNonDeliverableSettlTerms
}
