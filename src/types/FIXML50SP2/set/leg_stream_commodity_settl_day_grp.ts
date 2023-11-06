import { ILegStreamCommoditySettlTimeGrp } from './leg_stream_commodity_settl_time_grp'

export interface ILegStreamCommoditySettlDayGrp {
  LegStreamCommoditySettlDay?: number// [1] 41681 (Int)
  LegStreamCommoditySettlTotalHours?: number// [1] 41682 (Int)
  LegStreamCommoditySettlTimeGrp?: ILegStreamCommoditySettlTimeGrp[]// [1] Start.41684, End.41685, Typ.41935
}
