import { ILegProvisionOptionExpirationDateBusinessCenterGrp } from './leg_provision_option_expiration_date_business_center_grp'

export interface ILegProvisionOptionExpirationDate {
  UnderlyingSettlMethodElectionDateUnadjusted?: Date// 43076
  UnderlyingSettlMethodElectionDateBusinessDayConvention?: number// 43077
  UnderlyingSettlMethodElectionDateRelativeTo?: number// 43078
  UnderlyingSettlMethodElectionDateOffsetPeriod?: number// 43079
  UnderlyingSettlMethodElectionDateOffsetUnit?: string// 43080
  UnderlyingSettlMethodElectionDateOffsetDayType?: number// 43081
  UnderlyingSettlMethodElectionDateAdjusted?: Date// 43082
  UnderlyingProvisionOptionExpirationTime?: string// 42140
  UnderlyingProvisionOptionExpirationTimeBusinessCenter?: string// 42141
  LegProvisionOptionExpirationDateBusinessCenterGrp?: ILegProvisionOptionExpirationDateBusinessCenterGrp[]
}
