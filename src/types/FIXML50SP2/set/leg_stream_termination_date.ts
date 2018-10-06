import { ILegStreamTerminationDateBusinessCenterGrp } from './leg_stream_termination_date_business_center_grp'

export interface ILegStreamTerminationDate {
  LegStreamTerminationDateUnadjusted?: Date// 40257
  LegStreamTerminationDateBusinessDayConvention?: number// 40258
  LegStreamTerminationDateRelativeTo?: number// 40260
  LegStreamTerminationDateOffsetPeriod?: number// 40261
  LegStreamTerminationDateOffsetUnit?: string// 40262
  LegStreamTerminationDateOffsetDayType?: number// 40263
  LegStreamTerminationDateAdjusted?: Date// 40264
  LegStreamTerminationDateBusinessCenterGrp?: ILegStreamTerminationDateBusinessCenterGrp[]
}
