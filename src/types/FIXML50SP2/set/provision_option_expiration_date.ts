import { IProvisionOptionExpirationDateBusinessCenterGrp } from './provision_option_expiration_date_business_center_grp'

export interface IProvisionOptionExpirationDate {
  ProvisionOptionExpirationDateUnadjusted?: Date// [1] 40145 (LocalDate)
  ProvisionOptionExpirationDateBusinessDayConvention?: number// [1] 40146 (Int)
  ProvisionOptionExpirationDateRelativeTo?: number// [1] 40148 (Int)
  ProvisionOptionExpirationDateOffsetPeriod?: number// [1] 40149 (Int)
  ProvisionOptionExpirationDateOffsetUnit?: string// [1] 40150 (String)
  ProvisionOptionExpirationDateOffsetDayType?: number// [1] 40151 (Int)
  ProvisionOptionExpirationDateAdjusted?: Date// [1] 40152 (LocalDate)
  ProvisionOptionExpirationTime?: string// [1] 40153 (String)
  ProvisionOptionExpirationTimeBusinessCenter?: string// [1] 40154 (String)
  ProvisionOptionExpirationDateBusinessCenterGrp?: IProvisionOptionExpirationDateBusinessCenterGrp[]// [1] Ctr.40147
}
