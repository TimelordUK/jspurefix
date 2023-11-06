import { IUnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp } from './underlying_payment_stream_non_deliverable_fixing_dates_business_center_grp'
import { IUnderlyingPaymentStreamNonDeliverableSettlRateSource } from './underlying_payment_stream_non_deliverable_settl_rate_source'
import { IUnderlyingPaymentStreamNonDeliverableFixingDateGrp } from './underlying_payment_stream_non_deliverable_fixing_date_grp'
import { IUnderlyingSettlRateDisruptionFallbackGrp } from './underlying_settl_rate_disruption_fallback_grp'

export interface IUnderlyingPaymentStreamNonDeliverableSettlTerms {
  UnderlyingPaymentStreamNonDeliverableRefCurrency?: string// [1] 40648 (String)
  UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessDayConvention?: number// [1] 40649 (Int)
  UnderlyingPaymentStreamNonDeliverableFixingDatesRelativeTo?: number// [1] 40651 (Int)
  UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetPeriod?: number// [1] 40652 (Int)
  UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetUnit?: string// [1] 40653 (String)
  UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetDayType?: number// [1] 40654 (Int)
  UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp?: IUnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp[]// [1] Ctr.40650
  UnderlyingPaymentStreamNonDeliverableSettlRateSource?: IUnderlyingPaymentStreamNonDeliverableSettlRateSource// [2] RtSrc.40661, RefPg.40824
  UnderlyingPaymentStreamNonDeliverableFixingDateGrp?: IUnderlyingPaymentStreamNonDeliverableFixingDateGrp// [3] Dt.40657, Typ.40658
  UnderlyingSettlRateDisruptionFallbackGrp?: IUnderlyingSettlRateDisruptionFallbackGrp[]// [4] MaxDays.40660, Survey.40662, CalcAgent.40663
}
