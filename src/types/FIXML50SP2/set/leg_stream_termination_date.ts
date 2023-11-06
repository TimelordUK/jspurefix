import { ILegStreamTerminationDateBusinessCenterGrp } from './leg_stream_termination_date_business_center_grp'

export interface ILegStreamTerminationDate {
  LegStreamTerminationDateUnadjusted?: Date// [1] 40257 (LocalDate)
  LegStreamTerminationDateBusinessDayConvention?: number// [1] 40258 (Int)
  LegStreamTerminationDateRelativeTo?: number// [1] 40260 (Int)
  LegStreamTerminationDateOffsetPeriod?: number// [1] 40261 (Int)
  LegStreamTerminationDateOffsetUnit?: string// [1] 40262 (String)
  LegStreamTerminationDateOffsetDayType?: number// [1] 40263 (Int)
  LegStreamTerminationDateAdjusted?: Date// [1] 40264 (LocalDate)
  LegStreamTerminationDateBusinessCenterGrp?: ILegStreamTerminationDateBusinessCenterGrp[]// [1] Ctr.40259
}
