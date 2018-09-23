import { IUnderlyingStreamCommoditySettlTimeGrp } from './underlying_stream_commodity_settl_time_grp'

export interface IUnderlyingStreamCommoditySettlDayGrp {
  UnderlyingStreamCommoditySettlDay?: number// 41997
  UnderlyingStreamCommoditySettlTotalHours?: number// 41998
  UnderlyingStreamCommoditySettlTimeGrp?: IUnderlyingStreamCommoditySettlTimeGrp[]
}
