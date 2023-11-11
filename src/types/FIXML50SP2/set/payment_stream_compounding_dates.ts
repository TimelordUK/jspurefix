import { IPaymentStreamCompoundingDatesBusinessCenterGrp } from './payment_stream_compounding_dates_business_center_grp'
import { IPaymentStreamCompoundingDateGrp } from './payment_stream_compounding_date_grp'
import { IPaymentStreamCompoundingStartDate } from './payment_stream_compounding_start_date'
import { IPaymentStreamCompoundingEndDate } from './payment_stream_compounding_end_date'

export interface IPaymentStreamCompoundingDates {
  PaymentStreamCompoundingDatesBusinessDayConvention?: number// [1] 42609 (Int)
  PaymentStreamCompoundingDatesRelativeTo?: number// [1] 42610 (Int)
  PaymentStreamCompoundingDatesOffsetPeriod?: number// [1] 42611 (Int)
  PaymentStreamCompoundingDatesOffsetUnit?: string// [1] 42612 (String)
  PaymentStreamCompoundingDatesOffsetDayType?: number// [1] 42613 (Int)
  PaymentStreamCompoundingPeriodSkip?: number// [1] 42614 (Int)
  PaymentStreamCompoundingFrequencyPeriod?: number// [1] 42615 (Int)
  PaymentStreamCompoundingFrequencyUnit?: string// [1] 42616 (String)
  PaymentStreamCompoundingRollConvention?: string// [1] 42617 (String)
  PaymentStreamBoundsFirstDateUnadjusted?: Date// [1] 42618 (LocalDate)
  PaymentStreamBoundsLastDateUnadjusted?: Date// [1] 42619 (LocalDate)
  PaymentStreamCompoundingDatesBusinessCenterGrp?: IPaymentStreamCompoundingDatesBusinessCenterGrp[]// [1] Ctr.42621
  PaymentStreamCompoundingDateGrp?: IPaymentStreamCompoundingDateGrp// [2] Dt.42607, Typ.42608
  PaymentStreamCompoundingStartDate?: IPaymentStreamCompoundingStartDate// [3] DtUnadj.42646, Reltv.42647 .. Dt.42651
  PaymentStreamCompoundingEndDate?: IPaymentStreamCompoundingEndDate// [4] DtUnadj.42622, Reltv.42623 .. Dt.42627
}
