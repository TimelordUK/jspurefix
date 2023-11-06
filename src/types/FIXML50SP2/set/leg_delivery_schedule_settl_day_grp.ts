import { ILegDeliveryScheduleSettlTimeGrp } from './leg_delivery_schedule_settl_time_grp'

export interface ILegDeliveryScheduleSettlDayGrp {
  LegDeliveryScheduleSettlDay?: number// [1] 41423 (Int)
  LegDeliveryScheduleSettlTotalHours?: number// [1] 41424 (Int)
  LegDeliveryScheduleSettlTimeGrp?: ILegDeliveryScheduleSettlTimeGrp[]// [1] Start.41426, End.41427, Typ.41428
}
