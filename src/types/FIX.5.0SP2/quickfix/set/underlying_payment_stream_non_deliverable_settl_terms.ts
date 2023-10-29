import { IUnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp } from './underlying_payment_stream_non_deliverable_fixing_dates_business_center_grp'
import { IUnderlyingPaymentStreamNonDeliverableSettlRateSource } from './underlying_payment_stream_non_deliverable_settl_rate_source'
import { IUnderlyingPaymentStreamNonDeliverableFixingDateGrp } from './underlying_payment_stream_non_deliverable_fixing_date_grp'
import { IUnderlyingSettlRateDisruptionFallbackGrp } from './underlying_settl_rate_disruption_fallback_grp'

export interface IUnderlyingPaymentStreamNonDeliverableSettlTerms {
  UnderlyingPaymentStreamNonDeliverableRefCurrency?: string// [1] 40648 (String)
  UnderlyingPaymentStreamNonDeliverableFixingDatesBizDayConvention?: number// [2] 40649 (Int)
  UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp?: IUnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp// [3] NoUnderlyingPaymentStreamNonDeliverableFixingDatesBizCenters.40968, UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenter.40650
  UnderlyingPaymentStreamNonDeliverableFixingDatesRelativeTo?: number// [4] 40651 (Int)
  UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetPeriod?: number// [5] 40652 (Int)
  UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetUnit?: string// [6] 40653 (String)
  UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetDayType?: number// [7] 40654 (Int)
  UnderlyingPaymentStreamNonDeliverableSettlRateSource?: IUnderlyingPaymentStreamNonDeliverableSettlRateSource// [8] UnderlyingPaymentStreamNonDeliverableSettlRateSource.40661, UnderlyingPaymentStreamNonDeliverableSettlReferencePage.40824
  UnderlyingPaymentStreamNonDeliverableFixingDateGrp?: IUnderlyingPaymentStreamNonDeliverableFixingDateGrp// [9] NoUnderlyingNonDeliverableFixingDates.40656, UnderlyingNonDeliverableFixingDate.40657, UnderlyingNonDeliverableFixingDateType.40658
  UnderlyingSettlRateDisruptionFallbackGrp?: IUnderlyingSettlRateDisruptionFallbackGrp// [10] NoUnderlyingSettlRateFallbacks.40659, UnderlyingSettlRatePostponementMaximumDays.40660 .. UnderlyingSettlRatePostponementCalculationAgent.40663
}
