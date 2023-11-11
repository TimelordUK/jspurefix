import { IPaymentStreamResetDateBusinessCenterGrp } from './payment_stream_reset_date_business_center_grp'
import { IPaymentStreamInitialFixingDateBusinessCenterGrp } from './payment_stream_initial_fixing_date_business_center_grp'
import { IPaymentStreamFixingDateBusinessCenterGrp } from './payment_stream_fixing_date_business_center_grp'
import { IPaymentStreamFixingDateGrp } from './payment_stream_fixing_date_grp'

export interface IPaymentStreamResetDates {
  PaymentStreamResetDateRelativeTo?: number// [1] 40761 (Int)
  PaymentStreamResetDateBusinessDayConvention?: number// [2] 40762 (Int)
  PaymentStreamResetDateBusinessCenterGrp?: IPaymentStreamResetDateBusinessCenterGrp// [3] NoPaymentStreamResetDateBusinessCenters.40948, PaymentStreamResetDateBusinessCenter.40763
  PaymentStreamResetFrequencyPeriod?: number// [4] 40764 (Int)
  PaymentStreamResetFrequencyUnit?: string// [5] 40765 (String)
  PaymentStreamResetWeeklyRollConvention?: string// [6] 40766 (String)
  PaymentStreamInitialFixingDateRelativeTo?: number// [7] 40767 (Int)
  PaymentStreamInitialFixingDateBusinessDayConvention?: number// [8] 40768 (Int)
  PaymentStreamInitialFixingDateBusinessCenterGrp?: IPaymentStreamInitialFixingDateBusinessCenterGrp// [9] NoPaymentStreamInitialFixingDateBusinessCenters.40949, PaymentStreamInitialFixingDateBusinessCenter.40769
  PaymentStreamInitialFixingDateOffsetPeriod?: number// [10] 40770 (Int)
  PaymentStreamInitialFixingDateOffsetUnit?: string// [11] 40771 (String)
  PaymentStreamInitialFixingDateOffsetDayType?: number// [12] 40772 (Int)
  PaymentStreamInitialFixingDateAdjusted?: Date// [13] 40773 (LocalDate)
  PaymentStreamFixingDateRelativeTo?: number// [14] 40774 (Int)
  PaymentStreamFixingDateBusinessDayConvention?: number// [15] 40775 (Int)
  PaymentStreamFixingDateBusinessCenterGrp?: IPaymentStreamFixingDateBusinessCenterGrp// [16] NoPaymentStreamFixingDateBusinessCenters.40950, PaymentStreamFixingDateBusinessCenter.40776
  PaymentStreamFixingDateOffsetPeriod?: number// [17] 40777 (Int)
  PaymentStreamFixingDateOffsetUnit?: string// [18] 40778 (String)
  PaymentStreamFixingDateOffsetDayType?: number// [19] 40779 (Int)
  PaymentStreamFixingDateAdjusted?: Date// [20] 40780 (LocalDate)
  PaymentStreamRateCutoffDateOffsetPeriod?: number// [21] 40781 (Int)
  PaymentStreamRateCutoffDateOffsetUnit?: string// [22] 40782 (String)
  PaymentStreamRateCutoffDateOffsetDayType?: number// [23] 40783 (Int)
  PaymentStreamFixingDateGrp?: IPaymentStreamFixingDateGrp// [24] NoPaymentStreamFixingDates.42660, PaymentStreamFixingDate.42661, PaymentStreamFixingDateType.42662
}
