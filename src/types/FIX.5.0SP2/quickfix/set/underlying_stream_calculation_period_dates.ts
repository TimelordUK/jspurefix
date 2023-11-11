import { IUnderlyingStreamCalculationPeriodBusinessCenterGrp } from './underlying_stream_calculation_period_business_center_grp'
import { IUnderlyingStreamCalculationPeriodDateGrp } from './underlying_stream_calculation_period_date_grp'
import { IUnderlyingStreamFirstPeriodStartDateBusinessCenterGrp } from './underlying_stream_first_period_start_date_business_center_grp'

export interface IUnderlyingStreamCalculationPeriodDates {
  UnderlyingStreamCalculationPeriodDatesXID?: string// [1] 41957 (String)
  UnderlyingStreamCalculationPeriodDatesXIDRef?: string// [2] 41958 (String)
  UnderlyingStreamCalculationPeriodBusinessDayConvention?: number// [3] 40556 (Int)
  UnderlyingStreamCalculationPeriodBusinessCenterGrp?: IUnderlyingStreamCalculationPeriodBusinessCenterGrp// [4] NoUnderlyingStreamCalculationPeriodBusinessCenters.40973, UnderlyingStreamCalculationPeriodBusinessCenter.40557
  UnderlyingStreamCalculationPeriodDateGrp?: IUnderlyingStreamCalculationPeriodDateGrp// [5] NoUnderlyingStreamCalculationPeriodDates.41954, UnderlyingStreamCalculationPeriodDate.41955, UnderlyingStreamCalculationPeriodDateType.41956
  UnderlyingStreamFirstPeriodStartDateUnadjusted?: Date// [6] 40558 (LocalDate)
  UnderlyingStreamFirstPeriodStartDateBusinessDayConvention?: number// [7] 40559 (Int)
  UnderlyingStreamFirstPeriodStartDateBusinessCenterGrp?: IUnderlyingStreamFirstPeriodStartDateBusinessCenterGrp// [8] NoUnderlyingStreamFirstPeriodStartDateBusinessCenters.40974, UnderlyingStreamFirstPeriodStartDateBusinessCenter.40560
  UnderlyingStreamFirstPeriodStartDateAdjusted?: Date// [9] 40561 (LocalDate)
  UnderlyingStreamFirstRegularPeriodStartDateUnadjusted?: Date// [10] 40562 (LocalDate)
  UnderlyingStreamFirstCompoundingPeriodEndDateUnadjusted?: Date// [11] 40563 (LocalDate)
  UnderlyingStreamLastRegularPeriodEndDateUnadjusted?: Date// [12] 40564 (LocalDate)
  UnderlyingStreamCalculationFrequencyPeriod?: number// [13] 40565 (Int)
  UnderlyingStreamCalculationFrequencyUnit?: string// [14] 40566 (String)
  UnderlyingStreamCalculationRollConvention?: string// [15] 40567 (String)
  UnderlyingStreamCalculationBalanceOfFirstPeriod?: boolean// [16] 41959 (Boolean)
  UnderlyingStreamCalculationCorrectionPeriod?: number// [17] 41960 (Int)
  UnderlyingStreamCalculationCorrectionUnit?: string// [18] 41961 (String)
}
