import { IDeliveryScheduleSettlDayGrp } from './delivery_schedule_settl_day_grp'

export interface IDeliveryScheduleGrp {
  DeliveryScheduleType?: number// 41038
  DeliveryScheduleXID?: string// 41039
  DeliveryScheduleNotional?: number// 41040
  DeliveryScheduleNotionalUnitOfMeasure?: string// 41041
  DeliveryScheduleNotionalCommodityFrequency?: number// 41042
  DeliveryScheduleNegativeTolerance?: number// 41043
  DeliverySchedulePositiveTolerance?: number// 41044
  DeliveryScheduleToleranceUnitOfMeasure?: string// 41045
  DeliveryScheduleToleranceType?: number// 41046
  DeliveryScheduleSettlCountry?: string// 41047
  DeliveryScheduleSettlTimeZone?: string// 41048
  DeliveryScheduleSettlFlowType?: number// 41049
  DeliveryScheduleSettlHolidaysProcessingInstruction?: number// 41050
  DeliveryScheduleSettlDayGrp?: IDeliveryScheduleSettlDayGrp[]
}
