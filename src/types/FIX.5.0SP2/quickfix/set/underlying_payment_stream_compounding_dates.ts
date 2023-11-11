import { IUnderlyingPaymentStreamCompoundingDatesBusinessCenterGrp } from './underlying_payment_stream_compounding_dates_business_center_grp'
import { IUnderlyingPaymentStreamCompoundingDateGrp } from './underlying_payment_stream_compounding_date_grp'
import { IUnderlyingPaymentStreamCompoundingStartDate } from './underlying_payment_stream_compounding_start_date'
import { IUnderlyingPaymentStreamCompoundingEndDate } from './underlying_payment_stream_compounding_end_date'

export interface IUnderlyingPaymentStreamCompoundingDates {
  UnderlyingPaymentStreamCompoundingDatesBusinessDayConvention?: number// [1] 42904 (Int)
  UnderlyingPaymentStreamCompoundingDatesBusinessCenterGrp?: IUnderlyingPaymentStreamCompoundingDatesBusinessCenterGrp// [2] NoUnderlyingPaymentStreamCompoundingDatesBusinessCenters.42915, UnderlyingPaymentStreamCompoundingDatesBusinessCenter.42916
  UnderlyingPaymentStreamCompoundingDateGrp?: IUnderlyingPaymentStreamCompoundingDateGrp// [3] NoUnderlyingPaymentStreamCompoundingDates.42901, UnderlyingPaymentStreamCompoundingDate.42902, UnderlyingPaymentStreamCompoundingDateType.42903
  UnderlyingPaymentStreamCompoundingDatesRelativeTo?: number// [4] 42905 (Int)
  UnderlyingPaymentStreamCompoundingDatesOffsetPeriod?: number// [5] 42906 (Int)
  UnderlyingPaymentStreamCompoundingDatesOffsetUnit?: string// [6] 42907 (String)
  UnderlyingPaymentStreamCompoundingDatesOffsetDayType?: number// [7] 42908 (Int)
  UnderlyingPaymentStreamCompoundingPeriodSkip?: number// [8] 42909 (Int)
  UnderlyingPaymentStreamCompoundingStartDate?: IUnderlyingPaymentStreamCompoundingStartDate// [9] UnderlyingPaymentStreamCompoundingStartDateUnadjusted.42941, UnderlyingPaymentStreamCompoundingStartDateRelativeTo.42942 .. UnderlyingPaymentStreamCompoundingStartDateAdjusted.42946
  UnderlyingPaymentStreamCompoundingEndDate?: IUnderlyingPaymentStreamCompoundingEndDate// [10] UnderlyingPaymentStreamCompoundingEndDateUnadjusted.42917, UnderlyingPaymentStreamCompoundingEndDateRelativeTo.42918 .. UnderlyingPaymentStreamCompoundingEndDateAdjusted.42922
  UnderlyingPaymentStreamCompoundingFrequencyPeriod?: number// [11] 42910 (Int)
  UnderlyingPaymentStreamCompoundingFrequencyUnit?: string// [12] 42911 (String)
  UnderlyingPaymentStreamCompoundingRollConvention?: string// [13] 42912 (String)
  UnderlyingPaymentStreamBoundsFirstDateUnadjusted?: Date// [14] 42913 (LocalDate)
  UnderlyingPaymentStreamBoundsLastDateUnadjusted?: Date// [15] 42914 (LocalDate)
}
