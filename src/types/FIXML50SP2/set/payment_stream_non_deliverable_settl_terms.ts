import { IPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp } from './payment_stream_non_deliverable_fixing_dates_business_center_grp'
import { IPaymentStreamNonDeliverableSettlRateSource } from './payment_stream_non_deliverable_settl_rate_source'
import { IPaymentStreamNonDeliverableFixingDateGrp } from './payment_stream_non_deliverable_fixing_date_grp'
import { ISettlRateDisruptionFallbackGrp } from './settl_rate_disruption_fallback_grp'

export interface IPaymentStreamNonDeliverableSettlTerms {
  PaymentStreamNonDeliverableRefCurrency?: string// [1] 40817 (String)
  PaymentStreamNonDeliverableFixingDatesBusinessDayConvention?: number// [1] 40818 (Int)
  PaymentStreamNonDeliverableFixingDatesRelativeTo?: number// [1] 40820 (Int)
  PaymentStreamNonDeliverableFixingDatesOffsetPeriod?: number// [1] 40821 (Int)
  PaymentStreamNonDeliverableFixingDatesOffsetUnit?: string// [1] 40822 (String)
  PaymentStreamNonDeliverableFixingDatesOffsetDayType?: number// [1] 40823 (Int)
  PaymentStreamNonDeliverableFixingDatesBusinessCenterGrp?: IPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp[]// [1] Ctr.40819
  PaymentStreamNonDeliverableSettlRateSource?: IPaymentStreamNonDeliverableSettlRateSource// [2] RtSrc.40371, RefPg.40372
  PaymentStreamNonDeliverableFixingDateGrp?: IPaymentStreamNonDeliverableFixingDateGrp// [3] Dt.40826, Typ.40827
  SettlRateDisruptionFallbackGrp?: ISettlRateDisruptionFallbackGrp[]// [4] MaxDays.40086, Survey.40088, CalcAgent.40089
}
