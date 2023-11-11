import { ILegPaymentStreamPaymentDates } from './leg_payment_stream_payment_dates'
import { ILegPaymentStreamResetDates } from './leg_payment_stream_reset_dates'
import { ILegPaymentStreamFixedRate } from './leg_payment_stream_fixed_rate'
import { ILegPaymentStreamFloatingRate } from './leg_payment_stream_floating_rate'
import { ILegPaymentStreamCompoundingFloatingRate } from './leg_payment_stream_compounding_floating_rate'
import { ILegPaymentStreamCompoundingDates } from './leg_payment_stream_compounding_dates'
import { ILegPaymentStreamNonDeliverableSettlTerms } from './leg_payment_stream_non_deliverable_settl_terms'

export interface ILegPaymentStream {
  LegPaymentStreamType?: number// [1] 40279 (Int)
  LegPaymentStreamMarketRate?: number// [1] 40280 (Int)
  LegPaymentStreamDelayIndicator?: boolean// [1] 40281 (Boolean)
  LegPaymentStreamCashSettlIndicator?: boolean// [1] 42399 (Boolean)
  LegPaymentStreamSettlCurrency?: string// [1] 40282 (String)
  AdditionalTermBondDayCount?: number// [1] 40018 (Int)
  LegPaymentStreamAccrualDays?: number// [1] 40284 (Int)
  LegPaymentStreamDiscountType?: number// [1] 40285 (Int)
  LegPaymentStreamDiscountRate?: number// [1] 40286 (Float)
  LegPaymentStreamDiscountRateDayCount?: number// [1] 40287 (Int)
  LegPaymentStreamCompoundingMethod?: number// [1] 40288 (Int)
  LegPaymentStreamCompoundingXIDRef?: string// [1] 42400 (String)
  LegPaymentStreamCompoundingSpread?: number// [1] 42401 (Float)
  LegPaymentStreamInterpolationMethod?: number// [1] 42402 (Int)
  LegPaymentStreamInterpolationPeriod?: number// [1] 42403 (Int)
  LegPaymentStreamInitialPrincipalExchangeIndicator?: boolean// [1] 40289 (Boolean)
  LegPaymentStreamInterimPrincipalExchangeIndicator?: boolean// [1] 40290 (Boolean)
  LegPaymentStreamFinalPrincipalExchangeIndicator?: boolean// [1] 40291 (Boolean)
  LegPaymentStreamFlatRateIndicator?: boolean// [1] 41549 (Boolean)
  LegPaymentStreamFlatRateAmount?: number// [1] 41550 (Float)
  LegPaymentStreamFlatRateCurrency?: string// [1] 41551 (String)
  LegStreamMaximumPaymentAmount?: number// [1] 41552 (Float)
  LegStreamMaximumPaymentCurrency?: string// [1] 41553 (String)
  LegStreamMaximumTransactionAmount?: number// [1] 41554 (Float)
  LegStreamMaximumTransactionCurrency?: string// [1] 41555 (String)
  LegPaymentStreamCompoundingFixedRate?: number// [1] 42404 (Float)
  LegPaymentStreamPaymentDates?: ILegPaymentStreamPaymentDates// [1] BizDayCnvtn.40292, FreqPeriod.40294 .. MADts.41592
  LegPaymentStreamResetDates?: ILegPaymentStreamResetDates// [2] Reltv.40303, BizDayCnvtn.40304 .. CutoffDayTyp.40325
  LegPaymentStreamFixedRate?: ILegPaymentStreamFixedRate// [3] Rt.40326, Amt.40327 .. CtrctPxCcy.41560
  LegPaymentStreamFloatingRate?: ILegPaymentStreamFloatingRate// [4] Ndx.40331, NdxSrc.40332 .. VegaNotlAmt.42481
  LegPaymentStreamCompoundingFloatingRate?: ILegPaymentStreamCompoundingFloatingRate// [5] Ndx.42427, NdxPeriod.42428 .. NegtvRtTrtmt.42444
  LegPaymentStreamCompoundingDates?: ILegPaymentStreamCompoundingDates// [6] BizDayCnvtn.42408, Reltv.42409 .. LastDtUnadj.42418
  LegPaymentStreamNonDeliverableSettlTerms?: ILegPaymentStreamNonDeliverableSettlTerms// [7] Ccy.40359, BizDayCnvtn.40360 .. FixngDayTyp.40365
}
