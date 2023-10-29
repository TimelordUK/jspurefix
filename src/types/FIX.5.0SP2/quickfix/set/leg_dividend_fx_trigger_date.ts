export interface ILegDividendFXTriggerDate {
  LegDividendFXTriggerDateRelativeTo?: number// [1] 42357 (Int)
  LegDividendFXTriggerDateOffsetPeriod?: number// [2] 42358 (Int)
  LegDividendFXTriggerDateOffsetUnit?: string// [3] 42359 (String)
  LegDividendFXTriggerDateOffsetDayType?: number// [4] 42360 (Int)
  LegDividendFXTriggerDateUnadjusted?: Date// [5] 42361 (LocalDate)
  LegDividendFXTriggerDateBusinessDayConvention?: number// [6] 42362 (Int)
  LegDividendFXTriggerDateAdjusted?: Date// [7] 42363 (LocalDate)
}
