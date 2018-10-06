import { IUnderlyingProvisionOptionExpirationDateBusinessCenterGrp } from './underlying_provision_option_expiration_date_business_center_grp'

export interface IUnderlyingProvisionOptionExpirationDate {
  UnderlyingProvisionOptionExpirationDateUnadjusted?: Date// 42133
  UnderlyingProvisionOptionExpirationDateBusinessDayConvention?: number// 42134
  UnderlyingProvisionOptionExpirationDateRelativeTo?: number// 42135
  UnderlyingProvisionOptionExpirationDateOffsetPeriod?: number// 42136
  UnderlyingProvisionOptionExpirationDateOffsetUnit?: string// 42137
  UnderlyingProvisionOptionExpirationDateOffsetDayType?: number// 42138
  UnderlyingProvisionOptionExpirationDateAdjusted?: Date// 42139
  UnderlyingProvisionOptionExpirationTime?: string// 42140
  UnderlyingProvisionOptionExpirationTimeBusinessCenter?: string// 42141
  UnderlyingProvisionOptionExpirationDateBusinessCenterGrp?: IUnderlyingProvisionOptionExpirationDateBusinessCenterGrp[]
}
