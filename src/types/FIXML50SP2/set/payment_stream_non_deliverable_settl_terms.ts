import { IPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp } from './payment_stream_non_deliverable_fixing_dates_business_center_grp'
import { IPaymentStreamNonDeliverableSettlRateSource } from './payment_stream_non_deliverable_settl_rate_source'
import { IPaymentStreamNonDeliverableFixingDateGrp } from './payment_stream_non_deliverable_fixing_date_grp'
import { ISettlRateDisruptionFallbackGrp } from './settl_rate_disruption_fallback_grp'

export interface IPaymentStreamNonDeliverableSettlTerms {
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingSettlMethodElectionDateBusinessDayConvention?: number// 43077
  PaymentScheduleFixingDateRelativeTo?: number// 40852
  PaymentScheduleFixingDateOffsetPeriod?: number// 40855
  PaymentScheduleFixingDateOffsetUnit?: string// 40856
  PaymentScheduleFixingDateOffsetDayType?: number// 40857
  PaymentStreamNonDeliverableFixingDatesBusinessCenterGrp?: IPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp[]
  PaymentStreamNonDeliverableSettlRateSource?: IPaymentStreamNonDeliverableSettlRateSource
  PaymentStreamNonDeliverableFixingDateGrp?: IPaymentStreamNonDeliverableFixingDateGrp
  SettlRateDisruptionFallbackGrp?: ISettlRateDisruptionFallbackGrp[]
}
