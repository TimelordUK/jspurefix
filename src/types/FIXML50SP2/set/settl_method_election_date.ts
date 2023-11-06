import { ISettlMethodElectionDateBusinessCenterGrp } from './settl_method_election_date_business_center_grp'

export interface ISettlMethodElectionDate {
  SettlMethodElectionDateUnadjusted?: Date// [1] 42777 (LocalDate)
  SettlMethodElectionDateBusinessDayConvention?: number// [1] 42778 (Int)
  SettlMethodElectionDateRelativeTo?: number// [1] 42779 (Int)
  SettlMethodElectionDateOffsetPeriod?: number// [1] 42780 (Int)
  SettlMethodElectionDateOffsetUnit?: string// [1] 42781 (String)
  SettlMethodElectionDateOffsetDayType?: number// [1] 42782 (Int)
  SettlMethodElectionDateAdjusted?: Date// [1] 42783 (LocalDate)
  SettlMethodElectionDateBusinessCenterGrp?: ISettlMethodElectionDateBusinessCenterGrp[]// [1] Ctr.42776
}
