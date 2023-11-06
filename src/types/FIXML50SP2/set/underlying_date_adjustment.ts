import { IUnderlyingBusinessCenterGrp } from './underlying_business_center_grp'

export interface IUnderlyingDateAdjustment {
  UnderlyingBusinessDayConvention?: number// [1] 40964 (Int)
  UnderlyingDateRollConvention?: string// [1] 40965 (String)
  UnderlyingBusinessCenterGrp?: IUnderlyingBusinessCenterGrp[]// [1] Ctr.40963
}
