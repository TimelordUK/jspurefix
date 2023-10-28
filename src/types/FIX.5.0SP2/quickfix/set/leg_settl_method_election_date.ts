export interface ILegSettlMethodElectionDate {
  LegSettlMethodElectionDateUnadjusted?: Date// [1] 42574 (LocalDate)
  LegSettlMethodElectionDateBusinessDayConvention?: number// [2] 42575 (Int)
  LegSettlMethodElectionDateRelativeTo?: number// [3] 42576 (Int)
  LegSettlMethodElectionDateOffsetPeriod?: number// [4] 42577 (Int)
  LegSettlMethodElectionDateOffsetUnit?: string// [5] 42578 (String)
  LegSettlMethodElectionDateOffsetDayType?: number// [6] 42579 (Int)
  LegSettlMethodElectionDateAdjusted?: Date// [7] 42580 (LocalDate)
}
