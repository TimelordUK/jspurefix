import { ILegProvisionCashSettlValueDateBusinessCenterGrp } from './leg_provision_cash_settl_value_date_business_center_grp'

export interface ILegProvisionCashSettlValueDates {
  UnderlyingProvisionCashSettlValueTime?: string// 42104
  UnderlyingProvisionCashSettlValueTimeBusinessCenter?: string// 42105
  UnderlyingSettlMethodElectionDateBusinessDayConvention?: number// 43077
  UnderlyingSettlMethodElectionDateRelativeTo?: number// 43078
  UnderlyingSettlMethodElectionDateOffsetPeriod?: number// 43079
  UnderlyingSettlMethodElectionDateOffsetUnit?: string// 43080
  UnderlyingSettlMethodElectionDateOffsetDayType?: number// 43081
  UnderlyingSettlMethodElectionDateAdjusted?: Date// 43082
  LegProvisionCashSettlValueDateBusinessCenterGrp?: ILegProvisionCashSettlValueDateBusinessCenterGrp[]
}
