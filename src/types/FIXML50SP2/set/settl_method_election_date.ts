import { ISettlMethodElectionDateBusinessCenterGrp } from './settl_method_election_date_business_center_grp'

export interface ISettlMethodElectionDate {
  SettlMethodElectionDateUnadjusted?: Date// 42777
  SettlMethodElectionDateBusinessDayConvention?: number// 42778
  SettlMethodElectionDateRelativeTo?: number// 42779
  SettlMethodElectionDateOffsetPeriod?: number// 42780
  SettlMethodElectionDateOffsetUnit?: string// 42781
  SettlMethodElectionDateOffsetDayType?: number// 42782
  SettlMethodElectionDateAdjusted?: Date// 42783
  SettlMethodElectionDateBusinessCenterGrp?: ISettlMethodElectionDateBusinessCenterGrp[]
}
