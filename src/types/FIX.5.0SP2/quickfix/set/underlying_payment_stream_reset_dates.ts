import { IUnderlyingPaymentStreamResetDateBusinessCenterGrp } from './underlying_payment_stream_reset_date_business_center_grp'
import { IUnderlyingPaymentStreamInitialFixingDateBusinessCenterGrp } from './underlying_payment_stream_initial_fixing_date_business_center_grp'
import { IUnderlyingPaymentStreamFixingDateBusinessCenterGrp } from './underlying_payment_stream_fixing_date_business_center_grp'
import { IUnderlyingPaymentStreamFixingDateGrp } from './underlying_payment_stream_fixing_date_grp'

export interface IUnderlyingPaymentStreamResetDates {
  UnderlyingPaymentStreamResetDateRelativeTo?: number// [1] 40592 (Int)
  UnderlyingPaymentStreamResetDateBusinessDayConvention?: number// [2] 40593 (Int)
  UnderlyingPaymentStreamResetDateBusinessCenterGrp?: IUnderlyingPaymentStreamResetDateBusinessCenterGrp// [3] NoUnderlyingPaymentStreamResetDateBusinessCenters.40970, UnderlyingPaymentStreamResetDateBusinessCenter.40594
  UnderlyingPaymentStreamResetFrequencyPeriod?: number// [4] 40595 (Int)
  UnderlyingPaymentStreamResetFrequencyUnit?: string// [5] 40596 (String)
  UnderlyingPaymentStreamResetWeeklyRollConvention?: string// [6] 40597 (String)
  UnderlyingPaymentStreamInitialFixingDateRelativeTo?: number// [7] 40598 (Int)
  UnderlyingPaymentStreamInitialFixingDateBusinessDayConvention?: number// [8] 40599 (Int)
  UnderlyingPaymentStreamInitialFixingDateBusinessCenterGrp?: IUnderlyingPaymentStreamInitialFixingDateBusinessCenterGrp// [9] NoUnderlyingPaymentStreamInitialFixingDateBusinessCenters.40971, UnderlyingPaymentStreamInitialFixingDateBusinessCenter.40600
  UnderlyingPaymentStreamInitialFixingDateOffsetPeriod?: number// [10] 40601 (Int)
  UnderlyingPaymentStreamInitialFixingDateOffsetUnit?: string// [11] 40602 (String)
  UnderlyingPaymentStreamInitialFixingDateOffsetDayType?: number// [12] 40603 (Int)
  UnderlyingPaymentStreamInitialFixingDateAdjusted?: Date// [13] 40604 (LocalDate)
  UnderlyingPaymentStreamFixingDateRelativeTo?: number// [14] 40605 (Int)
  UnderlyingPaymentStreamFixingDateBusinessDayConvention?: number// [15] 40606 (Int)
  UnderlyingPaymentStreamFixingDateBusinessCenterGrp?: IUnderlyingPaymentStreamFixingDateBusinessCenterGrp// [16] NoUnderlyingPaymentStreamFixingDateBusinessCenters.40972, UnderlyingPaymentStreamFixingDateBusinessCenter.40607
  UnderlyingPaymentStreamFixingDateOffsetPeriod?: number// [17] 40608 (Int)
  UnderlyingPaymentStreamFixingDateOffsetUnit?: string// [18] 40609 (String)
  UnderlyingPaymentStreamFixingDateOffsetDayType?: number// [19] 40610 (Int)
  UnderlyingPaymentStreamFixingDateAdjusted?: Date// [20] 40611 (LocalDate)
  UnderlyingPaymentStreamRateCutoffDateOffsetPeriod?: number// [21] 40612 (Int)
  UnderlyingPaymentStreamRateCutoffDateOffsetUnit?: string// [22] 40613 (String)
  UnderlyingPaymentStreamRateCutoffDateOffsetDayType?: number// [23] 40614 (Int)
  UnderlyingPaymentStreamFixingDateGrp?: IUnderlyingPaymentStreamFixingDateGrp// [24] NoUnderlyingPaymentStreamFixingDates.42955, UnderlyingPaymentStreamFixingDate.42956, UnderlyingPaymentStreamFixingDateType.42957
}
