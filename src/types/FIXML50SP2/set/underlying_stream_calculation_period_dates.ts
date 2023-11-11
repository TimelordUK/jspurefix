import { IUnderlyingStreamCalculationPeriodBusinessCenterGrp } from './underlying_stream_calculation_period_business_center_grp'
import { IUnderlyingStreamCalculationPeriodDateGrp } from './underlying_stream_calculation_period_date_grp'
import { IUnderlyingStreamFirstPeriodStartDateBusinessCenterGrp } from './underlying_stream_first_period_start_date_business_center_grp'

export interface IUnderlyingStreamCalculationPeriodDates {
  UnderlyingStreamCalculationPeriodDatesXID?: string// [1] 41957 (String)
  UnderlyingStreamCalculationPeriodDatesXIDRef?: string// [1] 41958 (String)
  UnderlyingStreamCalculationPeriodBusinessDayConvention?: number// [1] 40556 (Int)
  UnderlyingStreamFirstPeriodStartDateUnadjusted?: Date// [1] 40558 (LocalDate)
  UnderlyingStreamFirstPeriodStartDateBusinessDayConvention?: number// [1] 40559 (Int)
  UnderlyingStreamFirstPeriodStartDateAdjusted?: Date// [1] 40561 (LocalDate)
  UnderlyingStreamFirstRegularPeriodStartDateUnadjusted?: Date// [1] 40562 (LocalDate)
  UnderlyingStreamFirstCompoundingPeriodEndDateUnadjusted?: Date// [1] 40563 (LocalDate)
  UnderlyingStreamLastRegularPeriodEndDateUnadjusted?: Date// [1] 40564 (LocalDate)
  UnderlyingStreamCalculationFrequencyPeriod?: number// [1] 40565 (Int)
  UnderlyingStreamCalculationFrequencyUnit?: string// [1] 40566 (String)
  UnderlyingStreamCalculationRollConvention?: string// [1] 40567 (String)
  UnderlyingStreamCalculationBalanceOfFirstPeriod?: boolean// [1] 41959 (Boolean)
  UnderlyingStreamCalculationCorrectionPeriod?: number// [1] 41960 (Int)
  UnderlyingStreamCalculationCorrectionUnit?: string// [1] 41961 (String)
  UnderlyingStreamCalculationPeriodBusinessCenterGrp?: IUnderlyingStreamCalculationPeriodBusinessCenterGrp[]// [1] Ctr.40557
  UnderlyingStreamCalculationPeriodDateGrp?: IUnderlyingStreamCalculationPeriodDateGrp[]// [2] Dt.41955, Typ.41956
  UnderlyingStreamFirstPeriodStartDateBusinessCenterGrp?: IUnderlyingStreamFirstPeriodStartDateBusinessCenterGrp[]// [3] FirstStartDtBizCtr.40560
}
