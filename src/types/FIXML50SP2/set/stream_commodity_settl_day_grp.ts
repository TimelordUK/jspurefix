import { IStreamCommoditySettlTimeGrp } from './stream_commodity_settl_time_grp'

export interface IStreamCommoditySettlDayGrp {
  StreamCommoditySettlDay?: number// 41284
  StreamCommoditySettlTotalHours?: number// 41285
  StreamCommoditySettlTimeGrp?: IStreamCommoditySettlTimeGrp[]
}
