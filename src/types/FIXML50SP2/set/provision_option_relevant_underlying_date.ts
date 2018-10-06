import { IProvisionOptionRelevantUnderlyingDateBusinessCenterGrp } from './provision_option_relevant_underlying_date_business_center_grp'

export interface IProvisionOptionRelevantUnderlyingDate {
  ProvisionOptionRelevantUnderlyingDateUnadjusted?: Date// 40155
  ProvisionOptionRelevantUnderlyingDateBusinessDayConvention?: number// 40156
  ProvisionOptionRelevantUnderlyingDateRelativeTo?: number// 40158
  ProvisionOptionRelevantUnderlyingDateOffsetPeriod?: number// 40159
  ProvisionOptionRelevantUnderlyingDateOffsetUnit?: string// 40160
  ProvisionOptionRelevantUnderlyingDateOffsetDayType?: number// 40161
  ProvisionOptionRelevantUnderlyingDateAdjusted?: Date// 40162
  ProvisionOptionRelevantUnderlyingDateBusinessCenterGrp?: IProvisionOptionRelevantUnderlyingDateBusinessCenterGrp[]
}
