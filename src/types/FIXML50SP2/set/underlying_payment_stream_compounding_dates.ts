import { IUnderlyingPaymentStreamCompoundingDatesBusinessCenterGrp } from './underlying_payment_stream_compounding_dates_business_center_grp'
import { IUnderlyingPaymentStreamCompoundingDateGrp } from './underlying_payment_stream_compounding_date_grp'
import { IUnderlyingPaymentStreamCompoundingStartDate } from './underlying_payment_stream_compounding_start_date'
import { IUnderlyingPaymentStreamCompoundingEndDate } from './underlying_payment_stream_compounding_end_date'

export interface IUnderlyingPaymentStreamCompoundingDates {
  UnderlyingPaymentStreamCompoundingDatesBusinessDayConvention?: number// [1] 42904 (Int)
  UnderlyingPaymentStreamCompoundingDatesRelativeTo?: number// [1] 42905 (Int)
  UnderlyingPaymentStreamCompoundingDatesOffsetPeriod?: number// [1] 42906 (Int)
  UnderlyingPaymentStreamCompoundingDatesOffsetUnit?: string// [1] 42907 (String)
  UnderlyingPaymentStreamCompoundingDatesOffsetDayType?: number// [1] 42908 (Int)
  UnderlyingPaymentStreamCompoundingPeriodSkip?: number// [1] 42909 (Int)
  UnderlyingPaymentStreamCompoundingFrequencyPeriod?: number// [1] 42910 (Int)
  UnderlyingPaymentStreamCompoundingFrequencyUnit?: string// [1] 42911 (String)
  UnderlyingPaymentStreamCompoundingRollConvention?: string// [1] 42912 (String)
  UnderlyingPaymentStreamBoundsFirstDateUnadjusted?: Date// [1] 42913 (LocalDate)
  UnderlyingPaymentStreamBoundsLastDateUnadjusted?: Date// [1] 42914 (LocalDate)
  UnderlyingPaymentStreamCompoundingDatesBusinessCenterGrp?: IUnderlyingPaymentStreamCompoundingDatesBusinessCenterGrp[]// [1] Ctr.42916
  UnderlyingPaymentStreamCompoundingDateGrp?: IUnderlyingPaymentStreamCompoundingDateGrp// [2] Dt.42902, Typ.42903
  UnderlyingPaymentStreamCompoundingStartDate?: IUnderlyingPaymentStreamCompoundingStartDate// [3] DtUnadj.42941, Reltv.42942 .. Dt.42946
  UnderlyingPaymentStreamCompoundingEndDate?: IUnderlyingPaymentStreamCompoundingEndDate// [4] DtUnadj.42917, Reltv.42918 .. Dt.42922
}
