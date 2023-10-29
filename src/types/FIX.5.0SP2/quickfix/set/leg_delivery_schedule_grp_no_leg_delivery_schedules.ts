import { ILegDeliveryScheduleSettlDayGrp } from './leg_delivery_schedule_settl_day_grp'

export interface ILegDeliveryScheduleGrpNoLegDeliverySchedules {
  LegDeliveryScheduleType?: number// [1] 41409 (Int)
  LegDeliveryScheduleXID?: string// [2] 41410 (String)
  LegDeliveryScheduleNotional?: number// [3] 41411 (Float)
  LegDeliveryScheduleNotionalUnitOfMeasure?: string// [4] 41412 (String)
  LegDeliveryScheduleNotionalCommodityFrequency?: number// [5] 41413 (Int)
  LegDeliveryScheduleNegativeTolerance?: number// [6] 41414 (Float)
  LegDeliverySchedulePositiveTolerance?: number// [7] 41415 (Float)
  LegDeliveryScheduleToleranceUnitOfMeasure?: string// [8] 41416 (String)
  LegDeliveryScheduleToleranceType?: number// [9] 41417 (Int)
  LegDeliveryScheduleSettlCountry?: string// [10] 41418 (String)
  LegDeliveryScheduleSettlTimeZone?: string// [11] 41419 (String)
  LegDeliveryScheduleSettlFlowType?: number// [12] 41420 (Int)
  LegDeliveryScheduleSettlHolidaysProcessingInstruction?: number// [13] 41421 (Int)
  LegDeliveryScheduleSettlDayGrp?: ILegDeliveryScheduleSettlDayGrp// [14] NoLegDeliveryScheduleSettlDays.41422, LegDeliveryScheduleSettlDay.41423 .. LegDeliveryScheduleSettlTimeType.41428
}
