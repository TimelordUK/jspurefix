import { ILegDeliveryScheduleGrpNoLegDeliverySchedules } from './leg_delivery_schedule_grp_no_leg_delivery_schedules'

export interface ILegDeliveryScheduleGrp {
  NoLegDeliverySchedules?: ILegDeliveryScheduleGrpNoLegDeliverySchedules[]// [1] LegDeliveryScheduleType.41409, LegDeliveryScheduleXID.41410 .. LegDeliveryScheduleSettlTimeType.41428
}
