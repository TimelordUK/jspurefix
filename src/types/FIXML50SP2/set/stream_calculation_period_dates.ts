import { IStreamCalculationPeriodBusinessCenterGrp } from './stream_calculation_period_business_center_grp'
import { IStreamCalculationPeriodDateGrp } from './stream_calculation_period_date_grp'
import { IStreamFirstPeriodStartDateBusinessCenterGrp } from './stream_first_period_start_date_business_center_grp'

export interface IStreamCalculationPeriodDates {
  StreamCalculationPeriodDatesXID?: string// [1] 41244 (String)
  StreamCalculationPeriodDatesXIDRef?: string// [1] 41245 (String)
  StreamCalculationPeriodBusinessDayConvention?: number// [1] 40073 (Int)
  StreamFirstPeriodStartDateUnadjusted?: Date// [1] 40075 (LocalDate)
  StreamFirstPeriodStartDateBusinessDayConvention?: number// [1] 40076 (Int)
  StreamFirstPeriodStartDateAdjusted?: Date// [1] 40078 (LocalDate)
  StreamFirstRegularPeriodStartDateUnadjusted?: Date// [1] 40079 (LocalDate)
  StreamFirstCompoundingPeriodEndDateUnadjusted?: Date// [1] 40080 (LocalDate)
  StreamLastRegularPeriodEndDateUnadjusted?: Date// [1] 40081 (LocalDate)
  StreamCalculationFrequencyPeriod?: number// [1] 40082 (Int)
  StreamCalculationFrequencyUnit?: string// [1] 40083 (String)
  StreamCalculationRollConvention?: string// [1] 40084 (String)
  StreamCalculationBalanceOfFirstPeriod?: boolean// [1] 41246 (Boolean)
  StreamCalculationCorrectionPeriod?: number// [1] 41247 (Int)
  StreamCalculationCorrectionUnit?: string// [1] 41248 (String)
  StreamCalculationPeriodBusinessCenterGrp?: IStreamCalculationPeriodBusinessCenterGrp[]// [1] Ctr.40074
  StreamCalculationPeriodDateGrp?: IStreamCalculationPeriodDateGrp[]// [2] Dt.41242, Typ.41243
  StreamFirstPeriodStartDateBusinessCenterGrp?: IStreamFirstPeriodStartDateBusinessCenterGrp[]// [3] Ctr.40077
}
