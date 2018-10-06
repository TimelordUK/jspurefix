import { ILegProvisionCashSettlValueDateBusinessCenterGrp } from './leg_provision_cash_settl_value_date_business_center_grp'

export interface ILegProvisionCashSettlValueDates {
  LegProvisionCashSettlValueTime?: string// 40524
  LegProvisionCashSettlValueTimeBusinessCenter?: string// 40525
  LegProvisionCashSettlValueDateBusinessDayConvention?: number// 40526
  LegProvisionCashSettlValueDateRelativeTo?: number// 40528
  LegProvisionCashSettlValueDateOffsetPeriod?: number// 40529
  LegProvisionCashSettlValueDateOffsetUnit?: string// 40530
  LegProvisionCashSettlValueDateOffsetDayType?: number// 40531
  LegProvisionCashSettlValueDateAdjusted?: Date// 40532
  LegProvisionCashSettlValueDateBusinessCenterGrp?: ILegProvisionCashSettlValueDateBusinessCenterGrp[]
}
