import { IPaymentStreamResetDateBusinessCenterGrp } from './payment_stream_reset_date_business_center_grp'
import { IPaymentStreamInitialFixingDateBusinessCenterGrp } from './payment_stream_initial_fixing_date_business_center_grp'
import { IPaymentStreamFixingDateBusinessCenterGrp } from './payment_stream_fixing_date_business_center_grp'
import { IPaymentStreamFixingDateGrp } from './payment_stream_fixing_date_grp'

export interface IPaymentStreamResetDates {
  PaymentStreamResetDateRelativeTo?: number// [1] 40761 (Int)
  PaymentStreamResetDateBusinessDayConvention?: number// [1] 40762 (Int)
  PaymentStreamResetFrequencyPeriod?: number// [1] 40764 (Int)
  PaymentStreamResetFrequencyUnit?: string// [1] 40765 (String)
  PaymentStreamResetWeeklyRollConvention?: string// [1] 40766 (String)
  PaymentStreamInitialFixingDateRelativeTo?: number// [1] 40767 (Int)
  PaymentStreamInitialFixingDateBusinessDayConvention?: number// [1] 40768 (Int)
  PaymentStreamInitialFixingDateOffsetPeriod?: number// [1] 40770 (Int)
  PaymentStreamInitialFixingDateOffsetUnit?: string// [1] 40771 (String)
  PaymentStreamInitialFixingDateOffsetDayType?: number// [1] 40772 (Int)
  PaymentStreamInitialFixingDateAdjusted?: Date// [1] 40773 (LocalDate)
  PaymentStreamFixingDateRelativeTo?: number// [1] 40774 (Int)
  PaymentStreamFixingDateBusinessDayConvention?: number// [1] 40775 (Int)
  PaymentStreamFixingDateOffsetPeriod?: number// [1] 40777 (Int)
  PaymentStreamFixingDateOffsetUnit?: string// [1] 40778 (String)
  PaymentStreamFixingDateOffsetDayType?: number// [1] 40779 (Int)
  PaymentStreamFixingDateAdjusted?: Date// [1] 40780 (LocalDate)
  PaymentStreamRateCutoffDateOffsetPeriod?: number// [1] 40781 (Int)
  PaymentStreamRateCutoffDateOffsetUnit?: string// [1] 40782 (String)
  PaymentStreamRateCutoffDateOffsetDayType?: number// [1] 40783 (Int)
  PaymentStreamResetDateBusinessCenterGrp?: IPaymentStreamResetDateBusinessCenterGrp[]// [1] Ctr.40763
  PaymentStreamInitialFixingDateBusinessCenterGrp?: IPaymentStreamInitialFixingDateBusinessCenterGrp[]// [2] Ctr.40769
  PaymentStreamFixingDateBusinessCenterGrp?: IPaymentStreamFixingDateBusinessCenterGrp[]// [3] Ctr.40776
  PaymentStreamFixingDateGrp?: IPaymentStreamFixingDateGrp// [4] Dt.42661, Typ.42662
}
