import { ILegReturnRateValuationDateGrp } from './leg_return_rate_valuation_date_grp'
import { ILegReturnRateValuationDateBusinessCenterGrp } from './leg_return_rate_valuation_date_business_center_grp'

export interface ILegReturnRateDateGrp {
  LegReturnRateDateMode?: number// 42509
  LegReturnRateValuationDateRelativeTo?: number// 42510
  LegReturnRateValuationDateOffsetPeriod?: number// 42511
  LegReturnRateValuationDateOffsetUnit?: string// 42512
  LegReturnRateValuationDateOffsetDayType?: number// 42513
  LegReturnRateValuationStartDateUnadjusted?: Date// 42514
  LegReturnRateValuationStartDateRelativeTo?: number// 42515
  LegReturnRateValuationStartDateOffsetPeriod?: number// 42516
  LegReturnRateValuationStartDateOffsetUnit?: string// 42517
  LegReturnRateValuationStartDateOffsetDayType?: number// 42518
  LegReturnRateValuationStartDateAdjusted?: Date// 42519
  LegReturnRateValuationEndDateUnadjusted?: Date// 42520
  LegReturnRateValuationEndDateRelativeTo?: number// 42521
  LegReturnRateValuationEndDateOffsetPeriod?: number// 42522
  LegReturnRateValuationEndDateOffsetUnit?: string// 42523
  LegReturnRateValuationEndDateOffsetDayType?: number// 42524
  LegReturnRateValuationEndDateAdjusted?: Date// 42525
  LegReturnRateValuationFrequencyPeriod?: number// 42526
  LegReturnRateValuationFrequencyUnit?: string// 42527
  LegReturnRateValuationFrequencyRollConvention?: string// 42528
  LegReturnRateValuationDateBusinessDayConvention?: number// 42529
  LegReturnRateValuationDateGrp?: ILegReturnRateValuationDateGrp[]
  LegReturnRateValuationDateBusinessCenterGrp?: ILegReturnRateValuationDateBusinessCenterGrp[]
}
