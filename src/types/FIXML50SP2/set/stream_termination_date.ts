import { IStreamTerminationDateBusinessCenterGrp } from './stream_termination_date_business_center_grp'

export interface IStreamTerminationDate {
  StreamTerminationDateUnadjusted?: Date// [1] 40065 (LocalDate)
  StreamTerminationDateBusinessDayConvention?: number// [1] 40066 (Int)
  StreamTerminationDateRelativeTo?: number// [1] 40068 (Int)
  StreamTerminationDateOffsetPeriod?: number// [1] 40069 (Int)
  StreamTerminationDateOffsetUnit?: string// [1] 40070 (String)
  StreamTerminationDateOffsetDayType?: number// [1] 40071 (Int)
  StreamTerminationDateAdjusted?: Date// [1] 40072 (LocalDate)
  StreamTerminationDateBusinessCenterGrp?: IStreamTerminationDateBusinessCenterGrp[]// [1] Ctr.40067
}
