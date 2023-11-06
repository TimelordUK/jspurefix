import { ILegCashSettlDateBusinessCenterGrp } from './leg_cash_settl_date_business_center_grp'

export interface ILegCashSettlDate {
  LegCashSettlDateUnadjusted?: Date// [1] 42299 (LocalDate)
  LegCashSettlDateBusinessDayConvention?: number// [1] 42300 (Int)
  LegCashSettlDateRelativeTo?: number// [1] 42301 (Int)
  LegCashSettlDateOffsetPeriod?: number// [1] 42302 (Int)
  LegCashSettlDateOffsetUnit?: string// [1] 42303 (String)
  LegCashSettlDateOffsetDayType?: number// [1] 42304 (Int)
  LegCashSettlDateAdjusted?: Date// [1] 42305 (LocalDate)
  LegCashSettlDateBusinessCenterGrp?: ILegCashSettlDateBusinessCenterGrp[]// [1] Ctr.42307
}
