export interface IDividendFXTriggerDate {
  DividendFXTriggerDateRelativeTo?: number// [1] 42265 (Int)
  DividendFXTriggerDateOffsetPeriod?: number// [2] 42266 (Int)
  DividendFXTriggerDateOffsetUnit?: string// [3] 42267 (String)
  DividendFXTriggerDateOffsetDayType?: number// [4] 42268 (Int)
  DividendFXTriggerDateUnadjusted?: Date// [5] 42269 (LocalDate)
  DividendFXTriggerDateBusinessDayConvention?: number// [6] 42270 (Int)
  DividendFXTriggerDateAdjusted?: Date// [7] 42271 (LocalDate)
}
