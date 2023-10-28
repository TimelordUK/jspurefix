import { IUnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenterGrp } from './underlying_provision_option_relevant_underlying_date_business_center_grp'

export interface IUnderlyingProvisionOptionRelevantUnderlyingDate {
  UnderlyingProvisionOptionRelevantUnderlyingDateUnadjusted?: Date// [1] 42142 (LocalDate)
  UnderlyingProvisionOptionRelevantUnderlyingDateBizDayConvention?: number// [2] 42143 (Int)
  UnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenterGrp?: IUnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenterGrp// [3] NoUnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenters.42188, UnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenter.42189
  UnderlyingProvisionOptionRelevantUnderlyingDateRelativeTo?: number// [4] 42144 (Int)
  UnderlyingProvisionOptionRelevantUnderlyingDateOffsetPeriod?: number// [5] 42145 (Int)
  UnderlyingProvisionOptionRelevantUnderlyingDateOffsetUnit?: string// [6] 42146 (String)
  UnderlyingProvisionOptionRelevantUnderlyingDateOffsetDayType?: number// [7] 42147 (Int)
  UnderlyingProvisionOptionRelevantUnderlyingDateAdjusted?: Date// [8] 42148 (LocalDate)
}
