import { IStreamCommoditySettlTimeGrp } from './stream_commodity_settl_time_grp'

export interface IStreamCommoditySettlDayGrpNoStreamCommoditySettlDays {
  StreamCommoditySettlDay?: number// [1] 41284 (Int)
  StreamCommoditySettlTotalHours?: number// [2] 41285 (Int)
  StreamCommoditySettlTimeGrp?: IStreamCommoditySettlTimeGrp// [3] NoStreamCommoditySettlTimes.41286, StreamCommoditySettlStart.41287 .. StreamCommoditySettlTimeType.41588
}
