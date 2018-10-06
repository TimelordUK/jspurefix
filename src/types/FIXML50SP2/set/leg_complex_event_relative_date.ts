import { ILegComplexEventDateBusinessCenterGrp } from './leg_complex_event_date_business_center_grp'

export interface ILegComplexEventRelativeDate {
  LegComplexEventDateUnadjusted?: Date// 41389
  LegComplexEventDateRelativeTo?: number// 41390
  LegComplexEventDateOffsetPeriod?: number// 41391
  LegComplexEventDateOffsetUnit?: string// 41392
  LegComplexEventDateOffsetDayType?: number// 41393
  LegComplexEventDateBusinessDayConvention?: number// 41394
  LegComplexEventDateAdjusted?: Date// 41395
  LegComplexEventFixingTime?: string// 41396
  LegComplexEventFixingTimeBusinessCenter?: string// 41397
  LegComplexEventDateBusinessCenterGrp?: ILegComplexEventDateBusinessCenterGrp[]
}
