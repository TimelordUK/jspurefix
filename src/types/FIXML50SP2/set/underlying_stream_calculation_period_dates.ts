import { IUnderlyingStreamCalculationPeriodBusinessCenterGrp } from './underlying_stream_calculation_period_business_center_grp'
import { IUnderlyingStreamCalculationPeriodDateGrp } from './underlying_stream_calculation_period_date_grp'
import { IUnderlyingStreamFirstPeriodStartDateBusinessCenterGrp } from './underlying_stream_first_period_start_date_business_center_grp'

export interface IUnderlyingStreamCalculationPeriodDates {
  UnderlyingStreamCalculationPeriodDatesXID?: string// 41957
  UnderlyingStreamCalculationPeriodDatesXIDRef?: string// 41958
  UnderlyingStreamCalculationPeriodBusinessDayConvention?: number// 40556
  UnderlyingStreamFirstPeriodStartDateUnadjusted?: Date// 40558
  UnderlyingStreamFirstPeriodStartDateBusinessDayConvention?: number// 40559
  UnderlyingStreamFirstPeriodStartDateAdjusted?: Date// 40561
  UnderlyingStreamFirstRegularPeriodStartDateUnadjusted?: Date// 40562
  UnderlyingStreamFirstCompoundingPeriodEndDateUnadjusted?: Date// 40563
  UnderlyingStreamLastRegularPeriodEndDateUnadjusted?: Date// 40564
  UnderlyingStreamCalculationFrequencyPeriod?: number// 40565
  UnderlyingStreamCalculationFrequencyUnit?: string// 40566
  UnderlyingStreamCalculationRollConvention?: string// 40567
  UnderlyingStreamCalculationBalanceOfFirstPeriod?: boolean// 41959
  UnderlyingStreamCalculationCorrectionPeriod?: number// 41960
  UnderlyingStreamCalculationCorrectionUnit?: string// 41961
  UnderlyingStreamCalculationPeriodBusinessCenterGrp?: IUnderlyingStreamCalculationPeriodBusinessCenterGrp[]
  UnderlyingStreamCalculationPeriodDateGrp?: IUnderlyingStreamCalculationPeriodDateGrp[]
  UnderlyingStreamFirstPeriodStartDateBusinessCenterGrp?: IUnderlyingStreamFirstPeriodStartDateBusinessCenterGrp[]
}
