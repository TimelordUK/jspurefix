import { IDividendFXTriggerDateBusinessCenterGrp } from './dividend_fx_trigger_date_business_center_grp'

export interface IDividendFXTriggerDate {
  DividendFXTriggerDateRelativeTo?: number// [1] 42265 (Int)
  DividendFXTriggerDateOffsetPeriod?: number// [1] 42266 (Int)
  DividendFXTriggerDateOffsetUnit?: string// [1] 42267 (String)
  DividendFXTriggerDateOffsetDayType?: number// [1] 42268 (Int)
  DividendFXTriggerDateUnadjusted?: Date// [1] 42269 (LocalDate)
  DividendFXTriggerDateBusinessDayConvention?: number// [1] 42270 (Int)
  DividendFXTriggerDateAdjusted?: Date// [1] 42271 (LocalDate)
  DividendFXTriggerDateBusinessCenterGrp?: IDividendFXTriggerDateBusinessCenterGrp[]// [1] Ctr.42273
}
