import { IProvisionOptionExpirationDateBusinessCenterGrp } from './provision_option_expiration_date_business_center_grp'

export interface IProvisionOptionExpirationDate {
  ProvisionOptionExpirationDateUnadjusted?: Date// [1] 40145 (LocalDate)
  ProvisionOptionExpirationDateBusinessDayConvention?: number// [2] 40146 (Int)
  ProvisionOptionExpirationDateBusinessCenterGrp?: IProvisionOptionExpirationDateBusinessCenterGrp// [3] NoProvisionOptionExpirationDateBusinessCenters.40955, ProvisionOptionExpirationDateBusinessCenter.40147
  ProvisionOptionExpirationDateRelativeTo?: number// [4] 40148 (Int)
  ProvisionOptionExpirationDateOffsetPeriod?: number// [5] 40149 (Int)
  ProvisionOptionExpirationDateOffsetUnit?: string// [6] 40150 (String)
  ProvisionOptionExpirationDateOffsetDayType?: number// [7] 40151 (Int)
  ProvisionOptionExpirationDateAdjusted?: Date// [8] 40152 (LocalDate)
  ProvisionOptionExpirationTime?: string// [9] 40153 (String)
  ProvisionOptionExpirationTimeBusinessCenter?: string// [10] 40154 (String)
}
