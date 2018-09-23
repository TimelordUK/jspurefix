import { IUnderlyingDeliveryScheduleSettlTimeGrp } from './underlying_delivery_schedule_settl_time_grp'

export interface IUnderlyingDeliveryScheduleSettlDayGrp {
  UnderlyingStreamCommoditySettlDay?: number// 41997
  UnderlyingStreamCommoditySettlTotalHours?: number// 41998
  UnderlyingDeliveryScheduleSettlTimeGrp?: IUnderlyingDeliveryScheduleSettlTimeGrp[]
}
