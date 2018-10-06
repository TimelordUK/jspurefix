import { IStreamCommoditySettlDayGrp } from './stream_commodity_settl_day_grp'

export interface IStreamCommoditySettlPeriodGrp {
  StreamCommoditySettlCountry?: string// 41290
  StreamCommoditySettlTimeZone?: string// 41291
  StreamCommoditySettlFlowType?: number// 41292
  StreamCommoditySettlPeriodNotional?: number// 41293
  StreamCommoditySettlPeriodNotionalUnitOfMeasure?: string// 41294
  StreamCommoditySettlPeriodFrequencyPeriod?: number// 41295
  StreamCommoditySettlPeriodFrequencyUnit?: string// 41296
  StreamCommoditySettlPeriodPrice?: number// 41297
  StreamCommoditySettlPeriodPriceUnitOfMeasure?: string// 41298
  StreamCommoditySettlPeriodPriceCurrency?: string// 41299
  StreamCommoditySettlHolidaysProcessingInstruction?: number// 41300
  StreamCommoditySettlPeriodXID?: string// 41301
  StreamCommoditySettlPeriodXIDRef?: string// 41302
  StreamCommoditySettlDayGrp?: IStreamCommoditySettlDayGrp[]
}
