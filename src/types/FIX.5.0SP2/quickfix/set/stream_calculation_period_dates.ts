import { IStreamCalculationPeriodBusinessCenterGrp } from './stream_calculation_period_business_center_grp'
import { IStreamCalculationPeriodDateGrp } from './stream_calculation_period_date_grp'
import { IStreamFirstPeriodStartDateBusinessCenterGrp } from './stream_first_period_start_date_business_center_grp'

export interface IStreamCalculationPeriodDates {
  StreamCalculationPeriodDatesXID?: string// [1] 41244 (String)
  StreamCalculationPeriodDatesXIDRef?: string// [2] 41245 (String)
  StreamCalculationPeriodBusinessDayConvention?: number// [3] 40073 (Int)
  StreamCalculationPeriodBusinessCenterGrp?: IStreamCalculationPeriodBusinessCenterGrp// [4] NoStreamCalculationPeriodBusinessCenters.40958, StreamCalculationPeriodBusinessCenter.40074
  StreamCalculationPeriodDateGrp?: IStreamCalculationPeriodDateGrp// [5] NoStreamCalculationPeriodDates.41241, StreamCalculationPeriodDate.41242, StreamCalculationPeriodDateType.41243
  StreamFirstPeriodStartDateUnadjusted?: Date// [6] 40075 (LocalDate)
  StreamFirstPeriodStartDateBusinessDayConvention?: number// [7] 40076 (Int)
  StreamFirstPeriodStartDateBusinessCenterGrp?: IStreamFirstPeriodStartDateBusinessCenterGrp// [8] NoStreamFirstPeriodStartDateBusinessCenters.40959, StreamFirstPeriodStartDateBusinessCenter.40077
  StreamFirstPeriodStartDateAdjusted?: Date// [9] 40078 (LocalDate)
  StreamFirstRegularPeriodStartDateUnadjusted?: Date// [10] 40079 (LocalDate)
  StreamFirstCompoundingPeriodEndDateUnadjusted?: Date// [11] 40080 (LocalDate)
  StreamLastRegularPeriodEndDateUnadjusted?: Date// [12] 40081 (LocalDate)
  StreamCalculationFrequencyPeriod?: number// [13] 40082 (Int)
  StreamCalculationFrequencyUnit?: string// [14] 40083 (String)
  StreamCalculationRollConvention?: string// [15] 40084 (String)
  StreamCalculationBalanceOfFirstPeriod?: boolean// [16] 41246 (Boolean)
  StreamCalculationCorrectionPeriod?: number// [17] 41247 (Int)
  StreamCalculationCorrectionUnit?: string// [18] 41248 (String)
}
