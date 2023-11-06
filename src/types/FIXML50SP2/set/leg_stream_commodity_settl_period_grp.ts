import { ILegStreamCommoditySettlDayGrp } from './leg_stream_commodity_settl_day_grp'

export interface ILegStreamCommoditySettlPeriodGrp {
  LegStreamCommoditySettlCountry?: string// [1] 41687 (String)
  LegStreamCommoditySettlTimeZone?: string// [1] 41688 (String)
  LegStreamCommoditySettlFlowType?: number// [1] 41689 (Int)
  LegStreamCommoditySettlPeriodNotional?: number// [1] 41690 (Float)
  LegStreamCommoditySettlPeriodNotionalUnitOfMeasure?: string// [1] 41691 (String)
  LegStreamCommoditySettlPeriodFrequencyPeriod?: number// [1] 41692 (Int)
  LegStreamCommoditySettlPeriodFrequencyUnit?: string// [1] 41693 (String)
  LegStreamCommoditySettlPeriodPrice?: number// [1] 41694 (Float)
  LegStreamCommoditySettlPeriodPriceUnitOfMeasure?: string// [1] 41695 (String)
  LegStreamCommoditySettlPeriodPriceCurrency?: string// [1] 41696 (String)
  LegStreamCommoditySettlHolidaysProcessingInstruction?: number// [1] 41697 (Int)
  LegStreamCommoditySettlPeriodXID?: string// [1] 41698 (String)
  LegStreamCommoditySettlPeriodXIDRef?: string// [1] 41699 (String)
  LegStreamCommoditySettlDayGrp?: ILegStreamCommoditySettlDayGrp[]// [1] Day.41681, TotHrs.41682
}
