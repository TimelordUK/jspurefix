import { IUnderlyingDividendFXTriggerDateBusinessCenterGrp } from './underlying_dividend_fx_trigger_date_business_center_grp'

export interface IUnderlyingDividendFXTriggerDate {
  UnderlyingDividendFXTriggerDateRelativeTo?: number// 42846
  UnderlyingDividendFXTriggerDateOffsetPeriod?: number// 42847
  UnderlyingDividendFXTriggerDateOffsetUnit?: string// 42848
  UnderlyingDividendFXTriggerDateOffsetDayType?: number// 42849
  UnderlyingDividendFXTriggerDateUnadjusted?: Date// 42850
  UnderlyingDividendFXTriggerDateBusinessDayConvention?: number// 42851
  UnderlyingDividendFXTriggerDateAdjusted?: Date// 42852
  UnderlyingDividendFXTriggerDateBusinessCenterGrp?: IUnderlyingDividendFXTriggerDateBusinessCenterGrp[]
}
