import { ILegPaymentStreamCompoundingDatesBusinessCenterGrp } from './leg_payment_stream_compounding_dates_business_center_grp'
import { ILegPaymentStreamCompoundingDateGrp } from './leg_payment_stream_compounding_date_grp'
import { ILegPaymentStreamCompoundingStartDate } from './leg_payment_stream_compounding_start_date'
import { ILegPaymentStreamCompoundingEndDate } from './leg_payment_stream_compounding_end_date'

export interface ILegPaymentStreamCompoundingDates {
  LegPaymentStreamCompoundingDatesBusinessDayConvention?: number// [1] 42408 (Int)
  LegPaymentStreamCompoundingDatesBusinessCenterGrp?: ILegPaymentStreamCompoundingDatesBusinessCenterGrp// [2] NoLegPaymentStreamCompoundingDatesBusinessCenters.42419, LegPaymentStreamCompoundingDatesBusinessCenter.42420
  LegPaymentStreamCompoundingDateGrp?: ILegPaymentStreamCompoundingDateGrp// [3] NoLegPaymentStreamCompoundingDates.42405, LegPaymentStreamCompoundingDate.42406, LegPaymentStreamCompoundingDateType.42407
  LegPaymentStreamCompoundingDatesRelativeTo?: number// [4] 42409 (Int)
  LegPaymentStreamCompoundingDatesOffsetPeriod?: number// [5] 42410 (Int)
  LegPaymentStreamCompoundingDatesOffsetUnit?: string// [6] 42411 (String)
  LegPaymentStreamCompoundingDatesOffsetDayType?: number// [7] 42412 (Int)
  LegPaymentStreamCompoundingPeriodSkip?: number// [8] 42413 (Int)
  LegPaymentStreamCompoundingStartDate?: ILegPaymentStreamCompoundingStartDate// [9] LegPaymentStreamCompoundingStartDateUnadjusted.42445, LegPaymentStreamCompoundingStartDateRelativeTo.42446 .. LegPaymentStreamCompoundingStartDateAdjusted.42450
  LegPaymentStreamCompoundingEndDate?: ILegPaymentStreamCompoundingEndDate// [10] LegPaymentStreamCompoundingEndDateUnadjusted.42421, LegPaymentStreamCompoundingEndDateRelativeTo.42422 .. LegPaymentStreamCompoundingEndDateAdjusted.42426
  LegPaymentStreamCompoundingFrequencyPeriod?: number// [11] 42414 (Int)
  LegPaymentStreamCompoundingFrequencyUnit?: string// [12] 42415 (String)
  LegPaymentStreamCompoundingRollConvention?: string// [13] 42416 (String)
  LegPaymentStreamBoundsFirstDateUnadjusted?: Date// [14] 42417 (LocalDate)
  LegPaymentStreamBoundsLastDateUnadjusted?: Date// [15] 42418 (LocalDate)
}
