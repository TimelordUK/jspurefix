import { IStreamTerminationDateBusinessCenterGrp } from './stream_termination_date_business_center_grp'

export interface IStreamTerminationDate {
  StreamTerminationDateUnadjusted?: Date// [1] 40065 (LocalDate)
  StreamTerminationDateBusinessDayConvention?: number// [2] 40066 (Int)
  StreamTerminationDateBusinessCenterGrp?: IStreamTerminationDateBusinessCenterGrp// [3] NoStreamTerminationDateBusinessCenters.40961, StreamTerminationDateBusinessCenter.40067
  StreamTerminationDateRelativeTo?: number// [4] 40068 (Int)
  StreamTerminationDateOffsetPeriod?: number// [5] 40069 (Int)
  StreamTerminationDateOffsetUnit?: string// [6] 40070 (String)
  StreamTerminationDateOffsetDayType?: number// [7] 40071 (Int)
  StreamTerminationDateAdjusted?: Date// [8] 40072 (LocalDate)
}
