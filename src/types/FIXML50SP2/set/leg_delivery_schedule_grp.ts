import { ILegDeliveryScheduleSettlDayGrp } from './leg_delivery_schedule_settl_day_grp'

export interface ILegDeliveryScheduleGrp {
  LegDeliveryScheduleType?: number// 41409
  LegDeliveryScheduleXID?: string// 41410
  LegDeliveryScheduleNotional?: number// 41411
  LegDeliveryScheduleNotionalUnitOfMeasure?: string// 41412
  LegDeliveryScheduleNotionalCommodityFrequency?: number// 41413
  LegDeliveryScheduleNegativeTolerance?: number// 41414
  LegDeliverySchedulePositiveTolerance?: number// 41415
  LegDeliveryScheduleToleranceUnitOfMeasure?: string// 41416
  LegDeliveryScheduleToleranceType?: number// 41417
  LegDeliveryScheduleSettlCountry?: string// 41418
  LegDeliveryScheduleSettlTimeZone?: string// 41419
  LegDeliveryScheduleSettlFlowType?: number// 41420
  LegDeliveryScheduleSettlHolidaysProcessingInstruction?: number// 41421
  LegDeliveryScheduleSettlDayGrp?: ILegDeliveryScheduleSettlDayGrp[]
}
