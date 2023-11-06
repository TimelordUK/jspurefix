import { IUnderlyingProvisionCashSettlValueDateBusinessCenterGrp } from './underlying_provision_cash_settl_value_date_business_center_grp'

export interface IUnderlyingProvisionCashSettlValueDates {
  UnderlyingProvisionCashSettlValueTime?: string// [1] 42104 (String)
  UnderlyingProvisionCashSettlValueTimeBusinessCenter?: string// [1] 42105 (String)
  UnderlyingProvisionCashSettlValueDateBusinessDayConvention?: number// [1] 42106 (Int)
  UnderlyingProvisionCashSettlValueDateRelativeTo?: number// [1] 42107 (Int)
  UnderlyingProvisionCashSettlValueDateOffsetPeriod?: number// [1] 42108 (Int)
  UnderlyingProvisionCashSettlValueDateOffsetUnit?: string// [1] 42109 (String)
  UnderlyingProvisionCashSettlValueDateOffsetDayType?: number// [1] 42110 (Int)
  UnderlyingProvisionCashSettlValueDateAdjusted?: Date// [1] 42111 (LocalDate)
  UnderlyingProvisionCashSettlValueDateBusinessCenterGrp?: IUnderlyingProvisionCashSettlValueDateBusinessCenterGrp[]// [1] Ctr.42183
}
