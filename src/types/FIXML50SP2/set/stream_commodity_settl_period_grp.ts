import { IStreamCommoditySettlDayGrp } from './stream_commodity_settl_day_grp'

export interface IStreamCommoditySettlPeriodGrp {
  StreamCommoditySettlCountry?: string// [1] 41290 (String)
  StreamCommoditySettlTimeZone?: string// [1] 41291 (String)
  StreamCommoditySettlFlowType?: number// [1] 41292 (Int)
  StreamCommoditySettlPeriodNotional?: number// [1] 41293 (Float)
  StreamCommoditySettlPeriodNotionalUnitOfMeasure?: string// [1] 41294 (String)
  StreamCommoditySettlPeriodFrequencyPeriod?: number// [1] 41295 (Int)
  StreamCommoditySettlPeriodFrequencyUnit?: string// [1] 41296 (String)
  StreamCommoditySettlPeriodPrice?: number// [1] 41297 (Float)
  StreamCommoditySettlPeriodPriceUnitOfMeasure?: string// [1] 41298 (String)
  StreamCommoditySettlPeriodPriceCurrency?: string// [1] 41299 (String)
  StreamCommoditySettlHolidaysProcessingInstruction?: number// [1] 41300 (Int)
  StreamCommoditySettlPeriodXID?: string// [1] 41301 (String)
  StreamCommoditySettlPeriodXIDRef?: string// [1] 41302 (String)
  StreamCommoditySettlDayGrp?: IStreamCommoditySettlDayGrp[]// [1] Day.41284, TotHrs.41285
}
