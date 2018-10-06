import { IUnderlyingStreamCommoditySettlDayGrp } from './underlying_stream_commodity_settl_day_grp'

export interface IUnderlyingStreamCommoditySettlPeriodGrp {
  UnderlyingStreamCommoditySettlCountry?: string// 42003
  UnderlyingStreamCommoditySettlTimeZone?: string// 42004
  UnderlyingStreamCommoditySettlFlowType?: number// 42005
  UnderlyingStreamCommoditySettlPeriodNotional?: number// 42006
  UnderlyingStreamCommoditySettlPeriodNotionalUnitOfMeasure?: string// 42007
  UnderlyingStreamCommoditySettlPeriodFrequencyPeriod?: number// 42008
  UnderlyingStreamCommoditySettlPeriodFrequencyUnit?: string// 42009
  UnderlyingStreamCommoditySettlPeriodPrice?: number// 42010
  UnderlyingStreamCommoditySettlPeriodPriceUnitOfMeasure?: string// 42011
  UnderlyingStreamCommoditySettlPeriodPriceCurrency?: string// 42012
  UnderlyingStreamCommoditySettlHolidaysProcessingInstruction?: number// 42013
  UnderlyingStreamCommoditySettlPeriodXID?: string// 42014
  UnderlyingStreamCommoditySettlPeriodXIDRef?: string// 42015
  UnderlyingStreamCommoditySettlDayGrp?: IUnderlyingStreamCommoditySettlDayGrp[]
}
