import { IUnderlyingSettlMethodElectionDateBusinessCenterGrp } from './underlying_settl_method_election_date_business_center_grp'

export interface IUnderlyingSettlMethodElectionDate {
  UnderlyingSettlMethodElectionDateUnadjusted?: Date// [1] 43076 (LocalDate)
  UnderlyingSettlMethodElectionDateBusinessDayConvention?: number// [2] 43077 (Int)
  UnderlyingSettlMethodElectionDateBusinessCenterGrp?: IUnderlyingSettlMethodElectionDateBusinessCenterGrp// [3] NoUnderlyingSettlMethodElectionDateBusinessCenters.43074, UnderlyingSettlMethodElectionDateBusinessCenter.43075
  UnderlyingSettlMethodElectionDateRelativeTo?: number// [4] 43078 (Int)
  UnderlyingSettlMethodElectionDateOffsetPeriod?: number// [5] 43079 (Int)
  UnderlyingSettlMethodElectionDateOffsetUnit?: string// [6] 43080 (String)
  UnderlyingSettlMethodElectionDateOffsetDayType?: number// [7] 43081 (Int)
  UnderlyingSettlMethodElectionDateAdjusted?: Date// [8] 43082 (LocalDate)
}
