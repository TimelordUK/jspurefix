import { ILegStreamCommoditySettlTimeGrp } from './leg_stream_commodity_settl_time_grp'

export interface ILegStreamCommoditySettlDayGrp {
  LegStreamCommoditySettlDay?: number// 41681
  LegStreamCommoditySettlTotalHours?: number// 41682
  LegStreamCommoditySettlTimeGrp?: ILegStreamCommoditySettlTimeGrp[]
}
