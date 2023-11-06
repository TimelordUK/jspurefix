import { IUnderlyingCashSettlDateBusinessCenterGrp } from './underlying_cash_settl_date_business_center_grp'

export interface IUnderlyingCashSettlDate {
  UnderlyingCashSettlDateUnadjusted?: Date// [1] 42790 (LocalDate)
  UnderlyingCashSettlDateBusinessDayConvention?: number// [1] 42791 (Int)
  UnderlyingCashSettlDateRelativeTo?: number// [1] 42792 (Int)
  UnderlyingCashSettlDateOffsetPeriod?: number// [1] 42793 (Int)
  UnderlyingCashSettlDateOffsetUnit?: string// [1] 42794 (String)
  UnderlyingCashSettlDateOffsetDayType?: number// [1] 42795 (Int)
  UnderlyingCashSettlDateAdjusted?: Date// [1] 42796 (LocalDate)
  UnderlyingCashSettlDateBusinessCenterGrp?: IUnderlyingCashSettlDateBusinessCenterGrp[]// [1] Ctr.42789
}
