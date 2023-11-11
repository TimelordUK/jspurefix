import { ILegSettlMethodElectionDateBusinessCenterGrp } from './leg_settl_method_election_date_business_center_grp'

export interface ILegSettlMethodElectionDate {
  LegSettlMethodElectionDateUnadjusted?: Date// [1] 42574 (LocalDate)
  LegSettlMethodElectionDateBusinessDayConvention?: number// [1] 42575 (Int)
  LegSettlMethodElectionDateRelativeTo?: number// [1] 42576 (Int)
  LegSettlMethodElectionDateOffsetPeriod?: number// [1] 42577 (Int)
  LegSettlMethodElectionDateOffsetUnit?: string// [1] 42578 (String)
  LegSettlMethodElectionDateOffsetDayType?: number// [1] 42579 (Int)
  LegSettlMethodElectionDateAdjusted?: Date// [1] 42580 (LocalDate)
  LegSettlMethodElectionDateBusinessCenterGrp?: ILegSettlMethodElectionDateBusinessCenterGrp[]// [1] Ctr.42582
}
