import { IUnderlyingProvisionOptionExpirationDateBusinessCenterGrp } from './underlying_provision_option_expiration_date_business_center_grp'

export interface IUnderlyingProvisionOptionExpirationDate {
  UnderlyingProvisionOptionExpirationDateUnadjusted?: Date// [1] 42133 (LocalDate)
  UnderlyingProvisionOptionExpirationDateBusinessDayConvention?: number// [1] 42134 (Int)
  UnderlyingProvisionOptionExpirationDateRelativeTo?: number// [1] 42135 (Int)
  UnderlyingProvisionOptionExpirationDateOffsetPeriod?: number// [1] 42136 (Int)
  UnderlyingProvisionOptionExpirationDateOffsetUnit?: string// [1] 42137 (String)
  UnderlyingProvisionOptionExpirationDateOffsetDayType?: number// [1] 42138 (Int)
  UnderlyingProvisionOptionExpirationDateAdjusted?: Date// [1] 42139 (LocalDate)
  UnderlyingProvisionOptionExpirationTime?: string// [1] 42140 (String)
  UnderlyingProvisionOptionExpirationTimeBusinessCenter?: string// [1] 42141 (String)
  UnderlyingProvisionOptionExpirationDateBusinessCenterGrp?: IUnderlyingProvisionOptionExpirationDateBusinessCenterGrp[]// [1] Ctr.42187
}
