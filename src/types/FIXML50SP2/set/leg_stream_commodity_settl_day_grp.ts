import { ILegStreamCommoditySettlTimeGrp } from './leg_stream_commodity_settl_time_grp'

export interface ILegStreamCommoditySettlDayGrp {
  UnderlyingStreamCommoditySettlDay?: number// 41997
  UnderlyingStreamCommoditySettlTotalHours?: number// 41998
  LegStreamCommoditySettlTimeGrp?: ILegStreamCommoditySettlTimeGrp[]
}
