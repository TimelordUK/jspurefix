export interface ISettlMethodElectionDate {
  SettlMethodElectionDateUnadjusted?: Date// [1] 42777 (LocalDate)
  SettlMethodElectionDateBusinessDayConvention?: number// [2] 42778 (Int)
  SettlMethodElectionDateRelativeTo?: number// [3] 42779 (Int)
  SettlMethodElectionDateOffsetPeriod?: number// [4] 42780 (Int)
  SettlMethodElectionDateOffsetUnit?: string// [5] 42781 (String)
  SettlMethodElectionDateOffsetDayType?: number// [6] 42782 (Int)
  SettlMethodElectionDateAdjusted?: Date// [7] 42783 (LocalDate)
}
