import { IProvisionOptionRelevantUnderlyingDateBusinessCenterGrp } from './provision_option_relevant_underlying_date_business_center_grp'

export interface IProvisionOptionRelevantUnderlyingDate {
  ProvisionOptionRelevantUnderlyingDateUnadjusted?: Date// [1] 40155 (LocalDate)
  ProvisionOptionRelevantUnderlyingDateBusinessDayConvention?: number// [2] 40156 (Int)
  ProvisionOptionRelevantUnderlyingDateBusinessCenterGrp?: IProvisionOptionRelevantUnderlyingDateBusinessCenterGrp// [3] NoProvisionOptionRelevantUnderlyingDateBusinessCenters.40956, ProvisionOptionRelevantUnderlyingDateBusinessCenter.40157
  ProvisionOptionRelevantUnderlyingDateRelativeTo?: number// [4] 40158 (Int)
  ProvisionOptionRelevantUnderlyingDateOffsetPeriod?: number// [5] 40159 (Int)
  ProvisionOptionRelevantUnderlyingDateOffsetUnit?: string// [6] 40160 (String)
  ProvisionOptionRelevantUnderlyingDateOffsetDayType?: number// [7] 40161 (Int)
  ProvisionOptionRelevantUnderlyingDateAdjusted?: Date// [8] 40162 (LocalDate)
}
