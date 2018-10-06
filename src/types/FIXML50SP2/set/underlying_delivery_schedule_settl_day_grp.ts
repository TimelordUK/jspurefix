import { IUnderlyingDeliveryScheduleSettlTimeGrp } from './underlying_delivery_schedule_settl_time_grp'

export interface IUnderlyingDeliveryScheduleSettlDayGrp {
  UnderlyingDeliveryScheduleSettlDay?: number// 41771
  UnderlyingDeliveryScheduleSettlTotalHours?: number// 41772
  UnderlyingDeliveryScheduleSettlTimeGrp?: IUnderlyingDeliveryScheduleSettlTimeGrp[]
}
