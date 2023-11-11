import { ILegPaymentStreamResetDateBusinessCenterGrp } from './leg_payment_stream_reset_date_business_center_grp'
import { ILegPaymentStreamInitialFixingDateBusinessCenterGrp } from './leg_payment_stream_initial_fixing_date_business_center_grp'
import { ILegPaymentStreamFixingDateBusinessCenterGrp } from './leg_payment_stream_fixing_date_business_center_grp'
import { ILegPaymentStreamFixingDateGrp } from './leg_payment_stream_fixing_date_grp'

export interface ILegPaymentStreamResetDates {
  LegPaymentStreamResetDateRelativeTo?: number// [1] 40303 (Int)
  LegPaymentStreamResetDateBusinessDayConvention?: number// [2] 40304 (Int)
  LegPaymentStreamResetDateBusinessCenterGrp?: ILegPaymentStreamResetDateBusinessCenterGrp// [3] NoLegPaymentStreamResetDateBusinessCenters.40931, LegPaymentStreamResetDateBusinessCenter.40305
  LegPaymentStreamResetFrequencyPeriod?: number// [4] 40306 (Int)
  LegPaymentStreamResetFrequencyUnit?: string// [5] 40307 (String)
  LegPaymentStreamResetWeeklyRollConvention?: string// [6] 40308 (String)
  LegPaymentStreamInitialFixingDateRelativeTo?: number// [7] 40309 (Int)
  LegPaymentStreamInitialFixingDateBusinessDayConvention?: number// [8] 40310 (Int)
  LegPaymentStreamInitialFixingDateBusinessCenterGrp?: ILegPaymentStreamInitialFixingDateBusinessCenterGrp// [9] NoLegPaymentStreamInitialFixingDateBusinessCenters.40932, LegPaymentStreamInitialFixingDateBusinessCenter.40311
  LegPaymentStreamInitialFixingDateOffsetPeriod?: number// [10] 40312 (Int)
  LegPaymentStreamInitialFixingDateOffsetUnit?: string// [11] 40313 (String)
  LegPaymentStreamInitialFixingDateOffsetDayType?: number// [12] 40314 (Int)
  LegPaymentStreamInitialFixingDateAdjusted?: Date// [13] 40315 (LocalDate)
  LegPaymentStreamFixingDateRelativeTo?: number// [14] 40316 (Int)
  LegPaymentStreamFixingDateBusinessDayConvention?: number// [15] 40317 (Int)
  LegPaymentStreamFixingDateBusinessCenterGrp?: ILegPaymentStreamFixingDateBusinessCenterGrp// [16] NoLegPaymentStreamFixingDateBusinessCenters.40933, LegPaymentStreamFixingDateBusinessCenter.40318
  LegPaymentStreamFixingDateOffsetPeriod?: number// [17] 40319 (Int)
  LegPaymentStreamFixingDateOffsetUnit?: string// [18] 40320 (String)
  LegPaymentStreamFixingDateOffsetDayType?: number// [19] 40321 (Int)
  LegPaymentStreamFixingDateAdjusted?: Date// [20] 40322 (LocalDate)
  LegPaymentStreamRateCutoffDateOffsetPeriod?: number// [21] 40323 (Int)
  LegPaymentStreamRateCutoffDateOffsetUnit?: string// [22] 40324 (String)
  LegPaymentStreamRateCutoffDateOffsetDayType?: number// [23] 40325 (Int)
  LegPaymentStreamFixingDateGrp?: ILegPaymentStreamFixingDateGrp// [24] NoLegPaymentStreamFixingDates.42459, LegPaymentStreamFixingDate.42460, LegPaymentStreamFixingDateType.42461
}
