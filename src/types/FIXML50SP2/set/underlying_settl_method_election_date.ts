import { IUnderlyingSettlMethodElectionDateBusinessCenterGrp } from './underlying_settl_method_election_date_business_center_grp'

export interface IUnderlyingSettlMethodElectionDate {
  UnderlyingSettlMethodElectionDateUnadjusted?: Date// [1] 43076 (LocalDate)
  UnderlyingSettlMethodElectionDateBusinessDayConvention?: number// [1] 43077 (Int)
  UnderlyingSettlMethodElectionDateRelativeTo?: number// [1] 43078 (Int)
  UnderlyingSettlMethodElectionDateOffsetPeriod?: number// [1] 43079 (Int)
  UnderlyingSettlMethodElectionDateOffsetUnit?: string// [1] 43080 (String)
  UnderlyingSettlMethodElectionDateOffsetDayType?: number// [1] 43081 (Int)
  UnderlyingSettlMethodElectionDateAdjusted?: Date// [1] 43082 (LocalDate)
  UnderlyingSettlMethodElectionDateBusinessCenterGrp?: IUnderlyingSettlMethodElectionDateBusinessCenterGrp[]// [1] Ctr.43075
}
