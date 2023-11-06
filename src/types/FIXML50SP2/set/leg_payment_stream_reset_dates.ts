import { ILegPaymentStreamResetDateBusinessCenterGrp } from './leg_payment_stream_reset_date_business_center_grp'
import { ILegPaymentStreamInitialFixingDateBusinessCenterGrp } from './leg_payment_stream_initial_fixing_date_business_center_grp'
import { ILegPaymentStreamFixingDateBusinessCenterGrp } from './leg_payment_stream_fixing_date_business_center_grp'
import { ILegPaymentStreamFixingDateGrp } from './leg_payment_stream_fixing_date_grp'

export interface ILegPaymentStreamResetDates {
  LegPaymentStreamResetDateRelativeTo?: number// [1] 40303 (Int)
  LegPaymentStreamResetDateBusinessDayConvention?: number// [1] 40304 (Int)
  LegPaymentStreamResetFrequencyPeriod?: number// [1] 40306 (Int)
  LegPaymentStreamResetFrequencyUnit?: string// [1] 40307 (String)
  LegPaymentStreamResetWeeklyRollConvention?: string// [1] 40308 (String)
  LegPaymentStreamInitialFixingDateRelativeTo?: number// [1] 40309 (Int)
  LegPaymentStreamInitialFixingDateBusinessDayConvention?: number// [1] 40310 (Int)
  LegPaymentStreamInitialFixingDateOffsetPeriod?: number// [1] 40312 (Int)
  LegPaymentStreamInitialFixingDateOffsetUnit?: string// [1] 40313 (String)
  LegPaymentStreamInitialFixingDateOffsetDayType?: number// [1] 40314 (Int)
  LegPaymentStreamInitialFixingDateAdjusted?: Date// [1] 40315 (LocalDate)
  LegPaymentStreamFixingDateRelativeTo?: number// [1] 40316 (Int)
  LegPaymentStreamFixingDateBusinessDayConvention?: number// [1] 40317 (Int)
  LegPaymentStreamFixingDateOffsetPeriod?: number// [1] 40319 (Int)
  LegPaymentStreamFixingDateOffsetUnit?: string// [1] 40320 (String)
  LegPaymentStreamFixingDateOffsetDayType?: number// [1] 40321 (Int)
  LegPaymentStreamFixingDateAdjusted?: Date// [1] 40322 (LocalDate)
  LegPaymentStreamRateCutoffDateOffsetPeriod?: number// [1] 40323 (Int)
  LegPaymentStreamRateCutoffDateOffsetUnit?: string// [1] 40324 (String)
  LegPaymentStreamRateCutoffDateOffsetDayType?: number// [1] 40325 (Int)
  LegPaymentStreamResetDateBusinessCenterGrp?: ILegPaymentStreamResetDateBusinessCenterGrp[]// [1] Ctr.40305
  LegPaymentStreamInitialFixingDateBusinessCenterGrp?: ILegPaymentStreamInitialFixingDateBusinessCenterGrp[]// [2] Ctr.40311
  LegPaymentStreamFixingDateBusinessCenterGrp?: ILegPaymentStreamFixingDateBusinessCenterGrp[]// [3] Ctr.40318
  LegPaymentStreamFixingDateGrp?: ILegPaymentStreamFixingDateGrp[]// [4] Dt.42460, Typ.42461
}
