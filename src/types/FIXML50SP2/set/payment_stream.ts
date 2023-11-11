import { IPaymentStreamPaymentDates } from './payment_stream_payment_dates'
import { IPaymentStreamResetDates } from './payment_stream_reset_dates'
import { IPaymentStreamFixedRate } from './payment_stream_fixed_rate'
import { IPaymentStreamFloatingRate } from './payment_stream_floating_rate'
import { IPaymentStreamCompoundingFloatingRate } from './payment_stream_compounding_floating_rate'
import { IPaymentStreamCompoundingDates } from './payment_stream_compounding_dates'
import { IPaymentStreamNonDeliverableSettlTerms } from './payment_stream_non_deliverable_settl_terms'

export interface IPaymentStream {
  PaymentStreamType?: number// [1] 40738 (Int)
  PaymentStreamMarketRate?: number// [1] 40739 (Int)
  PaymentStreamDelayIndicator?: boolean// [1] 40740 (Boolean)
  PaymentStreamCashSettlIndicator?: boolean// [1] 42600 (Boolean)
  PaymentStreamSettlCurrency?: string// [1] 40741 (String)
  AdditionalTermBondDayCount?: number// [1] 40018 (Int)
  PaymentStreamAccrualDays?: number// [1] 40743 (Int)
  PaymentStreamDiscountType?: number// [1] 40744 (Int)
  PaymentStreamDiscountRate?: number// [1] 40745 (Float)
  LegPaymentStreamDiscountRateDayCount?: number// [1] 40287 (Int)
  PaymentStreamCompoundingMethod?: number// [1] 40747 (Int)
  PaymentStreamCompoundingXIDRef?: string// [1] 42601 (String)
  PaymentStreamCompoundingSpread?: number// [1] 42602 (Float)
  PaymentStreamInterpolationMethod?: number// [1] 42603 (Int)
  PaymentStreamInterpolationPeriod?: number// [1] 42604 (Int)
  PaymentStreamInitialPrincipalExchangeIndicator?: boolean// [1] 40748 (Boolean)
  PaymentStreamInterimPrincipalExchangeIndicator?: boolean// [1] 40749 (Boolean)
  PaymentStreamFinalPrincipalExchangeIndicator?: boolean// [1] 40750 (Boolean)
  PaymentStreamFlatRateIndicator?: boolean// [1] 41180 (Boolean)
  PaymentStreamFlatRateAmount?: number// [1] 41181 (Float)
  PaymentStreamFlatRateCurrency?: string// [1] 41182 (String)
  PaymentStreamMaximumPaymentAmount?: number// [1] 41183 (Float)
  PaymentStreamMaximumPaymentCurrency?: string// [1] 41184 (String)
  PaymentStreamMaximumTransactionAmount?: number// [1] 41185 (Float)
  PaymentStreamMaximumTransactionCurrency?: string// [1] 41186 (String)
  PaymentStreamCompoundingFixedRate?: number// [1] 42605 (Float)
  PaymentStreamPaymentDates?: IPaymentStreamPaymentDates// [1] BizDayCnvtn.40751, FreqPeriod.40753 .. MADts.41223
  PaymentStreamResetDates?: IPaymentStreamResetDates// [2] Reltv.40761, BizDayCnvtn.40762 .. CutoffDayTyp.40783
  PaymentStreamFixedRate?: IPaymentStreamFixedRate// [3] Rt.40784, Amt.40785 .. CtrctPxCcy.41191
  PaymentStreamFloatingRate?: IPaymentStreamFloatingRate// [4] Ndx.40789, NdxSrc.40790 .. VegaNotlAmt.42682
  PaymentStreamCompoundingFloatingRate?: IPaymentStreamCompoundingFloatingRate// [5] Ndx.42628, NdxPeriod.42629 .. NegtvRtTrtmt.42645
  PaymentStreamCompoundingDates?: IPaymentStreamCompoundingDates// [6] BizDayCnvtn.42609, Reltv.42610 .. LastDtUnadj.42619
  PaymentStreamNonDeliverableSettlTerms?: IPaymentStreamNonDeliverableSettlTerms// [7] Ccy.40817, BizDayCnvtn.40818 .. FixngDayTyp.40823
}
