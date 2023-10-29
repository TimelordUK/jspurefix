import { ILegStreamCommoditySettlDayGrp } from './leg_stream_commodity_settl_day_grp'

export interface ILegStreamCommoditySettlPeriodGrpNoLegStreamCommoditySettlPeriods {
  LegStreamCommoditySettlCountry?: string// [1] 41687 (String)
  LegStreamCommoditySettlTimeZone?: string// [2] 41688 (String)
  LegStreamCommoditySettlFlowType?: number// [3] 41689 (Int)
  LegStreamCommoditySettlPeriodNotional?: number// [4] 41690 (Float)
  LegStreamCommoditySettlPeriodNotionalUnitOfMeasure?: string// [5] 41691 (String)
  LegStreamCommoditySettlPeriodFrequencyPeriod?: number// [6] 41692 (Int)
  LegStreamCommoditySettlPeriodFrequencyUnit?: string// [7] 41693 (String)
  LegStreamCommoditySettlPeriodPrice?: number// [8] 41694 (Float)
  LegStreamCommoditySettlPeriodPriceUnitOfMeasure?: string// [9] 41695 (String)
  LegStreamCommoditySettlPeriodPriceCurrency?: string// [10] 41696 (String)
  LegStreamCommoditySettlHolidaysProcessingInstruction?: number// [11] 41697 (Int)
  LegStreamCommoditySettlDayGrp?: ILegStreamCommoditySettlDayGrp// [12] NoLegStreamCommoditySettlDays.41680, LegStreamCommoditySettlDay.41681 .. LegStreamCommoditySettlTimeType.41935
  LegStreamCommoditySettlPeriodXID?: string// [13] 41698 (String)
  LegStreamCommoditySettlPeriodXIDRef?: string// [14] 41699 (String)
}
