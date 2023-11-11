import { ILegComplexEventDateBusinessCenterGrp } from './leg_complex_event_date_business_center_grp'

export interface ILegComplexEventRelativeDate {
  LegComplexEventDateUnadjusted?: Date// [1] 41389 (LocalDate)
  LegComplexEventDateRelativeTo?: number// [2] 41390 (Int)
  LegComplexEventDateOffsetPeriod?: number// [3] 41391 (Int)
  LegComplexEventDateOffsetUnit?: string// [4] 41392 (String)
  LegComplexEventDateOffsetDayType?: number// [5] 41393 (Int)
  LegComplexEventDateBusinessDayConvention?: number// [6] 41394 (Int)
  LegComplexEventDateBusinessCenterGrp?: ILegComplexEventDateBusinessCenterGrp// [7] NoLegComplexEventDateBusinessCenters.41387, LegComplexEventDateBusinessCenter.41388
  LegComplexEventDateAdjusted?: Date// [8] 41395 (LocalDate)
  LegComplexEventFixingTime?: string// [9] 41396 (String)
  LegComplexEventFixingTimeBusinessCenter?: string// [10] 41397 (String)
}
