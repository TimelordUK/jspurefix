import { IPaymentStreamCompoundingDatesBusinessCenterGrp } from './payment_stream_compounding_dates_business_center_grp'
import { IPaymentStreamCompoundingDateGrp } from './payment_stream_compounding_date_grp'
import { IPaymentStreamCompoundingStartDate } from './payment_stream_compounding_start_date'
import { IPaymentStreamCompoundingEndDate } from './payment_stream_compounding_end_date'

export interface IPaymentStreamCompoundingDates {
  PaymentStreamCompoundingDatesBusinessDayConvention?: number// 42609
  PaymentStreamCompoundingDatesRelativeTo?: number// 42610
  PaymentStreamCompoundingDatesOffsetPeriod?: number// 42611
  PaymentStreamCompoundingDatesOffsetUnit?: string// 42612
  PaymentStreamCompoundingDatesOffsetDayType?: number// 42613
  PaymentStreamCompoundingPeriodSkip?: number// 42614
  PaymentStreamCompoundingFrequencyPeriod?: number// 42615
  PaymentStreamCompoundingFrequencyUnit?: string// 42616
  PaymentStreamCompoundingRollConvention?: string// 42617
  PaymentStreamBoundsFirstDateUnadjusted?: Date// 42618
  PaymentStreamBoundsLastDateUnadjusted?: Date// 42619
  PaymentStreamCompoundingDatesBusinessCenterGrp?: IPaymentStreamCompoundingDatesBusinessCenterGrp[]
  PaymentStreamCompoundingDateGrp?: IPaymentStreamCompoundingDateGrp
  PaymentStreamCompoundingStartDate?: IPaymentStreamCompoundingStartDate
  PaymentStreamCompoundingEndDate?: IPaymentStreamCompoundingEndDate
}
