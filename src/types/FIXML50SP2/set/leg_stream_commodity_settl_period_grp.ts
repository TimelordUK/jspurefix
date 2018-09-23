import { ILegStreamCommoditySettlDayGrp } from './leg_stream_commodity_settl_day_grp'

export interface ILegStreamCommoditySettlPeriodGrp {
  UnderlyingStreamCommoditySettlCountry?: string// 42003
  UnderlyingStreamCommoditySettlTimeZone?: string// 42004
  UnderlyingStreamCommoditySettlFlowType?: number// 42005
  UnderlyingProtectionTermNotional?: number// 42069
  UnderlyingStreamNotionalUnitOfMeasure?: string// 42022
  UnderlyingReturnRateValuationFrequencyPeriod?: number// 43026
  UnderlyingReturnRateValuationFrequencyUnit?: string// 43027
  UnderlyingReturnRatePrice?: number// 43066
  UnderlyingStreamCommoditySettlPeriodPriceUnitOfMeasure?: string// 42011
  UnderlyingStreamCommoditySettlPeriodPriceCurrency?: string// 42012
  UnderlyingStreamCommoditySettlHolidaysProcessingInstruction?: number// 42013
  UnderlyingDividendPeriodXID?: string// 42881
  UnderlyingStreamCommoditySettlPeriodXIDRef?: string// 42015
  LegStreamCommoditySettlDayGrp?: ILegStreamCommoditySettlDayGrp[]
}
