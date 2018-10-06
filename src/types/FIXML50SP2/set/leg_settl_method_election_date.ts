import { ILegSettlMethodElectionDateBusinessCenterGrp } from './leg_settl_method_election_date_business_center_grp'

export interface ILegSettlMethodElectionDate {
  LegSettlMethodElectionDateUnadjusted?: Date// 42574
  LegSettlMethodElectionDateBusinessDayConvention?: number// 42575
  LegSettlMethodElectionDateRelativeTo?: number// 42576
  LegSettlMethodElectionDateOffsetPeriod?: number// 42577
  LegSettlMethodElectionDateOffsetUnit?: string// 42578
  LegSettlMethodElectionDateOffsetDayType?: number// 42579
  LegSettlMethodElectionDateAdjusted?: Date// 42580
  LegSettlMethodElectionDateBusinessCenterGrp?: ILegSettlMethodElectionDateBusinessCenterGrp[]
}
