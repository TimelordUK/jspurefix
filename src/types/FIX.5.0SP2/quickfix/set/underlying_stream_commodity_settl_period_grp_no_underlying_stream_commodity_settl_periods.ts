import { IUnderlyingStreamCommoditySettlDayGrp } from './underlying_stream_commodity_settl_day_grp'

export interface IUnderlyingStreamCommoditySettlPeriodGrpNoUnderlyingStreamCommoditySettlPeriods {
  UnderlyingStreamCommoditySettlCountry?: string// [1] 42003 (String)
  UnderlyingStreamCommoditySettlTimeZone?: string// [2] 42004 (String)
  UnderlyingStreamCommoditySettlFlowType?: number// [3] 42005 (Int)
  UnderlyingStreamCommoditySettlPeriodNotional?: number// [4] 42006 (Float)
  UnderlyingStreamCommoditySettlPeriodNotionalUnitOfMeasure?: string// [5] 42007 (String)
  UnderlyingStreamCommoditySettlPeriodFrequencyPeriod?: number// [6] 42008 (Int)
  UnderlyingStreamCommoditySettlPeriodFrequencyUnit?: string// [7] 42009 (String)
  UnderlyingStreamCommoditySettlPeriodPrice?: number// [8] 42010 (Float)
  UnderlyingStreamCommoditySettlPeriodPriceUnitOfMeasure?: string// [9] 42011 (String)
  UnderlyingStreamCommoditySettlPeriodPriceCurrency?: string// [10] 42012 (String)
  UnderlyingStreamCommoditySettlHolidaysProcessingInstruction?: number// [11] 42013 (Int)
  UnderlyingStreamCommoditySettlDayGrp?: IUnderlyingStreamCommoditySettlDayGrp// [12] NoUnderlyingStreamCommoditySettlDays.41996, UnderlyingStreamCommoditySettlDay.41997 .. UnderlyingStreamCommoditySettlTimeType.41936
  UnderlyingStreamCommoditySettlPeriodXID?: string// [13] 42014 (String)
  UnderlyingStreamCommoditySettlPeriodXIDRef?: string// [14] 42015 (String)
}
