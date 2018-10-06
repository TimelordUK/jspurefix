import { IUnderlyingCashSettlDateBusinessCenterGrp } from './underlying_cash_settl_date_business_center_grp'

export interface IUnderlyingCashSettlDate {
  UnderlyingCashSettlDateUnadjusted?: Date// 42790
  UnderlyingCashSettlDateBusinessDayConvention?: number// 42791
  UnderlyingCashSettlDateRelativeTo?: number// 42792
  UnderlyingCashSettlDateOffsetPeriod?: number// 42793
  UnderlyingCashSettlDateOffsetUnit?: string// 42794
  UnderlyingCashSettlDateOffsetDayType?: number// 42795
  UnderlyingCashSettlDateAdjusted?: Date// 42796
  UnderlyingCashSettlDateBusinessCenterGrp?: IUnderlyingCashSettlDateBusinessCenterGrp[]
}
