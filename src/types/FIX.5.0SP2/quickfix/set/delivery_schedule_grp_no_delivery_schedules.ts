import { IDeliveryScheduleSettlDayGrp } from './delivery_schedule_settl_day_grp'

export interface IDeliveryScheduleGrpNoDeliverySchedules {
  DeliveryScheduleType?: number// [1] 41038 (Int)
  DeliveryScheduleXID?: string// [2] 41039 (String)
  DeliveryScheduleNotional?: number// [3] 41040 (Float)
  DeliveryScheduleNotionalUnitOfMeasure?: string// [4] 41041 (String)
  DeliveryScheduleNotionalCommodityFrequency?: number// [5] 41042 (Int)
  DeliveryScheduleNegativeTolerance?: number// [6] 41043 (Float)
  DeliverySchedulePositiveTolerance?: number// [7] 41044 (Float)
  DeliveryScheduleToleranceUnitOfMeasure?: string// [8] 41045 (String)
  DeliveryScheduleToleranceType?: number// [9] 41046 (Int)
  DeliveryScheduleSettlCountry?: string// [10] 41047 (String)
  DeliveryScheduleSettlTimeZone?: string// [11] 41048 (String)
  DeliveryScheduleSettlFlowType?: number// [12] 41049 (Int)
  DeliveryScheduleSettlHolidaysProcessingInstruction?: number// [13] 41050 (Int)
  DeliveryScheduleSettlDayGrp?: IDeliveryScheduleSettlDayGrp// [14] NoDeliveryScheduleSettlDays.41051, DeliveryScheduleSettlDay.41052 .. DeliveryScheduleSettlTimeType.41057
}
