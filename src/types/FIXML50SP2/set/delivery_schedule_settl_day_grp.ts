import { IDeliveryScheduleSettlTimeGrp } from './delivery_schedule_settl_time_grp'

export interface IDeliveryScheduleSettlDayGrp {
  DeliveryScheduleSettlDay?: number// 41052
  DeliveryScheduleSettlTotalHours?: number// 41053
  DeliveryScheduleSettlTimeGrp?: IDeliveryScheduleSettlTimeGrp[]
}
