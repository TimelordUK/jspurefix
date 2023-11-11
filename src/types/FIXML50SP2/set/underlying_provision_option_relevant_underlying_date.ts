import { IUnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenterGrp } from './underlying_provision_option_relevant_underlying_date_business_center_grp'

export interface IUnderlyingProvisionOptionRelevantUnderlyingDate {
  UnderlyingProvisionOptionRelevantUnderlyingDateUnadjusted?: Date// [1] 42142 (LocalDate)
  UnderlyingProvisionOptionRelevantUnderlyingDateBusinessDayConvention?: number// [1] 42143 (Int)
  UnderlyingProvisionOptionRelevantUnderlyingDateRelativeTo?: number// [1] 42144 (Int)
  UnderlyingProvisionOptionRelevantUnderlyingDateOffsetPeriod?: number// [1] 42145 (Int)
  UnderlyingProvisionOptionRelevantUnderlyingDateOffsetUnit?: string// [1] 42146 (String)
  UnderlyingProvisionOptionRelevantUnderlyingDateOffsetDayType?: number// [1] 42147 (Int)
  UnderlyingProvisionOptionRelevantUnderlyingDateAdjusted?: Date// [1] 42148 (LocalDate)
  UnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenterGrp?: IUnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenterGrp[]// [1] Ctr.42189
}
