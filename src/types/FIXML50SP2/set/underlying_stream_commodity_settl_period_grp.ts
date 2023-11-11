import { IUnderlyingStreamCommoditySettlDayGrp } from './underlying_stream_commodity_settl_day_grp'

export interface IUnderlyingStreamCommoditySettlPeriodGrp {
  UnderlyingStreamCommoditySettlCountry?: string// [1] 42003 (String)
  UnderlyingStreamCommoditySettlTimeZone?: string// [1] 42004 (String)
  UnderlyingStreamCommoditySettlFlowType?: number// [1] 42005 (Int)
  UnderlyingStreamCommoditySettlPeriodNotional?: number// [1] 42006 (Float)
  UnderlyingStreamCommoditySettlPeriodNotionalUnitOfMeasure?: string// [1] 42007 (String)
  UnderlyingStreamCommoditySettlPeriodFrequencyPeriod?: number// [1] 42008 (Int)
  UnderlyingStreamCommoditySettlPeriodFrequencyUnit?: string// [1] 42009 (String)
  UnderlyingStreamCommoditySettlPeriodPrice?: number// [1] 42010 (Float)
  UnderlyingStreamCommoditySettlPeriodPriceUnitOfMeasure?: string// [1] 42011 (String)
  UnderlyingStreamCommoditySettlPeriodPriceCurrency?: string// [1] 42012 (String)
  UnderlyingStreamCommoditySettlHolidaysProcessingInstruction?: number// [1] 42013 (Int)
  UnderlyingStreamCommoditySettlPeriodXID?: string// [1] 42014 (String)
  UnderlyingStreamCommoditySettlPeriodXIDRef?: string// [1] 42015 (String)
  UnderlyingStreamCommoditySettlDayGrp?: IUnderlyingStreamCommoditySettlDayGrp[]// [1] Day.41997, TotHrs.41998
}
