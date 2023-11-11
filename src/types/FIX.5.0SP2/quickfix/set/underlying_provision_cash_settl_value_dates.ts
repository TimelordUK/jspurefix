import { IUnderlyingProvisionCashSettlValueDateBusinessCenterGrp } from './underlying_provision_cash_settl_value_date_business_center_grp'

export interface IUnderlyingProvisionCashSettlValueDates {
  UnderlyingProvisionCashSettlValueTime?: string// [1] 42104 (String)
  UnderlyingProvisionCashSettlValueTimeBusinessCenter?: string// [2] 42105 (String)
  UnderlyingProvisionCashSettlValueDateBusinessDayConvention?: number// [3] 42106 (Int)
  UnderlyingProvisionCashSettlValueDateBusinessCenterGrp?: IUnderlyingProvisionCashSettlValueDateBusinessCenterGrp// [4] NoUnderlyingProvisionCashSettlValueDateBusinessCenters.42182, UnderlyingProvisionCashSettlValueDateBusinessCenter.42183
  UnderlyingProvisionCashSettlValueDateRelativeTo?: number// [5] 42107 (Int)
  UnderlyingProvisionCashSettlValueDateOffsetPeriod?: number// [6] 42108 (Int)
  UnderlyingProvisionCashSettlValueDateOffsetUnit?: string// [7] 42109 (String)
  UnderlyingProvisionCashSettlValueDateOffsetDayType?: number// [8] 42110 (Int)
  UnderlyingProvisionCashSettlValueDateAdjusted?: Date// [9] 42111 (LocalDate)
}
