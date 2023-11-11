import { IPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp } from './payment_stream_non_deliverable_fixing_dates_business_center_grp'
import { IPaymentStreamNonDeliverableSettlRateSource } from './payment_stream_non_deliverable_settl_rate_source'
import { IPaymentStreamNonDeliverableFixingDateGrp } from './payment_stream_non_deliverable_fixing_date_grp'
import { ISettlRateDisruptionFallbackGrp } from './settl_rate_disruption_fallback_grp'

export interface IPaymentStreamNonDeliverableSettlTerms {
  PaymentStreamNonDeliverableRefCurrency?: string// [1] 40817 (String)
  PaymentStreamNonDeliverableFixingDatesBusinessDayConvention?: number// [2] 40818 (Int)
  PaymentStreamNonDeliverableFixingDatesBusinessCenterGrp?: IPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp// [3] NoPaymentStreamNonDeliverableFixingDatesBusinessCenters.40946, PaymentStreamNonDeliverableFixingDatesBusinessCenter.40819
  PaymentStreamNonDeliverableFixingDatesRelativeTo?: number// [4] 40820 (Int)
  PaymentStreamNonDeliverableFixingDatesOffsetPeriod?: number// [5] 40821 (Int)
  PaymentStreamNonDeliverableFixingDatesOffsetUnit?: string// [6] 40822 (String)
  PaymentStreamNonDeliverableFixingDatesOffsetDayType?: number// [7] 40823 (Int)
  PaymentStreamNonDeliverableSettlRateSource?: IPaymentStreamNonDeliverableSettlRateSource// [8] PaymentStreamNonDeliverableSettlRateSource.40371, PaymentStreamNonDeliverableSettlReferencePage.40372
  PaymentStreamNonDeliverableFixingDateGrp?: IPaymentStreamNonDeliverableFixingDateGrp// [9] NoNonDeliverableFixingDates.40825, NonDeliverableFixingDate.40826, NonDeliverableFixingDateType.40827
  SettlRateDisruptionFallbackGrp?: ISettlRateDisruptionFallbackGrp// [10] NoSettlRateFallbacks.40085, SettlRatePostponementMaximumDays.40086 .. SettlRatePostponementCalculationAgent.40089
}
