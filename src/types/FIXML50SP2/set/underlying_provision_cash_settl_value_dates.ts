import { IUnderlyingProvisionCashSettlValueDateBusinessCenterGrp } from './underlying_provision_cash_settl_value_date_business_center_grp'

export interface IUnderlyingProvisionCashSettlValueDates {
  UnderlyingProvisionCashSettlValueTime?: string// 42104
  UnderlyingProvisionCashSettlValueTimeBusinessCenter?: string// 42105
  UnderlyingProvisionCashSettlValueDateBusinessDayConvention?: number// 42106
  UnderlyingProvisionCashSettlValueDateRelativeTo?: number// 42107
  UnderlyingProvisionCashSettlValueDateOffsetPeriod?: number// 42108
  UnderlyingProvisionCashSettlValueDateOffsetUnit?: string// 42109
  UnderlyingProvisionCashSettlValueDateOffsetDayType?: number// 42110
  UnderlyingProvisionCashSettlValueDateAdjusted?: Date// 42111
  UnderlyingProvisionCashSettlValueDateBusinessCenterGrp?: IUnderlyingProvisionCashSettlValueDateBusinessCenterGrp[]
}
