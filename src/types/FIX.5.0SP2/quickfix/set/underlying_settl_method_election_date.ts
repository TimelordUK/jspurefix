export interface IUnderlyingSettlMethodElectionDate {
  UnderlyingSettlMethodElectionDateUnadjusted?: Date// [1] 43076 (LocalDate)
  UnderlyingSettlMethodElectionDateBusinessDayConvention?: number// [2] 43077 (Int)
  UnderlyingSettlMethodElectionDateRelativeTo?: number// [3] 43078 (Int)
  UnderlyingSettlMethodElectionDateOffsetPeriod?: number// [4] 43079 (Int)
  UnderlyingSettlMethodElectionDateOffsetUnit?: string// [5] 43080 (String)
  UnderlyingSettlMethodElectionDateOffsetDayType?: number// [6] 43081 (Int)
  UnderlyingSettlMethodElectionDateAdjusted?: Date// [7] 43082 (LocalDate)
}
