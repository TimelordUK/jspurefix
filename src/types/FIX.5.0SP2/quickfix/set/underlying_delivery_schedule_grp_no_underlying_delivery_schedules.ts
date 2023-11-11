import { IUnderlyingDeliveryScheduleSettlDayGrp } from './underlying_delivery_schedule_settl_day_grp'

export interface IUnderlyingDeliveryScheduleGrpNoUnderlyingDeliverySchedules {
  UnderlyingDeliveryScheduleType?: number// [1] 41757 (Int)
  UnderlyingDeliveryScheduleXID?: string// [2] 41758 (String)
  UnderlyingDeliveryScheduleNotional?: number// [3] 41759 (Float)
  UnderlyingDeliveryScheduleNotionalUnitOfMeasure?: string// [4] 41760 (String)
  UnderlyingDeliveryScheduleNotionalCommodityFrequency?: number// [5] 41761 (Int)
  UnderlyingDeliveryScheduleNegativeTolerance?: number// [6] 41762 (Float)
  UnderlyingDeliverySchedulePositiveTolerance?: number// [7] 41763 (Float)
  UnderlyingDeliveryScheduleToleranceUnitOfMeasure?: string// [8] 41764 (String)
  UnderlyingDeliveryScheduleToleranceType?: number// [9] 41765 (Int)
  UnderlyingDeliveryScheduleSettlCountry?: string// [10] 41766 (String)
  UnderlyingDeliveryScheduleSettlTimeZone?: string// [11] 41767 (String)
  UnderlyingDeliveryScheduleSettlFlowType?: number// [12] 41768 (Int)
  UnderlyingDeliveryScheduleSettlHolidaysProcessingInstruction?: number// [13] 41769 (Int)
  UnderlyingDeliveryScheduleSettlDayGrp?: IUnderlyingDeliveryScheduleSettlDayGrp// [14] NoUnderlyingDeliveryScheduleSettlDays.41770, UnderlyingDeliveryScheduleSettlDay.41771 .. UnderlyingDeliveryScheduleSettlTimeType.41776
}
