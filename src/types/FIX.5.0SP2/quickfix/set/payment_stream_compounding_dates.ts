import { IPaymentStreamCompoundingDatesBusinessCenterGrp } from './payment_stream_compounding_dates_business_center_grp'
import { IPaymentStreamCompoundingDateGrp } from './payment_stream_compounding_date_grp'
import { IPaymentStreamCompoundingStartDate } from './payment_stream_compounding_start_date'
import { IPaymentStreamCompoundingEndDate } from './payment_stream_compounding_end_date'

export interface IPaymentStreamCompoundingDates {
  PaymentStreamCompoundingDatesBusinessDayConvention?: number// [1] 42609 (Int)
  PaymentStreamCompoundingDatesBusinessCenterGrp?: IPaymentStreamCompoundingDatesBusinessCenterGrp// [2] NoPaymentStreamCompoundingDatesBusinessCenters.42620, PaymentStreamCompoundingDatesBusinessCenter.42621
  PaymentStreamCompoundingDateGrp?: IPaymentStreamCompoundingDateGrp// [3] NoPaymentStreamCompoundingDates.42606, PaymentStreamCompoundingDate.42607, PaymentStreamCompoundingDateType.42608
  PaymentStreamCompoundingDatesRelativeTo?: number// [4] 42610 (Int)
  PaymentStreamCompoundingDatesOffsetPeriod?: number// [5] 42611 (Int)
  PaymentStreamCompoundingDatesOffsetUnit?: string// [6] 42612 (String)
  PaymentStreamCompoundingDatesOffsetDayType?: number// [7] 42613 (Int)
  PaymentStreamCompoundingPeriodSkip?: number// [8] 42614 (Int)
  PaymentStreamCompoundingStartDate?: IPaymentStreamCompoundingStartDate// [9] PaymentStreamCompoundingStartDateUnadjusted.42646, PaymentStreamCompoundingStartDateRelativeTo.42647 .. PaymentStreamCompoundingStartDateAdjusted.42651
  PaymentStreamCompoundingEndDate?: IPaymentStreamCompoundingEndDate// [10] PaymentStreamCompoundingEndDateUnadjusted.42622, PaymentStreamCompoundingEndDateRelativeTo.42623 .. PaymentStreamCompoundingEndDateAdjusted.42627
  PaymentStreamCompoundingFrequencyPeriod?: number// [11] 42615 (Int)
  PaymentStreamCompoundingFrequencyUnit?: string// [12] 42616 (String)
  PaymentStreamCompoundingRollConvention?: string// [13] 42617 (String)
  PaymentStreamBoundsFirstDateUnadjusted?: Date// [14] 42618 (LocalDate)
  PaymentStreamBoundsLastDateUnadjusted?: Date// [15] 42619 (LocalDate)
}
