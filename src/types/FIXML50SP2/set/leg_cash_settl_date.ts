import { ILegCashSettlDateBusinessCenterGrp } from './leg_cash_settl_date_business_center_grp'

export interface ILegCashSettlDate {
  LegCashSettlDateUnadjusted?: Date// 42299
  LegCashSettlDateBusinessDayConvention?: number// 42300
  LegCashSettlDateRelativeTo?: number// 42301
  LegCashSettlDateOffsetPeriod?: number// 42302
  LegCashSettlDateOffsetUnit?: string// 42303
  LegCashSettlDateOffsetDayType?: number// 42304
  LegCashSettlDateAdjusted?: Date// 42305
  LegCashSettlDateBusinessCenterGrp?: ILegCashSettlDateBusinessCenterGrp[]
}
