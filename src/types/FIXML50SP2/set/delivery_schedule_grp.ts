import { IDeliveryScheduleSettlDayGrp } from './delivery_schedule_settl_day_grp'

export interface IDeliveryScheduleGrp {
  DeliveryScheduleType?: number// [1] 41038 (Int)
  DeliveryScheduleXID?: string// [1] 41039 (String)
  DeliveryScheduleNotional?: number// [1] 41040 (Float)
  DeliveryScheduleNotionalUnitOfMeasure?: string// [1] 41041 (String)
  DeliveryScheduleNotionalCommodityFrequency?: number// [1] 41042 (Int)
  DeliveryScheduleNegativeTolerance?: number// [1] 41043 (Float)
  DeliverySchedulePositiveTolerance?: number// [1] 41044 (Float)
  DeliveryScheduleToleranceUnitOfMeasure?: string// [1] 41045 (String)
  DeliveryScheduleToleranceType?: number// [1] 41046 (Int)
  DeliveryScheduleSettlCountry?: string// [1] 41047 (String)
  DeliveryScheduleSettlTimeZone?: string// [1] 41048 (String)
  DeliveryScheduleSettlFlowType?: number// [1] 41049 (Int)
  DeliveryScheduleSettlHolidaysProcessingInstruction?: number// [1] 41050 (Int)
  DeliveryScheduleSettlDayGrp?: IDeliveryScheduleSettlDayGrp[]// [1] Day.41052, TotHrs.41053
}
