import { ILegPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp } from './leg_payment_stream_non_deliverable_fixing_dates_business_center_grp'
import { ILegPaymentStreamNonDeliverableSettlRateSource } from './leg_payment_stream_non_deliverable_settl_rate_source'
import { ILegPaymentStreamNonDeliverableFixingDateGrp } from './leg_payment_stream_non_deliverable_fixing_date_grp'
import { ILegSettlRateDisruptionFallbackGrp } from './leg_settl_rate_disruption_fallback_grp'

export interface ILegPaymentStreamNonDeliverableSettlTerms {
  LegPaymentStreamNonDeliverableRefCurrency?: string// [1] 40359 (String)
  LegPaymentStreamNonDeliverableFixingDatesBusinessDayConvention?: number// [2] 40360 (Int)
  LegPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp?: ILegPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp// [3] NoLegPaymentStreamNonDeliverableFixingDateBusinessCenters.40929, LegPaymentStreamNonDeliverableFixingDatesBusinessCenter.40361
  LegPaymentStreamNonDeliverableFixingDatesRelativeTo?: number// [4] 40362 (Int)
  LegPaymentStreamNonDeliverableFixingDatesOffsetPeriod?: number// [5] 40363 (Int)
  LegPaymentStreamNonDeliverableFixingDatesOffsetUnit?: string// [6] 40364 (String)
  LegPaymentStreamNonDeliverableFixingDatesOffsetDayType?: number// [7] 40365 (Int)
  LegPaymentStreamNonDeliverableSettlRateSource?: ILegPaymentStreamNonDeliverableSettlRateSource// [8] LegPaymentStreamNonDeliverableSettlRateSource.40087, LegPaymentStreamNonDeliverableSettlReferencePage.40228
  LegPaymentStreamNonDeliverableFixingDateGrp?: ILegPaymentStreamNonDeliverableFixingDateGrp// [9] NoLegNonDeliverableFixingDates.40367, LegNonDeliverableFixingDate.40368, LegNonDeliverableFixingDateType.40369
  LegSettlRateDisruptionFallbackGrp?: ILegSettlRateDisruptionFallbackGrp// [10] NoLegSettlRateFallbacks.40902, LegSettlRatePostponementMaximumDays.40903 .. LegSettlRatePostponementCalculationAgent.40906
}
