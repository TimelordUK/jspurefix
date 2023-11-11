import { ILegDividendFXTriggerDateBusinessCenterGrp } from './leg_dividend_fx_trigger_date_business_center_grp'

export interface ILegDividendFXTriggerDate {
  LegDividendFXTriggerDateRelativeTo?: number// [1] 42357 (Int)
  LegDividendFXTriggerDateOffsetPeriod?: number// [1] 42358 (Int)
  LegDividendFXTriggerDateOffsetUnit?: string// [1] 42359 (String)
  LegDividendFXTriggerDateOffsetDayType?: number// [1] 42360 (Int)
  LegDividendFXTriggerDateUnadjusted?: Date// [1] 42361 (LocalDate)
  LegDividendFXTriggerDateBusinessDayConvention?: number// [1] 42362 (Int)
  LegDividendFXTriggerDateAdjusted?: Date// [1] 42363 (LocalDate)
  LegDividendFXTriggerDateBusinessCenterGrp?: ILegDividendFXTriggerDateBusinessCenterGrp[]// [1] Ctr.42365
}
