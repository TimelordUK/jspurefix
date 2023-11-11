import { ILegStreamCalculationPeriodBusinessCenterGrp } from './leg_stream_calculation_period_business_center_grp'
import { ILegStreamCalculationPeriodDateGrp } from './leg_stream_calculation_period_date_grp'
import { ILegStreamFirstPeriodStartDateBusinessCenterGrp } from './leg_stream_first_period_start_date_business_center_grp'

export interface ILegStreamCalculationPeriodDates {
  LegStreamCalculationPeriodDatesXID?: string// [1] 41641 (String)
  LegStreamCalculationPeriodDatesXIDRef?: string// [2] 41642 (String)
  LegStreamCalculationPeriodBusinessDayConvention?: number// [3] 40265 (Int)
  LegStreamCalculationPeriodBusinessCenterGrp?: ILegStreamCalculationPeriodBusinessCenterGrp// [4] NoLegStreamCalculationPeriodBusinessCenters.40940, LegStreamCalculationPeriodBusinessCenter.40266
  LegStreamCalculationPeriodDateGrp?: ILegStreamCalculationPeriodDateGrp// [5] NoLegStreamCalculationPeriodDates.41638, LegStreamCalculationPeriodDate.41639, LegStreamCalculationPeriodDateType.41640
  LegStreamFirstPeriodStartDateUnadjusted?: Date// [6] 40267 (LocalDate)
  LegStreamFirstPeriodStartDateBusinessDayConvention?: number// [7] 40268 (Int)
  LegStreamFirstPeriodStartDateBusinessCenterGrp?: ILegStreamFirstPeriodStartDateBusinessCenterGrp// [8] NoLegStreamFirstPeriodStartDateBusinessCenters.40941, LegStreamFirstPeriodStartDateBusinessCenter.40269
  LegStreamFirstPeriodStartDateAdjusted?: Date// [9] 40270 (LocalDate)
  LegStreamFirstRegularPeriodStartDateUnadjusted?: Date// [10] 40271 (LocalDate)
  LegStreamFirstCompoundingPeriodEndDateUnadjusted?: Date// [11] 40272 (LocalDate)
  LegStreamLastRegularPeriodEndDateUnadjusted?: Date// [12] 40273 (LocalDate)
  LegStreamCalculationFrequencyPeriod?: number// [13] 40274 (Int)
  LegStreamCalculationFrequencyUnit?: string// [14] 40275 (String)
  LegStreamCalculationRollConvention?: string// [15] 40276 (String)
  LegStreamCalculationBalanceOfFirstPeriod?: boolean// [16] 41643 (Boolean)
  LegStreamCalculationCorrectionPeriod?: number// [17] 41644 (Int)
  LegStreamCalculationCorrectionUnit?: string// [18] 41645 (String)
}
