import { ILegProvisionOptionRelevantUnderlyingDateBusinessCenterGrp } from './leg_provision_option_relevant_underlying_date_business_center_grp'

export interface ILegProvisionOptionRelevantUnderlyingDate {
  LegProvisionOptionRelevantUnderlyingDateUnadjusted?: Date// 40508
  LegProvisionOptionRelevantUnderlyingDateBusinessDayConvention?: number// 40509
  LegProvisionOptionRelevantUnderlyingDateRelativeTo?: number// 40511
  LegProvisionOptionRelevantUnderlyingDateOffsetPeriod?: number// 40512
  LegProvisionOptionRelevantUnderlyingDateOffsetUnit?: string// 40513
  LegProvisionOptionRelevantUnderlyingDateOffsetDayType?: number// 40514
  LegProvisionOptionRelevantUnderlyingDateAdjusted?: Date// 40515
  LegProvisionOptionRelevantUnderlyingDateBusinessCenterGrp?: ILegProvisionOptionRelevantUnderlyingDateBusinessCenterGrp[]
}
