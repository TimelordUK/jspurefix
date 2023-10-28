import { ILegStreamTerminationDateBusinessCenterGrp } from './leg_stream_termination_date_business_center_grp'

export interface ILegStreamTerminationDate {
  LegStreamTerminationDateUnadjusted?: Date// [1] 40257 (LocalDate)
  LegStreamTerminationDateBusinessDayConvention?: number// [2] 40258 (Int)
  LegStreamTerminationDateBusinessCenterGrp?: ILegStreamTerminationDateBusinessCenterGrp// [3] NoLegStreamTerminationDateBusinessCenters.40943, LegStreamTerminationDateBusinessCenter.40259
  LegStreamTerminationDateRelativeTo?: number// [4] 40260 (Int)
  LegStreamTerminationDateOffsetPeriod?: number// [5] 40261 (Int)
  LegStreamTerminationDateOffsetUnit?: string// [6] 40262 (String)
  LegStreamTerminationDateOffsetDayType?: number// [7] 40263 (Int)
  LegStreamTerminationDateAdjusted?: Date// [8] 40264 (LocalDate)
}
