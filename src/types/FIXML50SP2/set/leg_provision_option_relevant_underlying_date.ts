import { ILegProvisionOptionRelevantUnderlyingDateBusinessCenterGrp } from './leg_provision_option_relevant_underlying_date_business_center_grp'

export interface ILegProvisionOptionRelevantUnderlyingDate {
  LegProvisionOptionRelevantUnderlyingDateUnadjusted?: Date// [1] 40508 (LocalDate)
  LegProvisionOptionRelevantUnderlyingDateBusinessDayConvention?: number// [1] 40509 (Int)
  LegProvisionOptionRelevantUnderlyingDateRelativeTo?: number// [1] 40511 (Int)
  LegProvisionOptionRelevantUnderlyingDateOffsetPeriod?: number// [1] 40512 (Int)
  LegProvisionOptionRelevantUnderlyingDateOffsetUnit?: string// [1] 40513 (String)
  LegProvisionOptionRelevantUnderlyingDateOffsetDayType?: number// [1] 40514 (Int)
  LegProvisionOptionRelevantUnderlyingDateAdjusted?: Date// [1] 40515 (LocalDate)
  LegProvisionOptionRelevantUnderlyingDateBusinessCenterGrp?: ILegProvisionOptionRelevantUnderlyingDateBusinessCenterGrp[]// [1] Ctr.40510
}
