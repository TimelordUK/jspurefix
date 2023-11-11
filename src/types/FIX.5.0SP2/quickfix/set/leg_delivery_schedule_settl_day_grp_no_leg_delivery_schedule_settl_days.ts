import { ILegDeliveryScheduleSettlTimeGrp } from './leg_delivery_schedule_settl_time_grp'

export interface ILegDeliveryScheduleSettlDayGrpNoLegDeliveryScheduleSettlDays {
  LegDeliveryScheduleSettlDay?: number// [1] 41423 (Int)
  LegDeliveryScheduleSettlTotalHours?: number// [2] 41424 (Int)
  LegDeliveryScheduleSettlTimeGrp?: ILegDeliveryScheduleSettlTimeGrp// [3] NoLegDeliveryScheduleSettlTimes.41425, LegDeliveryScheduleSettlStart.41426 .. LegDeliveryScheduleSettlTimeType.41428
}
