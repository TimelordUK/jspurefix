import { IStreamCommoditySettlTimeGrp } from './stream_commodity_settl_time_grp'

export interface IStreamCommoditySettlDayGrp {
  UnderlyingStreamCommoditySettlDay?: number// 41997
  UnderlyingStreamCommoditySettlTotalHours?: number// 41998
  StreamCommoditySettlTimeGrp?: IStreamCommoditySettlTimeGrp[]
}
