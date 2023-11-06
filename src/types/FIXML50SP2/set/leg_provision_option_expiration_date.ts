import { ILegProvisionOptionExpirationDateBusinessCenterGrp } from './leg_provision_option_expiration_date_business_center_grp'

export interface ILegProvisionOptionExpirationDate {
  LegProvisionOptionExpirationDateUnadjusted?: Date// [1] 40498 (LocalDate)
  LegProvisionOptionExpirationDateBusinessDayConvention?: number// [1] 40499 (Int)
  LegProvisionOptionExpirationDateRelativeTo?: number// [1] 40501 (Int)
  LegProvisionOptionExpirationDateOffsetPeriod?: number// [1] 40502 (Int)
  LegProvisionOptionExpirationDateOffsetUnit?: string// [1] 40503 (String)
  LegProvisionOptionExpirationDateOffsetDayType?: number// [1] 40504 (Int)
  LegProvisionOptionExpirationDateAdjusted?: Date// [1] 40505 (LocalDate)
  LegProvisionOptionExpirationTime?: string// [1] 40506 (String)
  LegProvisionOptionExpirationTimeBusinessCenter?: string// [1] 40507 (String)
  LegProvisionOptionExpirationDateBusinessCenterGrp?: ILegProvisionOptionExpirationDateBusinessCenterGrp[]// [1] Ctr.40500
}
