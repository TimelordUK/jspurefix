import { IUnderlyingStreamTerminationDateBusinessCenterGrp } from './underlying_stream_termination_date_business_center_grp'

export interface IUnderlyingStreamTerminationDate {
  UnderlyingStreamTerminationDateUnadjusted?: Date// 40548
  UnderlyingStreamTerminationDateBusinessDayConvention?: number// 40549
  UnderlyingStreamTerminationDateRelativeTo?: number// 40551
  UnderlyingStreamTerminationDateOffsetPeriod?: number// 40552
  UnderlyingStreamTerminationDateOffsetUnit?: string// 40553
  UnderlyingStreamTerminationDateOffsetDayType?: number// 40554
  UnderlyingStreamTerminationDateAdjusted?: Date// 40555
  UnderlyingStreamTerminationDateBusinessCenterGrp?: IUnderlyingStreamTerminationDateBusinessCenterGrp[]
}
