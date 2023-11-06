import { IStreamCommoditySettlTimeGrp } from './stream_commodity_settl_time_grp'

export interface IStreamCommoditySettlDayGrp {
  StreamCommoditySettlDay?: number// [1] 41284 (Int)
  StreamCommoditySettlTotalHours?: number// [1] 41285 (Int)
  StreamCommoditySettlTimeGrp?: IStreamCommoditySettlTimeGrp[]// [1] Start.41287, End.41288, Typ.41588
}
