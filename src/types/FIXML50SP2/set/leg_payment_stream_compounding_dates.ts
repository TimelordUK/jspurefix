import { ILegPaymentStreamCompoundingDatesBusinessCenterGrp } from './leg_payment_stream_compounding_dates_business_center_grp'
import { ILegPaymentStreamCompoundingDateGrp } from './leg_payment_stream_compounding_date_grp'
import { ILegPaymentStreamCompoundingStartDate } from './leg_payment_stream_compounding_start_date'
import { ILegPaymentStreamCompoundingEndDate } from './leg_payment_stream_compounding_end_date'

export interface ILegPaymentStreamCompoundingDates {
  LegPaymentStreamCompoundingDatesBusinessDayConvention?: number// 42408
  LegPaymentStreamCompoundingDatesRelativeTo?: number// 42409
  LegPaymentStreamCompoundingDatesOffsetPeriod?: number// 42410
  LegPaymentStreamCompoundingDatesOffsetUnit?: string// 42411
  LegPaymentStreamCompoundingDatesOffsetDayType?: number// 42412
  LegPaymentStreamCompoundingPeriodSkip?: number// 42413
  LegPaymentStreamCompoundingFrequencyPeriod?: number// 42414
  LegPaymentStreamCompoundingFrequencyUnit?: string// 42415
  LegPaymentStreamCompoundingRollConvention?: string// 42416
  LegPaymentStreamBoundsFirstDateUnadjusted?: Date// 42417
  LegPaymentStreamBoundsLastDateUnadjusted?: Date// 42418
  LegPaymentStreamCompoundingDatesBusinessCenterGrp?: ILegPaymentStreamCompoundingDatesBusinessCenterGrp[]
  LegPaymentStreamCompoundingDateGrp?: ILegPaymentStreamCompoundingDateGrp[]
  LegPaymentStreamCompoundingStartDate?: ILegPaymentStreamCompoundingStartDate
  LegPaymentStreamCompoundingEndDate?: ILegPaymentStreamCompoundingEndDate
}
