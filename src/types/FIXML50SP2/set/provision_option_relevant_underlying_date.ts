import { IProvisionOptionRelevantUnderlyingDateBusinessCenterGrp } from './provision_option_relevant_underlying_date_business_center_grp'

export interface IProvisionOptionRelevantUnderlyingDate {
  ProvisionOptionRelevantUnderlyingDateUnadjusted?: Date// [1] 40155 (LocalDate)
  ProvisionOptionRelevantUnderlyingDateBusinessDayConvention?: number// [1] 40156 (Int)
  ProvisionOptionRelevantUnderlyingDateRelativeTo?: number// [1] 40158 (Int)
  ProvisionOptionRelevantUnderlyingDateOffsetPeriod?: number// [1] 40159 (Int)
  ProvisionOptionRelevantUnderlyingDateOffsetUnit?: string// [1] 40160 (String)
  ProvisionOptionRelevantUnderlyingDateOffsetDayType?: number// [1] 40161 (Int)
  ProvisionOptionRelevantUnderlyingDateAdjusted?: Date// [1] 40162 (LocalDate)
  ProvisionOptionRelevantUnderlyingDateBusinessCenterGrp?: IProvisionOptionRelevantUnderlyingDateBusinessCenterGrp[]// [1] Ctr.40157
}
