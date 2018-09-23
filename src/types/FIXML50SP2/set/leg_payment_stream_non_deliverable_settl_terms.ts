import { ILegPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp } from './leg_payment_stream_non_deliverable_fixing_dates_business_center_grp'
import { ILegPaymentStreamNonDeliverableSettlRateSource } from './leg_payment_stream_non_deliverable_settl_rate_source'
import { ILegPaymentStreamNonDeliverableFixingDateGrp } from './leg_payment_stream_non_deliverable_fixing_date_grp'
import { ILegSettlRateDisruptionFallbackGrp } from './leg_settl_rate_disruption_fallback_grp'

export interface ILegPaymentStreamNonDeliverableSettlTerms {
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingSettlMethodElectionDateBusinessDayConvention?: number// 43077
  PaymentScheduleFixingDateRelativeTo?: number// 40852
  PaymentScheduleFixingDateOffsetPeriod?: number// 40855
  PaymentScheduleFixingDateOffsetUnit?: string// 40856
  PaymentScheduleFixingDateOffsetDayType?: number// 40857
  LegPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp?: ILegPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp[]
  LegPaymentStreamNonDeliverableSettlRateSource?: ILegPaymentStreamNonDeliverableSettlRateSource
  LegPaymentStreamNonDeliverableFixingDateGrp?: ILegPaymentStreamNonDeliverableFixingDateGrp
  LegSettlRateDisruptionFallbackGrp?: ILegSettlRateDisruptionFallbackGrp[]
}
