import { ILegComplexEventDateBusinessCenterGrp } from './leg_complex_event_date_business_center_grp'

export interface ILegComplexEventRelativeDate {
  LegComplexEventDateUnadjusted?: Date// [1] 41389 (LocalDate)
  LegComplexEventDateRelativeTo?: number// [1] 41390 (Int)
  LegComplexEventDateOffsetPeriod?: number// [1] 41391 (Int)
  LegComplexEventDateOffsetUnit?: string// [1] 41392 (String)
  LegComplexEventDateOffsetDayType?: number// [1] 41393 (Int)
  LegComplexEventDateBusinessDayConvention?: number// [1] 41394 (Int)
  LegComplexEventDateAdjusted?: Date// [1] 41395 (LocalDate)
  LegComplexEventFixingTime?: string// [1] 41396 (String)
  LegComplexEventFixingTimeBusinessCenter?: string// [1] 41397 (String)
  LegComplexEventDateBusinessCenterGrp?: ILegComplexEventDateBusinessCenterGrp[]// [1] Ctr.41388
}
