import { IUnderlyingCashSettlDateBusinessCenterGrp } from './underlying_cash_settl_date_business_center_grp'

export interface IUnderlyingCashSettlDate {
  UnderlyingCashSettlDateUnadjusted?: Date// [1] 42790 (LocalDate)
  UnderlyingCashSettlDateBusinessDayConvention?: number// [2] 42791 (Int)
  UnderlyingCashSettlDateBusinessCenterGrp?: IUnderlyingCashSettlDateBusinessCenterGrp// [3] NoUnderlyingCashSettlDateBusinessCenters.42788, UnderlyingCashSettlDateBusinessCenter.42789
  UnderlyingCashSettlDateRelativeTo?: number// [4] 42792 (Int)
  UnderlyingCashSettlDateOffsetPeriod?: number// [5] 42793 (Int)
  UnderlyingCashSettlDateOffsetUnit?: string// [6] 42794 (String)
  UnderlyingCashSettlDateOffsetDayType?: number// [7] 42795 (Int)
  UnderlyingCashSettlDateAdjusted?: Date// [8] 42796 (LocalDate)
}
