import { ILegReturnRateValuationDateGrp } from './leg_return_rate_valuation_date_grp'
import { ILegReturnRateValuationDateBusinessCenterGrp } from './leg_return_rate_valuation_date_business_center_grp'

export interface ILegReturnRateDateGrpNoLegReturnRateDates {
  LegReturnRateDateMode?: number// [1] 42509 (Int)
  LegReturnRateValuationDateGrp?: ILegReturnRateValuationDateGrp// [2] NoLegReturnRateValuationDates.42571, LegReturnRateValuationDate.42572, LegReturnRateValuationDateType.42573
  LegReturnRateValuationDateRelativeTo?: number// [3] 42510 (Int)
  LegReturnRateValuationDateOffsetPeriod?: number// [4] 42511 (Int)
  LegReturnRateValuationDateOffsetUnit?: string// [5] 42512 (String)
  LegReturnRateValuationDateOffsetDayType?: number// [6] 42513 (Int)
  LegReturnRateValuationStartDateUnadjusted?: Date// [7] 42514 (LocalDate)
  LegReturnRateValuationStartDateRelativeTo?: number// [8] 42515 (Int)
  LegReturnRateValuationStartDateOffsetPeriod?: number// [9] 42516 (Int)
  LegReturnRateValuationStartDateOffsetUnit?: string// [10] 42517 (String)
  LegReturnRateValuationStartDateOffsetDayType?: number// [11] 42518 (Int)
  LegReturnRateValuationStartDateAdjusted?: Date// [12] 42519 (LocalDate)
  LegReturnRateValuationEndDateUnadjusted?: Date// [13] 42520 (LocalDate)
  LegReturnRateValuationEndDateRelativeTo?: number// [14] 42521 (Int)
  LegReturnRateValuationEndDateOffsetPeriod?: number// [15] 42522 (Int)
  LegReturnRateValuationEndDateOffsetUnit?: string// [16] 42523 (String)
  LegReturnRateValuationEndDateOffsetDayType?: number// [17] 42524 (Int)
  LegReturnRateValuationEndDateAdjusted?: Date// [18] 42525 (LocalDate)
  LegReturnRateValuationFrequencyPeriod?: number// [19] 42526 (Int)
  LegReturnRateValuationFrequencyUnit?: string// [20] 42527 (String)
  LegReturnRateValuationFrequencyRollConvention?: string// [21] 42528 (String)
  LegReturnRateValuationDateBusinessDayConvention?: number// [22] 42529 (Int)
  LegReturnRateValuationDateBusinessCenterGrp?: ILegReturnRateValuationDateBusinessCenterGrp// [23] NoLegReturnRateValuationDateBusinessCenters.42569, LegReturnRateValuationDateBusinessCenter.42570
}
