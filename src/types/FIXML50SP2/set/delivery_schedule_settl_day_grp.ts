import { IDeliveryScheduleSettlTimeGrp } from './delivery_schedule_settl_time_grp'

export interface IDeliveryScheduleSettlDayGrp {
  UnderlyingStreamCommoditySettlDay?: number// 41997
  UnderlyingStreamCommoditySettlTotalHours?: number// 41998
  DeliveryScheduleSettlTimeGrp?: IDeliveryScheduleSettlTimeGrp[]
}
