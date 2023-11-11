import { IDeliveryScheduleGrpNoDeliverySchedules } from './delivery_schedule_grp_no_delivery_schedules'

export interface IDeliveryScheduleGrp {
  NoDeliverySchedules?: IDeliveryScheduleGrpNoDeliverySchedules[]// [1] DeliveryScheduleType.41038, DeliveryScheduleXID.41039 .. DeliveryScheduleSettlTimeType.41057
}
