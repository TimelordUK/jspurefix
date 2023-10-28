import { ILegProvisionOptionExpirationDateBusinessCenterGrp } from './leg_provision_option_expiration_date_business_center_grp'

export interface ILegProvisionOptionExpirationDate {
  LegProvisionOptionExpirationDateUnadjusted?: Date// [1] 40498 (LocalDate)
  LegProvisionOptionExpirationDateBusinessDayConvention?: number// [2] 40499 (Int)
  LegProvisionOptionExpirationDateBusinessCenterGrp?: ILegProvisionOptionExpirationDateBusinessCenterGrp// [3] NoLegProvisionOptionExpirationDateBusinessCenters.40937, LegProvisionOptionExpirationDateBusinessCenter.40500
  LegProvisionOptionExpirationDateRelativeTo?: number// [4] 40501 (Int)
  LegProvisionOptionExpirationDateOffsetPeriod?: number// [5] 40502 (Int)
  LegProvisionOptionExpirationDateOffsetUnit?: string// [6] 40503 (String)
  LegProvisionOptionExpirationDateOffsetDayType?: number// [7] 40504 (Int)
  LegProvisionOptionExpirationDateAdjusted?: Date// [8] 40505 (LocalDate)
  LegProvisionOptionExpirationTime?: string// [9] 40506 (String)
  LegProvisionOptionExpirationTimeBusinessCenter?: string// [10] 40507 (String)
}
