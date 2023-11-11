import { ILegReturnRateValuationDateGrp } from './leg_return_rate_valuation_date_grp'
import { ILegReturnRateValuationDateBusinessCenterGrp } from './leg_return_rate_valuation_date_business_center_grp'

export interface ILegReturnRateDateGrp {
  LegReturnRateDateMode?: number// [1] 42509 (Int)
  LegReturnRateValuationDateRelativeTo?: number// [1] 42510 (Int)
  LegReturnRateValuationDateOffsetPeriod?: number// [1] 42511 (Int)
  LegReturnRateValuationDateOffsetUnit?: string// [1] 42512 (String)
  LegReturnRateValuationDateOffsetDayType?: number// [1] 42513 (Int)
  LegReturnRateValuationStartDateUnadjusted?: Date// [1] 42514 (LocalDate)
  LegReturnRateValuationStartDateRelativeTo?: number// [1] 42515 (Int)
  LegReturnRateValuationStartDateOffsetPeriod?: number// [1] 42516 (Int)
  LegReturnRateValuationStartDateOffsetUnit?: string// [1] 42517 (String)
  LegReturnRateValuationStartDateOffsetDayType?: number// [1] 42518 (Int)
  LegReturnRateValuationStartDateAdjusted?: Date// [1] 42519 (LocalDate)
  LegReturnRateValuationEndDateUnadjusted?: Date// [1] 42520 (LocalDate)
  LegReturnRateValuationEndDateRelativeTo?: number// [1] 42521 (Int)
  LegReturnRateValuationEndDateOffsetPeriod?: number// [1] 42522 (Int)
  LegReturnRateValuationEndDateOffsetUnit?: string// [1] 42523 (String)
  LegReturnRateValuationEndDateOffsetDayType?: number// [1] 42524 (Int)
  LegReturnRateValuationEndDateAdjusted?: Date// [1] 42525 (LocalDate)
  LegReturnRateValuationFrequencyPeriod?: number// [1] 42526 (Int)
  LegReturnRateValuationFrequencyUnit?: string// [1] 42527 (String)
  LegReturnRateValuationFrequencyRollConvention?: string// [1] 42528 (String)
  LegReturnRateValuationDateBusinessDayConvention?: number// [1] 42529 (Int)
  LegReturnRateValuationDateGrp?: ILegReturnRateValuationDateGrp[]// [1] Dt.42572, Typ.42573
  LegReturnRateValuationDateBusinessCenterGrp?: ILegReturnRateValuationDateBusinessCenterGrp[]// [2] Ctr.42570
}
