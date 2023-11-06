import { IUnderlyingDividendFXTriggerDateBusinessCenterGrp } from './underlying_dividend_fx_trigger_date_business_center_grp'

export interface IUnderlyingDividendFXTriggerDate {
  UnderlyingDividendFXTriggerDateRelativeTo?: number// [1] 42846 (Int)
  UnderlyingDividendFXTriggerDateOffsetPeriod?: number// [1] 42847 (Int)
  UnderlyingDividendFXTriggerDateOffsetUnit?: string// [1] 42848 (String)
  UnderlyingDividendFXTriggerDateOffsetDayType?: number// [1] 42849 (Int)
  UnderlyingDividendFXTriggerDateUnadjusted?: Date// [1] 42850 (LocalDate)
  UnderlyingDividendFXTriggerDateBusinessDayConvention?: number// [1] 42851 (Int)
  UnderlyingDividendFXTriggerDateAdjusted?: Date// [1] 42852 (LocalDate)
  UnderlyingDividendFXTriggerDateBusinessCenterGrp?: IUnderlyingDividendFXTriggerDateBusinessCenterGrp[]// [1] Ctr.42854
}
