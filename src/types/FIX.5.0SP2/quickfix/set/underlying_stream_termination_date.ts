import { IUnderlyingStreamTerminationDateBusinessCenterGrp } from './underlying_stream_termination_date_business_center_grp'

export interface IUnderlyingStreamTerminationDate {
  UnderlyingStreamTerminationDateUnadjusted?: Date// [1] 40548 (LocalDate)
  UnderlyingStreamTerminationDateBusinessDayConvention?: number// [2] 40549 (Int)
  UnderlyingStreamTerminationDateBusinessCenterGrp?: IUnderlyingStreamTerminationDateBusinessCenterGrp// [3] NoUnderlyingStreamTerminationDateBusinessCenters.40976, UnderlyingStreamTerminationDateBusinessCenter.40550
  UnderlyingStreamTerminationDateRelativeTo?: number// [4] 40551 (Int)
  UnderlyingStreamTerminationDateOffsetPeriod?: number// [5] 40552 (Int)
  UnderlyingStreamTerminationDateOffsetUnit?: string// [6] 40553 (String)
  UnderlyingStreamTerminationDateOffsetDayType?: number// [7] 40554 (Int)
  UnderlyingStreamTerminationDateAdjusted?: Date// [8] 40555 (LocalDate)
}
