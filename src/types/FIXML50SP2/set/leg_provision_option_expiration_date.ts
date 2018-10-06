import { ILegProvisionOptionExpirationDateBusinessCenterGrp } from './leg_provision_option_expiration_date_business_center_grp'

export interface ILegProvisionOptionExpirationDate {
  LegProvisionOptionExpirationDateUnadjusted?: Date// 40498
  LegProvisionOptionExpirationDateBusinessDayConvention?: number// 40499
  LegProvisionOptionExpirationDateRelativeTo?: number// 40501
  LegProvisionOptionExpirationDateOffsetPeriod?: number// 40502
  LegProvisionOptionExpirationDateOffsetUnit?: string// 40503
  LegProvisionOptionExpirationDateOffsetDayType?: number// 40504
  LegProvisionOptionExpirationDateAdjusted?: Date// 40505
  LegProvisionOptionExpirationTime?: string// 40506
  LegProvisionOptionExpirationTimeBusinessCenter?: string// 40507
  LegProvisionOptionExpirationDateBusinessCenterGrp?: ILegProvisionOptionExpirationDateBusinessCenterGrp[]
}
