import { ILegPaymentStreamResetDateBusinessCenterGrp } from './leg_payment_stream_reset_date_business_center_grp'
import { ILegPaymentStreamInitialFixingDateBusinessCenterGrp } from './leg_payment_stream_initial_fixing_date_business_center_grp'
import { ILegPaymentStreamFixingDateBusinessCenterGrp } from './leg_payment_stream_fixing_date_business_center_grp'
import { ILegPaymentStreamFixingDateGrp } from './leg_payment_stream_fixing_date_grp'

export interface ILegPaymentStreamResetDates {
  LegPaymentStreamResetDateRelativeTo?: number// 40303
  LegPaymentStreamResetDateBusinessDayConvention?: number// 40304
  LegPaymentStreamResetFrequencyPeriod?: number// 40306
  LegPaymentStreamResetFrequencyUnit?: string// 40307
  LegPaymentStreamResetWeeklyRollConvention?: string// 40308
  LegPaymentStreamInitialFixingDateRelativeTo?: number// 40309
  LegPaymentStreamInitialFixingDateBusinessDayConvention?: number// 40310
  LegPaymentStreamInitialFixingDateOffsetPeriod?: number// 40312
  LegPaymentStreamInitialFixingDateOffsetUnit?: string// 40313
  LegPaymentStreamInitialFixingDateOffsetDayType?: number// 40314
  LegPaymentStreamInitialFixingDateAdjusted?: Date// 40315
  LegPaymentStreamFixingDateRelativeTo?: number// 40316
  LegPaymentStreamFixingDateBusinessDayConvention?: number// 40317
  LegPaymentStreamFixingDateOffsetPeriod?: number// 40319
  LegPaymentStreamFixingDateOffsetUnit?: string// 40320
  LegPaymentStreamFixingDateOffsetDayType?: number// 40321
  LegPaymentStreamFixingDateAdjusted?: Date// 40322
  LegPaymentStreamRateCutoffDateOffsetPeriod?: number// 40323
  LegPaymentStreamRateCutoffDateOffsetUnit?: string// 40324
  LegPaymentStreamRateCutoffDateOffsetDayType?: number// 40325
  LegPaymentStreamResetDateBusinessCenterGrp?: ILegPaymentStreamResetDateBusinessCenterGrp[]
  LegPaymentStreamInitialFixingDateBusinessCenterGrp?: ILegPaymentStreamInitialFixingDateBusinessCenterGrp[]
  LegPaymentStreamFixingDateBusinessCenterGrp?: ILegPaymentStreamFixingDateBusinessCenterGrp[]
  LegPaymentStreamFixingDateGrp?: ILegPaymentStreamFixingDateGrp[]
}
