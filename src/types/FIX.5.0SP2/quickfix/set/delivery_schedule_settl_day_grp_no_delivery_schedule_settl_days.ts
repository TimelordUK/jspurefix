import { IDeliveryScheduleSettlTimeGrp } from './delivery_schedule_settl_time_grp'

export interface IDeliveryScheduleSettlDayGrpNoDeliveryScheduleSettlDays {
  DeliveryScheduleSettlDay?: number// [1] 41052 (Int)
  DeliveryScheduleSettlTotalHours?: number// [2] 41053 (Int)
  DeliveryScheduleSettlTimeGrp?: IDeliveryScheduleSettlTimeGrp// [3] NoDeliveryScheduleSettlTimes.41054, DeliveryScheduleSettlStart.41055 .. DeliveryScheduleSettlTimeType.41057
}
