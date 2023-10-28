import { ILegProvisionOptionRelevantUnderlyingDateBusinessCenterGrp } from './leg_provision_option_relevant_underlying_date_business_center_grp'

export interface ILegProvisionOptionRelevantUnderlyingDate {
  LegProvisionOptionRelevantUnderlyingDateUnadjusted?: Date// [1] 40508 (LocalDate)
  LegProvisionOptionRelevantUnderlyingDateBusinessDayConvention?: number// [2] 40509 (Int)
  LegProvisionOptionRelevantUnderlyingDateBusinessCenterGrp?: ILegProvisionOptionRelevantUnderlyingDateBusinessCenterGrp// [3] NoLegProvisionOptionRelevantUnderlyingDateBusinessCenters.40938, LegProvisionOptionRelevantUnderlyingDateBusinessCenter.40510
  LegProvisionOptionRelevantUnderlyingDateRelativeTo?: number// [4] 40511 (Int)
  LegProvisionOptionRelevantUnderlyingDateOffsetPeriod?: number// [5] 40512 (Int)
  LegProvisionOptionRelevantUnderlyingDateOffsetUnit?: string// [6] 40513 (String)
  LegProvisionOptionRelevantUnderlyingDateOffsetDayType?: number// [7] 40514 (Int)
  LegProvisionOptionRelevantUnderlyingDateAdjusted?: Date// [8] 40515 (LocalDate)
}
