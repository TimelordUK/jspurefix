import { ILegPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp } from './leg_payment_stream_non_deliverable_fixing_dates_business_center_grp'
import { ILegPaymentStreamNonDeliverableSettlRateSource } from './leg_payment_stream_non_deliverable_settl_rate_source'
import { ILegPaymentStreamNonDeliverableFixingDateGrp } from './leg_payment_stream_non_deliverable_fixing_date_grp'
import { ILegSettlRateDisruptionFallbackGrp } from './leg_settl_rate_disruption_fallback_grp'

export interface ILegPaymentStreamNonDeliverableSettlTerms {
  LegPaymentStreamNonDeliverableRefCurrency?: string// [1] 40359 (String)
  LegPaymentStreamNonDeliverableFixingDatesBusinessDayConvention?: number// [1] 40360 (Int)
  LegPaymentStreamNonDeliverableFixingDatesRelativeTo?: number// [1] 40362 (Int)
  LegPaymentStreamNonDeliverableFixingDatesOffsetPeriod?: number// [1] 40363 (Int)
  LegPaymentStreamNonDeliverableFixingDatesOffsetUnit?: string// [1] 40364 (String)
  LegPaymentStreamNonDeliverableFixingDatesOffsetDayType?: number// [1] 40365 (Int)
  LegPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp?: ILegPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp[]// [1] Ctr.40361
  LegPaymentStreamNonDeliverableSettlRateSource?: ILegPaymentStreamNonDeliverableSettlRateSource// [2] RtSrc.40087, RefPg.40228
  LegPaymentStreamNonDeliverableFixingDateGrp?: ILegPaymentStreamNonDeliverableFixingDateGrp// [3] Dt.40368, Typ.40369
  LegSettlRateDisruptionFallbackGrp?: ILegSettlRateDisruptionFallbackGrp[]// [4] MaxDays.40903, Survey.40905, CalcAgent.40906
}
