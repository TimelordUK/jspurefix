import { ILegDeliveryScheduleSettlDayGrp } from './leg_delivery_schedule_settl_day_grp'

export interface ILegDeliveryScheduleGrp {
  LegDeliveryScheduleType?: number// [1] 41409 (Int)
  LegDeliveryScheduleXID?: string// [1] 41410 (String)
  LegDeliveryScheduleNotional?: number// [1] 41411 (Float)
  LegDeliveryScheduleNotionalUnitOfMeasure?: string// [1] 41412 (String)
  LegDeliveryScheduleNotionalCommodityFrequency?: number// [1] 41413 (Int)
  LegDeliveryScheduleNegativeTolerance?: number// [1] 41414 (Float)
  LegDeliverySchedulePositiveTolerance?: number// [1] 41415 (Float)
  LegDeliveryScheduleToleranceUnitOfMeasure?: string// [1] 41416 (String)
  LegDeliveryScheduleToleranceType?: number// [1] 41417 (Int)
  LegDeliveryScheduleSettlCountry?: string// [1] 41418 (String)
  LegDeliveryScheduleSettlTimeZone?: string// [1] 41419 (String)
  LegDeliveryScheduleSettlFlowType?: number// [1] 41420 (Int)
  LegDeliveryScheduleSettlHolidaysProcessingInstruction?: number// [1] 41421 (Int)
  LegDeliveryScheduleSettlDayGrp?: ILegDeliveryScheduleSettlDayGrp[]// [1] Day.41423, TotHrs.41424
}
