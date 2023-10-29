import { ILegSettlMethodElectionDateBusinessCenterGrp } from './leg_settl_method_election_date_business_center_grp'

export interface ILegSettlMethodElectionDate {
  LegSettlMethodElectionDateUnadjusted?: Date// [1] 42574 (LocalDate)
  LegSettlMethodElectionDateBusinessDayConvention?: number// [2] 42575 (Int)
  LegSettlMethodElectionDateBusinessCenterGrp?: ILegSettlMethodElectionDateBusinessCenterGrp// [3] NoLegSettlMethodElectionDateBusinessCenters.42581, LegSettlMethodElectionDateBusinessCenter.42582
  LegSettlMethodElectionDateRelativeTo?: number// [4] 42576 (Int)
  LegSettlMethodElectionDateOffsetPeriod?: number// [5] 42577 (Int)
  LegSettlMethodElectionDateOffsetUnit?: string// [6] 42578 (String)
  LegSettlMethodElectionDateOffsetDayType?: number// [7] 42579 (Int)
  LegSettlMethodElectionDateAdjusted?: Date// [8] 42580 (LocalDate)
}
