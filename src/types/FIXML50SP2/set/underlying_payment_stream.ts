import { IUnderlyingPaymentStreamPaymentDates } from './underlying_payment_stream_payment_dates'
import { IUnderlyingPaymentStreamResetDates } from './underlying_payment_stream_reset_dates'
import { IUnderlyingPaymentStreamFixedRate } from './underlying_payment_stream_fixed_rate'
import { IUnderlyingPaymentStreamFloatingRate } from './underlying_payment_stream_floating_rate'
import { IUnderlyingPaymentStreamCompoundingFloatingRate } from './underlying_payment_stream_compounding_floating_rate'
import { IUnderlyingPaymentStreamCompoundingDates } from './underlying_payment_stream_compounding_dates'
import { IUnderlyingPaymentStreamNonDeliverableSettlTerms } from './underlying_payment_stream_non_deliverable_settl_terms'

export interface IUnderlyingPaymentStream {
  UnderlyingPaymentStreamType?: number// [1] 40568 (Int)
  UnderlyingPaymentStreamMarketRate?: number// [1] 40569 (Int)
  UnderlyingPaymentStreamDelayIndicator?: boolean// [1] 40570 (Boolean)
  UnderlyingPaymentStreamCashSettlIndicator?: boolean// [1] 42895 (Boolean)
  UnderlyingPaymentStreamSettlCurrency?: string// [1] 40571 (String)
  AdditionalTermBondDayCount?: number// [1] 40018 (Int)
  UnderlyingPaymentStreamAccrualDays?: number// [1] 40573 (Int)
  UnderlyingPaymentStreamDiscountType?: number// [1] 40574 (Int)
  UnderlyingPaymentStreamDiscountRate?: number// [1] 40575 (Float)
  LegPaymentStreamDiscountRateDayCount?: number// [1] 40287 (Int)
  UnderlyingPaymentStreamCompoundingMethod?: number// [1] 40577 (Int)
  UnderlyingPaymentStreamCompoundingXIDRef?: string// [1] 42896 (String)
  UnderlyingPaymentStreamCompoundingSpread?: number// [1] 42897 (Float)
  UnderlyingPaymentStreamInterpolationMethod?: number// [1] 42898 (Int)
  UnderlyingPaymentStreamInterpolationPeriod?: number// [1] 42899 (Int)
  UnderlyingPaymentStreamInitialPrincipalExchangeIndicator?: boolean// [1] 40578 (Boolean)
  UnderlyingPaymentStreamInterimPrincipalExchangeIndicator?: boolean// [1] 40579 (Boolean)
  UnderlyingPaymentStreamFinalPrincipalExchangeIndicator?: boolean// [1] 40580 (Boolean)
  UnderlyingPaymentStreamFlatRateIndicator?: boolean// [1] 41897 (Boolean)
  UnderlyingPaymentStreamFlatRateAmount?: number// [1] 41898 (Float)
  UnderlyingPaymentStreamFlatRateCurrency?: string// [1] 41899 (String)
  UnderlyingPaymentStreamMaximumPaymentAmount?: number// [1] 41900 (Float)
  UnderlyingPaymentStreamMaximumPaymentCurrency?: string// [1] 41901 (String)
  UnderlyingPaymentStreamMaximumTransactionAmount?: number// [1] 41902 (Float)
  UnderlyingPaymentStreamMaximumTransactionCurrency?: string// [1] 41903 (String)
  UnderlyingPaymentStreamCompoundingFixedRate?: number// [1] 42900 (Float)
  UnderlyingPaymentStreamPaymentDates?: IUnderlyingPaymentStreamPaymentDates// [1] BizDayCnvtn.40581, FreqPeriod.40583 .. MADts.41940
  UnderlyingPaymentStreamResetDates?: IUnderlyingPaymentStreamResetDates// [2] Reltv.40592, BizDayCnvtn.40593 .. CutoffDayTyp.40614
  UnderlyingPaymentStreamFixedRate?: IUnderlyingPaymentStreamFixedRate// [3] Rt.40615, Amt.40616 .. CtrctPxCcy.41908
  UnderlyingPaymentStreamFloatingRate?: IUnderlyingPaymentStreamFloatingRate// [4] Ndx.40620, NdxSrc.40621 .. VegaNotlAmt.42977
  UnderlyingPaymentStreamCompoundingFloatingRate?: IUnderlyingPaymentStreamCompoundingFloatingRate// [5] Ndx.42923, NdxPeriod.42924 .. NegtvRtTrtmt.42940
  UnderlyingPaymentStreamCompoundingDates?: IUnderlyingPaymentStreamCompoundingDates// [6] BizDayCnvtn.42904, Reltv.42905 .. LastDtUnadj.42914
  UnderlyingPaymentStreamNonDeliverableSettlTerms?: IUnderlyingPaymentStreamNonDeliverableSettlTerms// [7] Ccy.40648, BizDayCnvtn.40649 .. FixngDayTyp.40654
}
