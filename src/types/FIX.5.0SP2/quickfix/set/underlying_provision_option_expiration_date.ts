import { IUnderlyingProvisionOptionExpirationDateBusinessCenterGrp } from './underlying_provision_option_expiration_date_business_center_grp'

export interface IUnderlyingProvisionOptionExpirationDate {
  UnderlyingProvisionOptionExpirationDateUnadjusted?: Date// [1] 42133 (LocalDate)
  UnderlyingProvisionOptionExpirationDateBusinessDayConvention?: number// [2] 42134 (Int)
  UnderlyingProvisionOptionExpirationDateBusinessCenterGrp?: IUnderlyingProvisionOptionExpirationDateBusinessCenterGrp// [3] NoUnderlyingProvisionOptionExpirationDateBusinessCenters.42186, UnderlyingProvisionOptionExpirationDateBusinessCenter.42187
  UnderlyingProvisionOptionExpirationDateRelativeTo?: number// [4] 42135 (Int)
  UnderlyingProvisionOptionExpirationDateOffsetPeriod?: number// [5] 42136 (Int)
  UnderlyingProvisionOptionExpirationDateOffsetUnit?: string// [6] 42137 (String)
  UnderlyingProvisionOptionExpirationDateOffsetDayType?: number// [7] 42138 (Int)
  UnderlyingProvisionOptionExpirationDateAdjusted?: Date// [8] 42139 (LocalDate)
  UnderlyingProvisionOptionExpirationTime?: string// [9] 42140 (String)
  UnderlyingProvisionOptionExpirationTimeBusinessCenter?: string// [10] 42141 (String)
}
