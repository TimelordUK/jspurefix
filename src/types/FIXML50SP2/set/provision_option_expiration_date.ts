import { IProvisionOptionExpirationDateBusinessCenterGrp } from './provision_option_expiration_date_business_center_grp'

export interface IProvisionOptionExpirationDate {
  ProvisionOptionExpirationDateUnadjusted?: Date// 40145
  ProvisionOptionExpirationDateBusinessDayConvention?: number// 40146
  ProvisionOptionExpirationDateRelativeTo?: number// 40148
  ProvisionOptionExpirationDateOffsetPeriod?: number// 40149
  ProvisionOptionExpirationDateOffsetUnit?: string// 40150
  ProvisionOptionExpirationDateOffsetDayType?: number// 40151
  ProvisionOptionExpirationDateAdjusted?: Date// 40152
  ProvisionOptionExpirationTime?: string// 40153
  ProvisionOptionExpirationTimeBusinessCenter?: string// 40154
  ProvisionOptionExpirationDateBusinessCenterGrp?: IProvisionOptionExpirationDateBusinessCenterGrp[]
}
