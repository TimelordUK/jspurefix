import { ILegDeliveryScheduleSettlTimeGrp } from './leg_delivery_schedule_settl_time_grp'

export interface ILegDeliveryScheduleSettlDayGrp {
  LegDeliveryScheduleSettlDay?: number// 41423
  LegDeliveryScheduleSettlTotalHours?: number// 41424
  LegDeliveryScheduleSettlTimeGrp?: ILegDeliveryScheduleSettlTimeGrp[]
}
