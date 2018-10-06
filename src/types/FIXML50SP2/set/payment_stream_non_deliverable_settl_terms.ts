import { IPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp } from './payment_stream_non_deliverable_fixing_dates_business_center_grp'
import { IPaymentStreamNonDeliverableSettlRateSource } from './payment_stream_non_deliverable_settl_rate_source'
import { IPaymentStreamNonDeliverableFixingDateGrp } from './payment_stream_non_deliverable_fixing_date_grp'
import { ISettlRateDisruptionFallbackGrp } from './settl_rate_disruption_fallback_grp'

export interface IPaymentStreamNonDeliverableSettlTerms {
  PaymentStreamNonDeliverableRefCurrency?: string// 40817
  PaymentStreamNonDeliverableFixingDatesBusinessDayConvention?: number// 40818
  PaymentStreamNonDeliverableFixingDatesRelativeTo?: number// 40820
  PaymentStreamNonDeliverableFixingDatesOffsetPeriod?: number// 40821
  PaymentStreamNonDeliverableFixingDatesOffsetUnit?: string// 40822
  PaymentStreamNonDeliverableFixingDatesOffsetDayType?: number// 40823
  PaymentStreamNonDeliverableFixingDatesBusinessCenterGrp?: IPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp[]
  PaymentStreamNonDeliverableSettlRateSource?: IPaymentStreamNonDeliverableSettlRateSource
  PaymentStreamNonDeliverableFixingDateGrp?: IPaymentStreamNonDeliverableFixingDateGrp
  SettlRateDisruptionFallbackGrp?: ISettlRateDisruptionFallbackGrp[]
}
