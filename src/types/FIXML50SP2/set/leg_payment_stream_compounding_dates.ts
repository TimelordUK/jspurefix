import { ILegPaymentStreamCompoundingDatesBusinessCenterGrp } from './leg_payment_stream_compounding_dates_business_center_grp'
import { ILegPaymentStreamCompoundingDateGrp } from './leg_payment_stream_compounding_date_grp'
import { ILegPaymentStreamCompoundingStartDate } from './leg_payment_stream_compounding_start_date'
import { ILegPaymentStreamCompoundingEndDate } from './leg_payment_stream_compounding_end_date'

export interface ILegPaymentStreamCompoundingDates {
  LegPaymentStreamCompoundingDatesBusinessDayConvention?: number// [1] 42408 (Int)
  LegPaymentStreamCompoundingDatesRelativeTo?: number// [1] 42409 (Int)
  LegPaymentStreamCompoundingDatesOffsetPeriod?: number// [1] 42410 (Int)
  LegPaymentStreamCompoundingDatesOffsetUnit?: string// [1] 42411 (String)
  LegPaymentStreamCompoundingDatesOffsetDayType?: number// [1] 42412 (Int)
  LegPaymentStreamCompoundingPeriodSkip?: number// [1] 42413 (Int)
  LegPaymentStreamCompoundingFrequencyPeriod?: number// [1] 42414 (Int)
  LegPaymentStreamCompoundingFrequencyUnit?: string// [1] 42415 (String)
  LegPaymentStreamCompoundingRollConvention?: string// [1] 42416 (String)
  LegPaymentStreamBoundsFirstDateUnadjusted?: Date// [1] 42417 (LocalDate)
  LegPaymentStreamBoundsLastDateUnadjusted?: Date// [1] 42418 (LocalDate)
  LegPaymentStreamCompoundingDatesBusinessCenterGrp?: ILegPaymentStreamCompoundingDatesBusinessCenterGrp[]// [1] Ctr.42420
  LegPaymentStreamCompoundingDateGrp?: ILegPaymentStreamCompoundingDateGrp[]// [2] Dt.42406, Typ.42407
  LegPaymentStreamCompoundingStartDate?: ILegPaymentStreamCompoundingStartDate// [3] DtUnadj.42445, Reltv.42446 .. Dt.42450
  LegPaymentStreamCompoundingEndDate?: ILegPaymentStreamCompoundingEndDate// [4] DtUnadj.42421, Reltv.42422 .. Dt.42426
}
