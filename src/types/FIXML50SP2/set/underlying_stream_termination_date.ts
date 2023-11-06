import { IUnderlyingStreamTerminationDateBusinessCenterGrp } from './underlying_stream_termination_date_business_center_grp'

export interface IUnderlyingStreamTerminationDate {
  UnderlyingStreamTerminationDateUnadjusted?: Date// [1] 40548 (LocalDate)
  UnderlyingStreamTerminationDateBusinessDayConvention?: number// [1] 40549 (Int)
  UnderlyingStreamTerminationDateRelativeTo?: number// [1] 40551 (Int)
  UnderlyingStreamTerminationDateOffsetPeriod?: number// [1] 40552 (Int)
  UnderlyingStreamTerminationDateOffsetUnit?: string// [1] 40553 (String)
  UnderlyingStreamTerminationDateOffsetDayType?: number// [1] 40554 (Int)
  UnderlyingStreamTerminationDateAdjusted?: Date// [1] 40555 (LocalDate)
  UnderlyingStreamTerminationDateBusinessCenterGrp?: IUnderlyingStreamTerminationDateBusinessCenterGrp[]// [1] Ctr.40550
}
