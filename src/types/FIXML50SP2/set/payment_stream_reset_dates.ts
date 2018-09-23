import { IPaymentStreamResetDateBusinessCenterGrp } from './payment_stream_reset_date_business_center_grp'
import { IPaymentStreamInitialFixingDateBusinessCenterGrp } from './payment_stream_initial_fixing_date_business_center_grp'
import { IPaymentStreamFixingDateBusinessCenterGrp } from './payment_stream_fixing_date_business_center_grp'
import { IPaymentStreamFixingDateGrp } from './payment_stream_fixing_date_grp'

export interface IPaymentStreamResetDates {
  UnderlyingSettlMethodElectionDateRelativeTo?: number// 43078
  UnderlyingSettlMethodElectionDateBusinessDayConvention?: number// 43077
  UnderlyingReturnRateValuationFrequencyPeriod?: number// 43026
  UnderlyingReturnRateValuationFrequencyUnit?: string// 43027
  PaymentStreamResetWeeklyRollConvention?: string// 40766
  PaymentStreamInitialFixingDateRelativeTo?: number// 40767
  PaymentStreamInitialFixingDateBusinessDayConvention?: number// 40768
  PaymentStreamInitialFixingDateOffsetPeriod?: number// 40770
  PaymentStreamInitialFixingDateOffsetUnit?: string// 40771
  PaymentStreamInitialFixingDateOffsetDayType?: number// 40772
  PaymentStreamInitialFixingDateAdjusted?: Date// 40773
  PaymentScheduleFixingDateRelativeTo?: number// 40852
  PaymentScheduleFixingDateBusinessDayConvention?: number// 40853
  PaymentScheduleFixingDateOffsetPeriod?: number// 40855
  PaymentScheduleFixingDateOffsetUnit?: string// 40856
  PaymentScheduleFixingDateOffsetDayType?: number// 40857
  PaymentScheduleFixingDateAdjusted?: Date// 40858
  PaymentStreamRateCutoffDateOffsetPeriod?: number// 40781
  PaymentStreamRateCutoffDateOffsetUnit?: string// 40782
  PaymentStreamRateCutoffDateOffsetDayType?: number// 40783
  PaymentStreamResetDateBusinessCenterGrp?: IPaymentStreamResetDateBusinessCenterGrp[]
  PaymentStreamInitialFixingDateBusinessCenterGrp?: IPaymentStreamInitialFixingDateBusinessCenterGrp[]
  PaymentStreamFixingDateBusinessCenterGrp?: IPaymentStreamFixingDateBusinessCenterGrp[]
  PaymentStreamFixingDateGrp?: IPaymentStreamFixingDateGrp
}
