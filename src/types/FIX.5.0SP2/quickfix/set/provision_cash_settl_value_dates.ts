import { IProvisionCashSettlValueDateBusinessCenterGrp } from './provision_cash_settl_value_date_business_center_grp'

export interface IProvisionCashSettlValueDates {
  ProvisionCashSettlValueTime?: string// [1] 40114 (String)
  ProvisionCashSettlValueTimeBusinessCenter?: string// [2] 40115 (String)
  ProvisionCashSettlValueDateBusinessDayConvention?: number// [3] 40116 (Int)
  ProvisionCashSettlValueDateBusinessCenterGrp?: IProvisionCashSettlValueDateBusinessCenterGrp// [4] NoProvisionCashSettlValueDateBusinessCenters.40953, ProvisionCashSettlValueDateBusinessCenter.40117
  ProvisionCashSettlValueDateRelativeTo?: number// [5] 40118 (Int)
  ProvisionCashSettlValueDateOffsetPeriod?: number// [6] 40119 (Int)
  ProvisionCashSettlValueDateOffsetUnit?: string// [7] 40120 (String)
  ProvisionCashSettlValueDateOffsetDayType?: number// [8] 40121 (Int)
  ProvisionCashSettlValueDateAdjusted?: Date// [9] 40122 (LocalDate)
}
