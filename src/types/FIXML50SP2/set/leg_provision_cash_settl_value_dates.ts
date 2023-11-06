import { ILegProvisionCashSettlValueDateBusinessCenterGrp } from './leg_provision_cash_settl_value_date_business_center_grp'

export interface ILegProvisionCashSettlValueDates {
  LegProvisionCashSettlValueTime?: string// [1] 40524 (String)
  LegProvisionCashSettlValueTimeBusinessCenter?: string// [1] 40525 (String)
  LegProvisionCashSettlValueDateBusinessDayConvention?: number// [1] 40526 (Int)
  LegProvisionCashSettlValueDateRelativeTo?: number// [1] 40528 (Int)
  LegProvisionCashSettlValueDateOffsetPeriod?: number// [1] 40529 (Int)
  LegProvisionCashSettlValueDateOffsetUnit?: string// [1] 40530 (String)
  LegProvisionCashSettlValueDateOffsetDayType?: number// [1] 40531 (Int)
  LegProvisionCashSettlValueDateAdjusted?: Date// [1] 40532 (LocalDate)
  LegProvisionCashSettlValueDateBusinessCenterGrp?: ILegProvisionCashSettlValueDateBusinessCenterGrp[]// [1] Ctr.40527
}
