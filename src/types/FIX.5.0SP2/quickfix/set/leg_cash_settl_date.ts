import { ILegCashSettlDateBusinessCenterGrp } from './leg_cash_settl_date_business_center_grp'

export interface ILegCashSettlDate {
  LegCashSettlDateUnadjusted?: Date// [1] 42299 (LocalDate)
  LegCashSettlDateBusinessDayConvention?: number// [2] 42300 (Int)
  LegCashSettlDateBusinessCenterGrp?: ILegCashSettlDateBusinessCenterGrp// [3] NoLegCashSettlDateBusinessCenters.42306, LegCashSettlDateBusinessCenter.42307
  LegCashSettlDateRelativeTo?: number// [4] 42301 (Int)
  LegCashSettlDateOffsetPeriod?: number// [5] 42302 (Int)
  LegCashSettlDateOffsetUnit?: string// [6] 42303 (String)
  LegCashSettlDateOffsetDayType?: number// [7] 42304 (Int)
  LegCashSettlDateAdjusted?: Date// [8] 42305 (LocalDate)
}
