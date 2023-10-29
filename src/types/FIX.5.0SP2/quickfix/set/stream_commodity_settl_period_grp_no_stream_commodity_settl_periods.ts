import { IStreamCommoditySettlDayGrp } from './stream_commodity_settl_day_grp'

export interface IStreamCommoditySettlPeriodGrpNoStreamCommoditySettlPeriods {
  StreamCommoditySettlCountry?: string// [1] 41290 (String)
  StreamCommoditySettlTimeZone?: string// [2] 41291 (String)
  StreamCommoditySettlFlowType?: number// [3] 41292 (Int)
  StreamCommoditySettlPeriodNotional?: number// [4] 41293 (Float)
  StreamCommoditySettlPeriodNotionalUnitOfMeasure?: string// [5] 41294 (String)
  StreamCommoditySettlPeriodFrequencyPeriod?: number// [6] 41295 (Int)
  StreamCommoditySettlPeriodFrequencyUnit?: string// [7] 41296 (String)
  StreamCommoditySettlPeriodPrice?: number// [8] 41297 (Float)
  StreamCommoditySettlPeriodPriceUnitOfMeasure?: string// [9] 41298 (String)
  StreamCommoditySettlPeriodPriceCurrency?: string// [10] 41299 (String)
  StreamCommoditySettlHolidaysProcessingInstruction?: number// [11] 41300 (Int)
  StreamCommoditySettlDayGrp?: IStreamCommoditySettlDayGrp// [12] NoStreamCommoditySettlDays.41283, StreamCommoditySettlDay.41284 .. StreamCommoditySettlTimeType.41588
  StreamCommoditySettlPeriodXID?: string// [13] 41301 (String)
  StreamCommoditySettlPeriodXIDRef?: string// [14] 41302 (String)
}
