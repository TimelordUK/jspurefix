import { IUnderlyingPaymentStreamResetDateBusinessCenterGrp } from './underlying_payment_stream_reset_date_business_center_grp'
import { IUnderlyingPaymentStreamInitialFixingDateBusinessCenterGrp } from './underlying_payment_stream_initial_fixing_date_business_center_grp'
import { IUnderlyingPaymentStreamFixingDateBusinessCenterGrp } from './underlying_payment_stream_fixing_date_business_center_grp'
import { IUnderlyingPaymentStreamFixingDateGrp } from './underlying_payment_stream_fixing_date_grp'

export interface IUnderlyingPaymentStreamResetDates {
  UnderlyingPaymentStreamResetDateRelativeTo?: number// 40592
  UnderlyingPaymentStreamResetDateBusinessDayConvention?: number// 40593
  UnderlyingPaymentStreamResetFrequencyPeriod?: number// 40595
  UnderlyingPaymentStreamResetFrequencyUnit?: string// 40596
  UnderlyingPaymentStreamResetWeeklyRollConvention?: string// 40597
  UnderlyingPaymentStreamInitialFixingDateRelativeTo?: number// 40598
  UnderlyingPaymentStreamInitialFixingDateBusinessDayConvention?: number// 40599
  UnderlyingPaymentStreamInitialFixingDateOffsetPeriod?: number// 40601
  UnderlyingPaymentStreamInitialFixingDateOffsetUnit?: string// 40602
  UnderlyingPaymentStreamInitialFixingDateOffsetDayType?: number// 40603
  UnderlyingPaymentStreamInitialFixingDateAdjusted?: Date// 40604
  UnderlyingPaymentStreamFixingDateRelativeTo?: number// 40605
  UnderlyingPaymentStreamFixingDateBusinessDayConvention?: number// 40606
  UnderlyingPaymentStreamFixingDateOffsetPeriod?: number// 40608
  UnderlyingPaymentStreamFixingDateOffsetUnit?: string// 40609
  UnderlyingPaymentStreamFixingDateOffsetDayType?: number// 40610
  UnderlyingPaymentStreamFixingDateAdjusted?: Date// 40611
  UnderlyingPaymentStreamRateCutoffDateOffsetPeriod?: number// 40612
  UnderlyingPaymentStreamRateCutoffDateOffsetUnit?: string// 40613
  UnderlyingPaymentStreamRateCutoffDateOffsetDayType?: number// 40614
  UnderlyingPaymentStreamResetDateBusinessCenterGrp?: IUnderlyingPaymentStreamResetDateBusinessCenterGrp[]
  UnderlyingPaymentStreamInitialFixingDateBusinessCenterGrp?: IUnderlyingPaymentStreamInitialFixingDateBusinessCenterGrp[]
  UnderlyingPaymentStreamFixingDateBusinessCenterGrp?: IUnderlyingPaymentStreamFixingDateBusinessCenterGrp[]
  UnderlyingPaymentStreamFixingDateGrp?: IUnderlyingPaymentStreamFixingDateGrp
}
