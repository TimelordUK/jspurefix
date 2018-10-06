import { IPaymentStreamResetDateBusinessCenterGrp } from './payment_stream_reset_date_business_center_grp'
import { IPaymentStreamInitialFixingDateBusinessCenterGrp } from './payment_stream_initial_fixing_date_business_center_grp'
import { IPaymentStreamFixingDateBusinessCenterGrp } from './payment_stream_fixing_date_business_center_grp'
import { IPaymentStreamFixingDateGrp } from './payment_stream_fixing_date_grp'

export interface IPaymentStreamResetDates {
  PaymentStreamResetDateRelativeTo?: number// 40761
  PaymentStreamResetDateBusinessDayConvention?: number// 40762
  PaymentStreamResetFrequencyPeriod?: number// 40764
  PaymentStreamResetFrequencyUnit?: string// 40765
  PaymentStreamResetWeeklyRollConvention?: string// 40766
  PaymentStreamInitialFixingDateRelativeTo?: number// 40767
  PaymentStreamInitialFixingDateBusinessDayConvention?: number// 40768
  PaymentStreamInitialFixingDateOffsetPeriod?: number// 40770
  PaymentStreamInitialFixingDateOffsetUnit?: string// 40771
  PaymentStreamInitialFixingDateOffsetDayType?: number// 40772
  PaymentStreamInitialFixingDateAdjusted?: Date// 40773
  PaymentStreamFixingDateRelativeTo?: number// 40774
  PaymentStreamFixingDateBusinessDayConvention?: number// 40775
  PaymentStreamFixingDateOffsetPeriod?: number// 40777
  PaymentStreamFixingDateOffsetUnit?: string// 40778
  PaymentStreamFixingDateOffsetDayType?: number// 40779
  PaymentStreamFixingDateAdjusted?: Date// 40780
  PaymentStreamRateCutoffDateOffsetPeriod?: number// 40781
  PaymentStreamRateCutoffDateOffsetUnit?: string// 40782
  PaymentStreamRateCutoffDateOffsetDayType?: number// 40783
  PaymentStreamResetDateBusinessCenterGrp?: IPaymentStreamResetDateBusinessCenterGrp[]
  PaymentStreamInitialFixingDateBusinessCenterGrp?: IPaymentStreamInitialFixingDateBusinessCenterGrp[]
  PaymentStreamFixingDateBusinessCenterGrp?: IPaymentStreamFixingDateBusinessCenterGrp[]
  PaymentStreamFixingDateGrp?: IPaymentStreamFixingDateGrp
}
