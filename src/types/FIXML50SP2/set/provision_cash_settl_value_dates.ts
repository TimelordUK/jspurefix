import { IProvisionCashSettlValueDateBusinessCenterGrp } from './provision_cash_settl_value_date_business_center_grp'

export interface IProvisionCashSettlValueDates {
  ProvisionCashSettlValueTime?: string// 40114
  ProvisionCashSettlValueTimeBusinessCenter?: string// 40115
  ProvisionCashSettlValueDateBusinessDayConvention?: number// 40116
  ProvisionCashSettlValueDateRelativeTo?: number// 40118
  ProvisionCashSettlValueDateOffsetPeriod?: number// 40119
  ProvisionCashSettlValueDateOffsetUnit?: string// 40120
  ProvisionCashSettlValueDateOffsetDayType?: number// 40121
  ProvisionCashSettlValueDateAdjusted?: Date// 40122
  ProvisionCashSettlValueDateBusinessCenterGrp?: IProvisionCashSettlValueDateBusinessCenterGrp[]
}
