import { IUnderlyingDeliveryScheduleSettlDayGrp } from './underlying_delivery_schedule_settl_day_grp'

export interface IUnderlyingDeliveryScheduleGrp {
  UnderlyingDeliveryScheduleType?: number// 41757
  UnderlyingDeliveryScheduleXID?: string// 41758
  UnderlyingDeliveryScheduleNotional?: number// 41759
  UnderlyingDeliveryScheduleNotionalUnitOfMeasure?: string// 41760
  UnderlyingDeliveryScheduleNotionalCommodityFrequency?: number// 41761
  UnderlyingDeliveryScheduleNegativeTolerance?: number// 41762
  UnderlyingDeliverySchedulePositiveTolerance?: number// 41763
  UnderlyingDeliveryScheduleToleranceUnitOfMeasure?: string// 41764
  UnderlyingDeliveryScheduleToleranceType?: number// 41765
  UnderlyingDeliveryScheduleSettlCountry?: string// 41766
  UnderlyingDeliveryScheduleSettlTimeZone?: string// 41767
  UnderlyingDeliveryScheduleSettlFlowType?: number// 41768
  UnderlyingDeliveryScheduleSettlHolidaysProcessingInstruction?: number// 41769
  UnderlyingDeliveryScheduleSettlDayGrp?: IUnderlyingDeliveryScheduleSettlDayGrp[]
}
