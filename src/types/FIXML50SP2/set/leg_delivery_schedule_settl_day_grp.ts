import { ILegDeliveryScheduleSettlTimeGrp } from './leg_delivery_schedule_settl_time_grp'

export interface ILegDeliveryScheduleSettlDayGrp {
  UnderlyingStreamCommoditySettlDay?: number// 41997
  UnderlyingStreamCommoditySettlTotalHours?: number// 41998
  LegDeliveryScheduleSettlTimeGrp?: ILegDeliveryScheduleSettlTimeGrp[]
}
