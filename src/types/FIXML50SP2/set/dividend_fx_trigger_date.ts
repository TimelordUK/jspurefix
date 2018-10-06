import { IDividendFXTriggerDateBusinessCenterGrp } from './dividend_fx_trigger_date_business_center_grp'

export interface IDividendFXTriggerDate {
  DividendFXTriggerDateRelativeTo?: number// 42265
  DividendFXTriggerDateOffsetPeriod?: number// 42266
  DividendFXTriggerDateOffsetUnit?: string// 42267
  DividendFXTriggerDateOffsetDayType?: number// 42268
  DividendFXTriggerDateUnadjusted?: Date// 42269
  DividendFXTriggerDateBusinessDayConvention?: number// 42270
  DividendFXTriggerDateAdjusted?: Date// 42271
  DividendFXTriggerDateBusinessCenterGrp?: IDividendFXTriggerDateBusinessCenterGrp[]
}
