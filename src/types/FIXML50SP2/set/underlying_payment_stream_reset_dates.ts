import { IUnderlyingPaymentStreamResetDateBusinessCenterGrp } from './underlying_payment_stream_reset_date_business_center_grp'
import { IUnderlyingPaymentStreamInitialFixingDateBusinessCenterGrp } from './underlying_payment_stream_initial_fixing_date_business_center_grp'
import { IUnderlyingPaymentStreamFixingDateBusinessCenterGrp } from './underlying_payment_stream_fixing_date_business_center_grp'
import { IUnderlyingPaymentStreamFixingDateGrp } from './underlying_payment_stream_fixing_date_grp'

export interface IUnderlyingPaymentStreamResetDates {
  UnderlyingPaymentStreamResetDateRelativeTo?: number// [1] 40592 (Int)
  UnderlyingPaymentStreamResetDateBusinessDayConvention?: number// [1] 40593 (Int)
  UnderlyingPaymentStreamResetFrequencyPeriod?: number// [1] 40595 (Int)
  UnderlyingPaymentStreamResetFrequencyUnit?: string// [1] 40596 (String)
  UnderlyingPaymentStreamResetWeeklyRollConvention?: string// [1] 40597 (String)
  UnderlyingPaymentStreamInitialFixingDateRelativeTo?: number// [1] 40598 (Int)
  UnderlyingPaymentStreamInitialFixingDateBusinessDayConvention?: number// [1] 40599 (Int)
  UnderlyingPaymentStreamInitialFixingDateOffsetPeriod?: number// [1] 40601 (Int)
  UnderlyingPaymentStreamInitialFixingDateOffsetUnit?: string// [1] 40602 (String)
  UnderlyingPaymentStreamInitialFixingDateOffsetDayType?: number// [1] 40603 (Int)
  UnderlyingPaymentStreamInitialFixingDateAdjusted?: Date// [1] 40604 (LocalDate)
  UnderlyingPaymentStreamFixingDateRelativeTo?: number// [1] 40605 (Int)
  UnderlyingPaymentStreamFixingDateBusinessDayConvention?: number// [1] 40606 (Int)
  UnderlyingPaymentStreamFixingDateOffsetPeriod?: number// [1] 40608 (Int)
  UnderlyingPaymentStreamFixingDateOffsetUnit?: string// [1] 40609 (String)
  UnderlyingPaymentStreamFixingDateOffsetDayType?: number// [1] 40610 (Int)
  UnderlyingPaymentStreamFixingDateAdjusted?: Date// [1] 40611 (LocalDate)
  UnderlyingPaymentStreamRateCutoffDateOffsetPeriod?: number// [1] 40612 (Int)
  UnderlyingPaymentStreamRateCutoffDateOffsetUnit?: string// [1] 40613 (String)
  UnderlyingPaymentStreamRateCutoffDateOffsetDayType?: number// [1] 40614 (Int)
  UnderlyingPaymentStreamResetDateBusinessCenterGrp?: IUnderlyingPaymentStreamResetDateBusinessCenterGrp[]// [1] Ctr.40594
  UnderlyingPaymentStreamInitialFixingDateBusinessCenterGrp?: IUnderlyingPaymentStreamInitialFixingDateBusinessCenterGrp[]// [2] Ctr.40600
  UnderlyingPaymentStreamFixingDateBusinessCenterGrp?: IUnderlyingPaymentStreamFixingDateBusinessCenterGrp[]// [3] Ctr.40607
  UnderlyingPaymentStreamFixingDateGrp?: IUnderlyingPaymentStreamFixingDateGrp// [4] Dt.42956, Typ.42957
}
