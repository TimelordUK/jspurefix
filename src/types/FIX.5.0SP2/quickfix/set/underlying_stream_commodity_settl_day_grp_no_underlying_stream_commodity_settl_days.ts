import { IUnderlyingStreamCommoditySettlTimeGrp } from './underlying_stream_commodity_settl_time_grp'

export interface IUnderlyingStreamCommoditySettlDayGrpNoUnderlyingStreamCommoditySettlDays {
  UnderlyingStreamCommoditySettlDay?: number// [1] 41997 (Int)
  UnderlyingStreamCommoditySettlTotalHours?: number// [2] 41998 (Int)
  UnderlyingStreamCommoditySettlTimeGrp?: IUnderlyingStreamCommoditySettlTimeGrp// [3] NoUnderlyingStreamCommoditySettlTimes.41999, UnderlyingStreamCommoditySettlStart.42000 .. UnderlyingStreamCommoditySettlTimeType.41936
}
