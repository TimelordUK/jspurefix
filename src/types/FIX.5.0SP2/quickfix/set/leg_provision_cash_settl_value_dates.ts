import { ILegProvisionCashSettlValueDateBusinessCenterGrp } from './leg_provision_cash_settl_value_date_business_center_grp'

export interface ILegProvisionCashSettlValueDates {
  LegProvisionCashSettlValueTime?: string// [1] 40524 (String)
  LegProvisionCashSettlValueTimeBusinessCenter?: string// [2] 40525 (String)
  LegProvisionCashSettlValueDateBusinessDayConvention?: number// [3] 40526 (Int)
  LegProvisionCashSettlValueDateBusinessCenterGrp?: ILegProvisionCashSettlValueDateBusinessCenterGrp// [4] NoLegProvisionCashSettlValueDateBusinessCenters.40935, LegProvisionCashSettlValueDateBusinessCenter.40527
  LegProvisionCashSettlValueDateRelativeTo?: number// [5] 40528 (Int)
  LegProvisionCashSettlValueDateOffsetPeriod?: number// [6] 40529 (Int)
  LegProvisionCashSettlValueDateOffsetUnit?: string// [7] 40530 (String)
  LegProvisionCashSettlValueDateOffsetDayType?: number// [8] 40531 (Int)
  LegProvisionCashSettlValueDateAdjusted?: Date// [9] 40532 (LocalDate)
}
