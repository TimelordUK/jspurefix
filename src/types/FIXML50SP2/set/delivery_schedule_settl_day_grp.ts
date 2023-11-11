import { IDeliveryScheduleSettlTimeGrp } from './delivery_schedule_settl_time_grp'

export interface IDeliveryScheduleSettlDayGrp {
  DeliveryScheduleSettlDay?: number// [1] 41052 (Int)
  DeliveryScheduleSettlTotalHours?: number// [1] 41053 (Int)
  DeliveryScheduleSettlTimeGrp?: IDeliveryScheduleSettlTimeGrp[]// [1] Start.41055, End.41056, Typ.41057
}
