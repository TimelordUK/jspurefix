import { ILegStreamCalculationPeriodBusinessCenterGrp } from './leg_stream_calculation_period_business_center_grp'
import { ILegStreamCalculationPeriodDateGrp } from './leg_stream_calculation_period_date_grp'
import { ILegStreamFirstPeriodStartDateBusinessCenterGrp } from './leg_stream_first_period_start_date_business_center_grp'

export interface ILegStreamCalculationPeriodDates {
  LegStreamCalculationPeriodDatesXID?: string// [1] 41641 (String)
  LegStreamCalculationPeriodDatesXIDRef?: string// [1] 41642 (String)
  LegStreamCalculationPeriodBusinessDayConvention?: number// [1] 40265 (Int)
  LegStreamFirstPeriodStartDateUnadjusted?: Date// [1] 40267 (LocalDate)
  LegStreamFirstPeriodStartDateBusinessDayConvention?: number// [1] 40268 (Int)
  LegStreamFirstPeriodStartDateAdjusted?: Date// [1] 40270 (LocalDate)
  LegStreamFirstRegularPeriodStartDateUnadjusted?: Date// [1] 40271 (LocalDate)
  LegStreamFirstCompoundingPeriodEndDateUnadjusted?: Date// [1] 40272 (LocalDate)
  LegStreamLastRegularPeriodEndDateUnadjusted?: Date// [1] 40273 (LocalDate)
  LegStreamCalculationFrequencyPeriod?: number// [1] 40274 (Int)
  LegStreamCalculationFrequencyUnit?: string// [1] 40275 (String)
  LegStreamCalculationRollConvention?: string// [1] 40276 (String)
  LegStreamCalculationBalanceOfFirstPeriod?: boolean// [1] 41643 (Boolean)
  LegStreamCalculationCorrectionPeriod?: number// [1] 41644 (Int)
  LegStreamCalculationCorrectionUnit?: string// [1] 41645 (String)
  LegStreamCalculationPeriodBusinessCenterGrp?: ILegStreamCalculationPeriodBusinessCenterGrp[]// [1] Ctr.40266
  LegStreamCalculationPeriodDateGrp?: ILegStreamCalculationPeriodDateGrp[]// [2] Dt.41639, Typ.41640
  LegStreamFirstPeriodStartDateBusinessCenterGrp?: ILegStreamFirstPeriodStartDateBusinessCenterGrp[]// [3] Ctr.40269
}
