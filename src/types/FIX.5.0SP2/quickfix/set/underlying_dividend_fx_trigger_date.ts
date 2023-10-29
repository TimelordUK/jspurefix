export interface IUnderlyingDividendFXTriggerDate {
  UnderlyingDividendFXTriggerDateRelativeTo?: number// [1] 42846 (Int)
  UnderlyingDividendFXTriggerDateOffsetPeriod?: number// [2] 42847 (Int)
  UnderlyingDividendFXTriggerDateOffsetUnit?: string// [3] 42848 (String)
  UnderlyingDividendFXTriggerDateOffsetDayType?: number// [4] 42849 (Int)
  UnderlyingDividendFXTriggerDateUnadjusted?: Date// [5] 42850 (LocalDate)
  UnderlyingDividendFXTriggerDateBusinessDayConvention?: number// [6] 42851 (Int)
  UnderlyingDividendFXTriggerDateAdjusted?: Date// [7] 42852 (LocalDate)
}
