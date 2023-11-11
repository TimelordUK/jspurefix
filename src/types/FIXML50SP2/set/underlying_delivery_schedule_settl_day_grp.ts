import { IUnderlyingDeliveryScheduleSettlTimeGrp } from './underlying_delivery_schedule_settl_time_grp'

export interface IUnderlyingDeliveryScheduleSettlDayGrp {
  UnderlyingDeliveryScheduleSettlDay?: number// [1] 41771 (Int)
  UnderlyingDeliveryScheduleSettlTotalHours?: number// [1] 41772 (Int)
  UnderlyingDeliveryScheduleSettlTimeGrp?: IUnderlyingDeliveryScheduleSettlTimeGrp[]// [1] Start.41774, End.41775, Typ.41776
}
