import { IUnderlyingBusinessCenterGrp } from './underlying_business_center_grp'

export interface IUnderlyingDateAdjustment {
  UnderlyingBusinessDayConvention?: number// [1] 40964 (Int)
  UnderlyingBusinessCenterGrp?: IUnderlyingBusinessCenterGrp// [2] NoUnderlyingBusinessCenters.40962, UnderlyingBusinessCenter.40963
  UnderlyingDateRollConvention?: string// [3] 40965 (String)
}
