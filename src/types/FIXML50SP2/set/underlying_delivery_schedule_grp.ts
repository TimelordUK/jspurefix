import { IUnderlyingDeliveryScheduleSettlDayGrp } from './underlying_delivery_schedule_settl_day_grp'

export interface IUnderlyingDeliveryScheduleGrp {
  UnderlyingDeliveryScheduleType?: number// [1] 41757 (Int)
  UnderlyingDeliveryScheduleXID?: string// [1] 41758 (String)
  UnderlyingDeliveryScheduleNotional?: number// [1] 41759 (Float)
  UnderlyingDeliveryScheduleNotionalUnitOfMeasure?: string// [1] 41760 (String)
  UnderlyingDeliveryScheduleNotionalCommodityFrequency?: number// [1] 41761 (Int)
  UnderlyingDeliveryScheduleNegativeTolerance?: number// [1] 41762 (Float)
  UnderlyingDeliverySchedulePositiveTolerance?: number// [1] 41763 (Float)
  UnderlyingDeliveryScheduleToleranceUnitOfMeasure?: string// [1] 41764 (String)
  UnderlyingDeliveryScheduleToleranceType?: number// [1] 41765 (Int)
  UnderlyingDeliveryScheduleSettlCountry?: string// [1] 41766 (String)
  UnderlyingDeliveryScheduleSettlTimeZone?: string// [1] 41767 (String)
  UnderlyingDeliveryScheduleSettlFlowType?: number// [1] 41768 (Int)
  UnderlyingDeliveryScheduleSettlHolidaysProcessingInstruction?: number// [1] 41769 (Int)
  UnderlyingDeliveryScheduleSettlDayGrp?: IUnderlyingDeliveryScheduleSettlDayGrp[]// [1] Day.41771, TotHrs.41772
}
