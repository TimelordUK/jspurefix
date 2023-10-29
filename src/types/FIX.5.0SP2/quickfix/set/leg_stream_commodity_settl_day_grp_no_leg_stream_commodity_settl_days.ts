import { ILegStreamCommoditySettlTimeGrp } from './leg_stream_commodity_settl_time_grp'

export interface ILegStreamCommoditySettlDayGrpNoLegStreamCommoditySettlDays {
  LegStreamCommoditySettlDay?: number// [1] 41681 (Int)
  LegStreamCommoditySettlTotalHours?: number// [2] 41682 (Int)
  LegStreamCommoditySettlTimeGrp?: ILegStreamCommoditySettlTimeGrp// [3] NoLegStreamCommoditySettlTimes.41683, LegStreamCommoditySettlStart.41684 .. LegStreamCommoditySettlTimeType.41935
}
