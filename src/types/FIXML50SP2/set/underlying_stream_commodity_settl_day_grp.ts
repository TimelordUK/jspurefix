import { IUnderlyingStreamCommoditySettlTimeGrp } from './underlying_stream_commodity_settl_time_grp'

export interface IUnderlyingStreamCommoditySettlDayGrp {
  UnderlyingStreamCommoditySettlDay?: number// [1] 41997 (Int)
  UnderlyingStreamCommoditySettlTotalHours?: number// [1] 41998 (Int)
  UnderlyingStreamCommoditySettlTimeGrp?: IUnderlyingStreamCommoditySettlTimeGrp[]// [1] Start.42000, End.42001, Typ.41936
}
