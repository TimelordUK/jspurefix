import { IUnderlyingPaymentStreamCompoundingDatesBusinessCenterGrp } from './underlying_payment_stream_compounding_dates_business_center_grp'
import { IUnderlyingPaymentStreamCompoundingDateGrp } from './underlying_payment_stream_compounding_date_grp'
import { IUnderlyingPaymentStreamCompoundingStartDate } from './underlying_payment_stream_compounding_start_date'
import { IUnderlyingPaymentStreamCompoundingEndDate } from './underlying_payment_stream_compounding_end_date'

export interface IUnderlyingPaymentStreamCompoundingDates {
  UnderlyingPaymentStreamCompoundingDatesBusinessDayConvention?: number// 42904
  UnderlyingPaymentStreamCompoundingDatesRelativeTo?: number// 42905
  UnderlyingPaymentStreamCompoundingDatesOffsetPeriod?: number// 42906
  UnderlyingPaymentStreamCompoundingDatesOffsetUnit?: string// 42907
  UnderlyingPaymentStreamCompoundingDatesOffsetDayType?: number// 42908
  UnderlyingPaymentStreamCompoundingPeriodSkip?: number// 42909
  UnderlyingPaymentStreamCompoundingFrequencyPeriod?: number// 42910
  UnderlyingPaymentStreamCompoundingFrequencyUnit?: string// 42911
  UnderlyingPaymentStreamCompoundingRollConvention?: string// 42912
  UnderlyingPaymentStreamBoundsFirstDateUnadjusted?: Date// 42913
  UnderlyingPaymentStreamBoundsLastDateUnadjusted?: Date// 42914
  UnderlyingPaymentStreamCompoundingDatesBusinessCenterGrp?: IUnderlyingPaymentStreamCompoundingDatesBusinessCenterGrp[]
  UnderlyingPaymentStreamCompoundingDateGrp?: IUnderlyingPaymentStreamCompoundingDateGrp
  UnderlyingPaymentStreamCompoundingStartDate?: IUnderlyingPaymentStreamCompoundingStartDate
  UnderlyingPaymentStreamCompoundingEndDate?: IUnderlyingPaymentStreamCompoundingEndDate
}
