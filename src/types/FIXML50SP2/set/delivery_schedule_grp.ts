import { IDeliveryScheduleSettlDayGrp } from './delivery_schedule_settl_day_grp'

export interface IDeliveryScheduleGrp {
  UnderlyingReturnRateValuationDateType?: number// 43073
  UnderlyingDividendPeriodXID?: string// 42881
  UnderlyingProtectionTermNotional?: number// 42069
  UnderlyingStreamNotionalUnitOfMeasure?: string// 42022
  UnderlyingStreamNotionalCommodityFrequency?: number// 42021
  UnderlyingDeliveryStreamNegativeTolerance?: string// 41790
  UnderlyingDeliveryStreamPositiveTolerance?: string// 41791
  UnderlyingDeliveryStreamToleranceUnitOfMeasure?: string// 41792
  UnderlyingDeliveryStreamToleranceType?: number// 41793
  UnderlyingStreamCommoditySettlCountry?: string// 42003
  UnderlyingStreamCommoditySettlTimeZone?: string// 42004
  UnderlyingStreamCommoditySettlFlowType?: number// 42005
  UnderlyingStreamCommoditySettlHolidaysProcessingInstruction?: number// 42013
  DeliveryScheduleSettlDayGrp?: IDeliveryScheduleSettlDayGrp[]
}
