import { ISettlMethodElectionDateBusinessCenterGrp } from './settl_method_election_date_business_center_grp'

export interface ISettlMethodElectionDate {
  SettlMethodElectionDateUnadjusted?: Date// [1] 42777 (LocalDate)
  SettlMethodElectionDateBusinessDayConvention?: number// [2] 42778 (Int)
  SettlMethodElectionDateBusinessCenterGrp?: ISettlMethodElectionDateBusinessCenterGrp// [3] NoSettlMethodElectionDateBusinessCenters.42775, SettlMethodElectionDateBusinessCenter.42776
  SettlMethodElectionDateRelativeTo?: number// [4] 42779 (Int)
  SettlMethodElectionDateOffsetPeriod?: number// [5] 42780 (Int)
  SettlMethodElectionDateOffsetUnit?: string// [6] 42781 (String)
  SettlMethodElectionDateOffsetDayType?: number// [7] 42782 (Int)
  SettlMethodElectionDateAdjusted?: Date// [8] 42783 (LocalDate)
}
