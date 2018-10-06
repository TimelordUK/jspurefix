import { IStreamCalculationPeriodBusinessCenterGrp } from './stream_calculation_period_business_center_grp'
import { IStreamCalculationPeriodDateGrp } from './stream_calculation_period_date_grp'
import { IStreamFirstPeriodStartDateBusinessCenterGrp } from './stream_first_period_start_date_business_center_grp'

export interface IStreamCalculationPeriodDates {
  StreamCalculationPeriodDatesXID?: string// 41244
  StreamCalculationPeriodDatesXIDRef?: string// 41245
  StreamCalculationPeriodBusinessDayConvention?: number// 40073
  StreamFirstPeriodStartDateUnadjusted?: Date// 40075
  StreamFirstPeriodStartDateBusinessDayConvention?: number// 40076
  StreamFirstPeriodStartDateAdjusted?: Date// 40078
  StreamFirstRegularPeriodStartDateUnadjusted?: Date// 40079
  StreamFirstCompoundingPeriodEndDateUnadjusted?: Date// 40080
  StreamLastRegularPeriodEndDateUnadjusted?: Date// 40081
  StreamCalculationFrequencyPeriod?: number// 40082
  StreamCalculationFrequencyUnit?: string// 40083
  StreamCalculationRollConvention?: string// 40084
  StreamCalculationBalanceOfFirstPeriod?: boolean// 41246
  StreamCalculationCorrectionPeriod?: number// 41247
  StreamCalculationCorrectionUnit?: string// 41248
  StreamCalculationPeriodBusinessCenterGrp?: IStreamCalculationPeriodBusinessCenterGrp[]
  StreamCalculationPeriodDateGrp?: IStreamCalculationPeriodDateGrp[]
  StreamFirstPeriodStartDateBusinessCenterGrp?: IStreamFirstPeriodStartDateBusinessCenterGrp[]
}
