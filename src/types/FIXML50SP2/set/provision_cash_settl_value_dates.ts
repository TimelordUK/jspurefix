import { IProvisionCashSettlValueDateBusinessCenterGrp } from './provision_cash_settl_value_date_business_center_grp'

export interface IProvisionCashSettlValueDates {
  ProvisionCashSettlValueTime?: string// [1] 40114 (String)
  ProvisionCashSettlValueTimeBusinessCenter?: string// [1] 40115 (String)
  ProvisionCashSettlValueDateBusinessDayConvention?: number// [1] 40116 (Int)
  ProvisionCashSettlValueDateRelativeTo?: number// [1] 40118 (Int)
  ProvisionCashSettlValueDateOffsetPeriod?: number// [1] 40119 (Int)
  ProvisionCashSettlValueDateOffsetUnit?: string// [1] 40120 (String)
  ProvisionCashSettlValueDateOffsetDayType?: number// [1] 40121 (Int)
  ProvisionCashSettlValueDateAdjusted?: Date// [1] 40122 (LocalDate)
  ProvisionCashSettlValueDateBusinessCenterGrp?: IProvisionCashSettlValueDateBusinessCenterGrp[]// [1] Ctr.40117
}
