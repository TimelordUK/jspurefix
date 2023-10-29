import { IUnderlyingDeliveryScheduleSettlTimeGrp } from './underlying_delivery_schedule_settl_time_grp'

export interface IUnderlyingDeliveryScheduleSettlDayGrpNoUnderlyingDeliveryScheduleSettlDays {
  UnderlyingDeliveryScheduleSettlDay?: number// [1] 41771 (Int)
  UnderlyingDeliveryScheduleSettlTotalHours?: number// [2] 41772 (Int)
  UnderlyingDeliveryScheduleSettlTimeGrp?: IUnderlyingDeliveryScheduleSettlTimeGrp// [3] NoUnderlyingDeliveryScheduleSettlTimes.41773, UnderlyingDeliveryScheduleSettlStart.41774 .. UnderlyingDeliveryScheduleSettlTimeType.41776
}
