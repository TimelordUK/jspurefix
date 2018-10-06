import { ILegStreamCalculationPeriodBusinessCenterGrp } from './leg_stream_calculation_period_business_center_grp'
import { ILegStreamCalculationPeriodDateGrp } from './leg_stream_calculation_period_date_grp'
import { ILegStreamFirstPeriodStartDateBusinessCenterGrp } from './leg_stream_first_period_start_date_business_center_grp'

export interface ILegStreamCalculationPeriodDates {
  LegStreamCalculationPeriodDatesXID?: string// 41641
  LegStreamCalculationPeriodDatesXIDRef?: string// 41642
  LegStreamCalculationPeriodBusinessDayConvention?: number// 40265
  LegStreamFirstPeriodStartDateUnadjusted?: Date// 40267
  LegStreamFirstPeriodStartDateBusinessDayConvention?: number// 40268
  LegStreamFirstPeriodStartDateAdjusted?: Date// 40270
  LegStreamFirstRegularPeriodStartDateUnadjusted?: Date// 40271
  LegStreamFirstCompoundingPeriodEndDateUnadjusted?: Date// 40272
  LegStreamLastRegularPeriodEndDateUnadjusted?: Date// 40273
  LegStreamCalculationFrequencyPeriod?: number// 40274
  LegStreamCalculationFrequencyUnit?: string// 40275
  LegStreamCalculationRollConvention?: string// 40276
  LegStreamCalculationBalanceOfFirstPeriod?: boolean// 41643
  LegStreamCalculationCorrectionPeriod?: number// 41644
  LegStreamCalculationCorrectionUnit?: string// 41645
  LegStreamCalculationPeriodBusinessCenterGrp?: ILegStreamCalculationPeriodBusinessCenterGrp[]
  LegStreamCalculationPeriodDateGrp?: ILegStreamCalculationPeriodDateGrp[]
  LegStreamFirstPeriodStartDateBusinessCenterGrp?: ILegStreamFirstPeriodStartDateBusinessCenterGrp[]
}
