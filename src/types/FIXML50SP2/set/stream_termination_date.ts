import { IStreamTerminationDateBusinessCenterGrp } from './stream_termination_date_business_center_grp'

export interface IStreamTerminationDate {
  StreamTerminationDateUnadjusted?: Date// 40065
  StreamTerminationDateBusinessDayConvention?: number// 40066
  StreamTerminationDateRelativeTo?: number// 40068
  StreamTerminationDateOffsetPeriod?: number// 40069
  StreamTerminationDateOffsetUnit?: string// 40070
  StreamTerminationDateOffsetDayType?: number// 40071
  StreamTerminationDateAdjusted?: Date// 40072
  StreamTerminationDateBusinessCenterGrp?: IStreamTerminationDateBusinessCenterGrp[]
}
