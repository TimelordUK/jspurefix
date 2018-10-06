import { ILegStreamCommoditySettlDayGrp } from './leg_stream_commodity_settl_day_grp'

export interface ILegStreamCommoditySettlPeriodGrp {
  LegStreamCommoditySettlCountry?: string// 41687
  LegStreamCommoditySettlTimeZone?: string// 41688
  LegStreamCommoditySettlFlowType?: number// 41689
  LegStreamCommoditySettlPeriodNotional?: number// 41690
  LegStreamCommoditySettlPeriodNotionalUnitOfMeasure?: string// 41691
  LegStreamCommoditySettlPeriodFrequencyPeriod?: number// 41692
  LegStreamCommoditySettlPeriodFrequencyUnit?: string// 41693
  LegStreamCommoditySettlPeriodPrice?: number// 41694
  LegStreamCommoditySettlPeriodPriceUnitOfMeasure?: string// 41695
  LegStreamCommoditySettlPeriodPriceCurrency?: string// 41696
  LegStreamCommoditySettlHolidaysProcessingInstruction?: number// 41697
  LegStreamCommoditySettlPeriodXID?: string// 41698
  LegStreamCommoditySettlPeriodXIDRef?: string// 41699
  LegStreamCommoditySettlDayGrp?: ILegStreamCommoditySettlDayGrp[]
}
