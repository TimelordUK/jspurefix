import { ILegDividendFXTriggerDateBusinessCenterGrp } from './leg_dividend_fx_trigger_date_business_center_grp'

export interface ILegDividendFXTriggerDate {
  LegDividendFXTriggerDateRelativeTo?: number// 42357
  LegDividendFXTriggerDateOffsetPeriod?: number// 42358
  LegDividendFXTriggerDateOffsetUnit?: string// 42359
  LegDividendFXTriggerDateOffsetDayType?: number// 42360
  LegDividendFXTriggerDateUnadjusted?: Date// 42361
  LegDividendFXTriggerDateBusinessDayConvention?: number// 42362
  LegDividendFXTriggerDateAdjusted?: Date// 42363
  LegDividendFXTriggerDateBusinessCenterGrp?: ILegDividendFXTriggerDateBusinessCenterGrp[]
}
